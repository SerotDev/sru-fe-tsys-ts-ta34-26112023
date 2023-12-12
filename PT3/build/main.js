"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Electrodomestico_1 = __importDefault(require("./Electrodomestico"));
const Lavadora_1 = __importDefault(require("./Lavadora"));
const Televisor_1 = __importDefault(require("./Televisor"));
class MainApp {
    static main() {
        const electrodomesticos = [];
        // Asignar objetos a cada posición
        electrodomesticos[0] = new Televisor_1.default(500, 'negro', 'A', 25, 50, true);
        electrodomesticos[1] = new Televisor_1.default(400, 'gris', 'C', 30, 32, false);
        electrodomesticos[2] = new Lavadora_1.default(300, 'blanco', 'B', 40, 8);
        electrodomesticos[3] = new Lavadora_1.default(250, 'azul', 'D', 25, 5);
        electrodomesticos[4] = new Televisor_1.default(600, 'rojo', 'B', 42, 60, true);
        electrodomesticos[5] = new Lavadora_1.default(350, 'verde', 'C', 35, 10);
        electrodomesticos[6] = new Electrodomestico_1.default(200, 'gris', 'E', 18);
        electrodomesticos[7] = new Televisor_1.default(700, 'negro', 'A', 50, 75, true);
        electrodomesticos[8] = new Lavadora_1.default(400, 'azul', 'A', 55, 15);
        electrodomesticos[9] = new Electrodomestico_1.default(150, 'blanco', 'F', 10);
        // Recorrer el array y ejecutar el método precioFinal()
        let precioTotalElectrodomesticos = 0;
        let precioTotalTelevisiones = 0;
        let precioTotalLavadoras = 0;
        for (const electrodomestico of electrodomesticos) {
            const precioFinal = electrodomestico.precioFinal();
            console.log(`Precio final de Electrodomestico tipo ${electrodomestico.constructor.name}: ${precioFinal}`);
            precioTotalElectrodomesticos += precioFinal;
            if (electrodomestico instanceof Televisor_1.default) {
                precioTotalTelevisiones += precioFinal;
            }
            else if (electrodomestico instanceof Lavadora_1.default) {
                precioTotalLavadoras += precioFinal;
            }
        }
        console.log(`Precio total de televisores: ${precioTotalTelevisiones}`);
        console.log(`Precio total de lavadoras: ${precioTotalLavadoras}`);
        console.log(`Precio total de electrodomésticos: ${precioTotalElectrodomesticos}`);
    }
}
// Lanza el programa
MainApp.main();
