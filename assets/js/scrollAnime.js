  // スクロールアニメーション　左から右へ
  window.addEventListener('load',function(){
    gsap.registerPlugin(ScrollTrigger);
   
     const clipViewItems = document.querySelectorAll('.animated__clipView');
     clipViewItems.forEach(item => {
       ScrollTrigger.create({
         trigger: item,
         start: "top 70%", // 要素が上部から70%の位置で発火
         onEnter: () => {
           // 要素内に入ったら、js-showクラスをつける
           item.classList.add("js-show");
         }
       });
     });
   });

     // スクロールアニメーション　上から下へ
  window.addEventListener('load',function(){
    gsap.registerPlugin(ScrollTrigger);
   
     const clipViewItems = document.querySelectorAll('.animated__clipDownView');
     clipViewItems.forEach(item => {
       ScrollTrigger.create({
         trigger: item,
         start: "top 70%", // 要素が上部から70%の位置で発火
         onEnter: () => {
           // 要素内に入ったら、js-showクラスをつける
           item.classList.add("js-show");
         }
       });
     });
   });

     // スクロールアニメーション　 中心から円へ
  window.addEventListener('load',function(){
    gsap.registerPlugin(ScrollTrigger);
   
     const clipViewItems = document.querySelectorAll('.animated__circleView');
     clipViewItems.forEach(item => {
       ScrollTrigger.create({
         trigger: item,
         start: "top 70%", // 要素が上部から70%の位置で発火
         onEnter: () => {
           // 要素内に入ったら、js-showクラスをつける
           item.classList.add("js-show");
         }
       });
     });
   });

     // スクロールアニメーション　 下から上へフェードイン
   window.addEventListener('load',function(){
	gsap.registerPlugin(ScrollTrigger);
	
	const fadeInItems = document.querySelectorAll('.animated__fadeIn');
	
	fadeInItems.forEach(item => {
	  ScrollTrigger.create({
	    trigger: item,
	    start: "top 70%", // 要素が上部から70%の位置で発火
	    markers: false,
	    onEnter: () => {
	      // 要素内に入ったら、js-showクラスをつける
	      item.classList.add("js-show");
	    }
	  });
	});
});

     // スクロールアニメーション　 下から上へフェードイン
     window.addEventListener('load',function(){
        gsap.registerPlugin(ScrollTrigger);
        
        const fadeInItems = document.querySelectorAll('.animated__fadeIn2');
        
        fadeInItems.forEach(item => {
          ScrollTrigger.create({
            trigger: item,
            start: "top 70%", // 要素が上部から70%の位置で発火
            markers: false,
            onEnter: () => {
              // 要素内に入ったら、js-showクラスをつける
              item.classList.add("js-show");
            }
          });
        });
    });

     // スクロールアニメーション　 フェードイン　時間差で発火させる
window.addEventListener('load',function(){
	gsap.registerPlugin(ScrollTrigger);
	
	const timeDelay = 50; // 時間差のタイミング(ミリ秒)
	const maxItemNumber = 3; // 時間差で発火させる最大要素数
	
	// fade in
	for (let i = 0; i < maxItemNumber; i++) {
	  const fadeInItems = document.querySelectorAll(`.animated__fadeIn_delay.--delay${i}`);
	  fadeInFunction(fadeInItems, i * timeDelay);
	}
	
	function fadeInFunction(fadeInItems, timeout) {
	  fadeInItems.forEach(item => {
	    ScrollTrigger.create({
	      trigger: item,
	      start: "top 70%", // 要素が上部から70%の位置で発火
	      markers: false,
	      onEnter: () => {
	        // 要素内に入ったら、js-showクラスをつける
	        setTimeout(() => {
	          item.classList.add("js-show");
	        }, timeout);
	      }
	    });
	  });
	}
});
