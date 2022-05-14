let arr = new Array();
let arrnew = new Array();
function show() {
    let value = +document.getElementById("input").value;      
    arr[arr.length] = value;  
    document.getElementById("output").innerHTML = arr;
    document.getElementById("input").value = "";   
}

function nhap() {
    let nhap = +document.getElementById("input2").value;
    let pos = +document.getElementById("input3").value;
    for(let i = 0; i < arr.length + 1 ; i++) {
        if(i < pos){
            arrnew[i] = arr[i];
        }
        else if (i == pos) {
            arrnew[i] = nhap;
        }
        else {
            arrnew[i] = arr[i-1]
        }
    }
    document.getElementById("output2").innerHTML = arrnew;
}
