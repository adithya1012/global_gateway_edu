import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {of, throwError} from 'rxjs';
import { UpdatePostComponent } from './updatepost.component';

describe('UpdatePostComponent', () => {
  let component: UpdatePostComponent;
  let httpClient: jasmine.SpyObj<HttpClient>;
  let router: jasmine.SpyObj<Router>;
  let activatedRoute: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(() => {
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['put', 'delete', 'get']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', ['params']);

    TestBed.configureTestingModule({
      declarations: [UpdatePostComponent],
      imports: [FormsModule],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
      ],
    });

    component = TestBed.createComponent(UpdatePostComponent).componentInstance;
    httpClient = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    activatedRoute = TestBed.inject(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute>;
  });

  // it('should handle file input and add attachments', () => {
  //   const files: FileList = {
  //     length: 2,
  //     item: (index: number) => (index === 0 ? new File([], 'file1.txt') : new File([], 'file2.txt')),
  //   };
  //
  //   component.handleFileInput({ target: { files } });
  //
  //   expect(component.updatedPost.attachments.length).toBe(2);
  // });

  // it('should submit the form and navigate to viewpost page on successful update', () => {
  //
  //   httpClient.put.and.returnValue(of({}));
  //
  //   component.onSubmit();
  //
  //   expect(window.alert).toHaveBeenCalledWith('Post updated successfully');



    // expect(httpClient.put).toHaveBeenCalled();

    // expect(router.navigate).toHaveBeenCalledWith(['/viewpost', component.postId]);
  //});

  it('should show alert on successful update for allowed user', () => {
    // Mocking the allowed user ID
    component.updatedPost.userId = 4;

    httpClient.put.and.returnValue(of('Post updated successfully'));

    spyOn(window, 'alert');

    component.onSubmit();


    expect(window.alert).toHaveBeenCalledWith('Post updated successfully');
  });

  it('should show alert when user does not have permission to update', () => {
    // Mocking a different user ID than the allowed one (e.g., userID = 3)
    component.updatedPost.userId = 3;

    spyOn(window, 'alert');

    component.onSubmit();

    expect(httpClient.put).not.toHaveBeenCalled();

    expect(window.alert).toHaveBeenCalledWith('You are not authorized to edit this post');
  });

  it('should delete the post on confirmation and show alert', () => {

    component.updatedPost.userId = 4;

    spyOn(window, 'confirm').and.returnValue(true);

    httpClient.delete.and.returnValue(of({}));

    spyOn(window, 'alert');

    component.deletePost();

    expect(window.confirm).toHaveBeenCalledWith('Are you sure you want to delete this post?');

    expect(httpClient.delete).toHaveBeenCalledWith(`/rest/post/deletepost/${component.postId}`, { responseType: 'text' } as any);

    expect(window.alert).toHaveBeenCalledWith('Post deleted successfully');
  });

  it('should cancel deletion on confirmation cancel', () => {

    httpClient.delete.and.callThrough();

    spyOn(window, 'confirm').and.returnValue(false);

    component.deletePost();

    expect(httpClient.delete).not.toHaveBeenCalled();
  });

  it('should handle error on update post', () => {
    component.updatedPost.userId = 4;

    const errorMessage = 'Error updating post';
    httpClient.put.and.returnValue(of({ status: 500, statusText: errorMessage }));

    spyOn(console, 'error');

    component.onSubmit();

    expect(console.error).toHaveBeenCalledWith('Error updating post:', jasmine.objectContaining({ status: 500, statusText: errorMessage }));
  });

  it('should handle error on delete post', () => {
    component.updatedPost.userId = 4;

    spyOn(window, 'confirm').and.returnValue(true);

    const errorMessage = 'Error deleting post';
    httpClient.delete.and.returnValue(throwError({ status: 500, statusText: errorMessage }));

    spyOn(console, 'error');

    component.deletePost();
    expect(console.error).toHaveBeenCalledWith('Error deleting post:', jasmine.objectContaining({ status: 500, statusText: errorMessage }));
  });



});
