import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-sites',
  standalone: true,
  imports: [],
  templateUrl: './top-sites.component.html',
  styleUrl: './top-sites.component.css'
})
export class TopSitesComponent implements OnInit {
  categoryData: CategoryData[] = [];
  apiUrl = 'https://api.similarweb.com/v1/TopSites/categories';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<CategoryData[]>(this.apiUrl, {
      headers: { 'Authorization': 'Bearer YOUR_API_KEY' } // Replace with your API key
    }).subscribe((data) => {
      this.categoryData = data;
    });
  }
}
