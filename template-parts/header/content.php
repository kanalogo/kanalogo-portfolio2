

<header class="l-header p-header l-inner <?php if(!is_front_page()): ?>p-header-child  <?php endif; ?>" id="header">
      <div class="l-header__inner">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="p-header__logo">
          <h1>
          <picture>
            <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/kanalogo-top-logo2.png" alt="" width="320" height="59">
          </picture>
        </h1>
        </a>
     
        <nav class="l-header__nav">
            <?php if( is_front_page()): ?>
              <ul class="l-header__list">
            <li class="l-header__item --sub-menu js-link">私について
          <ul class="l-header__sub-menu">
            <li><a href="<?php echo esc_url(home_url('/profile')); ?>">プロフィール</a></li>
            <li><a href="#about">私について</a></li>
          </ul><!-- /.l-header__item-sub --></li>
            <li class="l-header__item --sub-menu js-link">製作実績
            <ul class="l-header__sub-menu">
            <li><a href="#works">製作実績</a></li>
            <li><a href="<?php echo esc_url(home_url('/works')); ?>">製作実績一覧</a></li>
          </ul><!-- /.l-header__item-sub --></li></li>
            <li class="l-header__item "><a href="#flow" class="js-link">流れについて</a></li>
            <li class="l-header__item "><a href="#faq" class="js-link">よくある質問</a></li>
          </ul>
       
          <button class="p-header__btn"><a href="#contact" class="js-link">お問い合わせ</a></button>
            <?php else: ?>
                
                <?php $args = [
            'menu' => '子ヘッダー',
            'container' => false,
            'menu_class' => 'l-header__list',

          ];
          wp_nav_menu($args);
          ?>
                <button class="p-header__btn"><a href="#contact" class="">お問い合わせ</a></button>
            <?php endif; ?>
        </nav>
      </div>
    </header>
