import { Component, signal } from '@angular/core';
import { Navbarcomponent } from './shared/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { Footercomponent } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Navbarcomponent,Footercomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('art-domain');
}
