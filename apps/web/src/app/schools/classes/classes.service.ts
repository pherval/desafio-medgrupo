import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export type Classes = {
  students: number;
};

type ClassesDTO = {
  alunos: number;
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

  private mapper({ alunos }: ClassesDTO): Classes {
    return {
      students: alunos,
    };
  }
}
