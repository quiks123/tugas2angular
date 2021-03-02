import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalvarService } from './globalvar.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(private router:Router, public globalvar:GlobalvarService){
  }

  judul = ""
  isi = ""
  tanggal = ""

  input(){
    this.globalvar.setjudul(this.judul)
    this.globalvar.setisi(this.isi)
    this.globalvar.settanggal(this.tanggal)
    this.router.navigate(['/detail/'])
  }
}
