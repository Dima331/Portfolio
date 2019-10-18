var btn = document.getElementById("education__title");
var text = document.getElementById('education__text');

var info = document.querySelectorAll('.slide__btn');
var infoBlock = document.querySelectorAll('.slide__text');

document.addEventListener('click', function (event) {
  if (!event.target.matches('.slide__btn')) return;
  for (i = 0; i < info.length; ++i) {
  if (infoBlock[i].style.display !== 'none') {
    infoBlock[i].style.display = 'none';
  }
  else {
    infoBlock[i].style.display = 'block';
  }}
	event.preventDefault();
}, false);

btn.onclick = function() {
    var text = document.getElementById('education__text');
    if (text.style.display !== 'none') {
        text.style.display = 'none';
        btn.classList.remove("active");

    }
    else {
        text.style.display = 'block';
        btn.classList.add('active')
    }
};

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    nested: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })



  var iframe = document.getElementsByTagName('iframe')[0];

  // сработает
  iframe.onload = function() {
    alert( "iframe onload" );
  };

  // не сработает
  iframe.contentWindow.onload = function() {
    alert( "contentWindow onload" );
  };