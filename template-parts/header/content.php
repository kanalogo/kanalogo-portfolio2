

<header class="l-header p-header l-inner <?php if(!is_front_page()): ?>p-header-child  <?php endif; ?>" id="header">
      <div class="l-header__inner">
        <a href="<?php esc_url(home_url('home')); ?>"" class="p-header__logo">
          <h1>
          <picture>
            <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/kanalogo-top-logo2.png" alt="" width="320" height="59">
          </picture>
        </h1>
        </a>
     
        <nav class="l-header__nav">
            <?php if( is_front_page()): ?>
                <?php $args = [
            'menu' => 'ヘッダー',
            'container' => false,
            'menu_class' => 'l-header__list',

          ];
          wp_nav_menu($args);
          ?>
       
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
