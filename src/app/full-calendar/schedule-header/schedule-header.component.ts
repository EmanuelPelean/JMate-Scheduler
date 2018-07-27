import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ScheduleEventsService} from '../../shared/services/schedule-events.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-schedule-header',
  templateUrl: './schedule-header.component.html',
  styleUrls: ['./schedule-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleHeaderComponent implements OnInit, OnDestroy {

  scheduleSub: Subscription;
  view = 'month';
  viewDate: Date = new Date();

  constructor(private sService: ScheduleEventsService) { }

  ngOnInit() {
   this.scheduleSub = this.sService.currentViewSelected.subscribe((view: string) => {
     this.view = view;
   });
  }

  onViewSelected() {
    this.sService.viewSelected(this.view);
  }

  onViewDateChange() {
    this.sService.viewDate.next(this.viewDate);
  }

  ngOnDestroy() {
  }

}
