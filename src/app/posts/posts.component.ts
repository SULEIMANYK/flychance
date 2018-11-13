import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],

})
export class PostsComponent implements OnInit {
public posts =[] ;
  constructor( private  _postService:PostsService) { }

  ngOnInit() {
    this._postService.getposts()
    .subscribe(data=>this.posts=data);
  }

}
