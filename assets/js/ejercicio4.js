var gemaSelected = document.getElementsByClassName('gemaSelected')
var card1 = document.getElementById('card1');
var card2 = document.getElementById('card2');
var card3 = document.getElementById('card3');
var card4 = document.getElementById('card4');
var colorSelected;
var gemaImgSelect;

var chosenColor = function(){
    var colorSelected;
    if(gemaSelected[0].className == 'gemaSelected gemaSelect2'){
        colorSelected = "0rem 1rem 2rem 1rem rgb(255, 123, 0)"
        gemaImgSelect = 'gema5.png'
    }else if(gemaSelected[0].className == 'gemaSelected gemaSelect3'){
        colorSelected = "0rem 1rem 2rem 1rem rgb(255, 251, 1)"
        gemaImgSelect = 'gema6.png'
    }else if(gemaSelected[0].className == 'gemaSelected gemaSelect1'){
        colorSelected = "0rem 1rem 2rem 1rem rgb(247, 0, 255)"
        gemaImgSelect = 'gema2.png'
    }
    return colorSelected;
}


document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        colorSelected = '#ff7301'
        gemaSelected[0].classList.add("gemaSelect2");
        gemaSelected[0].classList.remove("gemaSelect1");
        gemaSelected[0].classList.remove("gemaSelect3");
        gemaSelected[0].style.boxShadow = chosenColor();
        gemaSelected[0].style.backgroundColor = colorSelected;
    } else if (event.key === 's') {
        colorSelected = '#fffb01'
        gemaSelected[0].classList.add("gemaSelect3");
        gemaSelected[0].classList.remove("gemaSelect2");
        gemaSelected[0].classList.remove("gemaSelect1");
        gemaSelected[0].style.boxShadow = chosenColor();
        gemaSelected[0].style.backgroundColor = colorSelected;
    } else if(event.key === 'd'){
        colorSelected = '#ff01c0'
        gemaSelected[0].classList.add("gemaSelect1");
        gemaSelected[0].classList.remove("gemaSelect2");
        gemaSelected[0].classList.remove("gemaSelect3");
        gemaSelected[0].style.boxShadow = chosenColor();
        gemaSelected[0].style.backgroundColor = colorSelected;
    }
    })

    card1.addEventListener("click", function(){
        card1.style.boxShadow = chosenColor();
        card1.style.backgroundColor = colorSelected;
        card1.style.backgroundImage = "url('assets/imgs/"+gemaImgSelect+"')";
        card1.classList.add('gemaImgSelect')
    })

    card2.addEventListener("click", function(){
        card2.style.boxShadow = chosenColor();
        card2.style.backgroundColor = colorSelected;
        card2.style.backgroundImage = "url('assets/imgs/"+gemaImgSelect+"')";
    })

    card3.addEventListener("click", function(){
        card3.style.boxShadow = chosenColor();
        card3.style.backgroundColor = colorSelected;
        card3.style.backgroundImage = "url('assets/imgs/"+gemaImgSelect+"')";
    })

    card4.addEventListener("click", function(){
        card4.style.boxShadow = chosenColor();
        card4.style.backgroundColor = colorSelected;
        card4.style.backgroundImage = "url('assets/imgs/"+gemaImgSelect+"')";
    })
