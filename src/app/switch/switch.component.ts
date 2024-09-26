import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun, faMoon, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css',
})
export class SwitchComponent {
  isDarkTheme = false;
  faSun = faSun;
  faMoon = faMoon;
  faArrowRight = faArrowRight;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme; // Toggle theme

    const theme = this.isDarkTheme ? 'dark-theme' : '';
    document.body.className = theme; // Adiciona ou remove a classe "dark-theme" do body

    // if (this.isDarkTheme) {
    //   document.body.classList.add('dark-theme');
    // } else {
    //   document.body.classList.remove('dark-theme');
    // }
  }
}
