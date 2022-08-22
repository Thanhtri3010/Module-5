import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  id: number;
  name: string;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.categoryService.getAll().subscribe(categories => {
      console.log(categories);
      this.categories = categories;
    });
  }

  openDelete(id: number, name: string): void {
    this.id = id;
    this.name = name;
  }

  delete(id: number): void {
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.getAll();
    }, e => {
      console.log(e);
    });
  }
}
