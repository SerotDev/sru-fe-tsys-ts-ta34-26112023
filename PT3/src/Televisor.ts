// Importamos electrodomestico
import Electrodomestico from './Electrodomestico';

class Televisor extends Electrodomestico {
    // Constantes para los valores por defecto
    private static readonly RESOLUCION_POR_DEFECTO: number = 20;
    private static readonly CUATRO_K_POR_DEFECTO: boolean = false;

    // Atributos adicionales
    private resolucion: number;
    private cuatroK: boolean;

    // Constructor
    constructor(
        precioBase: number = Electrodomestico.PRECIO_BASE_POR_DEFECTO,
        color: string = Electrodomestico.COLOR_POR_DEFECTO,
        consumoEnergetico: string = Electrodomestico.CONSUMO_POR_DEFECTO,
        peso: number = Electrodomestico.PESO_POR_DEFECTO,
        resolucion: number = Televisor.RESOLUCION_POR_DEFECTO,
        cuatroK: boolean = Televisor.CUATRO_K_POR_DEFECTO
    ) {
        super(precioBase, color, consumoEnergetico, peso);
        this.resolucion = resolucion;
        this.cuatroK = cuatroK;
    }

    // Métodos get de resolución y atributo 4K
    public getResolucion(): number {
        return this.resolucion;
    }

    public isCuatroK(): boolean {
        return this.cuatroK;
    }

    // Método para calcular el precio final para televisores
    public precioFinal(): number {
        // Llama al método padre para calcular el precio base
        let precioFinalTV = super.precioFinal();

        // Añade el aumento de 30% del precio si la resolución es 4K
        if (this.resolucion > 40) {
            precioFinalTV += precioFinalTV * 0.3;
        }

        if (this.cuatroK) {
            precioFinalTV += 50;
        }

        return precioFinalTV;
    }
}

export default Televisor;