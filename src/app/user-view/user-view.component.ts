import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  name: string;
  age: number;
  registration: Date;
}

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  public userPosition: string | null = null;
  public user: User | undefined;
  public age: number = 0;
  public name: string = '';
  public registration: Date = new Date();

  constructor(
    private userService: UserService, 
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog)
  { 
    this.user = this.userService.getUser('1')
  }

  

  ngOnInit(): void {
       this.userPosition = this.activatedRoute.snapshot.params['id']
    console.log('Parameters', this.activatedRoute)
    if (this.userPosition) {
      this.user = this.userService.getUser(this.userPosition);
      if (this.user) {
        this.name = this.user?.name;
       // this.
      }
    }
  }

  editUser(): void {
    const dialogRef = this.dialog.open(UserEditDialog, {
      width: '400px',
      data: this.user
      //data: {name: this.name, animal: this.age, registration: this.registration},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}

@Component({
  selector: 'user-edit-dialog',
  templateUrl: './user-edit-dialog.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserEditDialog {
 login: string = 'user';
 password: string = 'password';
 
  constructor(
    public dialogRef: MatDialogRef<UserEditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
