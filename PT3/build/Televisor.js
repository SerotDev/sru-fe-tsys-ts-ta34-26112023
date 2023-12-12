"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importamos electrodomestico
const Electrodomestico_1 = __importDefault(require("./Electrodomestico"));
class Televisor extends Electrodomestico_1.default {
    // Constructor
    constructor(precioBase = Electrodomestico_1.default.PRECIO_BASE_POR_DEFECTO, color = Electrodomestico_1.default.COLOR_POR_DEFECTO, consumoEnergetico = Electrodomestico_1.default.CONSUMO_POR_DEFECTO, peso = Electrodomestico_1.default.PESO_POR_DEFECTO, resolucion = Televisor.RESOLUCION_POR_DEFECTO, cuatroK = Televisor.CUATRO_K_POR_DEFECTO) {
        super(precioBase, color, consumoEnergetico, peso);
        this.resolucion = resolucion;
        this.cuatroK = cuatroK;
    }
    // Métodos get de resolución y atributo 4K
    getResolucion() {
        return this.resolucion;
    }
    isCuatroK() {
        return this.cuatroK;
    }
    // Método para calcular el precio final para televisores
    precioFinal() {
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
// Constantes para los valores por defecto
Televisor.RESOLUCION_POR_DEFECTO = 20;
Televisor.CUATRO_K_POR_DEFECTO = false;
exports.default = Televisor;
