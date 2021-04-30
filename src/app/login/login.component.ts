import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string
  accountnumber="Enter Account Number"
  password:any
  
  constructor(private router:Router,private ds:DataService) { 
    this.name="enter account number"
  }

  ngOnInit(): void {
  }
  accnoChanged(event:any){
    console.log(event.target.value)
    this.accountnumber=event.target.value
  }
  pswdChanged(event:any){
    console.log(event.target.value)
    this.password=event.target.value
  }
  login(){
    let accnum=this.accountnumber
    let pwd=this.password
    let result=this.ds.login(accnum,pwd)
    if(result==1){
      alert("login success")
      this.router.navigateByUrl("dashboard")
    }
    else if(result==-1){
      alert("wrong password")
    }
    else{
      alert("Invalid Account number")
    }
  }
toRegister(){
  this.router.navigateByUrl("register")
}
}
