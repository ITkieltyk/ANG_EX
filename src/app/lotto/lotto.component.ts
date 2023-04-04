import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lotto',
  templateUrl: './lotto.component.html',
  styleUrls: ['./lotto.component.css'],
})
export class LottoComponent implements OnInit {
  maszynaLosujaca: number[] = [];
  tekst1linijka: string = '';

  constructor() {}

  ngOnInit(): void {}
  losowanie(element: HTMLElement) {
    const tekst1 = 'Maszyna losująca jest pusta';
    for (let i = 0; i < tekst1.length; i++) {
      setTimeout(() => {
        this.tekst1linijka = tekst1.slice(0, i + 1);
      }, 100 * i);
    }

    const tekst2 = 'Następuje zwolnienie blokady';
    for (let i = 0; i < tekst2.length; i++) {
      setTimeout(() => {
        this.tekst1linijka = tekst2.slice(0, i + 1);
      }, 100 * i + 5000);
    }
    for (let i = 0; i < 49; i++) {
      this.maszynaLosujaca.push(i);
    }
  }
}
