import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatStepperModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatChipsModule, MatDividerModule } from '@angular/material';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WizardComponent } from './wizard/wizard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'burba-datacollector'),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
