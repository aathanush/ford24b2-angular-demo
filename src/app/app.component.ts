import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  fruits: string[] = ["apple", "mango", "grapes"];
  product = { id: 1, name: "Dell", price: 100 };
  imageUrl: string = "./assets/disny.jpg"
  isDisabled: boolean = true;
  userName: string = "";
  newProduct:Product = new Product();

  addProduct(){
    console.log(this.newProduct);
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
