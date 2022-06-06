import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
    private Url = "http://localhost:8000/api/users"

    usersGet(){
      return this.http.get<User>(this.Url);
    }


}
