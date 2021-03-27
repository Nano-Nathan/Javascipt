import { BinaryTree, Node } from "./structs/BinaryTree.js";
import { DoubleLinkedList } from "./structs/LinkedList.js";

function PruebasLinkedList(){
    var l = new DoubleLinkedList();
    l.enqueue();
    l.push(null);
    for(var i = 0; i < 10 ; i++){
        var j = Math.round(Math.random()*100); 
        l.push(j);
        l.enqueue(i);
    }
    
    l.delete(9);
    l.delete(5);
    l.delete("Hola");
    l.delete();
    l.display();

}
function PruebasBynaryTree(){

    var b = new BinaryTree();

    var arr = [53, 93, 65, 7, 33, 12, 10, 86, 31, 44];
    arr.forEach(value => b.add(value, value) );

    b.delete(10);
    b.delete(12);
    b.delete(93);
    b.delete(53);
    b.display();
}


//PruebasLinkedList();
PruebasBynaryTree();