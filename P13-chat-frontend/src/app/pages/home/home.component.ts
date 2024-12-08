import {Component} from '@angular/core';
import {Router} from "@angular/router";

/**
 * Composant pour la page d'accueil de l'application.
 * Fournit la navigation vers les pages de connexion et d'inscription.
 */
@Component({
  selector: 'app-home',
  standalone:true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

  startChat() {
    // Navigation vers une route spécifique
    this.router.navigate(['/chat']);
  }
}
