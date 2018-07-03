import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import { RadioProvider } from '../../providers/radio/radio';

/**
 * Generated class for the PlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {

  params : any;
  playing: boolean = false;
  stationUrl: any;
  loadingPopup: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController, public loadingCtrl: LoadingController, 
    public viewCtrl: ViewController, public alertCtrl: AlertController, 
    public radio : RadioProvider) {
    this.params = this.navParams.get('radio');
    this.stationUrl = this.params.url;
    this.play(this.stationUrl);

  }

  ionViewDidLeave() {
    this.stop();
  }

  play(url) {
    this.loadingPopup = this.loadingCtrl.create({
      spinner: 'dots',
      content: ''
    });
    this.loadingPopup.present();
    console.log("play clicked");
    console.log(url);
    this.playing = !this.playing;
    this.radio.play(url).then(() => {
      console.log('Return Playing');
      this.loadingPopup.dismiss();
    })
      .catch(error => {
        console.log("error=" + error);
        this.presentAlert("Error msg= " + error + "<br>Radio url = " + url);
        this.stop();
        this.playing = false;
        this.loadingPopup.dismiss();
      });

  }

  pause() {
    this.playing = !this.playing;
    this.radio.pause();
  }

  stop() {
    this.radio.stop();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  presentAlert(title) {
    let alert = this.alertCtrl.create({
      title: title,
      buttons: ['OK']
    });
    alert.present();
  }

  

}
