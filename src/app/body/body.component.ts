import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit{
  ngOnInit(): void {
    this.getBodyClass();
  }

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 733) {
      console.log('1',this.collapsed )
      styleClass = 'body-trimmed';
    } else  {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }
}
