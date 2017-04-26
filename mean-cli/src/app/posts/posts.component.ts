import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  //Instatiate Posts to an Empty Array
  posts: any = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  //Retrieve Posts from the API
  this.postsService.getAllPosts().subscribe(posts => {
    this.posts = posts;
  });
 }
}
