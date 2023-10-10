import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})

export class MyButtonComponent implements OnInit {
  ngOnInit() {
    // Initialization code for your button component
  }

  onClick() {
    // Add your button click logic here
    console.log('Button clicked!');
  }
}
