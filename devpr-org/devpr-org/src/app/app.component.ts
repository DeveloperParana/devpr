import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@Component({
  standalone: true,
  selector: 'conf-root',
  imports: [RouterModule],
  template: `
    <nav>
      <ul>
        @for (item of menu; track item.path) {
        <li>
          <a [routerLink]="item.path">{{ item.title }}</a>
        </li>
        }
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  menu = appRoutes.map(({ path, title }) => ({ path, title }));
}
