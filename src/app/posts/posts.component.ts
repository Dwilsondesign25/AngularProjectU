import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/Post.model';
import { UserService } from '../services/user-service.service';
import { PostService } from '../services/post-service.service'; // Import PostService

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'] // Corrected styleUrl to styleUrls
})
export class PostsComponent implements OnInit {
  @Input() userId: number = 0;
  postsHaveChangedSubscription = new Subscription();

    constructor(
      public postService: PostService, // Changed PostService to postService
      public userService: UserService,
    ){ }
 
    ngOnInit(): void {
    this.postService.postList = [];
    this.getPosts();
    this.subscribePostsHaveChanged();
  }

  subscribePostsHaveChanged(){
    this.postsHaveChangedSubscription = this.postService.postsHaveChanged.subscribe(() =>{
      this.getPosts();
    });
  }

  getPosts(){
    this.postService.getPosts(this.userId).subscribe({
      next: (res: Post[]) => {
        this.postService.postList = res;
        this.postService.postList.sort ((first: Post, second: Post) => 
        {
          return Date.parse(first.postDate as string) > Date.parse(second.postDate as string) ? -1 : 1
        })
      }
   })
  }

  ngOnDestroy(){
    this.postsHaveChangedSubscription.unsubscribe();
  }
}
