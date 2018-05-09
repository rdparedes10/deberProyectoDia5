import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../../shared/resources.service';
import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post$;
  postUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private resourcesService:ResourcesService ){
    const assingPost = (post) => {
      this.post$ = post;
    };
    this.resourcesService.getResourceServices<Post[]>(this.postUrl,"title").subscribe(assingPost); 
  }
  ngOnInit() {
  }
}
