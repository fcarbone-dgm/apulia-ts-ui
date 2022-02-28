import { Component, Input, OnInit } from '@angular/core';
import { ISlot } from 'src/app/core/model/timesheet.model';
import { TimesheetService } from '../../service/timesheet.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() aggregateBy: string[] = [];
  @Input() aggregatedSlots: [][] = [];

  constructor(private tsService: TimesheetService) { }

  ngOnInit(): void {

  }

}
