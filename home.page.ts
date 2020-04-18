import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private alertController : AlertController) { }

  ngOnInit() { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert Title',
      subHeader: 'Subtitle',
      mode: 'ios',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
