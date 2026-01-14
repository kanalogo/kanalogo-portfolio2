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

gsap.utils.toArray('.js-parallax').forEach(wrap => {
  const y = wrap.getAttribute('data-y') || -200;
  gsap.to(wrap, {
    y: y,    
    scrollTrigger: {
      trigger: wrap,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.9,
    }
  })
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

  mainImage.classList.add('is-active');
  
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

 document.addEventListener('DOMContentLoaded', function() {
  
  const modal = document.querySelectorAll('.c-member__modal');
  // ダイアログを開く
  const open = document.querySelectorAll('.c-bl__modal-btn');
  const bg = document.querySelector('.l-modal-bg');
  const body = document.querySelector('body');
  open.forEach(button => {
    button.addEventListener('click', (target) => {
      target.preventDefault();
      const dialogId = button.getAttribute('data-modal');
      const dialog = document.getElementById(dialogId);
     

      modal.forEach(item => {
        bg.classList.add('is-active');
        item.classList.remove('is-active');
        body.style.overflowY = 'hidden';
        if(item.id == dialogId) {
          item.classList.add('is-active');
        }
        
      });
     
    });

      // ダイアログを閉じる
  const close = document.querySelectorAll('.c-member__modal-block');
  close.forEach(button => {
    button.addEventListener('click', () => {
      bg.classList.remove('is-active');
      body.style.overflowY = 'auto';
      modal.forEach(item => {
        item.classList.remove('is-active');
      });
    });
  });
  });

     // ダイアログを閉じる
   bg.addEventListener('click', () => {
      bg.classList.remove('is-active');
      body.style.overflowY = 'auto';
      modal.forEach(item => {
        item.classList.remove('is-active');
      });
    });
  });

  //  // オーバーレイクリックで変化させる
  // document.addEventListener('DOMContentLoaded', function() {
  
  //    const card_button = document.querySelectorAll('.c-bl__btn');
  //     card_button.forEach(button => {
      
  //     button.addEventListener('click', (target) => {
  //       card_button.forEach(button => {
  //         button.classList.remove('is-active');
  //       });
  //       target.preventDefault();
  //       button.classList.add('is-active');
  //     })
  //   });
  // });




  // オーバーレイクリックでダイアログを閉じる
  // dialogs.forEach(dialog => {
  //   dialog.addEventListener('click', (event) => {
  //     if (event.target.closest('.modal__inner') === null) {
  //       dialog.classList.remove('js-show');
  //       dialog.close();
  //     }
  //   });
  // });

  

  

