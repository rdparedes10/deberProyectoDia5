import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../../shared/resources.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
  comments$;

  constructor(private resourcesService:ResourcesService ){
    const assingComments = (comments) => {
      this.comments$ = comments;
    };
    this.resourcesService.getResourceServices<Comment[]>(this.commentsUrl,"body").subscribe(assingComments);
    console.log(this.comments$);

  }
  

  ngOnInit() {
  }

}
