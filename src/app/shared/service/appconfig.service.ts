import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAppConfig } from 'src/assets/config/appconfig.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  static settings: IAppConfig;

  constructor(private http: HttpClient) { }

  load() {
    const jsonFile = environment.configUrl;
    return this.http.get<IAppConfig>(jsonFile).pipe(tap((settings: IAppConfig) => (AppConfigService.settings = settings)));
  }
}

export function initializeApp(appConfigService: AppConfigService) {
  return () => appConfigService.load();
}
