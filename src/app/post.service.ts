import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';

@Injectable()
export class PostService {

    private postServiceURI: string = 'http://jsonplaceholder.typicode.com/posts';

   constructor(private http: HttpClient) {}

   // get all posts
   getAllPosts(): Observable<Post[]> {
       this.http.get(this.postServiceURI).subscribe(data => {
           return data
       })
   }

   // get comments based on the index
   getCommentsForPost(index: number): Observable<Comment[]> {
       return null;
   }
}
