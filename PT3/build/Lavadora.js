"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importamos electrodomestico
const Electrodomestico_1 = __importDefault(require("./Electrodomestico"));
class Lavadora extends Electrodomestico_1.default {
    // Constructor
    constructor(precioBase = Electrodomestico_1.default.PRECIO_BASE_POR_DEFECTO, color = Electrodomestico_1.default.COLOR_POR_DEFECTO, consumoEnergetico = Electrodomestico_1.default.CONSUMO_POR_DEFECTO, peso = Electrodomestico_1.default.PESO_POR_DEFECTO, carga = Lavadora.CARGA_POR_DEFECTO) {
        super(precioBase, color, consumoEnergetico, peso);
        this.carga = carga;
    }
    // Método get de carga
    getCarga() {
        return this.carga;
    }
    // Método para calcular el precio final para lavadoras
    precioFinal() {
        // Llama al método padre para calcular el precio base
        let precioFinalLavadora = super.precioFinal();
        // Añade el aumento de precio según la carga
        if (this.carga > 30) {
            precioFinalLavadora += 50;
        }
        return precioFinalLavadora;
    }
}
// Constante para la carga por defecto
Lavadora.CARGA_POR_DEFECTO = 5;
exports.default = Lavadora;
