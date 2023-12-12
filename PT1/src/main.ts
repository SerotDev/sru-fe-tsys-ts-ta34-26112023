class Persona {
    // Constante para el sexo por defecto
    private static readonly SEXO_POR_DEFECTO: string = 'H';

    // Atributos
    private nombre: string;
    private edad: number;
    private DNI: string;
    private sexo: string;
    private peso: number;
    private altura: number;

    // Constructor
    constructor(nombre: string = '', edad: number = 0, DNI: string = '', sexo: string = Persona.SEXO_POR_DEFECTO, peso: number = 0, altura: number = 0) {
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    // Método
    public mostrarInformacion(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`DNI: ${this.DNI}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Peso: ${this.peso}`);
        console.log(`Altura: ${this.altura}`);
    }
}

// Instancia de al menos tres objetos
const persona1 = new Persona('Sergi', 28, '12345678A', 'H', 90, 178);
const persona2 = new Persona('Nerea', 22, '23456789B', 'M', 70, 160);
const persona3 = new Persona('Pablo', 31, '34567890C', 'M', 80, 173);

// Mostrar información de las personas
console.log('Persona 1:');
persona1.mostrarInformacion();

console.log('\nPersona 2:');
persona2.mostrarInformacion();

console.log('\nPersona 3:');
persona3.mostrarInformacion();
