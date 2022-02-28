import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Slot } from 'src/app/core/model/timesheet.model';
import { AppConfigService } from './appconfig.service';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  protected apiUrl = AppConfigService.settings.env.baseUrl;

  constructor(private http: HttpClient ) { }

  getTimesheets() {
    return this.http.get<Slot[]>(this.apiUrl+AppConfigService.settings.api.timesheetPath, {observe: "body"});
  }

  getFilteredTimesheets(aggregateBy: string[]) {
    let params: HttpParams = new HttpParams();
    params = params.append('aggregateBy', aggregateBy.join(","));
    return this.http.get<[][]>(this.apiUrl+AppConfigService.settings.api.timesheetAggregatePath, {observe: "body", params: params});
  }
}
