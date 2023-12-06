import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ViewPostsComponent } from './viewpost.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {of, throwError} from 'rxjs';
import {FormsModule} from "@angular/forms";

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

interface Attachment {
  file: File | null;
  url: string;
  updatedAttachmentTime: null;
  postId: null;
  name: string;
}

interface Message {
  postId: number|null;
  userId: number;
  msg: string;
  updatedMessageTime: null;
  user: UserDetails;
  userName?: string;
}

interface UserDetails {
  id: number;
  firstName: string;
  lastName: string;
}

describe('ViewPostsComponent', () => {
  let component: ViewPostsComponent;
  let fixture: ComponentFixture<ViewPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPostsComponent],
      imports: [HttpClientTestingModule,FormsModule],
    });
    fixture = TestBed.createComponent(ViewPostsComponent);
    component = fixture.componentInstance;
  });

  it('should load posts on initialization', fakeAsync(() => {
    const mockPosts: Post[] = [
      {
        createdTime: new Date(),
        postId: 1,
        userId: 1,
        header: 'Mock Post 1',
        body: 'This is the body of the mock post.',
        attachments: [
          {
            file: null,
            url: 'https://example.com/image.jpg',
            updatedAttachmentTime: null,
            postId: null,
            name: 'Image 1'
          }
        ],
        messages: [
          {
            postId: 1,
            userId: 2,
            msg: 'This is a message.',
            updatedMessageTime: null,
            user: { id: 2, firstName: 'John', lastName: 'Doe' }
          }
        ],
        user: { id: 1, firstName: 'Jane', lastName: 'Doe' }
      },
    ];

    spyOn(component['http'], 'get').and.returnValue(of(mockPosts));

    fixture.detectChanges();
    tick();

    expect(component.posts).toEqual(jasmine.arrayContaining(mockPosts));
  }));

  it('should navigate to edit post route', () => {
    const mockPostId = 123;
    spyOn(component['router'], 'navigate');

    component.editPost(mockPostId);

    expect(component['router'].navigate).toHaveBeenCalledWith(['/editpost', mockPostId]);
  });

  it('should display posts in reverse chronological order', fakeAsync(() => {
    const mockPosts: Post[] = [
      {
        createdTime: new Date('2022-01-01'),
        postId: 1,
        userId: 101,
        header: 'First Post',
        body: 'This is the body of the first post.',
        attachments: [
          { file: null, url: 'attachment1.jpg', updatedAttachmentTime: null, postId: null, name: 'Image 1' },
          { file: null, url: 'attachment2.jpg', updatedAttachmentTime: null, postId: null, name: 'Image 2' },
        ],
        messages: [
          { postId: null, userId: 201, msg: 'This is a comment.', updatedMessageTime: null, user: { id: 201, firstName: 'John', lastName: 'Doe' } },
          { postId: null, userId: 202, msg: 'Another comment.', updatedMessageTime: null, user: { id: 202, firstName: 'Jane', lastName: 'Doe' } },
        ],
        user: { id: 101, firstName: 'Alice', lastName: 'Johnson' },
        userName: 'alice123',
      },
      {
        createdTime: new Date('2022-01-02'),
        postId: 2,
        userId: 102,
        header: 'Second Post',
        body: 'This is the body of the second post.',
        attachments: [
          { file: null, url: 'attachment3.jpg', updatedAttachmentTime: null, postId: null, name: 'Image 3' },
        ],
        messages: [
          { postId: null, userId: 203, msg: 'Yet another comment.', updatedMessageTime: null, user: { id: 203, firstName: 'Bob', lastName: 'Smith' } },
        ],
        user: { id: 102, firstName: 'Bob', lastName: 'Johnson' },
        userName: 'bob456',
      },
      {
        createdTime: new Date('2022-01-03'),
        postId: 3,
        userId: 102,
        header: 'Third Post',
        body: 'This is the body of the third post.',
        attachments: [
          { file: null, url: 'attachment3.jpg', updatedAttachmentTime: null, postId: null, name: 'Image 3' },
        ],
        messages: [
          { postId: null, userId: 203, msg: 'Another comment.', updatedMessageTime: null, user: { id: 203, firstName: 'Bob', lastName: 'Smith' } },
        ],
        user: { id: 102, firstName: 'Bob', lastName: 'Johnson' },
        userName: 'bob456',
      },
      ];

    spyOn(component['http'], 'get').and.returnValue(of(mockPosts));


    fixture.detectChanges();
    tick();

    expect(component.posts.map(post => post.postId)).toEqual([3,2, 1]);
  }));

  it('should initialize with empty posts', () => {
    expect(component.posts.length).toBe(0);
  });

  it('should display an alert during comment addition', fakeAsync(() => {
    const alertSpy = spyOn(window, 'alert');

    component.newComment = 'Test Comment';
    component.newUserId = 1;

    spyOn(component['http'], 'post').and.returnValue(throwError('Fake error'));

    component.addComment({ postId: 1, userId: 1, createdTime: new Date(), header: 'Test Post', body: 'Test Body', attachments: [], messages: [], user: { id: 1, firstName: 'John', lastName: 'Doe' }});

    tick();

    expect(alertSpy).toHaveBeenCalledWith('Comment added succesfully');

    component.newComment = '';
    component.newUserId = undefined;
  }));

  it('should reload posts when an error occurs during comment addition', fakeAsync(() => {
    component.newComment = 'Test Comment';
    component.newUserId = 1;

    spyOn(component['http'], 'post').and.returnValue(throwError('Fake error'));

    const loadPostsSpy = spyOn(component, 'loadPosts');

    component.addComment({ postId: 1, userId: 1, createdTime: new Date(), header: 'Test Post', body: 'Test Body', attachments: [], messages: [], user: { id: 1, firstName: 'John', lastName: 'Doe' }});

    tick();

    expect(loadPostsSpy).toHaveBeenCalled();

    component.newComment = '';
    component.newUserId = undefined;
  }));
});
