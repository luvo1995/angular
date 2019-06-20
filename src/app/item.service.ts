import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  constructor(private http: HttpClient) { 

  }
  getPeople(){
    return this.http.get("http://jsonplaceholder.typicode.com/users")}
}
