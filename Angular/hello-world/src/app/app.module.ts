import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { MyCounterService } from './services/my-counter.service';
import { TodolistComponent } from './todolist/todolist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
