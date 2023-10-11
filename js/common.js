const bannerClose = document.querySelector('.banner-close');
const bannerAd = document.querySelector('#banner-ad');

bannerClose.addEventListener('click', () => {
  bannerAd.style.display = 'none';
});

// 메뉴열고 닫기
const header = document.querySelector('#header-area');
const btnMenu = document.querySelector('.btn-menu');
const btnClose = document.querySelector('.btn-close');
const body = document.querySelector('body')

btnMenu.addEventListener('click', ()=> {
  header.classList.add('active');
  body.classList.add('scroll-hidden');
})
btnClose.addEventListener('click', ()=> {
  header.classList.remove('active')
  body.classList.remove('scroll-hidden');
})

