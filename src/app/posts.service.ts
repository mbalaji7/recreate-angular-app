import { Post } from "./posts.model";

import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postObservable = new Subject<Post[]>();
  returnPosts () {
    return [...this.posts];
  }

  postUpdated () {
    return this.postObservable.asObservable();
  }

  addPost (title: String, content: String) {
    const postFinal: Post = {title: title, content: content};

    // This will update the posts array
    this.posts.push(postFinal);

    // This will update the emmiter array
    this.postObservable.next([...this.posts]);

  }



}
