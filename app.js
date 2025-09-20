import { loginUI } from './components/login.js';
import { generatorUI } from './components/generator.js';

export function initApp() {
    const app = document.getElementById('app');
    app.innerHTML = '';

    // Tela de login
    loginUI(app, () => {
        // Depois do login, mostra o gerador
        generatorUI(app);
    });
}
