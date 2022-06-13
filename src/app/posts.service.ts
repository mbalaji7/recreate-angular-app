import { Post } from "./posts.model";

import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

// Import HTTP client
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postObservable = new Subject<Post[]>();

  constructor(public httpClientVar: HttpClient) {}

  returnPosts () {
    // return [...this.posts];
    this.httpClientVar.get< {message: String, posts: Post[]} >("http://localhost:3000/api/posts")
      .subscribe((postData) => {
        this.posts = postData.posts;
        return [...this.posts];
      })
  }

  postUpdated () {
    return this.postObservable.asObservable();
  }

  addPost (title: String, content: String) {
    const postFinal: Post = {id: "null", title: title, content: content};

    // This will update the posts array
    this.posts.push(postFinal);

    // This will update the emmiter array
    this.postObservable.next([...this.posts]);

  }



}
