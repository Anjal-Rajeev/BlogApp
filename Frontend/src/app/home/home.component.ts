import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // followingStatus = 'Follow'
  count : number = 0
  url = "";
  data:any

  constructor(private router: Router, private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.getData().subscribe(res=>{
      console.log('from backend: ',res)
      this.data = res
      
      // console.log(data)
    })
  }

  

  follow(id:any, status:any){
    console.log(id)
    console.log(status)
    console.log(this.data.followers)
    if(status == 'follow'){
      status = 'Unfollow'
      this.count= this.data.followers + 1
      this.auth.following(id,status,this.count).subscribe(res=>{
        console.log(res)
        this.ngOnInit()
      })
      // console.log(status)
      // console.log(this.count)
    }
    else if(status == 'Unfollow'){
      status = 'follow'
      this.count= this.data.followers - 1
      this.auth.following(id,status,this.count).subscribe(res=>{
        console.log(res)
        this.ngOnInit()
      })
    }
  }
  path(){
    if(this.router.url == '/home'){
      this.url = 'comment'
    }
    else{
      this.url = 'alerts'
    }
  }

  
}
