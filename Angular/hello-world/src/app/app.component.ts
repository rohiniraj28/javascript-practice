import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';
import { MyCounterService } from './services/my-counter.service';
import { DemoComponent } from './demo/demo.component';
import { RouterOutlet } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'App Component';
  demoTitle: string = '';
  tasks: string[] = [];

  onTaskAdded(task: string) {
    this.tasks.push(task);
  }
  
   ngOnInit(): void {
    console.log('ngOnInit')
}
 }
