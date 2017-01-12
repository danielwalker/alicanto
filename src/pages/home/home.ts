import {Observable} from 'rxjs/Observable';
import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Mav, Status} from '../../common/Mav';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
    
  Status = Status;  
  mav:Mav;

  connectDisabled: boolean = false;

  constructor(navCtrl: NavController, mav: Mav) {
    this.mav = mav;        
  }

  doConnect() {          
    this.connectDisabled = true;
    this.mav.connect(5760, '127.0.0.1');    
  }
}
