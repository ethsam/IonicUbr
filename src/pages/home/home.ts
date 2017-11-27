import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapDirective } from '../../components/map/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  declarations: [MapDirective] //Error :/
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
