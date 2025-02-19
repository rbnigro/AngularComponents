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
  usersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUSerDetails: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList; // UsersList simula a chamada HTTP
      this.usersListFiltered = this.usersList;
    }, 5000);
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUSerDetails = true;
  }

  onFilter(filterOptions: IFilterOptions) {
    // console.log(filterOptions);
    this.usersListFiltered = this.filterUsersList(filterOptions, this.usersList);
  }

  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filteredUsersListByName(filterOptions.name, usersList);
    filteredList = this.filteredUsersListByStatus(filterOptions.status, filteredList);

    return filteredList;
  }

  filteredUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPED = name === undefined;

    if (NAME_NOT_TYPED) {
      return usersList;
    }

    const removeAccents = (str: string) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const filteredList = usersList.filter((user) =>
      removeAccents(user.nome.toLowerCase()).includes(removeAccents(name.toLowerCase())));

    return filteredList;
  }

  filteredUsersListByStatus(status: boolean | undefined, usersList: IUser[]): IUser[] {
    const STATUS_NOT_SELECTED = status === undefined;

    if (STATUS_NOT_SELECTED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) =>
      user.ativo === status);

    return filteredList;
  }
}
