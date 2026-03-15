

    <!DOCTYPE html>
<html lang="ja">
  <head>
  <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <?php esc_url( get_template_part('template-parts/header/meta') ); ?>
     <?php esc_url( get_template_part('template-parts/header/cdn') ); ?>
    <?php wp_head(); ?>
</head>

  <body class=" <?php if(!is_front_page()):?>l-works-detail
    <?php endif; ?> <?php body_class( ); ?>">
    <?php wp_body_open(); ?>
   
    <?php esc_url( get_template_part('template-parts/header/content') ); ?>

   
    <button class="p-drawer__icon">
			<div class="p-drawer__icon--bar"></div>
			<div class="p-drawer__icon--bar"></div>
		</button>

         <div class="p-drawer">
		<div class="p-drawer__body">
        <a href="<?php echo esc_url(home_url('/home')); ?>" class="p-drawer__logo --drawer">
         <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/kanalogo-top-logo3.png" alt="">
        </a>
        <?php if ( is_front_page()):?>
        <nav class="p-drawer__nav">
                <?php $args = [
            'menu' => 'ドロワー',
            'container' => false,
            'menu_class' => 'p-drawer__list --drawer',

          ];
          wp_nav_menu($args);
          ?>
          <button class="p-header__btn --full"><a href="#contact" class="">お問い合わせ</a></button>
        </nav><!-- /.p-drawer__nav -->
       
			</div>
		</div>

    <span id="js-cursor" class="c-cursor">+</span>

    <section class="opening" id="js-opening">
      <div class="opening__inner">
        <div id="js-zoom-text" class="opening__title">
          <p class="opening__text">KANALOGO</p>
        </div>
         <div class="opening__count" id="js-count">
          1
        </div>
          </div>
        </section>
        <?php else: ?>
            <nav class="p-drawer__nav">
            <?php $args = [
            'menu' => '子ドロワー',
            'container' => false,
            'menu_class' => 'p-drawer__list --drawer',

          ];
          wp_nav_menu($args);
          ?>
          <button class="p-header__btn --full"><a href="#contact" class="">お問い合わせ</a></button>
        </nav><!-- /.p-drawer__nav -->
        <?php endif; ?>
        </div>
            </div>