class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        //Se usa en la DoubleLinkedList
        this.prev = null;
    }
}

export class LinkedList {
    constructor(){
        this.head = null;
        this.tail = this.head;
        this.len = 0;
    }

    enqueue( value ){
        if(value != null){
            const newNode = new Node(value);
            //Si la cabecera está vacia
            if(this.head === null){
                this.head = newNode;
            } else {
                newNode.prev = this.tail;
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.len++;
            return {...this};
        } else {
            console.error("ERROR: Falta valor a insertar. Se intenta insertar: "+value);
        }
    }
    push ( value ){
        if(value != null){
            const newNode = new Node(value);
            //Si la cabecera está vacia
            if(this.head === null){
                this.head = newNode;
            } else {
                this.head.prev = newNode;
                newNode.next = this.head;
                this.head = newNode;
            }
            this.len++;
            return {...this};
        } else {
            console.error("ERROR: Falta valor a insertar. Se intenta insertar: "+value);
        }
    }

    delete( value ){
        if( value != null ){
            //Lista vacia
            if( this.head == null ){
                console.error("ERROR: Lista vacía");
                return;
            //Valor a eliminar, cabecera
            } else if ( this.head.value === value ){
                this.head = this.head.next;
            //Cualquier otro valor
            } else {
                var currentNode = this.head;
                while ( currentNode.next !== null ){
                    if( currentNode.next.value === value ){
                        if(currentNode.next.next != null){
                            currentNode.next.next.prev = currentNode;
                        }
                        currentNode.next = currentNode.next.next;
                        break;
                    }
                    currentNode = currentNode.next;
                }
            }
            this.len--;
            return {...this};
        } else {
            console.error("ERROR: Falta valor a eliminar. Se intenta eliminar: "+value);
        }
    }
    get (index){
        if (index > -1 && index < this.len){
            var currentNode = this.head;
            var count = 0;
            while ( currentNode !== null ){
                if( index === count++ ){
                    return currentNode.value;
                }
                currentNode = currentNode.next;
            }
        } else {
            console.error("ERROR: Indice fuera de rango");
        }
    }
}
export class DoubleLinkedList extends LinkedList{
    //Elimina un valor buscando desde el final, hasta el comienzo
    deleteInverse (value){
        if(value != null){
            //Lista vacia
            if( this.head == null ){
                console.error("ERROR: Lista vacía");
                return;
            //Valor a eliminar, cola
            } else if ( this.tail.value === value ){
                this.tail = this.tail.prev;
            //Cualquier otro valor
            } else {
                var currentNode = this.tail;
                while ( currentNode.prev !== null ){
                    if( currentNode.prev.value === value ){
                        if(currentNode.prev.prev != null){
                            currentNode.prev.prev.next = currentNode;
                        }
                        currentNode.prev = currentNode.prev.prev;
                        break;
                    }
                    currentNode = currentNode.prev;
                }
            }
            this.len--;
            return {...this};

        } else {
            console.error("ERROR: Falta valor a eliminar. Se intenta eliminar: " + value);
        }
    }
}
