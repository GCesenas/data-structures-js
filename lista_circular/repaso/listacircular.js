//Código lista circular
//let inicio = null;

//class Nodo {
//    constructor(valor, sig) {
//        this.valor = valor;
//        this.enlaceSig = sig;
//    }
//}

//class ListaCircular {
//    constructor() {
//        this.inicio = null;
//        this.final = null;
//        this.tamanio = 0;
//    }
//
//    agregarNodo(dato) {
//        const nuevoNodo = new Nodo(dato, this.inicio);
//
//        if (!this.inicio) {
//            this.inicio = nuevoNodo;
//            this.final = nuevoNodo;
//        } else {
//            this.final.enlaceSig = nuevoNodo;
//            this.final = nuevoNodo;
//        }
//
//        this.tamanio++;
//    }
//
//    buscarModificar(dato, cambio, valorcambio) {
//
//        let nodoActual = this.inicio;
//
//        for (let i = 0; i < this.tamanio; i++) {
//            nodoActual = nodoActual.enlaceSig;
//            if (dato == nodoActual) {
//                console.log("¿Deseas cambiar el valor del nodo?");
//                if (cambio == true) {
//                    nodoActual = valorcambio;
//                }
//            }
//        }
//    }
//
//}
//
//const listaCircular = new ListaCircular();
//
//listaCircular.agregarNodo("Perro");
//listaCircular.agregarNodo("Gato");
//listaCircular.agregarNodo("Caballo");
//listaCircular.agregarNodo("s");
//listaCircular.agregarNodo("COVID");
//listaCircular.buscarModificar("Perro", true, "Serpiente");
//
//
//console.log(listaCircular);

//Código Listas Circulares

/*
    const nuevoNodo = {
        dato: 'perro',
        siguiente: 'apunte al mismo nodo que se está creando'
    } 
*/

class Nodo {
    constructor(valor, sig) {
        this.valor = valor;
        this.enlaceSig = sig;
    }
}

class listaCircular {
    constructor() {
        this.inicio = null;
        this.fin = null;
    }

    insertarNodo(valor) {
        const nodoNuevo = new Nodo(valor, this.inicio);

        if (this.inicio == null) {
            this.inicio = nodoNuevo;
            this.fin = nodoNuevo;
        } else {
            this.fin.enlaceSig = nodoNuevo;
            this.fin = nodoNuevo;
        }
    }

    eliminarUltimoNodo() {
        if (this.inicio == null && this.fin == null) {
            return null;
        }

        let valorRegresar = this.fin.valor;

        if (this.inicio === this.fin) {
            this.inicio = null;
            this.fin = null;
        } else {
            this.fin.enlaceSig = null;
            this.temporal = this.inicio;

            while (this.temporal.enlaceSig.valor != this.fin.valor) {
                this.temporal = this.temporal.enlaceSig;
            }

            this.fin = this.temporal;
            this.fin.enlaceSig = this.inicio;
        }
        this.temporal = null;
        return valorRegresar;
    }

    imprimir() {
        let actual = this.inicio;
        let resultado = "";

        while (actual != this.fin) {
            resultado += actual.valor + " -> ";
            actual = actual.enlaceSig;
        }
        return resultado + this.fin.valor;
        // return resultado;
    }

    buscarValor(valor) {
        let temporal;
        this.temporal = this.inicio;
        if (valor == this.fin.dato) {
            console.log(valor);
            let opc = prompt(`${valor} se encuentra en la lista, ¿Deseas cambiarlo? (si)`);
            if (opc == "si") {
                let cambio = prompt("Ingresa el dato...");
                this.fin.dato = cambio;
            }
        } else {
            while (this.temporal.dato != this.fin.dato) {
                if (valor == this.temporal.dato) {
                    console.log(this.temporal.dato);
                    let opc = prompt("¿Quieres cambiarlo?");
                    if (opc == "si") {
                        let cambio = prompt("Ingresa el dato...");
                        this.temporal.dato = cambio;
                    }
                    this.temporal = this.temporal.sig;
                } else {
                    this.temporal = this.temporal.sig;
                }
            }
        }
    }

    verLista() {
        let temporal = this.inicio.dato;
        let msj = "";
        let tamaño;

        while (temporal != this.fin.dato) {
            temporal = temporal.enlaceSig.dato;
            tamaño++;
        }

        if (temporal > 0) {
            msj = `La lista tiene ${tamaño} nodos`;
        } else {
            msj = `Lista vacía`;
        }

        return msj;
    }
}

/*
Crear un objeto que se llame "apuntador" que tenga un puntero que se llame "Inicio", 
y que este la primera vez apunte a null
*/

const listacircular = new listaCircular();

listacircular.insertarNodo("Perro");
listacircular.insertarNodo("Gato");
listacircular.insertarNodo("Caballo");
listacircular.insertarNodo("s");
listacircular.insertarNodo("COVID");
listacircular.eliminarUltimoNodo();


console.log(listacircular.verLista());

// apuntador.eliminarUltimoNodo();

console.log(listacircular.imprimir());