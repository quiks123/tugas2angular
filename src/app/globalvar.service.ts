import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {
  private Datajudul: String = ""
  private Dataisi: String = ""
  private Datatanggal: String = ""

  constructor() { }

   public getjudul(){
     return this.Datajudul;
   }

   public setjudul(judul : String){
     this.Datajudul = judul;
   }

   public getisi(){
     return this.Dataisi;
   }

   public setisi(isi : String){
     this.Dataisi = isi;
   }

   public gettanggal(){
     return this.Datatanggal;
   }

   public settanggal(tanggal : String){
     this.Datatanggal = tanggal;
   }
}