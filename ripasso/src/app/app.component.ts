import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ripasso';
  book : any;
  author: any;
  data: any;

  url: string = "https://5000-giuratofabr-ripassotecn-n24ekbpjmtg.ws-eu97.gitpod.io/books";
  constructor(
    private http: HttpClient,
  ) {
  }

  books(url: string): void {
    this.http.get(url).subscribe(data => {
      this.book = data;
    });
  }
}
