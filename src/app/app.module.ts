import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { BodyComponent } from './body/body.component';
import { MenubarComponent } from './menubar/menubar.component';
import { CompositionListComponent } from './composition-list/composition-list.component';
import { TableModule } from 'primeng/table';
import { RotateDirective } from './app-rotate.directive';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SettingsComponent,
    StatisticsComponent,
    BodyComponent,
    MenubarComponent,
    CompositionListComponent,
    RotateDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    CardModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
