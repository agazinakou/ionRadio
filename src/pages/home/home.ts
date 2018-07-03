import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ModalController, NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { PlayerPage } from './../player/player';

interface Items {
  description: string;
  fq: number;
  image : string;
  title : string;
  url : string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  itemsCollection: AngularFirestoreCollection<Items>; //Firestore collection
  items: Observable<Items[]>; // read collection

  constructor(public navCtrl: NavController, private afs: AngularFirestore,
    public modalCtrl : ModalController) {

  }

  ionViewWillEnter() {

    this.itemsCollection = this.afs.collection('radios'); //ref()
    this.items = this.itemsCollection.valueChanges();
  }

  openPlayer(radio) {
    let profileModal = this.modalCtrl.create(PlayerPage, {
      radio: radio
    });
    profileModal.present();
  }

}
