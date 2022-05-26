import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public mailTo = 'codyjedwards.1@gmail.com';

  public emailModel = {
    firstName : '',
    lastName : '',
    message : ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  public sendEmail(){
    document.location.href = `mailto:${this.mailTo}?subject=Contact From: ${this.emailModel.firstName} ${this.emailModel.lastName}&body=${this.emailModel.message}`
  }

}
