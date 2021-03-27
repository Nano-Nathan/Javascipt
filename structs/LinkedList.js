class Node {
    constructor( value ){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export class DoubleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //Agrega un valor al final
    enqueue( value ){
        if(value != null){
            //Creo el nodo
            const node = new Node( value );
            node.prev = this.tail;
            //Si hay lista
            if(this.head !== null){
                this.tail.next = node;
            } else {
                this.head = node;
            }
            this.tail = node;
            this.length++;
        } else {
            console.error("ERROR: Falta valor a encolar. Se intenta insertar: "+value);
        }
    }
    //Agrega un valor al incio
    push( value ){
        if(value != null){
            //Creo el nodo
            const node = new Node( value );
            node.next = this.head;
            //Si hay lista
            if(this.head !== null){
                this.head.prev = node;
                this.head = node;   
            } else {
                this.tail = node;
                this.head = node;
            }
            this.length++;
        }else {
            console.error("ERROR: Falta valor a agregar. Se intenta insertar: "+value);
        }
    }
    //Elimina un nodo
    delete ( value ) {
        if(value != null ){
            var node = this.head;
            while (node !== null){
                //Si se encuentra el valor
                if( node.value === value ){
                    //Se desvincula el nodo
                    node.prev.next = node.next;
                    //Si no se eliminó el ultimo nodo.
                    if(node.next !== null){
                        node.next.prev = node;
                    }
                    this.length--;
                    break;
                }
                node = node.next;
            }
        } else {
            console.error("ERROR: Falta valor a eliminar. Se intenta eliminar: "+value);
        }
    }
    display ( ){
        console.dir(this);
    }
}

