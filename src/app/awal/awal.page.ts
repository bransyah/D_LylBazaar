import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-awal',
  templateUrl: './awal.page.html',
  styleUrls: ['./awal.page.scss'],
})
export class AwalPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  login() {
    this.navCtrl.navigateRoot('/login');
  }

  daftar() {
    this.navCtrl.navigateRoot('/signup');
  }
  
   ngOnInit() {
  }

}
