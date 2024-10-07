import { Component, Input } from '@angular/core';
import * as PostModel from '../models/Post.model';
import { PostService } from '../services/post-service.service';
import { UserService } from '../services/user-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrl: './post-single.component.css'
})
export class PostSingleComponent {
  @Input() post: PostModel.Post;
  datePipe: DatePipe = new DatePipe("en-US"); 
  
  constructor(
    public postService: PostService,
    public userService: UserService,
  ) {
    this.post = {...this.postService.emptyPost};
  }
  setDateForDisplay(dateToConvert: Date | string){
    console.log(typeof dateToConvert);
    if (typeof dateToConvert === 'string') {
      dateToConvert = new Date(Date.parse(dateToConvert));
    }
    return this.datePipe.transform(dateToConvert, "MM/DD/YYYY hh:mm:ss a");
  }
}
