/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Scrollbar, Navigation, Lazy, Autoplay, Mousewheel, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.history__slider')) {
		new Swiper('.history__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Scrollbar, Mousewheel],

			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: false,
			speed: 800,
			watchOverflow: true,

			mousewheel: {
				sensitivity: 1,
				eventsTarget: ".history__slider",
			},

			scrollbar: {
				el: '.history__slider .swiper-scrollbar',
				draggable: true,
			},

			breakpoints: {
				768: {
					slidesPerView: 1.5,
					spaceBetween: 74,
				},
				992: {
					slidesPerView: 2.2,
					spaceBetween: 110,
				},
				1268: {
					slidesPerView: 3,
					spaceBetween: 110,
				},
			},

			/*
			on: {

			}
			*/
		});
	}

	if (document.querySelector('.reviews__slider')) {
		new Swiper('.reviews__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Lazy, Mousewheel],

			observer: true,
			observeParents: true,
			slidesPerView: 1.4,
			spaceBetween: 30,
			autoHeight: false,
			speed: 500,
			watchOverflow: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			preloadImages: true,
			lazy: {
				loanOnTransitionStart: true,
				loadPrevNext: true,
			},

			mousewheel: {
				sensitivity: 1,
				eventsTarget: ".reviews__slider",
			},

			// Dotts
			//pagination: {
			//	el: '.slider-quality__pagging',
			//	clickable: true,
			//},

			// Arrows
			navigation: {
				nextEl: '.reviews .swiper__button_next',
				prevEl: '.reviews .swiper__button_prev',
			},

			breakpoints: {
				375: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				450: {
					slidesPerView: 2.2,
					spaceBetween: 20,
				},
				575: {
					slidesPerView: 2.5,
					spaceBetween: 30,
				},
				650: {
					slidesPerView: 3.3,
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 4.1,
					spaceBetween: 40,
				},
				992: {
					slidesPerView: 3.3,
					spaceBetween: 100,
				},
				1440: {
					slidesPerView: 4,
					spaceBetween: 100,
				},
				1920: {
					slidesPerView: 5,
					spaceBetween: 100,
				},
			},

			on: {
				init: function () {
					reviewsChangeText();
				},
				slideChangeTransitionEnd: function (swiper) {
					reviewsChangeText();
				},
			},
		});
	}

	if (document.querySelector('.clients__slider')) {
		new Swiper('.clients__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Scrollbar, Lazy, Autoplay],

			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 30,
			autoHeight: false,
			speed: 800,
			watchOverflow: true,
			preloadImages: true,
			lazy: {
				loanOnTransitionStart: true,
				loadPrevNext: true,
			},

			autoplay: {
				delay: 1000,
				stopOnLastSlide: true,
			},

			scrollbar: {
				el: '.clients__slider .swiper-scrollbar',
				draggable: true,
			},

			breakpoints: {
				575: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 60,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 100,
				},
				1440: {
					slidesPerView: 5,
					spaceBetween: 100,
				},
				1920: {
					slidesPerView: 6,
					spaceBetween: 100,
				},
			},

			/*
			on: {

			}
			*/
		});
	}

	if (document.querySelector('.project-slider')) {
		new Swiper('.project-slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Lazy, Autoplay, Pagination, Navigation],

			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: false,
			speed: 800,
			watchOverflow: true,
			preloadImages: true,

			// Dotts
			pagination: {
				el: '.project-slider .swiper-pagination',
				type: 'fraction',
			},

			// Arrows
			navigation: {
				nextEl: '.project-slider .swiper__button_next',
				prevEl: '.project-slider .swiper__button_prev',
			},



			lazy: {
				loanOnTransitionStart: true,
				loadPrevNext: true,
			},

			// autoplay: {
			// 	delay: 1000,
			// 	stopOnLastSlide: true,
			// },

			on: {
				init: function (swiper) {
					const allSlides = document.querySelector('.fraction-controll__all');
					allSlides.innerHTML = swiper.slides.length < 10 ? `0${swiper.slides.length}` : swiper.slides.length;
				},
				slideChange: function (swiper) {
					const currentSlide = document.querySelector('.fraction-controll__current');
					currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : swiper.activeIndex + 1;
				}
			},
		});
	}
}

function reviewsChangeText() {
	const currentSlide = document.querySelector('.reviews__slide.swiper-slide-active');
	const currentText = currentSlide.querySelector('.reviews__text').innerHTML;
	const description = document.querySelector('.reviews__descr');
	description.innerHTML = currentText;
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});