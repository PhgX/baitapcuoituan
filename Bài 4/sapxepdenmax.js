let arr = new Array();

function show() {
    let value = +document.getElementById("input").value;      
    arr[arr.length] = value;  
    document.getElementById("output").innerHTML = arr;
    document.getElementById("input").value = "";   
}

function minToMax() {    
    let temp;      
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i<arr.length; i++){           
            if ((arr[i] - arr[i + 1]) < 0){
                continue;
            } 
            else if ((arr[i] - arr[i+1]) == 0) {
                continue;
            }      
            else if ((arr[i]) - arr[i+1] > 0) {
                temp = arr[i];                
                arr[i] = arr[i+1];
                arr[i+1] = temp;               
            }
            else {
                break;
            }
        }
    }  
    document.getElementById("output2").innerHTML = arr;       
}
       
   

