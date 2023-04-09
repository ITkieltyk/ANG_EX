import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lotto',
  templateUrl: './lotto.component.html',
  styleUrls: ['./lotto.component.css'],
})
export class LottoComponent implements OnInit {
  maszynaLosujaca: number[] = [];
  tekst1linijka: string = '';
  wonNumbers: number[] = [];
  constructor() {}

  ngOnInit(): void {}

  losowanie(element: HTMLElement) {
    this.wonNumbers = [];
    this.maszynaLosujaca = [];
    this.tekst1linijka = '';
    const tekst1 = 'Maszyna losująca jest pusta';
    this.tekst1linijka = tekst1;
    element.classList.remove('typed-out3');
    element.classList.add('typed-out');
    setTimeout(() => {
      const tekst2 = 'Następuje zwolnienie blokady';
      this.tekst1linijka = tekst2;
      element.classList.toggle('typed-out');

      element.classList.toggle('typed-out2');
      setTimeout(() => {
        const tekst3 = 'Wylosowane liczby to:';
        for (let i = 1; i < 50; i++) {
          this.maszynaLosujaca.push(i);
        }
        for (let i = 0; i < 6; i++) {
          let wonIndex: number = Math.floor(Math.random() * (49 - i));
          this.wonNumbers.push(this.maszynaLosujaca[wonIndex]);
          this.maszynaLosujaca.splice(wonIndex, 1);
        }
        this.tekst1linijka = tekst3 + ' ' + this.wonNumbers.join(', ');
        element.classList.toggle('typed-out2');

        element.classList.toggle('typed-out3');
      }, 4000);
    }, 5000);
  }
}
