"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Electrodomestico {
    // Constructor
    constructor(precioBase = Electrodomestico.PRECIO_BASE_POR_DEFECTO, color = Electrodomestico.COLOR_POR_DEFECTO, consumoEnergetico = Electrodomestico.CONSUMO_POR_DEFECTO, peso = Electrodomestico.PESO_POR_DEFECTO) {
        this.precioBase = precioBase;
        this.color = this.comprobarColor(color);
        this.consumoEnergetico = this.comprobarConsumoEnergetico(consumoEnergetico);
        this.peso = peso;
    }
    // Métodos get
    getPrecioBase() {
        return this.precioBase;
    }
    getColor() {
        return this.color;
    }
    getConsumoEnergetico() {
        return this.consumoEnergetico;
    }
    getPeso() {
        return this.peso;
    }
    // Métodos de comprobación
    comprobarConsumoEnergetico(letra) {
        const letrasValidas = ['A', 'B', 'C', 'D', 'E', 'F'];
        letra = letra.toUpperCase();
        if (letrasValidas.includes(letra)) {
            return letra;
        }
        else {
            return Electrodomestico.CONSUMO_POR_DEFECTO;
        }
    }
    comprobarColor(color) {
        const coloresValidos = ['blanco', 'negro', 'rojo', 'azul', 'gris'];
        color = color.toLowerCase();
        if (coloresValidos.includes(color)) {
            return color;
        }
        else {
            return Electrodomestico.COLOR_POR_DEFECTO;
        }
    }
    // Método para calcular el precio final
    precioFinal() {
        let precioFinalConsumo;
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
        let precioFinalPeso;
        if (this.peso >= 0 && this.peso <= 19) {
            precioFinalPeso = 10;
        }
        else if (this.peso >= 20 && this.peso <= 49) {
            precioFinalPeso = 50;
        }
        else if (this.peso >= 50 && this.peso <= 79) {
            precioFinalPeso = 80;
        }
        else if (this.peso >= 80) {
            precioFinalPeso = 100;
        }
        else {
            precioFinalPeso = 0;
        }
        return this.precioBase + precioFinalConsumo + precioFinalPeso;
    }
}
// Constantes
Electrodomestico.COLOR_POR_DEFECTO = 'blanco';
Electrodomestico.CONSUMO_POR_DEFECTO = 'F';
Electrodomestico.PRECIO_BASE_POR_DEFECTO = 100;
Electrodomestico.PESO_POR_DEFECTO = 5;
//Exportamos la superclase
exports.default = Electrodomestico;
