import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Team } from '../team';

export interface TaskDetails {
  memberId: number;
  memberName: string;
  taskName: string;
  taskStartDt: string;
  taskEndDt: string;
  projectStartDt: string;
  projectEndDt: string;
  allocPercent: number;
}

//const ELEMENT_DATA: TaskDetails[] = [];

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit{

  team = new Team();
  constructor(private apiService: ApiService) { 
  }
  
  displayedColumns: string[] = ['Member Id', 'Name', 'Task Name', 'Task Start Date',
      'Task End Date', 'Project Start Dt', 'Project End Dt', 'Allocation Percent'
    ];
  dataSource: TaskDetails[] | any;
  
  ngOnInit() {
    this.fetchTaskDetails();
  }

  fetchTaskDetails() {
   
  }

  onSubmit() {
    alert('Thanks for submitting! Data: ' + JSON.stringify(this.team));
    this.apiService.fetchTaskFromServer(this.team.memberId).subscribe(
      data => {
        console.log(data);
        this.dataSource= data;
      }
    )
  }

}
