import { AppRoutingModule } from './../app-routing.module';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

function hello(){
  alert('Hello!!!');
}
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // hello()
  }
  onsignup(){
    console.log("signup works");
    this.router.navigate(['app-signup']);
    console.log("navigated to signup");
  }

}
