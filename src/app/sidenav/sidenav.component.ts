import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, Renderer2 } from '@angular/core';
import { naavbarData } from './nav-data';

interface SidenavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:resoze',['$event'])
  onResize(event: any): void{
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 769){
      this.collapsed= false
      this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  @Output() onToggleSidenav: EventEmitter<SidenavToggle> =  new EventEmitter;
  collapsed=true;
  screenWidth = 0;
  navData = naavbarData;

  toggLecollpase(): void{
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void{
    this.collapsed = false;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

}
