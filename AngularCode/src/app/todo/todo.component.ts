import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  mydata:any

  constructor(private api:ApiService) { }

  ngOnInit(): void {

    this.fetchDatafromApi()

  }

  fetchDatafromApi()
 {
   return this.api.getData().subscribe( (response)=>{

    this.mydata=response

    console.log(this.mydata)
    
   }
   
   )
 }


}
