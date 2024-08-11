class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
    }


    add(value){
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        }else{
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }


    sort(){
        if (this.head === null || this.head.next === null) {
            return;
        }

        let current = this.head;
        while (current !== null) {
            let smallest = current;
            let nextNode = current.next;

            while (nextNode !== null) {
                if (nextNode.value < smallest.value) {
                    smallest = nextNode;
                }
                    nextNode = nextNode.next;
                }

                let temp = current.value;
                current.value = smallest.value;
                smallest.value = temp;
                current = current.next;
            }
        }
        

    displayData(){
        let current = this.head;
        let result = [];

        while (current !== null) {
            result += current.value + ' -> ';
            current = current.next;
        }

        result += 'Null';
        console.log(result);
    }

        
    }



// Example usage
const list = new SinglyLinkedList();
list.add(5);
list.add(10);
list.add(1);
list.add(20);

console.log("Original list:");
list.displayData();

list.sort();

console.log("Sorted list:");
list.displayData();
