(function () {
  //Бургер
  document.addEventListener('click', burgerInit)

  function burgerInit(e) {
    const burgerIcon = e.target.closest('.burger-icon');
    const burgerNavLink = e.target.closest('.nav__link');

    if (!burgerIcon && !burgerNavLink) return;
    if (document.documentElement.clientWidth > 900) return;

    if (!document.body.classList.contains('body--oppened-menu')) {
      document.body.classList.add('body--oppened-menu');
    }
    else { document.body.classList.remove('body--oppened-menu'); }

  }
  //Модалка
  const modal = document.querySelector('.modal')
  const modalButton = document.querySelector('.about__img-button')

  modalButton.addEventListener('click', openModal)
  modal.addEventListener('click', closeModal)

  function openModal(e) {
    e.preventDefault()
    document.body.classList.toggle('body--modal-opened')
  }

  function closeModal(e) {
    e.preventDefault()
    const target = e.target

    if (target.closest('.modal__closed') || target.closest('modal')) {
      document.body.classList.remove('body--modal-opened')
    }
  }
  //Табы
  const tabControls = document.querySelector('.tab-controls')
  tabControls.addEventListener('click', toggleTab)

  function toggleTab(e) {
    const tabControl = e.target.closest('.tab-controls__link')

    if (!tabControl) return
    e.preventDefault()
    if (tabControl.classList.contains('tab-controls__link--active')) return

    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.tab-controls__link--active')
    const activeContent = document.querySelector('.tab-controls__content--show')

    if (activeControl) {
      activeControl.classList.remove('tab-controls__link--active')
    }

    if (activeContent) {
      activeContent.classList.remove('tab-controls__content--show')
    }

    tabControl.classList.add('tab-controls__link--active')
    tabContent.classList.add('tab-controls__content--show')
  }


  //Аккордеон

  const accordeonLists = document.querySelectorAll('.accordion-list');

  accordeonLists.forEach(el => {
    el.addEventListener('click', (e) => {
      const accordionList = e.currentTarget
      const accordionOpenedItem = accordionList.querySelector('.accordion-list-item--opened')
      const accordionOpenedContent = accordionList.querySelector('.accordion-list-item--opened .accordion-list__content')


      const accordeonControl = e.target.closest('.accordion-list__control');
      if (!accordeonControl) return
      e.preventDefault();
      const accordeonItem = accordeonControl.parentElement;
      const accordeonContent = accordeonControl.nextElementSibling;

      if (accordionOpenedItem && accordeonItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove('accordion-list-item--opened');
        accordionOpenedContent.style.maxHeight = null;
      }
      accordeonItem.classList.toggle('accordion-list-item--opened');

      if (accordeonItem.classList.contains('accordion-list-item--opened')) {
        accordeonContent.style.maxHeight = accordeonContent.scrollHeight + 'px';
      } else {
        accordeonContent.style.maxHeight = null;
      }
    });
  });

  //Слайдер-гелерея


  const swiper = new Swiper('.gallery__swiper', {

    slidesPerView: 1.5,
    spaceBetween: 15,

    pagination: {
      el: '.gallery__pagination',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.gallerey__next',
      prevEl: '.gallerey__prev',
    },

    breakpoints: {
      451: {
        slidesPerView: 2,
      },
      601: {
        slidesPerView: 3,
      },
      801: {
        spaceBetween: 32,
      },
      1101: {
        slidesPerView: 4,
      }
    }
  });

  //слайдер-отзывы

  new Swiper('.testimonionials__slider', {

    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,

    navigation: {
      nextEl: '.testimonionials__next',
      prevEl: '.testimonionials__prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      901: {
        slidesPerView: 1.5,
      },
      1201: {
        slidesPerView: 2.1,
      },
    }

  });

  //Маска телефона

  const inputTel = document.querySelectorAll('input[type="tel"]')
  const im = new Inputmask('+7 (999) 999-99-99')
  im.mask(inputTel)


})()
