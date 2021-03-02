import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {
  private Datajudul: String = "" 
  constructor() { }

   public getjudul(){
     return this.Datajudul
   }

   public setjudul(judul : String){
     this.Datajudul = judul;
   }
}