//Estructura de datos dinámica "pila" a través de nodos

class Nodo {
    constructor(dato, enlace) {
        this.dato = dato;
        this.enlace = enlace;
    }
}

class Pila {
    constructor() {
        this.tope = null;
    }

    push(dato) {
        const nodoNuevo = new Nodo(dato, this.tope);
        this.tope = nodoNuevo;
    }

    pop() {
        let temporal = this.tope.enlace;
        this.tope.enlace = null;
        this.tope = temporal;
    }

    tamanioPila() {
        let tam = 0;
        this.aux_primero = this.tope;

        while (this.aux_primero != null) {
            tam++;
            this.aux_primero = this.aux_primero.enlace;
        }

        delete this.aux_primero;

        return tam;
    }

    vaciar() {
        this.aux_actual = this.tope;

        while (this.aux_primero != null) {
            delete this.aux_actual;
            this.aux_actual = this.aux_actual.enlace;
        }

        delete this.aux_actual;

        return this.tamanioPila();
    }

    limpiar() {
        let tam = this.tamanioPila();

        for (let i = 1; i <= tam; i++) {
            this.pop();
        }
    }
}

//Crear mi código para trabajar con los objetos a partir de la clase Pilas

const pila = new Pila();

//Agregar nodos a la pila

pila.push(23);
pila.push(43);
pila.push(13);
console.log(pila);
console.log(pila.tamanioPila());
console.log(pila.limpiar());
console.log(pila.tamanioPila());
console.log(pila);


//Desapilar nodos de la pila