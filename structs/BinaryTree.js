export class Node {
    constructor( value, key ){
        this.value = value;
        this.key = key;
        this.parent = null;
        this.leftnode = null;
        this.rightnode = null;
    }
}

export class BinaryTree {
    
    constructor(){
        this.root = null;
        this.amount = 0;
    }
    //Agrega un elemento al arbol
    add( key, value ){
        if(value != null){
            if (key != null){
                //Inserción recursiva
                function _addR(node, value, key){
                    //Inserta a la izquierda
                    if(node.key > key){
                        //Si no hay nodo, se inserta. Sino, sigue buscando
                        if(node.leftnode == null){
                            node.leftnode = new Node(value, key);
                            node.leftnode.parent = node;
                            return true;
                        } else {
                            return _addR(node.leftnode, value, key);
                        }
                    }
                    //Inserta a la derecha 
                    else if( node.key < key ){
                        //Si no hay nodo, se inserta. Sino, sigue buscando
                        if(node.rightnode == null){
                            node.rightnode = new Node(value, key);
                            node.rightnode.parent = node;
                            return true;
                        } else {
                            return _addR(node.rightnode, value, key);
                        }
                    } else {
                        console.error("ERROR: Key ya existe en el arbol. Key: "+ key);
                        return false;
                    }
                }
                
                //Llamada al metodo recursivo, si hay al menos 1 nodo
                if(this.root != null){
                    if(_addR(this.root, value, key)){
                        this.amount++;
                    }
                } else {
                    this.root = new Node(value, key);
                    this.amount++;
                }
            }
            else {
                console.error("ERROR: Falta key a agregar. Se intenta insertar: "+value);
            }
        } else {
            console.error("ERROR: Falta valor a agregar. Se intenta insertar: "+value);
        }
    }
    //Elimina un elemento del arbol
    delete ( key ) {
        if( key != null ){

            //Actualiza
            function set ( node, asing ){
                if(asing != null){
                    asing.parent = node.parent;
                }
                if(node.parent.leftnode === node){
                    node.parent.leftnode = asing;
                } else {
                    node.parent.rightnode = asing;
                }

            }

            //Casos de Eliminación.
            function remove ( node ){
                //Tiene hijo izquierdo
                if(node.leftnode != null){
                    //Ambos hijos
                    if(node.rightnode != null) {
                        //Se encuentra el menor de los mayores
                        var newNode = node.rightnode;
                        while (newNode.leftnode != null){
                            newNode = newNode.leftnode;
                        }
                        //Se actualiza el valor
                        node.value = newNode.value;
                        node.key = newNode.key;
                        //Se desvincula el nodo y se pasa el nodo a reemplazarlo
                        set(newNode, newNode.rightnode);
                    }
                    //Solo tiene el hijo izquierdo 
                    else {
                        set(node, node.leftnode);
                    }
                }
                //Solo tiene hijo derecho
                else if (node.rightnode != null) {
                    set (node, node.rightnode);
                }
                //No tiene hijos
                else{
                    set(node, null);
                }
            }

            //Eliminación recursiva
            function _deleteR( node, key ){
                if(node != null){
                    if(node.key == key){
                        remove( node );
                        return true
                    } else if( node.key > key){
                        return _deleteR(node.leftnode, key);
                    } else {
                        return _deleteR(node.rightnode, key);
                    } 
                } else {
                    console.log("No se encuentra el valor");
                    return false;
                }
            }

            //Si hay arbol
            if(this.root != null){
                //Verifico si hay mas de 1 nodo
                if(this.root.leftnode != null || this.root.rightnode != null){        
                    //Llamada al metodo recursivo
                    if(_deleteR(this.root, key)){
                        this.amount--;
                    }
                } 
                //Si se quiere eliminar la raiz y no tiene hijos
                else if (this.root.key === key){
                    this.root = null;
                    this.amount--;
                }
            }
        } else {
            console.error("ERROR: Falta key. Se intenta eliminar: "+key);
        } 



    }
    
    display ( ){
        console.dir(this);
    }
}

