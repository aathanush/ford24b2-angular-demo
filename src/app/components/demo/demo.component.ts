import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../model/product';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  title = 'my-app';
  fruits: string[] = ["apple", "mango", "grapes"];
  product = { id: 1, name: "Dell", price: 100 };
  imageUrl: string = "./assets/disny.jpg"
  isDisabled: boolean = true;
  userName: string = "";
  newProduct:Product = new Product();
  choice:number=4;
  products:Product[]=[];

  isAddEnabled:boolean=false;
  enableAddProduct(){
    this.isAddEnabled=true;
  }
  constructor(){
    this.products.push(new Product("Dell Laptop",23000.0));
    this.products.push(new Product("Dell monitor",10000.0));
    
  }
  addProduct(){
    console.log(this.newProduct);
    this.products.push(this.newProduct);
    this.newProduct = new Product();
    this.isAddEnabled=false;
  }
  clearName(){
    this.userName="";
  }
  addName() {
    console.log(this.userName);
  }
  public clickHandler() {
    console.log(this.fruits);
  }
  toggleButton() {
    this.isDisabled = !this.isDisabled;
  }

}
