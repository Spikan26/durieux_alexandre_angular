import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email = 'durieuxalexandre26@gmail.com';
  phone = '06 99 99 99 99';
  constructor() { }

  ngOnInit(): void {
  }

}
