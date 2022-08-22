import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  nameDelete: string;
  idDelete: number;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.products = this.productService.getAll();
  }

  oppenDelete(product: Product): void {
    this.idDelete = product.id
    this.nameDelete = product.name;
  }

  delete(idDelete: number): void {
    this.productService.delete(idDelete);
    this.ngOnInit();
  }
}
