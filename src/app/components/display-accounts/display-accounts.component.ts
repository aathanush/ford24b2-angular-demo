import { Component } from '@angular/core';

import { Account } from '../../model/account';
import { AccountService } from '../../services/account.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-display-accounts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-accounts.component.html',
  styleUrl: './display-accounts.component.css'
})
export class DisplayAccountsComponent {

  accounts: Account[] = [];

  message:string="";
  errorMessage:string="";

  constructor(private accountService: AccountService) {
    this.accountService.getAllAccount().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.accounts = data;
         
        },
        error: (err) => {
          console.log(err);
          this.errorMessage="Could't Load Accounts";
          this.message="";
        },
        complete: () => {
          console.log("Server completed sending data.");

        }
      }
    )
  }
}
