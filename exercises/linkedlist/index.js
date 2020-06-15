// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next || null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let size = 0;
        let nodeRef = this.head
        while(nodeRef) {
            nodeRef = nodeRef.next;
            ++size;
        }
        return size;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        let nodeRef = this.head;
        while(nodeRef && nodeRef.next){
            nodeRef = nodeRef.next;
        } 
        return nodeRef;
    }

    clear() {
        this.head = null;
    }

    removeFirst(){
        this.head = this.head && this.head.next;
    }

    removeLast(){
        if(!this.head) {
            return null;
        }
        if(!this.head.next) {
            this.head = null;
            return null;
        }
        let previous = this.head, nodeRef = this.head.next;
        while(nodeRef && nodeRef.next) {
            previous = nodeRef;
            nodeRef = nodeRef.next;
        }
        previous.next = null;
    }

    insertLast(data){
        const last = this.getLast();
        if(last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(index) {
        let count = 0, nodeRef = this.head;
        while(nodeRef && count < index) {
            nodeRef = nodeRef.next;
            count++;
        }
        return nodeRef;
    }

    removeAt(index) {
        if(!this.head) { return null; }
        if(index === 0 && this.head) {
            this.head = this.head.next;
            return null;
        }
        // let curNode = this.head, nextNode = this.head.next, count = 0;
        // while(curNode && nextNode && count < index - 1) {
        //     curNode = nextNode;
        //     nextNode = nextNode.next;
        //     count++;
        // }
        // curNode.next = (nextNode && nextNode.next) || null;

        let prevNode = this.getAt(index - 1);
        if(!prevNode || !prevNode.next) { return null; }
        prevNode.next = prevNode.next.next;
        return null;
    }

    insertAt(data,index) {
        if(index === 0) {
            this.insertFirst(data);
            return;
        }
        // let curNode = this.head, nextNode = this.head.next, count = 0;
        // while(curNode && nextNode && count < index - 1) {
        //     curNode = nextNode;
        //     nextNode = nextNode.next;
        //     count++;
        // }
        // curNode.next = new Node(data, nextNode);
        let prevNode = this.getAt(index - 1);
        if(!prevNode) {
            this.insertLast(data);
            return null;
        }
        prevNode.next = new Node(data, prevNode.next);
        return null;
    }

    forEach(fn) {
        let nodeRef = this.head, count = 0;
        while(nodeRef) {
            fn.apply(this, [nodeRef, count]);
            nodeRef = nodeRef.next;
            count++;
        }
    }

    *[Symbol.iterator](){
        let node = this.head;
        while(node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
