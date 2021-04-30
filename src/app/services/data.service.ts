import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  account_details:any = {
    1000: { name: "ajay", accno: 1000, password: "testone", amount: 5000 },
    1001: { name: "vijay", accno: 1001, password: "testtwo", amount: 3000 },
    1002: { name: "ram", accno: 1002, password: "testthree", amount: 7000 },
    1003: { name: "ravi", accno: 1003, password: "testfour", amount: 10000 },

  }
  constructor() { }
  register(username:any,accno:any,password:any){
    if(accno in this.account_details){
      return false
      
    }
    else{
      this.account_details[accno]={
        name:username,
        acc:parseInt(accno),
        password:password,
        amount:1000
      }
      console.log(this.account_details)
      return true
    }
  }
  login(accnum:any,password:any){
    if(accnum in this.account_details){
      if(this.account_details[accnum]["password"]==password){
        return 1
      }
      else{
        return -1
      }
    }
    else{
      return 0
    }
  }
}
