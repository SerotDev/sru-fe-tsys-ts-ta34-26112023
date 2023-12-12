// Importamos electrodomestico
import Electrodomestico from './Electrodomestico';

class Lavadora extends Electrodomestico {
    // Constante para la carga por defecto
    private static readonly CARGA_POR_DEFECTO: number = 5;

    // Atributo adicional
    private carga: number;

    // Constructor
    constructor(
        precioBase: number = Electrodomestico.PRECIO_BASE_POR_DEFECTO,
        color: string = Electrodomestico.COLOR_POR_DEFECTO,
        consumoEnergetico: string = Electrodomestico.CONSUMO_POR_DEFECTO,
        peso: number = Electrodomestico.PESO_POR_DEFECTO,
        carga: number = Lavadora.CARGA_POR_DEFECTO
    ) {
        super(precioBase, color, consumoEnergetico, peso);
        this.carga = carga;
    }

    // Método get de carga
    public getCarga(): number {
        return this.carga;
    }

    // Método para calcular el precio final para lavadoras
    public precioFinal(): number {
        // Llama al método padre para calcular el precio base
        let precioFinalLavadora = super.precioFinal();

        // Añade el aumento de precio según la carga
        if (this.carga > 30) {
            precioFinalLavadora += 50;
        }

        return precioFinalLavadora;
    }
}

export default Lavadora;