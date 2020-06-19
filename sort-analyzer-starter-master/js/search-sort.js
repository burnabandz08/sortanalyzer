// Use Bubble Sort algorithm to sort array argument
function bubbleSort(anArray) {
    for(let num = (anArray.length - 1); num > 0 ; num--){
        for(let i = 0; i < num; i++){
            if(anArray[i] > anArray[i + 1]){
                let a = anArray[i];
                anArray[i] = anArray[i + 1];
                anArray[i + 1] = a; 
            }
        }
    }
}

// Use Selection Sort algorithm to sort array argument
function selectionSort(anArray) {
    for(let sel = 0; sell < (anArray.length - 1); sell++){
        let minPos = sell;
        for(let i = (sell + 1); i < anArray.length; i++){
            if(anArray[i] < anArray[minPos]){
                minPos = i;
            }
        }
        let a = anArray[sell];
        anArray[sell] = anArray[minPos];
        anArray[minPos] = a;
    }
}

// Use Insertion Sort algorithm to sort array argument
function insertionSort(anArray) {
    for(let i = 1; i < anArray.length; i++){
        let insVal = anArray[i];
        let Pos = i - 1;
        while(insPos >= 0 && anArray[Pos] > insVal){
            anArray[Pos + 1] = anArray[Pos];
            insPos = Pos - 1;
        }
        anArray[insPos + 1] = insVal;
    }
}