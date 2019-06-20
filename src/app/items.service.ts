import { Injectable } from '@angular/core';
import {httpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: httpClient) {

   }
   getService (){
     return this.http.get("http://jsonplaceholder.typicode.com/users")}
   } 
