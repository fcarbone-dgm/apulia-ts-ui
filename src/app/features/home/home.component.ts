import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ISlot, Slot } from 'src/app/core/model/timesheet.model';
import { AppConfigService } from 'src/app/shared/service/appconfig.service';
import { TimesheetService } from 'src/app/shared/service/timesheet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  useBackend: boolean = false;

  datePipe: DatePipe = new DatePipe('en-US');

  values: ISlot[] = [];

  aggregatedSlots: [][] = [];

  _aggregateBy: string[] = [];
  set aggregateBy(items: string[]) {
    if(items.length<=0) {
      this.aggregateBy = this.aggregateByOptions.map((val) => (val.value))
    } else {
      this._aggregateBy = items;
    }
    (this.useBackend)?this.getTSAggregated():this.aggregatedSlots = this.aggregate();
  }

  get aggregateBy(): string[] {
    return this._aggregateBy;
  }

  aggregateByOptions: { name: string, value: string }[] = AppConfigService.settings.settings.options;

  constructor(private tsService: TimesheetService) { }

  getTS() {
    this.tsService.getTimesheets().subscribe((values: Slot[]) => {
      this.values=values;
      this.aggregatedSlots = this.aggregate();
    });
  }

  getTSAggregated() {
    this.tsService.getFilteredTimesheets(this.aggregateBy).subscribe((res) => {
      this.aggregatedSlots = res;
    })
  }

  aggregate(): [][] {
    let result: any = {};
    let entry: [];
    let key: string;
    this.values.forEach((elem: Slot) => {
      key = Slot.getHashBy(this.aggregateBy,elem);
      entry = [];
      if(key in result) {
        result[key][this.aggregateBy.length] += elem.hours;
      } else {
        result[key] = this.aggregateBy.map((by) => {
          let cell: any = elem[by as keyof ISlot];
          return ('date'===by.toLowerCase())?this.datePipe.transform(cell,'dd-MM-yyyy hh:mm:ss'):cell.name;
        });
        result[key][this.aggregateBy.length] = elem['hours'];
      }
    });
    return Object.values(result);
  }

  ngOnInit(): void {
    this.aggregateBy = this.aggregateByOptions.map((val) => (val.value));
    this.getTS();
  }

}
