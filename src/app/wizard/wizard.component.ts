import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  isLinear = false ;

  telephone:string;
  address:string;
  openingHours:string;
  order:string;
  changeAddress:string;
  cancelOrder:string;
  name:string;

  constructor(private db: AngularFireDatabase) { 

  }

  ngOnInit() {

  }

  uploadData(){
    this.db.list('/responses').push({
      "name":this.name,
      "telephone":this.telephone,
      "address":this.address,
      "openingHousrs":this.openingHours,
      "order":this.order,
      "changeAddress":this.changeAddress,
      "cancelOrder":this.cancelOrder
    });
  }

}
