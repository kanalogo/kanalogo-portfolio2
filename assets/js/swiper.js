const member_swipe = new Swiper('.member__swiper', { //swiperの名前
  //切り替えのモーション
  speed: 1000, //表示切り替えのスピード
  effect: "slide", //切り替えのmotion (※1)
  allowTouchMove: true, // スワイプで表示の切り替えを有効に

  //最後→最初に戻るループ再生を有効に
  loop: true,
  //自動スライドについて
  // autoplay: { 
  //   delay: 3000, //何秒ごとにスライドを動かすか
  //   stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
  //   disableOnInteraction: true, //ユーザーの操作時に止める
  //   reverseDirection: false, //自動再生を逆向きにする
  // },

   //表示について
  centeredSlides: false, //中央寄せにする
  slidesPerView: "1.2",
  spaceBetween: 20,
     // スワイパーのバーの動きのカスタマイズ


  on: {
    slideChange() {
      const bar = document.querySelector('.progress__bar');
      const total = this.slides.length - this.loopedSlides * 2 || this.slides.length;
      const index = this.realIndex;
      const maxMove = 750; // progress幅 - bar幅

      const x = (maxMove / (total - 1)) * index;

      bar.style.transform = `translateX(${x}px)`;
    },
  },


  //ページネーション
  pagination: {
    el: ".swiper-pagination", //paginationのclass
    clickable: true, //クリックでの切り替えを有効に
    type: "progressbar" //paginationのタイプ (※2)
  },
  //ナビゲーション
  navigation: {
    prevEl: ".swiper-button-prev", //戻るボタンのclass
    nextEl: ".swiper-button-next" //進むボタンのclass
  },


  //ブレイクポイントによって変える
  breakpoints: { 
    768: {
      slidesPerView: 3.2,
      spaceBetween: 40,
    },
    
  }
});

/* =================================================== 
※1 effectについて
slide：左から次のスライドが流れてくる
fade：次のスライドがふわっと表示
■ fadeの場合は下記を記述
  fadeEffect: {
    crossFade: true
  },
cube：スライドが立方体になり、3D回転を繰り返す
coverflow：写真やアルバムジャケットをめくるようなアニメーション
flip：平面が回転するようなアニメーション
cards：カードを順番にみていくようなアニメーション
creative：カスタマイズしたアニメーションを使うときに使用します

=======================================================
※2 paginationのタイプ
bullets：スライド枚数と同じ数のドットが表示
fraction：分数で表示（例：1 / 3）
progressbar：スライドの進捗に応じてプログレスバーが伸びる
custom：自由にカスタマイズ

=====================================================*/

const cardSwiper = new Swiper('.card__swiper', { //swiperの名前
  //切り替えのモーション
  speed: 1000, //表示切り替えのスピード
  effect: "slide", //切り替えのmotion (※1)
  allowTouchMove: true, // スワイプで表示の切り替えを有効に

  //最後→最初に戻るループ再生を有効に
  loop: true,
  //自動スライドについて
  // autoplay: { 
  //   delay: 3000, //何秒ごとにスライドを動かすか
  //   stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
  //   disableOnInteraction: true, //ユーザーの操作時に止める
  //   reverseDirection: false, //自動再生を逆向きにする
  // },

   //表示について
  centeredSlides: false, //中央寄せにする
  slidesPerView: "1.1",
  spaceBetween: 12,

  // //ページネーション
  // pagination: {
  //   el: ".swiper-pagination", //paginationのclass
  //   clickable: true, //クリックでの切り替えを有効に
  //   type: "bullets" //paginationのタイプ (※2)
  // },
  // //ナビゲーション
  // navigation: {
  //   prevEl: ".swiper-button-prev", //戻るボタンのclass
  //   nextEl: ".swiper-button-next" //進むボタンのclass
  // },
  // //スクロールバー
  // scrollbar: { //スクロールバーを表示したいとき
  //   el: ".swiper-scrollbar", //スクロールバーのclass
  //   hide: true, //操作時のときのみ表示
  //   draggable: true //スクロールバーを直接表示できるようにする
  // },

  //ブレイクポイントによって変える
  breakpoints: { 
    520: {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },
    920: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    1300: {
      slidesPerView: 2.1,
      spaceBetween: 24,
    },
    1500: {
      slidesPerView: 2.6,
      spaceBetween: 24,
    },
  }
});

// swiperのスライド変更時に実行されるイベントリスナー
cardSwiper.on('slideChange', function() {
  const activeIndex = cardSwiper.realIndex + 1; // 現在のスライドのインデックス+1を取得
  const items = document.querySelectorAll('.c-bl__btn');

  items.forEach(item => {
    // すべてのアイテムからアクティブクラスを削除
    item.classList.remove('is-active');
  });

  // 現在のスライドに対応するアイテムにアクティブクラスを追加
  const currentItem = document.querySelector(`.c-bl__btn[data-slide="${activeIndex}"]`);
  if (currentItem) {
    currentItem.classList.add('is-active');
  }
});

// card__list-item をクリックしたときに対応するスライドに切り替え
const items = document.querySelectorAll('.c-bl__btn');
items.forEach(item => {
  item.addEventListener('click', function() {
    const slideIndex = parseInt(item.getAttribute('data-slide'), 10) - 1; // data-slideは1始まりなので、0始まりに合わせる
    cardSwiper.slideToLoop(slideIndex, 1000); // 該当スライドに切り替える
  });
});

/* =================================================== 
※1 effectについて
slide：左から次のスライドが流れてくる
fade：次のスライドがふわっと表示
■ fadeの場合は下記を記述
  fadeEffect: {
    crossFade: true
  },
cube：スライドが立方体になり、3D回転を繰り返す
coverflow：写真やアルバムジャケットをめくるようなアニメーション
flip：平面が回転するようなアニメーション
cards：カードを順番にみていくようなアニメーション
creative：カスタマイズしたアニメーションを使うときに使用します

=======================================================
※2 paginationのタイプ
bullets：スライド枚数と同じ数のドットが表示
fraction：分数で表示（例：1 / 3）
progressbar：スライドの進捗に応じてプログレスバーが伸びる
custom：自由にカスタマイズ

=====================================================*/


let modalSwiper;

function initModalSwiper() {
  modalSwiper = new Swiper('.c-modal__swiper', {
    //切り替えのモーション
  speed: 1000, //表示切り替えのスピード
  effect: "slide", //切り替えのmotion (※1)
  allowTouchMove: true, // スワイプで表示の切り替えを有効に

  //最後→最初に戻るループ再生を有効に
  loop: true,


   //表示について
  centeredSlides: false, //中央寄せにする
  slidesPerView: "auto",
  spaceBetween: 0,
  //ナビゲーション
  navigation: {
    prevEl: ".c-modal-button-prev", //戻るボタンのclass
    nextEl: ".c-modal-button-next" //進むボタンのclass
  },
  });
}


 

  //ブレイクポイントによって変える
  // breakpoints: { 
  //   768: {
  //     slidesPerView: 1.2,
  //     spaceBetween: 15,
  //   },
  //   1500: {
  //     slidesPerView: 3,
  //     spaceBetween: 40,
  //   },
  // }


/* =================================================== 
※1 effectについて
slide：左から次のスライドが流れてくる
fade：次のスライドがふわっと表示
■ fadeの場合は下記を記述
  fadeEffect: {
    crossFade: true
  },
cube：スライドが立方体になり、3D回転を繰り返す
coverflow：写真やアルバムジャケットをめくるようなアニメーション
flip：平面が回転するようなアニメーション
cards：カードを順番にみていくようなアニメーション
creative：カスタマイズしたアニメーションを使うときに使用します

=======================================================
※2 paginationのタイプ
bullets：スライド枚数と同じ数のドットが表示
fraction：分数で表示（例：1 / 3）
progressbar：スライドの進捗に応じてプログレスバーが伸びる
custom：自由にカスタマイズ

=====================================================*/




const relation = new Swiper('.relation__swiper', { //swiperの名前
  //切り替えのモーション
  speed: 1000, //表示切り替えのスピード
  effect: "slide", //切り替えのmotion (※1)
  allowTouchMove: true, // スワイプで表示の切り替えを有効に

  //最後→最初に戻るループ再生を有効に
  loop: true,
  //自動スライドについて
  autoplay: { 
    delay: 1000, //何秒ごとにスライドを動かすか
    stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
    disableOnInteraction: true, //ユーザーの操作時に止める
    reverseDirection: false, //自動再生を逆向きにする
  },

   //表示について
  centeredSlides: false, //中央寄せにする
  slidesPerView: 1,
  spaceBetween: 20,

  //ナビゲーション
  navigation: {
    prevEl: ".c-relation-swiper-prev", //戻るボタンのclass
    nextEl: ".c-relation-swiper-next" //進むボタンのclass
  },


  breakpoints: { 
    390: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }
});

/* =================================================== 
※1 effectについて
slide：左から次のスライドが流れてくる
fade：次のスライドがふわっと表示
■ fadeの場合は下記を記述
  fadeEffect: {
    crossFade: true
  },
cube：スライドが立方体になり、3D回転を繰り返す
coverflow：写真やアルバムジャケットをめくるようなアニメーション
flip：平面が回転するようなアニメーション
cards：カードを順番にみていくようなアニメーション
creative：カスタマイズしたアニメーションを使うときに使用します

=======================================================
※2 paginationのタイプ
bullets：スライド枚数と同じ数のドットが表示
fraction：分数で表示（例：1 / 3）
progressbar：スライドの進捗に応じてプログレスバーが伸びる
custom：自由にカスタマイズ

=====================================================*/

window.addEventListener("load", function () {
  const slideUpText = document.querySelectorAll(".animation__text");
  new SplitType(slideUpText);
  slideUpText.forEach((element) => {
    const chars = element.querySelectorAll(".char");
    gsap.to(chars, {
      opacity: 1, //最終の状態
      stagger: 0.06, //次のアニメーションまでの時間
      delay: 1, //遅延
    });
  });
});