let arr = new Array();

function show() {
    let value = +document.getElementById("input").value;      
    arr[arr.length] = value;  
    document.getElementById("output").innerHTML = arr;
    document.getElementById("input").value = "";   
}

function check() {
  let check = +document.getElementById("input2").value;
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
      if(arr[i] == check) {
          index = 1;
          var vitri= i+1;
          break;
      }
  }  
  if (index != -1) {
      alert("Trong mảng có giá trị cần tìm = " + check + "nằm ở vị trí: " + vitri);
  }
  else {
      alert("Trong mảng không có giá trị cần tìm");
  }
}