class Electrodomestico {
    // Constantes
    protected static readonly COLOR_POR_DEFECTO: string = 'blanco';
    protected static readonly CONSUMO_POR_DEFECTO: string = 'F';
    protected static readonly PRECIO_BASE_POR_DEFECTO: number = 100;
    protected static readonly PESO_POR_DEFECTO: number = 5;

    // Atributos
    private precioBase: number;
    private color: string;
    private consumoEnergetico: string;
    private peso: number;

    // Constructor
    constructor(
        precioBase: number = Electrodomestico.PRECIO_BASE_POR_DEFECTO,
        color: string = Electrodomestico.COLOR_POR_DEFECTO,
        consumoEnergetico: string = Electrodomestico.CONSUMO_POR_DEFECTO,
        peso: number = Electrodomestico.PESO_POR_DEFECTO
    ) {
        this.precioBase = precioBase;
        this.color = this.comprobarColor(color);
        this.consumoEnergetico = this.comprobarConsumoEnergetico(consumoEnergetico);
        this.peso = peso;
    }

    // Métodos get
    public getPrecioBase(): number {
        return this.precioBase;
    }

    public getColor(): string {
        return this.color;
    }

    public getConsumoEnergetico(): string {
        return this.consumoEnergetico;
    }

    public getPeso(): number {
        return this.peso;
    }

    // Métodos de comprobación
    private comprobarConsumoEnergetico(letra: string): string {
        const letrasValidas = ['A', 'B', 'C', 'D', 'E', 'F'];
        letra = letra.toUpperCase();

        if (letrasValidas.includes(letra)) {
            return letra;
        } else {
            return Electrodomestico.CONSUMO_POR_DEFECTO;
        }
    }

    private comprobarColor(color: string): string {
        const coloresValidos = ['blanco', 'negro', 'rojo', 'azul', 'gris'];
        color = color.toLowerCase();

        if (coloresValidos.includes(color)) {
            return color;
        } else {
            return Electrodomestico.COLOR_POR_DEFECTO;
        }
    }

    // Método para calcular el precio final
    public precioFinal(): number {
        let precioFinalConsumo: number;
        switch (this.consumoEnergetico) {
            case 'A':
                precioFinalConsumo = 100;
                break;
            case 'B':
                precioFinalConsumo = 80;
                break;
            case 'C':
                precioFinalConsumo = 60;
                break;
            case 'D':
                precioFinalConsumo = 50;
                break;
            case 'E':
                precioFinalConsumo = 30;
                break;
            case 'F':
                precioFinalConsumo = 10;
                break;
            default:
                precioFinalConsumo = 0;
        }

        let precioFinalPeso: number;
        if (this.peso >= 0 && this.peso <= 19) {
            precioFinalPeso = 10;
        } else if (this.peso >= 20 && this.peso <= 49) {
            precioFinalPeso = 50;
        } else if (this.peso >= 50 && this.peso <= 79) {
            precioFinalPeso = 80;
        } else if (this.peso >= 80) {
            precioFinalPeso = 100;
        } else {
            precioFinalPeso = 0;
        }

        return this.precioBase + precioFinalConsumo + precioFinalPeso;
    }
}

//Exportamos la superclase
export default Electrodomestico;