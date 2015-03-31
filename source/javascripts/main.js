var pswpElement = document.querySelectorAll('.pswp')[0];

var items = [
  { src: '/images/screenshots/home.png', w: 1436, h: 759 },
  { src: '/images/screenshots/categories.png', w: 1436, h: 759 },
  { src: '/images/screenshots/question.png', w: 1436, h: 759 },
  { src: '/images/screenshots/question2.png', w: 1436, h: 759 },
  { src: '/images/screenshots/user-answers.png', w: 1436, h: 759 },
  { src: '/images/screenshots/user-questions.png', w: 1436, h: 759 },
  { src: '/images/screenshots/profile-settings.png', w: 1436, h: 759 }
];

var options = {
  closeOnScroll: false,
  clickToCloseNonZoomable: false
};

document.getElementById('js-screenshots-btn').addEventListener('click', function(e){
  e.preventDefault();
  var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
});
