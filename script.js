const h3 = document.querySelector("#text");
const button = document.querySelector("#btn");
var flag = 0;
button.addEventListener(
    "click", function(){
        if(flag == 0){
        alert("Your request has been sent");
        button.innerHTML = `Remove Friend`;
        h3.style.color = 'green';
        h3.innerHTML = `Friend`;
        flag = 1;
        } else{
            alert("You want to remove Friend?")
        button.innerHTML = `Add Friend`;
        h3.style.color = 'red';
        h3.innerHTML = `Stranger`;
        flag = 0;
        }
    }
)