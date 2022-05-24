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
        let borrado = this.tope.dato;
        this.tope.enlace = null;
        this.tope = temporal;
        return borrado;
    }

    imprimirpila() {
        let elementospila = "";

        this.aux = this.tope;

        while (this.aux != null) {
            if (this.aux.enlace != null) {
                elementospila += this.aux.dato + ", ";
            } else {
                elementospila += this.aux.dato + ".";
            }
            this.aux = this.aux.enlace;
        }

        delete this.aux;

        return elementospila;
    }

}

class Cola {
    constructor() {
        this.primero = null;
        this.ultimo = null;
    }

    encolar(valor) {
        const nodoNuevo = new Nodo(valor, null);

        if (this.primero == null && this.ultimo == null) {
            this.primero = nodoNuevo;
            this.ultimo = nodoNuevo;
        } else {
            this.ultimo.enlace = nodoNuevo;
            this.ultimo = nodoNuevo;
        }
    }

    desencolar() {
        if (this.primero != null && this.ultimo != null) {
            if (this.primero == this.ultimo) {
                this.primero = null;
                this.ultimo = null;
            } else {
                this.auxPrimero = this.primero;
                this.primero = this.primero.enlace;
                this.auxPrimero.enlace = null;
                delete(this.auxPrimero);
            }
        }
    }

    imprimircola() {
        let elementospila = "";

        this.aux = this.primero;

        while (this.aux != null) {
            if (this.aux.enlace != null) {
                elementospila += this.aux.dato + ", ";
            } else {
                elementospila += this.aux.dato + ".";
            }
            this.aux = this.aux.enlace;
        }

        delete this.aux;

        return elementospila;
    }
}

const pila = new Pila();

pila.push(80);
pila.push(90);

console.log(pila.imprimirpila());

let v1 = pila.pop();
console.log(v1);

let v2 = pila.pop();
console.log(v2);

const cola = new Cola();

cola.encolar(v2);
cola.encolar(v1);

console.log(pila.imprimirpila());
console.log(cola.imprimircola());