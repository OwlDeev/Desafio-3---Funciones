var gemaSelected = document.getElementsByClassName('gemaSelected')

//card1
var card1 = document.getElementById('card1');
card1.style.backgroundImage = "url('assets/imgs/gema1.png')";
//card2
var card2 = document.getElementById('card2');
card2.style.backgroundImage = "url('assets/imgs/gema2.png')";
//card3
var card3 = document.getElementById('card3');
card3.style.backgroundImage = "url('assets/imgs/gema3.png')";
//card4
var card4 = document.getElementById('card4');
card4.style.backgroundImage = "url('assets/imgs/gema4.png')";
var colorSelected;
var gemaImgSelect;

var body = document.body;
body.style.backgroundImage = "url('assets/imgs/fondoEjercicio4.jpg')";

var chosenColor = function(colorSelected){
    var colorSelected;
    if(colorSelected == '#ff7301'){
        colorSelected = "0rem 1rem 2rem 1rem rgb(255, 123, 0)"
        gemaImgSelect = 'gema5.png'
    }else if(colorSelected == '#fffb01'){
        colorSelected = "0rem 1rem 2rem 1rem rgb(255, 251, 1)"
        gemaImgSelect = 'gema6.png'
    }else if(colorSelected == '#ff01c0'){
        colorSelected = "0rem 1rem 2rem 1rem rgb(247, 0, 255)"
        gemaImgSelect = 'gema2.png'
    }
    return colorSelected;
}


document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        colorSelected = '#ff7301'
        gemaSelected[0].style.boxShadow = chosenColor(colorSelected);
        gemaSelected[0].style.backgroundColor = colorSelected;
        gemaSelected[0].style.backgroundImage = "url('assets/imgs/gema5.png')";
        gemaSelected[0].style.backgroundRepeat = "no-repeat";
        gemaSelected[0].style.backgroundPosition = "center";
        gemaSelected[0].style.backgroundSize = "80%";
    } else if (event.key === 's') {
        colorSelected = '#fffb01'
        gemaSelected[0].style.boxShadow = chosenColor(colorSelected);
        gemaSelected[0].style.backgroundColor = colorSelected;
        gemaSelected[0].style.backgroundImage = "url('assets/imgs/gema6.png')";
        gemaSelected[0].style.backgroundRepeat = "no-repeat";
        gemaSelected[0].style.backgroundPosition = "center";
        gemaSelected[0].style.backgroundSize = "80%";
    } else if(event.key === 'd'){
        colorSelected = '#ff01c0'
        gemaSelected[0].style.boxShadow = chosenColor(colorSelected);
        gemaSelected[0].style.backgroundColor = colorSelected;
        gemaSelected[0].style.backgroundImage = "url('assets/imgs/gema2.png')";
        gemaSelected[0].style.backgroundRepeat = "no-repeat";
        gemaSelected[0].style.backgroundPosition = "center";
        gemaSelected[0].style.backgroundSize = "80%";
    }
    })

    card1.addEventListener("click", function(){
        card1.style.boxShadow = chosenColor(colorSelected);
        card1.style.backgroundColor = colorSelected;
        card1.style.backgroundImage = "url('assets/imgs/"+gemaImgSelect+"')";
        card1.classList.add('gemaImgSelect')
    })

    card2.addEventListener("click", function(){
        card2.style.boxShadow = chosenColor(colorSelected);
        card2.style.backgroundColor = colorSelected;
        card2.style.backgroundImage = "url('assets/imgs/"+gemaImgSelect+"')";
    })

    card3.addEventListener("click", function(){
        card3.style.boxShadow = chosenColor(colorSelected);
        card3.style.backgroundColor = colorSelected;
        card3.style.backgroundImage = "url('assets/imgs/"+gemaImgSelect+"')";
    })

    card4.addEventListener("click", function(){
        card4.style.boxShadow = chosenColor(colorSelected);
        card4.style.backgroundColor = colorSelected;
        card4.style.backgroundImage = "url('assets/imgs/"+gemaImgSelect+"')";
    })
