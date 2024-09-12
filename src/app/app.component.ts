import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AhorcadoComponent } from "./componentes/juegos/ahorcado/ahorcado.component";
import { InicioComponent } from "./componentes/paginas/inicio/inicio.component";
import { LoginRegistroComponent } from './componentes/elementos/login-registro/login-registro.component';
import { QuienSoyComponent } from './componentes/elementos/quien-soy/quien-soy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioComponent, AhorcadoComponent, InicioComponent, LoginRegistroComponent, QuienSoyComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sala_juegos';
}
