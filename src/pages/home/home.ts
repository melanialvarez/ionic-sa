import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VisitPage } from '../visit/visit';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  visitsByDate: Array<Object>;

  constructor(public navCtrl: NavController) {
    this.visitsByDate = [
      {
        date: "hoy",
        visits: [
          {
            id: 1,
            name: "Melani",
            date: "10-10-2018",
            timeInterval: "10 a 20 hrs"
          },
          {
            id: 1,
            name: "Sarahi",
            date: "10-10-2018",
            timeInterval: "10 a 20 hrs"
          }
          ]
      },
      {
        date: "mañana",
        visits: [
          {
            id: 1,
            name: "Jenny",
            date: "10-10-2018",
            timeInterval: "10 a 20 hrs"
          }
        ]
      }
    ];

  }

  doSomething(event: any){
    console.log(event);
    this.navCtrl.setRoot(VisitPage);
  }

}
