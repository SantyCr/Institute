import { Component, OnInit } from '@angular/core';
import { User } from '../model/users.model';
import { UsersService } from '../service/admin.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(private users : UsersService) { }

  usersArray : any = [];


  ngOnInit(): void {
    this.usersArray = this.users.usersGet().subscribe((res) => {
        this.usersArray = res;
        console.log(this.usersArray );
    })
  }

  

}
