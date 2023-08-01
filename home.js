var slideIndex=1;
showSlide(slideIndex);

function plus(n){
showSlide(slideIndex += n);
}
function current(n){
    showSlide(slideIndex = n);

}

function showSlide(n){
    var i;
    var slide=document.getElementsByClassName("mySlide");
    var dot=document.getElementsByClassName("dot");
    if(n>slide.length){slideIndex=1}
    if(n<1){slideIndex=slide.length}
    for (i=0;i<slide.length;i++){
        slide[i].style.display="none";
    }
    slideIndex ++;
    if(slideIndex>slide.length){slideIndex=1}
    setTimeout(showSlide,7000);


    for(i=0;i<dot.length;i++){
        dot[i].className=dot[i].className.replace("active","");
    }
    slide[slideIndex-1].style.display="block";
    dot[slideIndex-4].className +="active"
}
