import { Component, OnInit, ChangeDetectionStrategy , Input } from '@angular/core';
import { Zwierze } from '../interface';
declare const $:any;

@Component({
  selector: 'app-kolekcja',
  templateUrl: './kolekcja.component.html',
  styleUrls: ['./kolekcja.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KolekcjaComponent {
  @Input() tablicaWybranych: Zwierze[] = [];

  title = 'Projekt';
  
  pokazOpis(){};
  kolor:string="white";
  czyGrozne(zagrozenie:boolean){zagrozenie ? this.kolor="red" : this.kolor="white"};

  ngAfterViewInit(){
    $('#karuzela').carousel();
  }
}
