import { Component } from '@angular/core';
import { LoginRegistroComponent } from "../../elementos/login-registro/login-registro.component";
import { QuienSoyComponent } from '../../elementos/quien-soy/quien-soy.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [LoginRegistroComponent, QuienSoyComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
