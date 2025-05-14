import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  messaggio = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://5000-andrea19327-prepdockerm-khy11yam8gv.ws-eu118.gitpod.io/api/data').subscribe(data => {
      this.messaggio = data.messaggio;
    });
  }
}