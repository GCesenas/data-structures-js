//Estructura de datos dinamica "cola" o "fila"  "queue" con nodos

class Nodos {
    constructor(dato, enlace) {
        this.dato = dato;
        this.enlace = enlace;
    }
}

class Colas {
    constructor() {
        this.primero = null;
        this.ultimo = null;
    }

    encolar(valor) {
        const nodonuevo = new Nodos(valor, null);

        if (this.primero == null && this.ultimo == null) //no hay nodos en la cola
        {
            this.primero = nodonuevo;
            this.ultimo = nodonuevo;
        } else //ya hay al menos un nodo en la cola
        {
            this.ultimo.enlace = nodonuevo;
            this.ultimo = nodonuevo;
        }
    }

    desencolar() {
        if (this.primero != null && this.ultimo != null) //eliminar siempre que no este vacia la cola
        {
            if (this.primero == this.ultimo) //que solo hay un nodo en la cola
            {
                this.ultimo = null;
            }
            this.aux_primero = this.primero;
            this.primero = this.primero.enlace;
            this.aux_primero.enlace = null;
            delete this.aux_primero; //elimina o destruye el apuntador
        }
    }

    colavacia() {
        if (this.primero == null && this.ultimo == null) //verificar si esta vacia la cola
            return true;
    }

    iniciocola() {
        if (!this.colavacia())
            return this.primero.dato;
        else
            return null;
    }

    tamaniocola() {
        let tam = 0;
        this.aux_primero = this.primero;

        while (this.aux_primero != null) {
            tam++;
            this.aux_primero = this.aux_primero.enlace;
        }

        delete this.aux_primero;

        return tam;
    }

    limpiarcola() {
        let tam = this.tamaniocola();

        for (let i = 1; i <= tam; i++) {
            this.desencolar();
        }
    }

    buscarcola(valor) {
        //terminar el alumno
    }

    imprimircola() {
        //terminar el alumno
    }
}

//Instanciar o crear un objeto para utilizar los metodos de la clase colas

const cola = new Colas();

//agregar o encolar nodos a la fila o cola

cola.encolar(7);

console.log(cola);

cola.encolar(5);

console.log(cola);

cola.encolar(10);

console.log(cola);

//eliminar o desencolar nodos en a la fila o cola

cola.desencolar();
console.log(cola);

cola.desencolar();
console.log(cola);

cola.desencolar();
console.log(cola);

cola.desencolar();
console.log(cola);

let vacia = cola.colavacia();

if (vacia)
    console.log("La cola esta Vacia");
else
    console.log("La cola NO esta Vacia");

let frente = cola.iniciocola();

if (frente == null)
    console.log(`No hay ningun dato en la fila o cola`);
else
    console.log(`El dato que esta al inicio o enfrente de la fila o cola es: ${frente}`);


let tamanio = cola.tamaniocola();

if (tamanio > 0)
    console.log(`El tamaño de fila o cola es: ${tamanio}`);
else
    console.log(`La fila o cola esta vacia`);