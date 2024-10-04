import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{

    constructor(
      public PostService: PostService
    ){ }
 
    ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getPosts(){
    this.PostService.getPosts().subscribe
  }
}
