import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  mynews:any
  constructor( private api:ApiService ) { }

  ngOnInit(): void {
    this.getNewsfromApi()
  }

   getNewsfromApi(){
    return this.api.getNews().subscribe((response)=>{

      this.mynews=response
      console.log(this.mynews)

    } )

   }

}
