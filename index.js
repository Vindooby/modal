
var modal= document.getElementById("hidden-modal");
var closeButton= document.querySelector("#close-button");


var timer = function(){
  modal.setAttribute('style', 'display:block');
};

setTimeout(timer, 3000)

closeButton.addEventListener("click", function(){
  modal.setAttribute('style', 'display:none');
  modal.style.display = 'none'
});


// setTimeout(timer, 3000)
