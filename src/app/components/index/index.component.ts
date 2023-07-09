import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  dataUser: any;

  menuVisible: boolean = true;
constructor( private router: Router,
  private afAuth: AngularFireAuth,
  ){}
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }
  ngOnInit(): void {
    this.afAuth.currentUser.then(user => {
      if(user ) {
        this.dataUser = user;
        console.log(user)
      } else {
        this.router.navigate(['/login']);
      }
    })
}
}