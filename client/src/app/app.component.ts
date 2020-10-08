import { Component, OnInit } from '@angular/core';
import { ParameterCheckAPIService } from '@app/services/parameter-check.service';

interface PingState {
  isSuccessful?: boolean;
  pingStr?: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'conversational-data-management-dashboard';
  pingState: PingState;

  constructor(private parameterCheckAPIService: ParameterCheckAPIService) {}

  ngOnInit(): void {
    this.parameterCheckAPIService.getPing().subscribe(
      (data) => {
        this.pingState = {};
        if (data.pingTime) {
          const date = new Date(Date.parse(data.pingTime));
          const dateStr = date.toLocaleDateString();
          const timeStr = date.toLocaleTimeString();
          this.pingState.pingStr = dateStr + ' - ' + timeStr;
          this.pingState.isSuccessful = true;
        } else {
          this.pingState.isSuccessful = false;
        }
      },
      () => {
        this.pingState = {};
        this.pingState.isSuccessful = false;
      }
    );
  }
}
