import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post.model';

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
    this.PostService.postList = [];
    this.getPosts();
  }

  getPosts(){
    this.PostService.getPosts().subscribe({
      next: (res: Post[]) => {
        this.PostService.postList = res;
      }
   })
  }
}
