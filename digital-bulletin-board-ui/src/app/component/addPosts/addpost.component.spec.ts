import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AddPostsComponent } from './addpost.component';
import {of, throwError} from 'rxjs';

describe('AddPostsComponent', () => {
  let httpTestingController: HttpTestingController;
  let component: AddPostsComponent;
  let fixture: ComponentFixture<AddPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPostsComponent],
      imports: [FormsModule, HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(AddPostsComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController); // instantiate httpTestingController
  });

  it('should reset the form after successful post submission', fakeAsync(() => {
    spyOn(component['http'], 'post').and.returnValue(of({}));

    component.post.userId = null;
    component.post.header = 'Test Header';
    component.post.body = 'Test Body';
    component.addPost();
    tick();

    expect(component.post.userId).toBeNull();
    expect(component.post.header).toBe('');
    expect(component.post.body).toBe('');
    expect(component.post.attachments.length).toBe(0);
    expect(component.post.messages.length).toBe(0);
  }));

  it('should add an attachment to the post', () => {
    component.addAttachment();
    expect(component.post.attachments.length).toBe(1);

  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should handle attachment changes', () => {
    const file = new File(['test'], 'test.txt');
    const event = { target: { files: [file] } };

    // Set up the initial state
    component.post = {
      userId: null,
      header: 'Test Header',
      body: 'Test Body',
      attachments: [{ file: null, url: '', updatedAttachmentTime: null, postId: null, name: ''}],
      messages: [],
    };

    // Trigger the handleAttachmentChange method
    component.handleAttachmentChange(event, 0);

    // Verify that the attachment file is set correctly
    expect(component.post.attachments[0].file).toEqual(file);
  })

  it('should handle error when adding a post', fakeAsync(() => {
    spyOn(component['http'], 'post').and.returnValue(throwError('Error adding post'));

    // Set up the initial state
    component.post = {
      userId: null,
      header: 'Test Header',
      body: 'Test Body',
      attachments: [] as any[],
      messages: [] as any[],
    };

    component.addPost();

    tick();

    expect(component.post).toEqual({
      userId: null,
      header: 'Test Header',
      body: 'Test Body',
      attachments: [] as any[],
      messages: [] as any[],
    });
  }));


});
