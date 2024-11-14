import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importer FormsModule

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [FormsModule], // Ajouter FormsModule ici
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  onSubmit() {
    // Handle form submission
  }

  onGoogleSignUp() {
    // Handle Google sign up
  }
}
