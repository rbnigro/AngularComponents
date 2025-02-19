import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/user/filter-options.interface';
import { IUser } from './interfaces/user/user.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUSerDetails: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
    }, 5000);
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUSerDetails = true;
  }

  onFilter(filterOptions: IFilterOptions) {
    console.log(filterOptions);
  }
}
