function createSortedList() {
    let arr = [];
    return {
        add(element) { 
            arr.push(element);
            this.size++;
            arr.sort((a, b) => a - b);
        },
        remove(index) { 
            if(index < arr.length && index >= 0) {
                arr.splice(index, 1);
                this.size--;
            }
        },
        get(index) { return arr[index]; },
        size: 0
    }
    
    // list.add(5);
    // list.add(6);
    // list.add(7);
    // console.log(list.get(1)); 
    // list.remove(1);
    // console.log(list.get(1));
    // console.log(list.size);
    // list.remove(1);
    // list.add(15);
    // console.log(list.get(1));
}
createSortedList();