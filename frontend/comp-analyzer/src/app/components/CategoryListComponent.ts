import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../server/CategoryService'

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: any[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      const transformedData = Object.entries(data).flatMap(([category, items]) => 
  Object.entries(items).map(([key, value]) => ({
    category,
    name: key,
    description: value
  }))
); 



    });
  }
}
