import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  judul = ""
  isi = ""
  tanggal = ""

  input(){
    this.router.navigate(['/detail/'+this.judul])
  }
}
