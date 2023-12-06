import  { Component } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

interface Attachment {
  file: File | null;
  url: string;
  updatedAttachmentTime: null;
  postId: null;
  name: string;
}

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
})
export class AddPostsComponent {
  post = {
    userId: null,
    header: '',
    body: '',
    attachments: [] as Attachment[],
    messages: [] as { postId: null; userId: null; msg: string; updatedMessageTime: null }[],
  };

  constructor(private http: HttpClient) {}

  addPost() {
    const formData = new FormData();

    const attachmentsWithoutFile = this.post.attachments.map(({ file, ...rest }) => rest);
    attachmentsWithoutFile.forEach((attachment, index) => {
      if (this.post.attachments[index].file) {
        const file = this.post.attachments[index]?.file;
        if (file) {
          formData.append(`attachmentFiles`, file, file.name);
        }
        formData.append(`attachments[${index}].name`, this.post.attachments[index].name);
      }
    });
    // const messages = this.post.messages.map(({ postId, userId, msg, updatedMessageTime }) => ({
    //   postId,
    //   userId,
    //   msg,
    //   updatedMessageTime
    // }));

    formData.append('post', JSON.stringify({
      userId: this.post.userId,
      header: this.post.header,
      body: this.post.body,
      attachments: attachmentsWithoutFile,
      //messages: messages
    }));

    this.http.post('/rest/post/addpost', formData).subscribe({
      next: (result: any) => {
        console.log('Post added successfully:', result);
        this.resetForm();
      },
      error: (error) => {
        if (error instanceof HttpErrorResponse && error.status === 200) {
          alert("Post added successfully");
          console.log('Post added successfully:', error);
          this.resetForm();
        } else {
          console.error('Error adding post:', error);
        }
      },
    });
  }

  handleAttachmentChange(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      this.post.attachments[index].file = file;
      console.log('Attachment File:', file);
      console.log('Attachment Index:', index);
      console.log('Attachment in post.attachments:', this.post.attachments[index]);
    }
  }

  addAttachment() {
    const newAttachment = {
      //id: null,
      file: null as File|null,
      url: '',
      updatedAttachmentTime: null,
      postId: null,
      name:'',
      data:''

    };

    this.post.attachments.push(newAttachment);
  }

  // addMessage() {
  //   const newMessage = {
  //     //id: null,
  //     postId: null,
  //     userId: null,
  //     msg: '',
  //     updatedMessageTime: null,
  //   };
  //
  //   this.post.messages.push(newMessage);
  // }

  resetForm() {
    this.post = {
      userId: null,
      header: '',
      body: '',
      attachments: [] as Attachment[],
      messages: [] as { postId: null; userId: null; msg: string; updatedMessageTime: null }[],
    };
  }
}

