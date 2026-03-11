/**
* 最大幅に基づいてviewport設定を切り替える関数。
* @function
* @param {number} maxWidth - viewportを固定する際の最大幅
*/
const switchViewport = (maxWidth) => {
  const viewport = document.querySelector('meta[name="viewport"]');
  const value =
    window.outerWidth > maxWidth
      ? "width=device-width,initial-scale=1"
      : `width=${maxWidth}`;
  if (viewport.getAttribute("content") !== value) {
    viewport.setAttribute("content", value);
  }
};
addEventListener("resize", () => switchViewport(375));
switchViewport(375);



// ハンバーガーメニュー
document.addEventListener("DOMContentLoaded", () => {
  //定義
  const drawerIcon = document.querySelector('.p-drawer__icon');
  const drawer = document.querySelector('.p-drawer');
  const drawerNavItem = document.querySelectorAll(' a[href^="#"]');
  const headerHeight = document.querySelector('.p-header').offsetHeight;
  const breakpoint = 768;
  let isMenuOpen = false;
  let isMenuOpenAtBreakpoint = false;

  //メニューを開くアニメーション
  const openMenu = () => {
    if (!drawer.classList.contains("js-show")) {
      drawer.classList.add("is-active");
      drawerIcon.classList.add("js-show");
    }
  }

  //メニューを閉じるアニメーション
  const closeMenu = () => {
    if (drawer.classList.contains("is-active")) {
      drawer.classList.remove("is-active");
      drawerIcon.classList.remove("js-show");
      isMenuOpen = false;
    }
  }

  //メニューの開閉動作
  const toggleMenu = () => {
    if (!drawer.classList.contains("is-active")) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  //リサイズ処理
  const handleResize = () => {
    const bp = breakpoint;
    const windowWidth = window.innerWidth;
    if (windowWidth > bp && isMenuOpenAtBreakpoint) {
      closeMenu();
    } else if (windowWidth <= bp && drawer.classList.contains("is-active")) {
      isMenuOpenAtBreakpoint = true;
    }
  };

  //メニュー外クリック処理
  const clickOuter = (event) => {
    if (drawer.classList.contains("is-active") && !drawer.contains(event.target) && isMenuOpen) {
      closeMenu();
    } else if (drawer.classList.contains("is-active") && !drawer.contains(event.target)) {
      isMenuOpen = true;
    }
  }

  //該当箇所までスクロール
  const linkScroll = (target) => {
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  //ヘッダーアイコン クリック時
  drawerIcon.addEventListener("click", toggleMenu);
  //画面幅リサイズ時
  window.addEventListener("resize", handleResize);
  //メニュー外クリック時
  document.addEventListener("click", clickOuter);
  //ページ内リンクナビメニュー クリック時
  drawerNavItem.forEach(item => {
    item.addEventListener("click", event => {
      event.preventDefault();
      closeMenu();
      const targetItem = document.querySelector(item.getAttribute("href"));
      linkScroll(targetItem);
    });
  });

  
    drawerSearchItem.addEventListener("click", event => {
      event.preventDefault();
      const targetItem = document.querySelector(drawerSearchItem.getAttribute("href"));
      linkScroll(targetItem);
    });
  
        // スクロールに合わせてフォーカス移動
        document.addEventListener('DOMContentLoaded', () => {

          const sections = document.querySelectorAll('.js-section');
          const navLinks = document.querySelectorAll('.js-link');
          
          const spyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                navLinks.forEach(link => {
                  link.classList.remove('is-active');
                  if (link.dataset.target === entry.target.id) {
                    link.classList.add('is-active');
                  }
                });
              }
            });
          }, {
              root: null,
              threshold: 0.5 
          });
      
          sections.forEach(section => spyObserver.observe(section));
      
          
      });


jQuery(function($) {

  $('.c-tab__btn-item').on('click', function () {
    $('.c-tab__btn-item').removeClass('is-active');
    // tabの切り替え
    $('.c-tab__btn-item').attr('aria-selected', 'false');
    $(this).attr('aria-selected', 'true');
    $(this).addClass('is-active');

    // tab panelの切り替え
    $('.c-tab__content').removeClass('is-active');
    $('#' + $(this).attr("aria-controls")).addClass('is-active');

    return false;
  });

});
});


//スクロールしたらヘッダーにクラスを付与
window.addEventListener('scroll', function() {
  var header = document.querySelector('.p-header');
  var headerLogo = document.querySelector('.p-header__logo');
  var drawer__btn = document.querySelector('.p-drawer__icon');
  // スクロール位置を取得
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
  // 少しスクロールしたらクラスをつける
  if (scrollTop > 100) {
    header.classList.add('js-active');
    headerLogo.classList.add('js-active');
    drawer__btn.classList.add('js-active');
  } else {
    header.classList.remove('js-active');
    headerLogo.classList.remove('js-active');
    drawer__btn.classList.remove('js-active');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  setUpAccordion();
});
const summary = document.querySelectorAll('details')
summary.forEach((element) => {
  element.open = true;
});


const setUpAccordion = () => {
  const details = document.querySelectorAll(".js-details");
  const IS_OPENED_CLASS = "is-opened";

  details.forEach((element) => {
    const summary = element.querySelector(".js-summary");
    const content = element.querySelector(".js-content");

    summary.addEventListener("click", (event) => {
      // デフォルトの挙動を無効化
      event.preventDefault();

      // is-openedクラスの有無で判定（detailsのopen属性の判定だと、アニメーション完了を待つ必要がありタイミング的に不安定になるため）
      if (element.classList.contains(IS_OPENED_CLASS)) {
        // アコーディオンを閉じるときの処理
        // アイコン操作用クラスを切り替える(クラスを取り除く)
        element.classList.toggle(IS_OPENED_CLASS);

        // アニメーション実行
        closingAnim(content, element).restart();
      } else {
        // アコーディオンを開くときの処理
        // アイコン操作用クラスを切り替える(クラスを付与)
        element.classList.toggle(IS_OPENED_CLASS);
        // open属性を付与
        element.setAttribute("open", "true");
        // アニメーション実行
        openingAnim(content).restart();
      }
    });
  });
}
/**
 * アコーディオンを閉じる時のアニメーション
 */
const closingAnim = (content, element) => gsap.to(content, {
  height: 0,
  opacity: 0,
  duration: 0.4,
  ease: "power3.out",
  overwrite: true,
  onComplete: () => {
    // アニメーションの完了後にopen属性を取り除く
    element.removeAttribute("open");
  },
});

/**
 * アコーディオンを開く時のアニメーション
 */
const openingAnim = (content) => gsap.fromTo(
  content,
  {
    height: 0,
    opacity: 0,
  },
  {
    height: "auto",
    opacity: 1,
    duration: 0.4,
    ease: "power3.out",
    overwrite: true,
  }
);

document.addEventListener("DOMContentLoaded", function () {
  let toTopButton = document.querySelector(".p-header");

  // スクロールイベントを監視してTo Topボタンを制御
  window.addEventListener("scroll", function () {
    // 現在のスクロール位置を取得
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // スクロール位置が一定値よりも大きい場合にTo Topボタンを表示、それ以外は非表示にする
    if (scrollPosition > 100) {
      toTopButton.classList.add("is-active");
    } else {
      toTopButton.classList.remove("is-active");
    }
  });


});

   // パララックス
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {

  gsap.utils.toArray('.js-parallax').forEach(el => {

    const y = parseInt(el.dataset.y) || -200;

    gsap.to(el, {
      y: y,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

  });

});

    // ナビゲーションが押されたらスクロール位置まで移動する
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = item.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        // headerの高さを取得 (実際のheaderのクラス名と差し替えてください)
        const headerOffset = document.querySelector(".l-header").offsetHeight;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});


    // 無限アニメーション
document.addEventListener("DOMContentLoaded", () => {
	const imagesScroll = document.querySelector("#js-images-scroll"); // 無限アニメーション対象の要素を取得
	const images = document.querySelector("#js-images"); // 無限アニメーションの1週分の要素を取得
	const imagesWidth = images.scrollWidth; // 幅を取得
	console.log('imagesWidth:', imagesWidth);

	// itemsを複製
	const imagesClone = images.cloneNode(true); // imagesを複製
	imagesScroll.appendChild(imagesClone); // 複製した要素をimagesScrollに追加	
	imagesClone.classList.add("is-clone"); // is-cloneクラスを追加

	imagesScroll.style.setProperty('--images-width', `${imagesWidth}px`); // CSS変数にセット
});

  //キャッチコピーの出現アニメーション
document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.querySelector(".l-mv__scroll-animation");
  const mainText = document.querySelectorAll(".section__title-en");
  const fvText = document.querySelector(".c-fv__headingLv2 span");

  mainImage.classList.add('is-active');
  fvText.classList.add('is-active');

  mainText.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.2}s`;
  
    setTimeout(() => {
      element.classList.add('is-active');
    }, 500);
  });
  
});

window.addEventListener('load',function(){
  gsap.registerPlugin(ScrollTrigger);
 
   //見出しの文字が下から出現
   const underTextItems = document.querySelectorAll('.c-heading__lv2');
   underTextItems.forEach(item => {
     ScrollTrigger.create({
       trigger: item,
       start: "top 70%", // 要素が上部から70%の位置で発火
       onEnter: () => {
         // 要素内に入ったら、js-showクラスをつける
         item.classList.add("is-active");
       }
     });
   });

    //見出しの文字が下から出現
    const underModalBtnItem = document.querySelector('.js-modal-btn');
    
      ScrollTrigger.create({
        trigger: underModalBtnItem,
        start: "top 70%", // 要素が上部から70%の位置で発火
        onEnter: () => {
          // 要素内に入ったら、js-showクラスをつける
          underModalBtnItem.classList.add("is-active");
        }
      });
 

     //見出しの文字が下から出現
     const openDoorImage = document.querySelector('.l-cta__container');
     
       ScrollTrigger.create({
         trigger: openDoorImage,
         start: "top 70%", // 要素が上部から70%の位置で発火
         end: "top 70%",
         onEnter: () => {
           // 要素内に入ったら、js-showクラスをつける
           openDoorImage.classList.add("is-active");
         },
         onLeaveBack: () => {
          openDoorImage.classList.remove("is-active");
          // スクロール位置が「end」を超えて前方にスクロールしたときに発火
        },
       });
   
 });

    // オープニングアニメーション
  

document.addEventListener("DOMContentLoaded", () => {
  const opening = document.querySelector("#js-opening");
  const zoomText = document.querySelector("#js-zoom-text");
  const counter = document.querySelector("#js-count");

    // すでに表示済みかチェック
    if (sessionStorage.getItem("openingPlayed")) {

      // 2回目以降は即非表示
      opening.style.display = "none";
      document.body.style.overflow = "";
  
      return;
    }
  
    // 初回表示フラグ
    sessionStorage.setItem("openingPlayed", "true");

  document.body.style.overflow = "hidden";

  // 2桁表示
  const formatNumber = (num) => String(num).padStart(2, "0");

  // ランダム加速カウント
  function randomAcceleratedCount(start, end, callback) {
    let current = start;

    function updateCount() {
      callback(current);

      if (current >= end) return;

      current++;

      // 進行度
      const progress = current / end;

      // 最初は遅く、後半ほど速く
      // さらに少しランダム性を加える
      let delay;

      if (progress < 0.2) {
        delay = 120 + Math.random() * 80; // 遅め
      } else if (progress < 0.5) {
        delay = 70 + Math.random() * 50;  // 少し速く
      } else if (progress < 0.8) {
        delay = 35 + Math.random() * 30;  // かなり速い
      } else {
        delay = 10 + Math.random() * 15;  // 一気に加速
      }

      setTimeout(updateCount, delay);
    }

    updateCount();
  }

  randomAcceleratedCount(1, 100, (value) => {
    counter.textContent = formatNumber(value) + "%";

    if (value === 100) {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
        }
      });
      if(value === 100){

        gsap.fromTo(counter,
          {scale:1},
          {scale:1.4,duration:0.25}
        );
      
      }

      tl.to(counter, {
        opacity: 0,
        duration: 0.3
      })
      .to(zoomText, {
        scale: 25,
        duration: 1.5,
        ease: "power3.inOut",
        transformOrigin: "center center"
      })
      .to(opening, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .set(opening, {
        display: "none"
      });
    }
  });
});



 //worksの横スクロール
 
 gsap.registerPlugin(ScrollTrigger);
 

 const container = document.querySelector(".l-member__swiper-container");
 
 function horizontalScroll() {
  if(!container) return;
 
   const totalWidth = container.scrollWidth;
   const visibleWidth = document.querySelector(".l-member__container").offsetWidth;
 console.log('totalWidth');
   const moveDistance = totalWidth - visibleWidth + 48;
 
   gsap.to(container, {
     x: -moveDistance,
     ease: "none",
     scrollTrigger: {
       trigger: ".view-wrapper",
       start: "top top",
       end: () => "+=" + moveDistance,
       scrub: true,
       pin: ".l-member__container",
       invalidateOnRefresh: true
     }
   });
 }
 
 horizontalScroll();


  

  //料金表のモーダル

 document.addEventListener('DOMContentLoaded', function() {
  
  const modal = document.querySelector('.JS-modal');
  // ダイアログを開く
  const open = document.querySelector('.c-culture__modal-link');
  const bg = document.querySelector('.l-modal-bg');
  const body = document.querySelector('body');
  
    open.addEventListener('click', (target) => {
  
        bg.classList.add('is-active');
        body.style.overflowY = 'hidden';
          modal.classList.add('is-active');
          initModalSwiper();

    });
         // ダイアログを閉じる
   bg.addEventListener('click', () => {
    bg.classList.remove('is-active');
    body.style.overflowY = 'auto';
   
      modal.classList.remove('is-active');
   
  });

  // ダイアログを閉じる
  const close = document.querySelectorAll('.c-member__modal-block');
  close.forEach(button => {
    button.addEventListener('click', () => {
      bg.classList.remove('is-active');
      body.style.overflowY = 'auto';
       modal.classList.remove('is-active');
     
    });
  });
  });

    //プライバシーのモーダル

 document.addEventListener('DOMContentLoaded', function() {
  
  const modal = document.querySelector('.JS-privacy-modal');
  // ダイアログを開く
  const open = document.querySelector('.p-privacy__btn');
  const bg = document.querySelector('.l-modal-bg');
  const body = document.querySelector('body');
  
    open.addEventListener('click', (target) => {
  
        target.preventDefault();
        bg.classList.add('is-active');
        body.style.overflowY = 'hidden';
          modal.classList.add('is-active');
          initModalSwiper();

    });
         // ダイアログを閉じる
   bg.addEventListener('click', () => {
    bg.classList.remove('is-active');
    body.style.overflowY = 'auto';
   
      modal.classList.remove('is-active');
   
  });

  // ダイアログを閉じる
  const close = document.querySelector('.c-privacy__modal-closeText');
  
    close.addEventListener('click', () => {
      bg.classList.remove('is-active');
      body.style.overflowY = 'auto';
       modal.classList.remove('is-active');
     
    });
  });


   // キャッチコピーが一文字ずつ下から出現
      window.addEventListener("load", function () {
      const slideUpText2 = document.querySelectorAll(".p-fv__text");
      new SplitType(slideUpText2);
      slideUpText2.forEach((element) => {
        const chars = element.querySelectorAll(".char");
        gsap.to(chars, {
          opacity: 1, //最終の状態
          stagger: 0.06, //次のアニメーションまでの時間
          delay: 1, //遅延
        });
      });
    });

     // マウスストーカーの実装
    document.addEventListener("DOMContentLoaded", function () {
      const cursor = document.querySelector("#js-cursor");
      if (!cursor) return;
    
      // アニメーション用の変数
      let mouseX = 0;
      let mouseY = 0;
      let scale = 0;
    
      // マウス移動時に座標を更新
      document.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
    
      document.querySelectorAll(".js-link").forEach(function (link) {
        link.addEventListener("mouseenter", function () {
          scale = "1";
        });
      
        link.addEventListener("mouseleave", function () {
          scale = "0";
        });
      });
    
    
      // requestAnimationFrameでスタイルを更新
      function updateCursor() {
        cursor.style.transform = "translate3d(" + mouseX + "px, " + mouseY + "px, 0) translate(-50%, -50%) scale(" + scale + ")";
        requestAnimationFrame(updateCursor);
      }
    
      // アニメーションループを開始（初回）
      updateCursor();
    });

    //Faqのタブの切替

  jQuery(function($) {

    $('.c-faq__button').on('click', function () {
      // tabの切り替え
      $('.c-faq__button').attr('aria-selected', 'false');
      $(this).attr('aria-selected', 'true');
  
      // tab panelの切り替え
      $('.c-faq__list').removeClass('js-show');
      $('#' + $(this).attr("aria-controls")).addClass('js-show');
  
      return false;
    });
  
  });

  
