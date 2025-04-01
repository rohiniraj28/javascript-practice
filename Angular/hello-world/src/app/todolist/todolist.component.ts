import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validator } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import { Form  } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MyCounterService } from '../services/my-counter.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  @Input() inpValue: string = 'Rohini';
  title = 'To Do List';
  currentDate = new Date();


  
    
  tasks: { id: number; name: string }[] = [];
  newTask: string = '';
  nextId: number = 1;
  editMode: { [key: number]: boolean } = {};
  editedTask: { [key: number]: string } = {};
  age: { [key: number]: boolean } = {};
  mobileNumber: { [key: number]: boolean } = {};

  mobileAgeForm: FormGroup;

  constructor(private fb: FormBuilder, counterservice:MyCounterService) {
    this.mobileAgeForm = this.fb.group({
      mobile: ['', [
        Validators.required,
        Validators.pattern(/^([789][0-9]{9})$/)
      ]],
      age: ['', [
        Validators.required,
        Validators.min(18),
        Validators.max(100)
      ]]
    });
  }

  onSubmit(): void {
    if (this.mobileAgeForm.valid) {
      console.log('Form Submitted!', this.mobileAgeForm.value);
    } else {
      console.log('Form is invalid');
    }
  }


    
  
  addTask() {
    if (this.newTask.trim() !== '') {
    this.tasks.push({ id: this.nextId++, name: this.newTask });
    this.newTask = '';
    }
    localStorage.setItem('Task', JSON.stringify(this.tasks));
  }
  
  editTask(task: { id: number; name: string }) {
      this.editMode[task.id] = true;
      this.editedTask[task.id] = task.name;
  }
    
  saveTask(task: { id: number; name: string }) {
      task.name = this.editedTask[task.id];
      this.editMode[task.id] = false;
      delete this.editedTask[task.id];
  }
    
   
  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
  
  ngOnInit() {
    localStorage.setItem('key', 'value');
    const data = localStorage.getItem('key');
    console.log(data);
  }


  

 
}


