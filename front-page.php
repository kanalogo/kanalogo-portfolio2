
<?php get_header(); ?>
    <main class="l-main">
      <div class="l-mv__block">
      <section class="p-mv">
        <div class="l-inner">
          <h2 class="c-heading__mv">
            <span class="section__title-en">Building Cleans</span>
            <span class="section__title-en pc-only">And Scalable Websites</span>
            <span class="section__title-en sp-only">And</span>
            <span class="section__title-en sp-only">Scalable Websites</span>
          </h2>
          <div class=" l-mv__scroll-animation" id="js-images-scroll">
            <div class="l-mv__grid l-mv__scroll-item" id="js-images">
            <?php if (have_rows('first_view')) : ?>
              <?php while (have_rows('first_view')) : the_row(); ?>
            <div class="p-mv__grid-item1">
            <?php $top_image1 = get_sub_field('view_image1'); ?>
              <img src="<?php echo esc_url($top_image1['url']); ?>" alt="" width="557" height="560">
            </div><!-- /.p-mv__grid-item -->
            <div class="p-mv__grid-item p-mv__grid-item2">
            <?php $top_image2 = get_sub_field('view_image2'); ?>
              <img src="<?php echo esc_url($top_image2['url']); ?>" alt="" width="268" height="270">
            </div><!-- /.p-mv__grid-item -->
            <div class="p-mv__grid-item p-mv__grid-item3">
            <?php $top_image3 = get_sub_field('view_image3'); ?>
              <img src="<?php echo esc_url($top_image3['url']); ?>" alt="" width="268" height="270">
            </div><!-- /.p-mv__grid-item -->
            <div class="p-mv__grid-item p-mv__grid-item4">
            <?php $top_image4 = get_sub_field('view_image4'); ?>
              <img src="<?php echo esc_url($top_image4['url']); ?>" alt="" width="557" height="560">
            </div><!-- /.p-mv__grid-item -->
            <div class="p-mv__grid-item p-mv__grid-item5">
            <?php $top_image5 = get_sub_field('view_image5'); ?>
              <img src="<?php echo esc_url($top_image5['url']); ?>" alt="" width="268" height="270">
            </div><!-- /.p-mv__grid-item -->
            <div class="p-mv__grid-item p-mv__grid-item6">
            <?php $top_image6 = get_sub_field('view_image6'); ?>
              <img src="<?php echo esc_url($top_image6['url']); ?>" alt="" width="268" height="270">
            </div><!-- /.p-mv__grid-item -->
            <div class="p-mv__grid-item p-mv__grid-item7">
            <?php $top_image7 = get_sub_field('view_image7'); ?>
              <img src="<?php echo esc_url($top_image7['url']); ?>" alt="" width="557" height="560">
            </div><!-- /.p-mv__grid-item -->
            <?php endwhile; ?>
            <?php endif; ?>
          </div><!-- /.l-mv__grid -->
        </div><!-- /.l-mv__scroll-item -->
        </div>
      </section>
    </div><!-- /.l-mv__block -->

      <section class="p-fv" id="message">
        <div class="l-busi__bg animated__clipDownView --delay1"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/w-bg.png" alt="">
          <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/w-bg.png" alt=""></div><!-- /.l-ch__bg -->
        <div class="l-inner">
          <div class="l-fv__container">
            <h2 class="c-fv__headingLv2">
              <span>実装だけで終わらせない <br>成果につなげるホームページを</span></h2><!-- /.c-fv__heading -->
            <div class="p-fv__text-wrap">
              <p class="p-fv__text">
                企業やブランドの強みを丁寧にヒアリングし、<br>
                伝わるデザインと分かりやすい構成でWebサイトを制作します。<br>
                公開後の運用や改善も見据えた設計で、長く使えるサイトをご提供します。
                  </p><!-- /.p-fv__tetx -->

                  <p class="p-fv__text">
                    ホームページ制作に加え、EC・採用・観光業など目的に応じた構成設計を重視。<br>
                    単なるコーディングではなく、目的達成を見据えた実装を行います。<br>
                    中長期的な運用も見据えた構築が可能です。
                      </p><!-- /.p-fv__tetx -->

      
                
            </div><!-- /.p-fv__text-wrap -->
            
          </div><!-- /.l-fv__container -->

          </div>
          </section>

       

         <section class="p-challenge">
          <div class="l-ch__bg animated__clipDownView --delay1"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/w-bg.png" alt=""></div><!-- /.l-ch__bg -->
          <div class="l-inner">
            <h2 class="c-heading__lv2 "><span class="heading__en">SERVICE</span> <span class="heading__ja">提供内容</span></h2><!-- /.c-heading__lv2 -->

            <div class="l-ch__grid">
            
            <?php esc_url( get_template_part('template-contents/service' , 'card') ); ?>

            </div><!-- /.l-ch__grid -->
          </div>
        </section>

        <section class="p-member" id="works">
          <div class="l-mem__bg animated__clipDownView --delay1"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/w-bg.png" alt=""></div><!-- /.l-ch__bg -->
          <div class="l-mem__bg-bottom animated__clipDownView --delay1"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/w-bg.png" alt=""></div><!-- /.l-ch__bg -->
          <div class="l-inner">
            <div class="view-wrapper">
           
            <div class="l-member__container">
               <?php $args = [
               'post_type' => 'works',
              'posts_per_page' => -1,
              'post_status' => 'publish',
              'orderby' => 'date',
              'order'  => 'DESC' 
            ];
                $the_query = new WP_Query($args) ;
               ?>
               <?php if( $the_query->have_posts() ): ?>

                <h2 class="c-heading__lv2 --gradation"><span class="heading__en">Works </span><span class="heading__ja">制作実績</span></h2><!-- /.c-heading__lv2 -->
              <div class="l-member__swiper-container">
                
              <?php while( $the_query->have_posts()): $the_query->the_post(); ?>

              <?php if (have_rows('top_card')) : ?>
                <?php while (have_rows('top_card')) : the_row(); ?>
                <a href="<?php the_permalink(); ?>">
                        <div class="c-member__card">
                          <div class="c-member__top">
                          <span class="c-member__copy"><?php echo esc_html(get_sub_field('card_num')); ?></span><!-- /.c-member__copy -->
                          <span class="c-member__site"><?php echo esc_html(get_sub_field('card_title')); ?></span><!-- /.c-member__site -->
                        </div><!-- /.c-member__top -->
                          <div class="c-member__container">
                            <div class="c-member__image">
                            <?php $works_image = get_sub_field('card_image'); ?>
                              <picture>
                                <img src="<?php echo esc_url($works_image['url']); ?>" alt="">
                              </picture>

                              <?php
                                  $terms = get_the_terms(get_the_ID(), 'contents-cat');
                                   if ($terms && !is_wp_error($terms)) :
                                  ?>
                                  
                              <ul class="c-member__block">
                              <?php foreach ($terms as $term) : ?>
                                <li class="p-member__desc">
                                <?php echo esc_html($term->name); ?>
                                </li>
                                <?php endforeach; ?>
                                   </ul><!-- /.c-member__block -->
                                   <?php endif; ?>
                            </div><!-- /.c-member__image -->
                            <div class="c-member__text">
          

                                <?php the_content(); ?>
                            </div><!-- /.c-member__text -->
                          </div><!-- /.c-member__container -->
                        </div><!-- /.c-member__card -->
                        </a>
                        <?php endwhile; ?>
                        <?php endif; ?>
                    
                        <?php  endwhile; ?>
           
                  </div>

                  <?php endif; ?>
                  <?php wp_reset_postdata(); ?>
                </div>
                <p class="p-culture__profile-link mr-30">
                  <a href="<?php echo esc_url(home_url('works')); ?>">製作実績一覧を見る<i class="fa-solid fa-arrow-right"></i></a>
                </p><!-- /.p-culture__profile-ancour -->
                </div>
            </div><!-- /.view-wrapper -->
           
          </section>

          <div class="l-culture__image-wrap">
            <picture>
              <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/paragraf-bg.jpg" alt="" class="js-parallax" data-y="-150">
            </picture>
          </div><!-- /.l-culture__image-wrap -->

          <section class="p-culture" id="about">
            <div class="l-cul__bg animated__clipDownView --delay1"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/m-bg2.png" alt=""></div><!-- /.l-ch__bg -->
            <div class="l-inner">
              <h2 class="c-heading__lv2 --gradation"><span class="heading__en">Profile</span> <span class="heading__ja">私について</span></h2><!-- /.c-heading__lv2 -->

              <div class="l-culture__container mt-64 animated__circleView">

              <?php esc_url( get_template_part('template-contents/profile' , 'info') ); ?>

              </div><!-- /.l-culture__container -->
              <p class="p-culture__profile-link">
                <a href="echo <?php  echo esc_url(home_url('profile')); ?>">詳しいプロフィールを見る<i class="fa-solid fa-arrow-right"></i></a>
              </p><!-- /.p-culture__profile-ancour -->

              <h2 class="c-heading__lv2 --gradation --mt24" id="flow"><span class="heading__en">FLOW</span> <span class="heading__ja">流れについて</span></h2><!-- /.c-heading__lv2 -->
             
              <div class="l-culture__flex-columns">
             
              <?php esc_url( get_template_part('template-contents/flow' , 'info') ); ?>
              <?php esc_url( get_template_part('template-contents/flow' , 'price') ); ?>
             
              <div class="c-culture__modal-btn js-modal-btn">
                  <button class="c-culture__modal-link">
                    <span>詳細を見る</span>
                  </button><!-- /.c-bl__modal-btn -->
                </div><!-- /.c-culture__modal-btn -->
         
            </div><!-- /.l-culture__flex -->
            </div><!-- /.l-culture__content -->
          
          </section>

         

          <section class="p-faq" id="faq">
            <div class="l-faq__bg animated__clipDownView --delay1"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/m-bg2.png" alt=""></div><!-- /.l-ch__bg -->
            <div class="l-inner">
    
            <?php esc_url( get_template_part('template-contents/faq' , 'content' ) ); ?>
              </div>
            </section>

            <section class="p-contact" id="contact">
              <div class="l-contact__bg animated__clipDownView --delay1"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/m-bg2.png" alt=""></div><!-- /.l-ch__bg -->
              <div class="l-contact__container l-inner">
                <div class="l-contact__block animated__fadeIn">
                  <div class="p-contact__top-desc">
                  <h2 class="c-heading__lv2 --gradation --mt24"><span class="heading__en">Contact</span> <span class="heading__ja">お問い合わせ</span></h2><!-- /.c-heading__lv2 -->
                  <p class="contact__desc">お問い合わせありがとうございます。<br>
                    制作のご相談やご依頼は、こちらからできます<br>
                    制作に関わることやその他きがるにご相談ください</p><!-- /.contact__desc -->
                    </div>

                <?php echo do_shortcode('[contact-form-7 id="79e322d" title="お問い合わせ"]'); ?>
              </div><!-- /.l-cta__block -->
              </div>
            </section><!-- /.cta -->

   
    </main>

    <div class="l-modal-bg "></div><!-- /.l-modal-bg -->

<div class="c-culture__modal-area JS-modal">
  <div class="c-modal__swiper-container">
    <div class="swiper c-modal__swiper">
      <div class="swiper-wrapper c-modal__swiper-wrapper">

      <?php esc_url( get_template_part('template-modal/price' , 'table1') ); ?>
      <?php esc_url( get_template_part('template-modal/price' , 'table2') ); ?>
        
     
      </div>
    </div>
  

  </div>
  <div class="swiper-button-prev c-modal-button-prev"></div>
  <div class="swiper-button-next c-modal-button-next"></div>

</div><!-- /.c-culture__modal-area -->
           
    <?php esc_url( get_template_part('template-modal/privacy') ); ?>
          

    <?php get_footer(); ?>

		
  