import { Component, EventEmitter, Input, OnInit, OnChanges, OnDestroy, Output } from '@angular/core';
import { MyCounterService } from '../services/my-counter.service';
import { RouterOutlet } from '@angular/router'; 
import { TodolistComponent } from '../todolist/todolist.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  @Input() inpValue: string = 'Child Input';
  @Output() optValue: string = 'Rohini';

  tasks: { id: number; name: string }[] = [];
  newTask: string = '';
  nextId: number = 1;
  editMode: { [key: number]: boolean } = {};
  editedTask: { [key: number]: string } = {};

  demoTitle: string = '';
  counter: number = 0;
    constructor(private counterService: MyCounterService) { 
      this.counterService.counter$.subscribe( counter => {
        this.counter = counter;
        
      })

    }
      inc() { this.counterService.inc(this.counter) }
      dec() { this.counterService.dec(this.counter) }



  ngOnInit(): void {
      console.log('ngOnInit')
  }

  ngOnChanges() {
    console.log("ngOnChanges")
 }

 ngOnDestroy() {
  console.log("ngOnDestroy")
  }

 
}

export class todolist {




  
}
