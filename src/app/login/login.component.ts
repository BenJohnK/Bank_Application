import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string
  accountnumber:any
  password:any
  account_details:any = {
    1000: { name: "ajay", accno: 1000, password: "testone", amount: 5000 },
    1001: { name: "vijay", accno: 1001, password: "testtwo", amount: 3000 },
    1002: { name: "ram", accno: 1002, password: "testthree", amount: 7000 },
    1003: { name: "ravi", accno: 1003, password: "testfour", amount: 10000 },

  }
  constructor() { 
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
  login(a:any,p:any){
    let accnum=a.value
    let pwd=p.value
    if(accnum in this.account_details){
      if(this.account_details[accnum]["password"]==pwd){
        alert("login success")
      }
      else{
        alert("wrong password")
      }
    }
    else{
      alert("Invalid Account number")
    }
  }

}
