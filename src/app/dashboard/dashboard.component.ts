import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  amount:any
  cliked=""
  check=false
  constructor() { 
  
  }

  ngOnInit(): void {
  }
  transact(){
    
  }
  withdraw(){
    this.cliked="withdraw"
  }
  deposit(){
    this.cliked="deposit"
    alert(this.cliked)
  }
  amountChanged(event:any){
    if(isNaN(this.amount)){
      this.check=true;
      (<HTMLInputElement> document.getElementById("deposit")).disabled = true;
    }
    else{
      this.check=false
    }
  }
}
