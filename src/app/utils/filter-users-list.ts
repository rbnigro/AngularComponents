import { isWithinInterval } from 'date-fns';
import { IUser } from '../interfaces/user/user.interface';
import { IFilterOptions } from '../interfaces/user/filter-options.interface';

const filteredUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
  const NAME_NOT_TYPED = name === undefined;

  if (NAME_NOT_TYPED) {
    return usersList;
  }

  const removeAccents = (str: string) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const filteredList = usersList.filter((user) =>
    removeAccents(user.nome.toLowerCase()).includes(removeAccents(name.toLowerCase())));

  return filteredList;
}

const filteredUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
  const STATUS_NOT_SELECTED = status === undefined;

  if (STATUS_NOT_SELECTED) {
    return usersList;
  }

  const filteredList = usersList.filter((user) =>
    user.ativo === status);

  return filteredList;
}

const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
  const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

  if (DATES_NOT_SELECTED) {
    return usersList;
  }

  const listFiltered = usersList.filter((user) => isWithinInterval(new Date(user.dataCadastro), {
    start: startDate,
    end: endDate,
  }));
  return listFiltered;
}

const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
  let filteredList: IUser[] = [];

  filteredList = filteredUsersListByName(filterOptions.name, usersList);
  filteredList = filteredUsersListByStatus(filterOptions.status, filteredList);
  filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

  return filteredList;
}
export { filterUsersList }
