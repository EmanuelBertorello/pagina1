import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {
  dataUser: any;

  constructor( private router: Router,
    private afAuth: AngularFireAuth,
    ){}
  ngOnInit(): void {
    {
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
}
