/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// connection to Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment} from '../environments/environment';

// data Service
import { DataService } from './data/data.service';
import { TipoPacienteViewComponent } from './customRender/tipo-paciente-view/tipo-paciente-view.component';
import { SesionesRestantesViewComponent } from './customRender/sesiones-restantes-view/sesiones-restantes-view.component';
import { NombrePacienteViewComponent } from './customRender/nombre-paciente-view/nombre-paciente-view.component';

@NgModule({
  declarations: [AppComponent, TipoPacienteViewComponent, SesionesRestantesViewComponent, NombrePacienteViewComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    DataService,
  ],
  entryComponents: [
    TipoPacienteViewComponent,
    SesionesRestantesViewComponent,
    NombrePacienteViewComponent
  ],
})
export class AppModule {
}
