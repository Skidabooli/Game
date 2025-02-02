export function createIndex(i){
    let array = [];
    for (let el = 1; el <= i; el++){
        array.push(el, el)
    }
    return array
}

export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) { 
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }  
    return array;
}