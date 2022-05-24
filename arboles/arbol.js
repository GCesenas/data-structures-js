//Estructuras de datos dinamico no lineal "arbol"

class Nodos {
    constructor(izq, dato, der) {
        this.izq = izq;
        this.dato = dato;
        this.der = der;
    }
}

class ArbolBinario {
    constructor() {
        this.raiz = null;
    }

    agregar(valor) {
        const nodonuevo = new Nodos(null, valor, null);

        if (this.raiz == null) //el primer nodo del arbol
        {
            this.raiz = nodonuevo;
        } else //cuando ya exista al menos 1 nodo en el arbol
        {

            this.aux_raiz = this.raiz;

            while (this.aux_raiz != null) // Recorrer mi apuntador aux a traves del arbol
            {
                if (valor <= this.aux_raiz.dato) //si el valor es <= dato para ir por la rama izq
                {
                    if (this.aux_raiz.izq == null) //aqui coloca el nodo nuevo 
                    {
                        this.aux_raiz.izq = nodonuevo;
                        this.aux_raiz = null; //para salir del ciclo 
                    } else //mover mi apuntador aux al siguiente nodo a la izq para averiguar por que rama inserto el nodo nuevo 
                    {
                        this.aux_raiz = this.aux_raiz.izq;
                    }
                } else //en caso de que sea mayor se va por la rama der
                {
                    if (this.aux_raiz.der == null) //aqui coloca el nodo nuevo 
                    {
                        this.aux_raiz.der = nodonuevo;
                        this.aux_raiz = null; //para salir del ciclo 
                    } else //mover mi apuntador aux al siguiente nodo a la der para averiguar por que rama inserto el nodo nuevo 
                    {
                        this.aux_raiz = this.aux_raiz.der;
                    }
                }
            }
        }

        delete this.aux_raiz;

    }

}


//instanciar un objeto a partir de la clase ArbolBinario para utilizar sus metodos

const arbol = new ArbolBinario();

//agregar nodos al arbol "comparar el valor que recibes con el dato del nodo actual y con base a eso colocarlo a la izq o der segun corresponda"

arbol.agregar(78);

console.log(arbol);

arbol.agregar(50);

console.log(arbol);

arbol.agregar(40);

console.log(arbol);

arbol.agregar(60);

console.log(arbol);

arbol.agregar(90);

console.log(arbol);

arbol.agregar(80);

console.log(arbol);

arbol.agregar(200);

console.log(arbol);