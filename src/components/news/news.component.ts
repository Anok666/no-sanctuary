import {Component, OnInit, Signal} from '@angular/core';
import {RecordsService} from '../../services/records.service';

@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent  implements OnInit {
  // Access the Signal from the ApiService
  posts: Signal<any[]>;
  constructor(private apiService: RecordsService) {
    this.posts = this.apiService.dataSignal;
  }
  ngOnInit(): void {
    // Fetch posts on component initialization
    this.apiService.fetchPosts();
  }
}
