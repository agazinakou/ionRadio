import { PlayerPage } from './../player/player';
import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { NavController, ModalController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

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

  openPlayer(radioId) {
    let profileModal = this.modalCtrl.create('PlayerPage', {
      radioId: radioId
    });
    profileModal.present();
  }

}
