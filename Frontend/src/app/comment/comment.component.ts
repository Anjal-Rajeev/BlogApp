import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {


  data:any
  comments:any
  newComment = {
    name:'',
    content: ''
  }
  
  constructor(private auth:AuthService) { }

  ngOnInit(): void {

    this.auth.getData().subscribe(res=>{
      this.data = res
      this.comments= this.data.comment
    })
  }

  addNewComment(id:any, data:any){
    console.log(this.newComment)
    console.log("id and cmnt", id , data)
    this.auth.addComment(id,data).subscribe(res=>{
      console.log(res)
      this.ngOnInit()
      this.newComment.name=''
      this.newComment.content=''
    })
    
    
  }

  
}
