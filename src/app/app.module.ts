import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { TaskService } from './services/task.service';
import { HttpClientModule } from "@angular/common/http";
import { AppRouting } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRouting
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
