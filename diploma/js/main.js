const tabControls = document.querySelector('.gas-carrier__tab')
tabControls.addEventListener('click', toggleTab)

function toggleTab(e) {
  const tabControl = e.target.closest('.gas-carrier__tab__link')

  if (!tabControl) return
  e.preventDefault()
  if (tabControl.classList.contains('gas-carrier__tab__link--active')) return

  const tabContentID = tabControl.getAttribute('href')
  const tabContent = document.querySelector(tabContentID)
  const activeControl = document.querySelector('.gas-carrier__tab__link--active')
  const activeContent = document.querySelector('.gas-carrier__tab__img--show')

  if (activeControl) {
    activeControl.classList.remove('gas-carrier__tab__link--active')
  }

  if (activeContent) {
    activeContent.classList.remove('gas-carrier__tab__img--show')
  }

  tabControl.classList.add('gas-carrier__tab__link--active')
  tabContent.classList.add('gas-carrier__tab__img--show')
}


// Слайдер-отзывы

const swiper = new Swiper('.reviews__swiper', {
  // Optional parameters
  effect: 'cards',
  direction: 'horizontal',
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.reviews__swiper-button-next',
    prevEl: '.reviews__swiper-button-prev',
  },

  pagination: {
    el: '.reviews__swiper-pagination',
  },
});

//Аккордеон

const accordeonLists = document.querySelectorAll('.accordion__list');

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

//Модалка
const modal = document.querySelector('.modal')
const modalButton = document.querySelectorAll('.button__order')

modalButton.forEach(function (element) {
  element.onclick = openModal
  modal.addEventListener('click', closeModal)

})


function openModal(e) {
  e.preventDefault()
  document.body.classList.toggle('body--modal-opened')
}

function closeModal(e) {
  e.preventDefault()
  const target = e.target

  if (target.closest('.modal__closed') || target.closest('modal') || target.closest('.modal__button')) {
    document.body.classList.remove('body--modal-opened')
  }
}

//Модалка
const modalTwo = document.querySelector('.modal__two')
const modalButtonTwo = document.querySelector('.modal__button')

console.log('sd')

modalButtonTwo.addEventListener('click', openModalTwo)
modalTwo.addEventListener('click', closeModalTwo)


function openModalTwo(e) {
  e.preventDefault()
  document.body.classList.toggle('body--modal__two-opened')
}

function closeModalTwo(e) {
  e.preventDefault()
  const target = e.target

  if (target.closest('.modal__two-button') || target.closest('modal__two')) {
    document.body.classList.remove('body--modal__two-opened')
  }
}

