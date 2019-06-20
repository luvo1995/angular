import { Component, OnInit } from '@angular/core';
import { Agent } from 'http';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  name;
  surname;
  age = 2;
  list;

  constructor(private home: Router) {} 
  
submit(){
  this.home.navigateByUrl("about");
}



  ngOnInit() {
  }

}
