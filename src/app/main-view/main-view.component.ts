import { Component, OnInit } from '@angular/core';
import { TaskService } from "../services/task.service";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
  providers: [DatePipe]
})
export class MainViewComponent implements OnInit {
  title = "Stakater";
  message = '';

  constructor(private datePipe: DatePipe, private taskService: TaskService) { }

  ngOnInit(): void {
    this.salutation();
  }

  salutation() {
    this.taskService.getSalutation().subscribe(data => {
      if (data.status === 200) {
        var myDate = this.datePipe.transform(new Date(), 'dd/MM/yyyy hh:mm:ss Z');
        this.message = myDate + " " + data.result;
      } else {
        alert(data.message);
      }
    });
  }
}
