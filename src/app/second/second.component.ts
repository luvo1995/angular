import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  list;
  constructor(private item : ItemService) {this.item.getPeople().subscribe(data=>{this.list = data
    console.log(this.list)}); }

  ngOnInit() {
  }

}
