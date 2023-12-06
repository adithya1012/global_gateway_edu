import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
import {forkJoin} from "rxjs";

interface Attachment {
  file: File | null;
  url: string;
  updatedAttachmentTime: null;
  postId: null;
  name: string;
}

interface Message {
  postId: null;
  userId: number;
  msg: string;
  updatedMessageTime: null;
  user: UserDetails;
  userName?: string;
}

interface Post {
  createdTime: Date;
  postId: number;
  userId: number;
  header: string;
  body: string;
  attachments: Attachment[];
  messages: Message[];
  user: UserDetails| UserDetails[];
  userName?: string;
}

interface UserDetails {
  id: number;
  firstName: string;
  lastName: string;
}

interface CommentRequest {
  postId: number;
  userId: number;
  msg: string;
  updatedMessageTime: null;

}

@Component({
  selector: 'viewpost-root',
  templateUrl: './viewpost.component.html',
})
export class ViewPostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private http: HttpClient,private router: Router) {
  }

  ngOnInit() {
    this.loadPosts();
  }


  loadPosts() {
    this.http.get<Post[]>('/rest/post/getAllPosts').subscribe((result: Post[]) => {
      this.posts = result;
      console.log(this.posts);
      this.posts = this.posts.reverse();

      this.posts.forEach((post: Post) => {
        if (post.attachments) {
          post.attachments.forEach((attachment: Attachment) => {
            attachment.url = '/rest' + attachment.url;
          });
        }
      });
    });
  }


  newComment: string = '';
  newUserId: number | undefined;

  addComment(post: Post) {
    if (this.newComment.trim() !== '' && this.newUserId !== undefined) {
      const newMessage:CommentRequest = {
        postId: post.postId,
        userId: this.newUserId,
        msg: this.newComment,
        updatedMessageTime: null,
      };

      this.http.post('/rest/message/addmessage', newMessage).subscribe({
        next: (result: any) => {
          console.log('Comment added successfully:', result);
          //reload post
          this.loadPosts();
          this.newComment = '';
          this.newUserId = undefined;
        },
        error: (error) => {
          console.error('Error adding comment:', error);
          alert('Comment added succesfully');
          this.loadPosts();
        },
      });
    }
  }

  editPost(postId: number) {
    // Navigate to the edit post route
    this.router.navigate(['/editpost', postId]);
  }

  protected readonly Array = Array;
}










