
<?php get_header(); ?>
   

    <main class="l-child-main ">

    <?php esc_url( get_template_part('template-child/child' , 'top') ); ?>

      <section class="p-detail">
        <div class="l-inner">
          <?php if ( have_posts() ): ?>
           <?php while( have_posts()): the_post(); ?> 
         
          <div class="l-detail-top">
            <div class="p-detail__txt">
            <?php $site_title = get_field('site_title'); ?>
              <h3 class="p-deatil__title"><?php if ($site_title) : ?>
                 <?php echo esc_html($site_title); ?>
                <?php endif; ?></h3><!-- /.p-deatil__title -->
                <?php $description = get_the_excerpt(); ?>
            <p class="p-detail__desc">
            <?php if ($description) : ?>
              <?php echo esc_html($description); ?>
              <?php endif; ?>
            </p><!-- /.p-detail__desc -->
            <?php $site_url = get_field('site_url'); ?>
            <?php if ($site_url) : ?>
            <a class="p-detail__url" href="<?php echo esc_url($site_url); ?>"><span>URL</span><?php echo esc_html($site_url); ?></a><!-- /.p-detail__url -->
            <?php endif; ?>
            <span class="p-detail__copy">※架空サイトです</span><!-- /.p-detail__copy -->
            </div><!-- /.p-detail__txt -->
            <div class="p-detail__image">
             <picture>
             <?php if( has_post_thumbnail()): ?>
                <?php the_post_thumbnail(''); ?>
              <?php else: ?>
              <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/chal-4.jpg" alt="">
              <?php endif; ?>
             </picture>
            </div><!-- /.p-detail__image -->
          </div><!-- /.p-detail-top -->

          
         


          <?php if (have_rows('site_description')) : ?>
          <div class="l-detail-mid">
          <?php while (have_rows('site_description')) : the_row(); ?>
            <dl class="p-detail__list">
              <dt class="p-detail__list-title">
                担当範囲
              </dt><!-- /.p-detail__list--title -->
              <dd class="p-detail__list-txt">
              <?php echo esc_html(get_sub_field('site_product')); ?>
              </dd><!-- /.p-detail__list-txt -->
            </dl><!-- /.p-detail__list -->
            <dl class="p-detail__list">
              <dt class="p-detail__list-title">
                制作期間
              </dt><!-- /.p-detail__list--title -->
              <dd class="p-detail__list-txt">
              <?php echo esc_html(get_sub_field('site_term')); ?>
              </dd><!-- /.p-detail__list-txt -->
            </dl><!-- /.p-detail__list -->
            <dl class="p-detail__list">
              <dt class="p-detail__list-title">
                価格
              </dt><!-- /.p-detail__list--title -->
              <dd class="p-detail__list-txt">
              <?php echo esc_html(get_sub_field('site_price')); ?>
              </dd><!-- /.p-detail__list-txt -->
            </dl><!-- /.p-detail__list -->
            <dl class="p-detail__list">
              <dt class="p-detail__list-title">
                Github URL
              </dt><!-- /.p-detail__list--title -->
              <dd class="p-detail__list-txt">
               <a href="<?php echo esc_url(get_sub_field('git_url')); ?>" class="p-detail__list-link"> <?php echo esc_html(get_sub_field('git_url')); ?><i class="fa-solid fa-arrow-right"></i></a>
              </dd><!-- /.p-detail__list-txt -->
            </dl><!-- /.p-detail__list -->
            <dl class="p-detail__list">
              <dt class="p-detail__list-title">
                使用技術
              </dt><!-- /.p-detail__list--title -->
              <dd class="p-detail__list-txt">
              <?php echo esc_html(get_sub_field('site_tec')); ?>
              </dd><!-- /.p-detail__list-txt -->
            </dl><!-- /.p-detail__list -->
            <dl class="p-detail__list">
              <dt class="p-detail__list-title">
                アニメーション
              </dt><!-- /.p-detail__list--title -->
              <dd class="p-detail__list-txt">
              <?php echo esc_html(get_sub_field('animation')); ?>
              </dd><!-- /.p-detail__list-txt -->
            </dl><!-- /.p-detail__list -->
            <?php endwhile; ?>
          </div><!-- /.l-detail-mid -->
          <?php endif; ?>


          <div class="l-detail-bottom">
            <div class="p-detail__info">
            <?php if (have_rows('site_content')) : ?>
              <?php while (have_rows('site_content')) : the_row(); ?>

              <h4 class="p-detail__info-title">実装で
                工夫した点</h4><!-- /.p-detail__info-title -->
            <p class="p-detail__info-text"><?php echo esc_html(get_sub_field('site_point')); ?> </p><!-- / -->
            </div><!-- /.p-detail__info -->
            <div class="p-detail__info">
              <h4 class="p-detail__info-title">課題と
                解決策</h4><!-- /.p-detail__info-title -->
            <p class="p-detail__info-text"><?php echo esc_html(get_sub_field('site_solution')); ?>
              </p><!-- / -->
              <?php endwhile; ?>
              <?php endif; ?>
            </div><!-- /.p-detail__info -->
          </div><!-- /.l-detail-bottom -->

          <?php $site_move = get_field('site_move'); ?>
            <?php if ($site_move) : ?>
            <div class="p-detail__move">
            <span class="p-deail__bg"></span><!-- /.p-deail__bg -->
            <video class="fv-video" id="video" muted loop playsinline>
            <source src="<?php echo esc_url($site_move['url']); ?>" type="video/mp4">
          </video>
            </div><!-- /.p-detail__move -->
            <?php endif; ?>

            <p class="p-detail__back-link">
              <a href="<?php echo esc_url(home_url('works')); ?>"><i class="fa-solid fa-arrow-left"></i>制作実績一覧へ戻る</a>
            </p><!-- /.p-culture__profile-ancour -->
            <?php  endwhile; ?>
            <?php endif; ?>
        </div><!-- /.l-inner -->
      </section><!-- /.detail -->
     
      <section class="p-relation">
        <div class="l-inner">

          

          <h3 class="p-relation__title">その他の実績をみる</h3><!-- /.p-relation__title -->
          <div class="relation__swiper-container">
            <div class="swiper relation__swiper">
              <div class="swiper-wrapper relation__swiper-wrapper">
              <?php $args = [
           'post_type' => 'works',
          'posts_per_page' => 6,
          'post_status' => 'publish',
          'orderby' => 'rand'
        ];
            $the_query = new WP_Query($args) ;
           ?>
            <?php if( $the_query->have_posts() ): ?>
              <?php while( $the_query->have_posts()): $the_query->the_post(); ?>
              <?php esc_url( get_template_part('template-child/relation' , 'parts') ); ?>

              <?php  endwhile; ?>
              <?php endif; ?>
              <?php wp_reset_postdata(); ?>
                </div>
            </div>
           
            <div class="swiper-button-prev c-relation-swiper-prev"></div>
            <div class="swiper-button-next c-relation-swiper-next"></div>
          </div>
        </div><!-- /.l-inner -->
      </section><!-- /.relation -->

      <section class="p-contact-banner">
        
        <button class="p-contact-banner__btn">
          <a href="<?php echo home_url('/home#contact'); ?>">お問い合わせはこちら</a>
        </button><!-- /.p-contact-banner__btn -->
    </section><!-- /.p-contact-banner -->


          
    </main>
		
<?php get_footer(); ?>