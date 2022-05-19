import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export type Classes = {
  students: number;
};

type ClassesDTO = {
  alunos: number;
  escolaId: number;
};

@Injectable()
export class ClassesService {
  constructor(private http: HttpClient) {}

  private static resource(schoolId: number) {
    return [environment.apiUrl, 'escolas', schoolId, 'turmas'].join('/');
  }

  all(schoolId: number): Observable<Classes[]> {
    return this.http
      .get<ClassesDTO[]>(ClassesService.resource(schoolId))
      .pipe(map((classes) => classes.map(this.mapper)));
  }

  save(schoolId: number, classes: Classes): Observable<Classes> {
    return this.http
      .post<ClassesDTO>(
        ClassesService.resource(schoolId),
        this.toDTO(schoolId, classes)
      )
      .pipe(map(this.mapper));
  }

  private mapper({ alunos }: ClassesDTO): Classes {
    return {
      students: alunos,
    };
  }

  private toDTO(schoolId: number, { students }: Classes): ClassesDTO {
    return {
      escolaId: Number(schoolId),
      alunos: students,
    };
  }
}
