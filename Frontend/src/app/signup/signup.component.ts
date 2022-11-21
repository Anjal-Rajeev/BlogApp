import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title = 'Angular Blog App SignUp';


  User = {
    email: '',
    password: ''
  }
  static User: any;
 

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  userverify(){
    alert('Sign Up successful')
    this.router.navigateByUrl('home')
  }

}
 