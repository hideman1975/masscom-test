import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: User[] = [
    {position: 1, name: 'Петров Сидор Александрович', age: 23, registration: new Date(2024, 7, 4)},
    {position: 2, name: 'Фёдоров Николай Сергеевич', age: 45, registration: new Date(2023, 5, 14)},
    {position: 3, name: 'Марков Алексей Николаевич', age: 15, registration: new Date(2023, 7, 4)},
    {position: 4, name: 'Киреева Фарида Махмудовна', age: 19, registration: new Date(2023, 8, 24)},
    {position: 5, name: 'Надеждина Вера Алексеевна', age: 24, registration: new Date(2024, 2, 11)},
    {position: 6, name: 'Семёнов Кирил Андреевич', age: 65, registration: new Date(2022, 1, 14)},
    {position: 7, name: 'Никитин Борис Матвеевич', age: 52, registration: new Date(2023, 7, 12)},
    {position: 8, name: 'Синегибский Александр Максимович', age: 37, registration: new Date(2021, 9, 30)},
    {position: 9, name: 'Попов Леонард Андреевич', age: 73, registration: new Date(2022, 2, 28)},
    {position: 10, name: 'Крымов Тимофей Леонидович', age: 51, registration: new Date(2021, 9, 23)},
    {position: 11, name: 'Петров Сидор Александрович', age: 23, registration: new Date(2024, 7, 4)},
    {position: 12, name: 'Фёдоров Николай Сергеевич', age: 45, registration: new Date(2023, 5, 14)},
    {position: 13, name: 'Туполев Алексей Николаевич', age: 33, registration: new Date(2023, 12, 4)},
    {position: 14, name: 'Демидова Алёна Николаевна', age: 89, registration: new Date(2023, 8, 24)},
    {position: 15, name: 'Теплова Ольга Алексеевна', age: 51, registration: new Date(2023, 11, 11)},
    {position: 16, name: 'Голиков Максим Андреевич', age: 12, registration: new Date(2022, 9, 14)},
    {position: 17, name: 'Шиншилов Матвей Матвеевич', age: 68, registration: new Date(2023, 7, 12)},
    {position: 18, name: 'Шарапов Антон Максимович', age: 31, registration: new Date(2023, 9, 30)},
    {position: 19, name: 'Николаев Герман Андреевич', age: 73, registration: new Date(2024, 2, 28)},
    {position: 20, name: 'Верников Семён Леонидович', age: 24, registration: new Date(2022, 9, 23)},
  ]

  public usersSub = new Subject<User[]>();
  

  public getUsers() {
    console.log('Service')
    return this.usersSub.asObservable();
  }

  public getUser(id: string) {
    return this.users.find(item => item.position === Number(id))
    //console.log('Get User', id)
  }

  constructor() {}
}
