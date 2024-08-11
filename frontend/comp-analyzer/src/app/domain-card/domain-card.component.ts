import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-domain-card', // The selector for this component
  templateUrl: './domain-card.component.html', // The path to the HTML file
  styleUrls: ['./domain-card.component.css'] // The path to the CSS file
})
export class DomainCardComponent implements OnInit {

  domains: DomainData[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<DomainData[]>('http://localhost:3000/domains').subscribe((data) => {
      this.domains = data;
    });
  }
}
