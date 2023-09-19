import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {PatrimonioGeral } from '../../model/patrimoniogeral.model';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatrimonioGeralService {

  private readonly API = '/api/patrimoniogeral/all';

  constructor(private htppClient: HttpClient) { }

  list(){
    return this.htppClient.get<PatrimonioGeral[]>(this.API)
    .pipe(
      first(),
    )
  }
}
