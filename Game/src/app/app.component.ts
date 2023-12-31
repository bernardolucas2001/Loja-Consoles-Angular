import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { InicioComponent } from '../inicio/inicio.component';
import { MenuComponent } from '../menu/menu.component';
import { LoginComponent } from '../login/login.component';
import { RodapeComponent } from '../rodape/rodape.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatButtonModule,MatCardModule, MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule, InicioComponent, MenuComponent, LoginComponent, RodapeComponent,
  RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bernardo Consoles';
}
