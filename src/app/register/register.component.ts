import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username=""
  accno="Enter Account Number"
  password=""

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  register(){
    var username=this.username
    var accno=this.accno
    var password=this.password
    let result= this.ds.register(username,accno,password)
    if(result){
      alert("Register Success")
      this.router.navigateByUrl("")
    }
    else{
      alert("Account Number already exists")
    }
  }

}
