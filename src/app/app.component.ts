/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  pacientesCol : AngularFirestoreCollection<any> = this.afs.collection('pacientes');
  pacientesObs = this.pacientesCol.valueChanges();
  
  constructor(private analytics: AnalyticsService,
              private afs: AngularFirestore) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();

    this.pacientesObs.forEach( item => {
      console.log('item', item);
    });

  }
}
