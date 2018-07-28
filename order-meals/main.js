var addToBasket = document.getElementsByClassName('buy');

Array.from(addToBasket).forEach(function(el) {

  el.addEventListener('click', function(){
    changeButton(el);
    changeOpacity(el);
  });

});

function changeButton(el){
  el.innerText = 'تم الطلب';
  el.style.backgroundColor = '#1dd1a1';
}

function changeOpacity(el){
  var mealCard = el.closest('.meal-card');
  mealCard.style.opacity = '0.5';
}