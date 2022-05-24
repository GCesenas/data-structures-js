// Operacion de: Crear el nodo (dato o valor , enlace )

class Nodo {
    constructor(valor, enlace) {
        this.dato = valor;
        this.siguiente = enlace;
    }
}

class ListaSimple {
    constructor() {
        this.primero = null;
        this.ultimo = null;
    }

    insertarnodo(valor) //insertar al final
        {
            const nuevonodo = new Nodo(valor, null); //crear o instancias un objeto llamado nuevonodo de tipo nodo

            if (this.primero == null) //no hay nodos en la lista o que esta vacia
            {
                this.primero = nuevonodo;
                this.ultimo = nuevonodo;
            } else {
                this.ultimo.siguiente = nuevonodo;
                this.ultimo = nuevonodo;
            }
        }

    vacia() {
        if (this.primero == null)
            console.log('La lista esta vacia');
        else
            console.log('La lista No esta vacia, por lo menos contiene un nodo');

    }

    recorrer() {
        this.actual = this.primero;
        while (this.actual != null) {
            console.log(`[${this.actual.dato}]`);
            this.actual = this.actual.siguiente;
        }



    }

    eliminarnodo() {
        if (this.primero != null) {
            if (this.primero.dato == this.ultimo.dato) {
                this.ultimo = null;
            }
            this.temporal = this.primero;
            this.primero = this.primero.siguiente;
            this.temporal.siguiente = null;
            this.temporal = null;
        }

    }
}


const nodo = new ListaSimple();

nodo.insertarnodo(3);

nodo.insertarnodo(23);

nodo.insertarnodo(33);

nodo.insertarnodo(43);


console.log(nodo);



//nodo.recorrer();

console.log(nodo);

nodo.eliminarnodo();
nodo.eliminarnodo();
nodo.eliminarnodo();
nodo.eliminarnodo();

console.log(nodo);