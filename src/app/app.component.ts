import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { map } from 'rxjs/operators'
import { User } from './user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit {

  public dateFrom: number = 0;
  public dateTo: number = 100;
  public users: User[] = [];
  public maxDate = new Date();
  startDate = new Date(2020, 0, 1)
  endDate = new Date()

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = ELEMENT_DATA;

  constructor(private userService: UserService) {}

  ngOnInit() {
    console.log('onInit')
    this.filterChange();
  }

  filterChange() {
    //console.log('key', event.key)
    this.userService.getUsers()
    .pipe(
      map(users => users.filter(user => user.age > this.dateFrom)),
      map(users => users.filter(user => user.age < this.dateTo)),
      map(users => users.filter(user => user.registration < this.endDate)),
      map(users => users.filter(user => user.registration > this.startDate))
    )
    .subscribe(users => {
      console.log('Users', users)
      this.users = users;
    })
    this.userService.usersSub.next(this.userService.users)
  }

  selectUser(row: any) {
console.log('User selected', row)
  }
}
