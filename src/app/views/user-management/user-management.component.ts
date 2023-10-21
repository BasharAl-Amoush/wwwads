import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { catchError, tap } from 'rxjs/operators';
import { UserData } from './get.userData';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent  implements OnInit{

  access_token: string="";
  refresh_token: string="";
 userdata :UserData[]=[]

  selectedUserId :string='';
  searchinput: FormGroup;

  modalAddUserIsOpen: boolean = false;


  modalEditUserIsOpen: boolean = false;

  modalIsOpenControl: FormControl = new FormControl(false);


  constructor(private formBuilder: FormBuilder
    ,private cookieService: CookieService, 
    private http: HttpClient,
    private Userservice:UserService, ) {
    this.searchinput = this.formBuilder.group({
      searchname: [''],
      searchtype: ['']
    });
    
  }


  ngOnInit() {
    this.access_token = this.cookieService.get('access_token');
    this.refresh_token = this.cookieService.get('refresh_token');
    this.fetchUsersData();
  }

  onSubmit() {
    if (this.searchinput.valid) {
      const email = this.searchinput.get('searchname')?.value;
      const password = this.searchinput.get('searchtype')?.value;
      console.log(this.searchinput.value);
    }
  }
  openAddUserModal() {
    this.modalAddUserIsOpen = !this.modalAddUserIsOpen;
  }
  openEditUModal(userId: string) {
    this.modalEditUserIsOpen = !this.modalEditUserIsOpen;
    this.selectedUserId = userId; 
}


 fetchUsersData() {

  const apiEndpoint = '/api/v1/users';
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.access_token}` 
  });
  const requestOptions = {
    headers: headers
  };
  this.http.get<UserData[]>(apiEndpoint, requestOptions).pipe(
    tap(responseData => {
      const userdataarray =responseData;
      for (let key in userdataarray) {
        this.userdata.push({ ... userdataarray[key]});
      }
      console.log(this.userdata);
    }),
    catchError((error) => {
      console.error('Error fetching data from API', error);
      return error;
    })
  ).subscribe();
}

fetchUsersData1() {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.access_token}`
  });

  this.Userservice.getAllUsers(headers).subscribe(
    (responseData) => {
      this.userdata = responseData; 
      console.log(this.userdata);
    },
    (error) => {
      console.error(error);
    }
  );
}

}
