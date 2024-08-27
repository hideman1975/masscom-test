import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { map } from 'rxjs/operators'
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public dateFrom: number = 0;
  public dateTo: number = 100;
  public users: User[] = [];
  public maxDate = new Date();
  startDate = new Date(2020, 0, 1);
  endDate = new Date();

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.filterChange();
  }

  filterChange() {
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
    this.router.navigate(['/user-view', row.position])
  }


}
