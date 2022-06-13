import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../posts.model';
import { Subscription } from 'rxjs';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsSubscriber: Subscription = new Subscription;

  constructor(public PostsServiceVariable: PostsService) { }

  ngOnInit(): void {
    this.PostsServiceVariable.returnPosts();
    this.postsSubscriber = this.PostsServiceVariable.postUpdated()
    .subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy(): void {
    this.postsSubscriber.unsubscribe();
  }

}
