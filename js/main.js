//BADGE,GO TO TOP FUNC
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

  //_.throttle(함수,시간)
window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 500){
    //배지 숨기기 (badgeEl.style.display = 'none';)
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });

    //TOP 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  }else{
    //배지 보이기 (badgeEl.style.display = 'block';)
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });

    //TOP 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
},300));

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  })
});

//VISUAL ANI FUNC
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

//SWIPER NOTICE FUNC
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

//SWIPER NOTICE PROMOTION FUNC
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  }
});

//SWIPER AWARDS FUNC
new Swiper('.awards .swiper-container',{
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion').parentElement;
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    promotionEl.classList.add('hide');
  }else{
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size){
  //gsap.to(선택자, 애니메이션 동작 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true, //한번 재생된 애니메이션을 다시 뒤로 재생
    ease: Power1.easeInOut, //https://greensock.com/docs/v2/Easing
    delay: random(0, delay)
  })
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

//ScrollMagic
const spyEls = document.querySelectorAll('section.scrolly-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 //감시하고 있는 요소가 뷰포트의 어떤지점에서 감시되었다는것을 판단할것인가를 지정해주는 옵션
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});
