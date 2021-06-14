import { Component, OnInit } from '@angular/core';
import { TaskService } from "../services/task.service";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  title = 'stakater-ui';

  constructor(private taskService: TaskService) { }
  /*
  onSubmit() {
    this.salutation();
  }*/

  ngOnInit(): void {
    this.salutation();
  }

  salutation() {
    this.taskService.getSalutation().subscribe(data => {
      if (data.status === 200) {
        console.log(data.result);
        this.title = data.result;
      } else {
        alert(data.message);
      }
    });
  }
}
