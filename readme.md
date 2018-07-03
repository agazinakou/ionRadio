# ionRadio

Simple, useful and efficient.

## Setup
1. Install [Node js](http://nodejs.org/)
2. install [Ionic Framework](https://ionicframework.com/)
```bash
npm install -g ionic cordova
```
3. Create your [Firebase](https://firebase.google.com/) project
4. Use this configuration for use Firestore database in developer/database/rules
```bash
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write;
    }
  }
}
```
5. Add in firestore radios/
```bash
{
    "description" : " 95.5 Virgin Hitz is rich in “Top Chart Hit” radio station which features all current hits of both International and Thai music at that particular moment.",
    "fq" : 90.5,
    "image" : "http://cdn-radiotime-logos.tunein.com/s14807q.png",
    "title" : "95.5 Virgin HITZ",
    "url" : "http://listen.shoutcast.com/113fmchillzone"
}
```

5. [Download](https://github.com/agazinakou/ionRadio.git) or clone repository 
```bash
git clone https://github.com/agazinakou/ionRadio.git
```
6. Click on "Add Firebase to your Web application" in the firebase console
7. Copy and paste the content into src/app/app.firebase.config.ts
```bash
export const FIREBASE_CONFIG = {
    apiKey: "XXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXX"
};
```
8. Use the terminal and go to the project directory
```bash
npm install
```
9. Installing on your phone :D
```bash
ionic cordova platform add android
ionic cordova build android
```

## Contact me 

If you need technical support or have any questions, please send a message to agazinakou@gmail.com or via skype: aziiin5.

Don't re-invent the wheel, Just re-align It.