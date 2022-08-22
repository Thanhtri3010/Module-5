import {Injectable} from '@angular/core';
import {Category} from '../model/category';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/categories');
  }

  saveCategory(category): Observable<Category> {
    return this.http.post<Category>(`http://localhost:3000/categories`, category);
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(`http://localhost:3000/categories/${id}`);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`http://localhost:3000/categories/${id}`, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(`http://localhost:3000/categories/${id}`);
  }
}
