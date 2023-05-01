let string = "";
let buttons = document.querySelectorAll(".box").length;
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click', ()=>{
//         console.log(this.innerHTML);
//     })
// })

for (let i = 0; i < buttons; i++) {
  document.querySelectorAll(".box")[i].addEventListener("click", function () {
    // // alert("Igot click")
    var input = this.innerText;

    if (input == "=") {
      string = eval(string);
      document.querySelector("#inputbox").value = string;
    }
    else if(input == "C"){
        string = "";
        document.querySelector("#inputbox").value = string;
    }
    else {
      string = string + input;
      document.querySelector("#inputbox").value = string;
    }
  });
}
