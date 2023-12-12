class Password {
    // Atributos
    private longitud: number;
    private contrasena: string;

    // Constructor con longitud por defecto
    constructor(longitud: number = 8) {
        this.longitud = longitud;
        this.contrasena = this.generarContraseñaAleatoria(longitud);
    }

    // Método para generar una contraseña aleatoria
    private generarContraseñaAleatoria(longitud: number): string {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let contrasena = '';
        for (let i = 0; i < longitud; i++) {
            const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            contrasena += caracterAleatorio;
        }
        return contrasena;
    }

    // Método para obtener la contraseña
    public obtenerContrasena(): string {
        return this.contrasena;
    }
}

// Instancia de la clase Password
const password1 = new Password(); // Longitud por defecto
const password2 = new Password(12); // Se especifica una longitud diferente

// Mostrar contraseñas generadas
console.log('Contraseña 1:', password1.obtenerContrasena());
console.log('Contraseña 2:', password2.obtenerContrasena());
