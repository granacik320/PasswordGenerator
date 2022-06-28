var slider = document.getElementById("ran");
var out = document.getElementById("value");
var duzeliteryid = document.getElementById("duzelitery");
var liczbyid = document.getElementById("liczby");
var znakispecjalneid = document.getElementById("znakispecjalne");
var output = document.getElementById("output")
const checkboxs =[duzeliteryid, liczbyid, znakispecjalneid]
out.innerHTML = slider.value;
document.getElementById("output").innerHTML = "password"



slider.oninput = function() {
  out.innerHTML = this.value;
  const test = [];
  for (let i = 0; i < slider.value; i++){
    var l = Math.floor(Math.random() * 3 );
    if (checkboxs[l].checked == true){
      if (l==0){
        test.push(String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65)));
        document.getElementById("output").innerHTML = test.join("");
      }else{
        if (l==1){
          test.push(String.fromCharCode(Math.floor(Math.random() * (57 - 48) + 48)));
          document.getElementById("output").innerHTML = test.join("");
        }else{
          if (l==2){
            test.push(String.fromCharCode(Math.floor(Math.random() * (43 - 33) + 33)));
            document.getElementById("output").innerHTML = test.join("");
          }
        }
      }
    }else{
      test.push(String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97)));
      document.getElementById("output").innerHTML = test.join("");
    }
  }
}

function copy(){
  console.log("copied");
}

function rerol(){
  const test = [];
  for (let i = 0; i < slider.value; i++){
    var l = Math.floor(Math.random() * 3 );
    if (checkboxs[l].checked == true){
      if (l==0){
        test.push(String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65)));
        document.getElementById("output").innerHTML = test.join("");
      }else{
        if (l==1){
          test.push(String.fromCharCode(Math.floor(Math.random() * (57 - 48) + 48)));
          document.getElementById("output").innerHTML = test.join("");
        }else{
          if (l==2){
            test.push(String.fromCharCode(Math.floor(Math.random() * (43 - 33) + 33)));
            document.getElementById("output").innerHTML = test.join("");
          }
        }
      }
    }else{
      test.push(String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97)));
      document.getElementById("output").innerHTML = test.join("");
    }
  }
}