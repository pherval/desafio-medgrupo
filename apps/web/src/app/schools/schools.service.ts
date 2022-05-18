import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

enum Operation {
  deactivated = 0,
  activated,
}

export type School = {
  id: number;
  name: string;
  cie: string;
  status: Operation;
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
  situacao_funcionamento: 'ativo' | 'desativado';
  supervisor: string;
  telefones: string[];
  email?: string;
  complemento?: string;
  turmas: Turma[];
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

  private static get baseUrl(): string {
    return this.BASE_URL;
  }

  private static get resourceUrl(): string {
    return `${this.baseUrl}/escolas?_embed=turmas`;
  }

  private mapper({
    id,
    nome,
    cep,
    cie,
    supervisor,
    telefones,
    situacao_funcionamento,
    endereco,
    email,
    complemento,
    turmas,
  }: SchoolDTO): School {
    return {
      id,
      name: nome,
      cie,
      status:
        situacao_funcionamento === 'ativo'
          ? Operation.activated
          : Operation.deactivated,
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

      classes: turmas.map((t) => ({
        students: t.alunos,
      })),
    };
  }
}
