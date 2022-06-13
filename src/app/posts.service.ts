import { Post } from "./posts.model";

import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

// Import HTTP client
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postObservable = new Subject<Post[]>();

  constructor(public httpClientVar: HttpClient) { }

  returnPosts() {
    // return [...this.posts];
    this.httpClientVar.get<{ message: string, posts: Post[] }>("http://localhost:3000/api/posts")
      .subscribe((postData) => {
        this.posts = postData.posts;
        this.postObservable.next([...this.posts]);
      });
  }

  postUpdated() {
    return this.postObservable.asObservable();
  }

  addPost(title: String, content: String) {
    const post: Post = { id: " ", title: title, content: content };

    this.posts.push(post);

  }



}
