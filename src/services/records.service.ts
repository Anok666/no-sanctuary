import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signal, signal } from '@angular/core';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  private apiUrl = 'mongodb+srv://arturflorian1:MNT9LPakst6wYFUb@sanctuary.qc9kqpk.mongodb.net/sample_mflix.comments';
  public dataSignal: Signal<any[]> = signal([]);
  constructor(private http: HttpClient) {}
  // Method to call the API
  fetchPosts(): void {
    this.http.get<any[]>(this.apiUrl).pipe(
      // Catch errors and return an empty array if the call fails
      catchError(error => {
        console.error('Error fetching posts:', error);
        return of([]);
      })
    ).subscribe(posts => {
      // Set the signal's value when data is received
      // this.dataSignal.set(posts);
      console.log(posts);
    });
  }
}
