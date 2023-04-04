import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  rootArray: number[] = [];

  arrayGenerator(listElement: HTMLElement) {
    const resultArray: number[] = [];
    for (let i = 0; i < 20; i++) {
      resultArray.push(Math.random() * 100);
    }
    this.rootArray = resultArray;
    listElement.classList.toggle('lists-wrapper-visible');
    listElement.classList.toggle('lists-wrapper');
  }
  arrayModFor() {
    const resultArray: number[] = [];
    for (let i = 0; i < this.rootArray.length; i++) {
      resultArray.push(Math.random() * 100 + this.rootArray[i]);
    }
    return resultArray;
  }
  arrayModForOf() {
    const resultArray: number[] = [];
    for (let el of this.rootArray) {
      resultArray.push(Math.random() * 100 + el);
    }
    return resultArray;
  }
  arrayModWhile() {
    const resultArray: number[] = [];
    let i = this.rootArray.length;
    while (i > 0) {
      resultArray.push(
        Math.random() * 100 + this.rootArray[this.rootArray.length - i]
      );
      i--;
    }

    return resultArray;
  }
  arrayModDoWhile() {
    const resultArray: number[] = [];
    let i = this.rootArray.length;
    do {
      resultArray.push(
        Math.random() * 100 + this.rootArray[this.rootArray.length - i]
      );
      i--;
    } while (i > 0);
    return resultArray;
  }
  arrayModForEach() {
    const resultArray: number[] = [];
    this.rootArray.forEach((el) => resultArray.push(el + Math.random() * 100));
    return resultArray;
  }
  arrayModMap() {
    const resultArray: number[] = this.rootArray.map(
      (el) => el + Math.random() * 100
    );

    return resultArray;
  }

  constructor() {}

  ngOnInit(): void {}
}
