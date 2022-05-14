let arr = new Array();
function show() {
    let value = +document.getElementById("input").value;      
    arr[arr.length] = value;  
    document.getElementById("output").innerHTML = arr;
    document.getElementById("input").value = "";   
}

function xoa() {
    let xoa = +document.getElementById("xoa").value;
    let i = 0;
    let arrnew = new Array();
    
    for (i=0; i<arr.length-1; i++){
        if( i<xoa){
        arrnew[i] = arr[i];
        }
        else if (i == xoa-1) {          // i >= xoa
        arrnew[xoa-1] = arr[xoa];             
        }
        else {
            arrnew[i] = arr[i+1];
        }
        
    }
    
    document.getElementById("output2").innerHTML = arrnew;
}

