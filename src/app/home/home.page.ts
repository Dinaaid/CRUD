import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // members: string[] = ['Sarah' , 'Dina' , 'Amira'];
  // ages: number[] = [ 50, 21, 5]; 
  all: any[] = [];
  members = [{
    firstName: '11',
    age: '1'
  }];

  newMemberX= '';
  newMemberY= '';  

  constructor(
    private alertCtrl : AlertController
  ) {}

  addMembers(newName: string) {
    if(newName === ''){
      this.alertCtrl.create({
        header: 'warnning!',
        message: 'lw sma7t aktb !',
        buttons: [
          {
          text: 'Okay',
          role: 'Okay'
        },
      
    ]
      })
      .then(alertEl => {
        alertEl.present();
      });
    
      // alert('lw sm7t aktb !');
      return;
    } else {
      this.members.push({
        firstName: this.newMemberX,
        age: this.newMemberY
      });
      this.newMemberX = '';
      this.newMemberY = '';
    }
   
  }
}
