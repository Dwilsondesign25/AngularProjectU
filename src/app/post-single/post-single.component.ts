import { Component, Input } from '@angular/core';
import type { Post } from '../models/Post.model';
import { PostService } from '../services/post-service.service';
import { UserService } from '../services/user-service.service';
import { HelperService } from '../services/helper-service.service';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css']
})
export class PostSingleComponent {
  @Input() post: Post;
  editMode: boolean = false;
  postForEdit: Post;

  
  constructor(
    public postService: PostService,
    public userService: UserService,
    public helperService: HelperService,
    public authService: AuthService, 
  ) {
    this.post = {...this.postService.emptyPost};
    this.postForEdit = {...this.postService.emptyPost};
  }

  toggleEdit(editMode: boolean = false, postToEdit: Post = {...this.postService.emptyPost}){
    this.editMode = editMode;
    this.postForEdit = {...this.postForEdit};
  }

  saveEdit(){
    this.editMode = false;
    this.postService.updsertPost(this.postForEdit);
  }
}
