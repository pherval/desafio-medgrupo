import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export type School = {
  id: number;
  name: string;
  cie: string;
  contacts: {
    phones: string[];
    email?: string;
  };

  supervisor: string;

  address: {
    street: string;
    complement?: string;
    zipCode: string;
  };

  classes: Classes[];
};

type Classes = {
  students: number;
};

type SchoolDTO = {
  id: number;
  nome: string;
  cie: string;
  endereco: string;
  cep: string;
  supervisor: string;
  telefones: string[];
  email?: string;
  complemento?: string;
  turmas?: Turma[];
};

type Turma = {
  escolaId: number;
  alunos: number;
};

@Injectable()
export class SchoolsService {
  private static BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  all(): Observable<School[]> {
    return this.http
      .get<SchoolDTO[]>(SchoolsService.resourceUrl)
      .pipe(map((schools) => schools.map(this.mapper)));
  }

  save(school: School): Observable<School> {
    return this.http
      .post<SchoolDTO>(SchoolsService.resourceUrl, this.toDTO(school))
      .pipe(map(this.mapper));
  }

  get(id: number): Observable<School> {
    return this.http
      .get<SchoolDTO>(`${SchoolsService.resource}/${id}`)
      .pipe(map(this.mapper));
  }

  private static get baseUrl(): string {
    return this.BASE_URL;
  }

  private static get resource(): string {
    return `${this.baseUrl}/escolas`;
  }

  private static get resourceUrl(): string {
    return `${this.resource}?_embed=turmas`;
  }

  private toDTO({
    supervisor,
    id,
    name,
    cie,
    address,
    contacts,
    classes,
  }: School): SchoolDTO {
    return {
      id,
      nome: name,
      cie,
      endereco: address.street,
      cep: address.zipCode,
      telefones: contacts.phones,
      email: contacts.email,
      turmas: classes.map((c) => ({ alunos: c.students, escolaId: id })),
      supervisor,
    };
  }

  private mapper({
    id,
    nome,
    cep,
    cie,
    supervisor,
    telefones,
    endereco,
    email,
    complemento,
    turmas,
  }: SchoolDTO): School {
    return {
      id,
      name: nome,
      cie,
      contacts: {
        phones: telefones,
        email,
      },

      address: {
        street: endereco,
        zipCode: cep,
        complement: complemento,
      },

      supervisor,

      classes:
        turmas?.map((t) => ({
          students: t.alunos,
        })) ?? [],
    };
  }
}
