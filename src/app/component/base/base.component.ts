import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})

export class BaseComponent implements OnDestroy{

  protected serviceSubscription: Subscription[] = [];
  constructor() { }

  ngOnDestroy() {
  this.serviceSubscription.forEach(subscription => subscription.unsubscribe());
  }
}
