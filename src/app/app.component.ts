import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ANG_EX';
  colorChange(node: HTMLElement) {
    const hue = Math.random() * 360;
    node.style.backgroundColor = `hsl(${hue}, 80%, 50%)`;
    node.style.color = `hsl(${(hue + 180) % 360}, 80%, 50%)`;
  }
}
