let count = 1;
const searchBox = document.querySelector(".search");
const gameBox = document.querySelectorAll(".game");
const select = document.querySelector(".filter");

document.getElementById("radio1").checked = true;

setInterval(function (){
    nextImage();
}, 4000);

function nextImage(){
    count ++;
    if(count > 4){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

function search(){
    if(searchBox.value != ""){
        for(let boxes of gameBox){
            let title = boxes.querySelector(".nameGame");
            title = title.textContent.toLowerCase();
            let filterGame = searchBox.value.toLowerCase();

            if(!title.includes(filterGame)){
                boxes.style.display = "none";
            }
            else{
                boxes.style.display = "block";
            }
        }
    }
    else{
        for(let boxes of gameBox){
            boxes.style.display = "block";
        }
    }
}
searchBox.addEventListener('input', search);

function filterGameGenre(){
    
    let option = select.options[select.selectedIndex];
    let valueOption = option.value;

    for(let boxes of gameBox){
        if(!boxes.classList.contains(valueOption)){
            boxes.style.display = "none";
        }
        else{
            boxes.style.display = "block";
        }
    }
}

