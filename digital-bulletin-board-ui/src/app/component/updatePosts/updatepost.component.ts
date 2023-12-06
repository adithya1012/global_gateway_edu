//
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
//
// @Component({
//   selector: 'app-updatepost',
//   templateUrl: './updatepost.component.html',
// })
// export class UpdatePostComponent implements OnInit {
//   postId!: number;
//   posts: any;
//   updatedPost: any = {
//     userId: null,
//     header: '',
//     body: '',
//     attachments: [] as File[],
//     messages: [] as string[],
//   };
//   attachmentUrl: string = '';
//   message: string = '';
//
//   // userId: number;
//   constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
//   }
//
//   ngOnInit() {
//     // Retrieve the postId from the route parameters
//     this.route.params.subscribe((params) => {
//       this.postId = +params['id']; // convert string to number
//       this.loadPostDetails();
//     });
//   }
//
//   loadPostDetails() {
//     // Fetch the existing post details from the backend
//     this.http.get(`/rest/post/getpost?postId=${this.postId}`).subscribe((result: any) => {
//       // Assign the retrieved post details to the updatedPost object
//       this.updatedPost = result[0];
//       // Populate attachments and messages arrays if they exist
//       this.updatedPost.attachments = this.updatedPost.attachments || [];
//       this.updatedPost.messages = this.updatedPost.messages || [];
//     });
//   }
//
//   handleFileInput(event: any) {
//     const files: FileList = event.target.files;
//     for (let i = 0; i < files.length; i++) {
//       this.updatedPost.attachments.push(files[i]);
//     }
//   }
//
//
//   onSubmit() {
//     // Send the updated post data to your backend
//     this.http.put(`/rest/post/editpost/${this.postId}`, this.updatedPost).subscribe(
//       (response) => {
//         console.log('Post updated successfully', response);
//         alert('Post updated successfully');
//         // Clear the response
//         this.updatedPost = {
//           userId: null,
//           header: '',
//           body: '',
//           attachments: [] as File[],
//           messages: [] as string[],
//         };
//         // Redirect to the post view page after successful update
//         this.router.navigate(['/viewpost', this.postId]);
//       },
//       (error) => {
//         console.error('Error updating post:', error);
//
//         // Log the response to help identify the issue
//         console.log('Error Response:', error);
//
//         if (error.status === 200) {
//           console.log('Post updated successfully', error);
//           alert('Post updated successfully');
//           // Clear the response
//           this.updatedPost = {
//             userId: null,
//             header: '',
//             body: '',
//             attachments: [] as File[],
//             messages: [] as string[],
//           };
//           // Redirect to the post view page after successful update
//           this.router.navigate(['/viewpost', this.postId]);
//         } else {
//           console.error('Error updating post:', error);
//           // You can handle other status codes here if needed
//         }
//       }
//     );
//   }
//
//   deletePost() {
//     if (confirm('Are you sure you want to delete this post?')) {
//       this.http.delete(`/rest/post/deletepost/${this.postId}`, { responseType: 'text' }).subscribe(
//         () => {
//           alert('Post deleted successfully');
//         }
//       );
//     } else {
//       console.log('Deletion cancelled');
//     }
//   }
//
//
// }
//
//
//
//
//
//
//
//
//
//
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-updatepost',
  templateUrl: './updatepost.component.html',
})
export class UpdatePostComponent implements OnInit {
  postId!: number;
  posts: any;
  updatedPost: any = {
    userId: null,
    header: '',
    body: '',
    // attachments: [] as File[],
    // messages: [] as string[],
  };
  // attachmentUrl: string = '';
  // message: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.postId = +params['id'];
      this.loadPostDetails();
    });
  }

  loadPostDetails() {
    this.http.get(`/rest/post/getpost?postId=${this.postId}`).subscribe((result: any) => {
      this.updatedPost = result[0];
      // this.updatedPost.attachments = this.updatedPost.attachments || [];
      // this.updatedPost.messages = this.updatedPost.messages || [];
    });
  }

  // handleFileInput(event: any) {
  //   const files: FileList = event.target.files;
  //   for (let i = 0; i < files.length; i++) {
  //     this.updatedPost.attachments.push(files[i]);
  //   }
  // }
  onSubmit() {
    const allowedUserId = 4; // Replace with the actual userId you want to allow for editing

    if (allowedUserId === this.updatedPost.userId) {
      this.http.put(`/rest/post/editpost/${this.postId}`, this.updatedPost, { responseType: 'text' }).subscribe(
        (response) => {
          console.log('Response:', response);

          // Check if the response is successful (status code 200)
          if (response === 'Post updated successfully') {
            alert(response);
            this.updatedPost = {
              userId: null,
              header: '',
              body: '',
              attachments: [] as File[],
              messages: [] as string[],
            };
            this.router.navigate(['/viewpost', this.postId]);
          } else {
            console.error('Error updating post:', response);
          }
        },
        (error) => {
          console.error('Error updating post:', error);
        }
      );
    } else {
      console.error('Unauthorized to edit this post');
      alert('You are not authorized to edit this post');
    }
  }


  deletePost() {
    const allowedUserId =4 ;

    if (confirm('Are you sure you want to delete this post?')) {
      // Check if the current user has permission to delete the post
      if (allowedUserId === this.updatedPost.userId) {
        this.http.delete(`/rest/post/deletepost/${this.postId}`, { responseType: 'text' }).subscribe(
          () => {
            alert('Post deleted successfully');
            // Optionally, you can navigate to a different page or perform additional actions after deletion
          },
          (error) => {
            console.error('Error deleting post:', error);
          }
        );
      } else {
        console.log('Unauthorized to delete this post');
        alert('You are not authorized to delete this post');
      }
    } else {
      console.log('Deletion cancelled');
    }
  }
}
