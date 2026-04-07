
<footer class="l-footer <?php if (!is_front_page()): ?> p-footer-child <?php endif; ?>"> 
<?php wp_footer(); ?>

      <div class="l-footer_wrap">
        <div class="l-foot__bg animated__clipDownView --delay1"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/m-bg2.png" alt=""></div><!-- /.l-ch__bg -->
      <div class="l-inner">
        <div class="l-footer__container">
          <div class="p-footer__left">
        <h1 class="p-footer__logo">
          <a href="<?php echo esc_url(home_url('/home')); ?>"">
          <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/kanalogo-bottom-logo2.png" alt="kanalogo site" width="280" height="68">
        </a>
      </h1>

        <ul class="p-footer__desc">
          <li><?php bloginfo( 'name') ;?></li>
          <li>〒717-0603 岡山県真庭市</li>
          <li>Mail:kanalogo@gmail.com</li>
        </ul><!-- /.p-footer__desc -->
        <p class="p-footer__copy"><small>©2025 <?php bloginfo( 'name') ;?>. All Rights Reserved.</small></p><!-- /.p-footer__copy -->
        </div>

        <div class="p-footer__right">
          <div class="p-footer__top">
          <?php $args = [
            'menu' => 'フッター右',
            'container' => false,
            'menu_class' => 'p-footer__nav',

          ];
          wp_nav_menu($args);
          ?>
       

            <ul class="p-footer__nav">
              <li><a href="index.html#works">実績紹介</a></li>
              <li><a href="index.html#flow">流れについて</a></li>
              <li><a href="index.html#contact">お問い合わせ</a></li>
            </ul><!-- /.p-footer__nav -->
          </div><!-- /.p-footer__top -->
          <div class="p-footer__bottom">
          <?php $args = [
            'menu' => 'フッター右',
            'container' => false,
            'menu_class' => 'p-footer__list',

          ];
          wp_nav_menu($args);
          ?>
          </div><!-- /.p-footer__bottom -->
        </div><!-- /.p-footer__right -->
        </div>
echo 
      </div>
    </div><!-- /.l-footer_wrap -->
    </footer>
       

    <!-- jsファイルの読み込み -->
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> -->
    
    <!-- <script src="./assets/js/lib/swiper-bundle.min.js" defer></script>
    <script src="./assets/js/swiper.js?ver1.0" defer></script>
    <script src="./assets/js/main.js?ver1.0" defer></script> -->
  </body>
</html>
