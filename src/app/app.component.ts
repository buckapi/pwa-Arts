import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ivansantos';
  constructor(
     public global: GlobalService
  ){}
}
