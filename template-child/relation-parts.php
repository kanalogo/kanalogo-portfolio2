
<?php if( is_single()): ?>
<div class="swiper-slide relation__swiper-slide">
    <?php endif; ?>
<a href="<?php the_permalink( ); ?>">
          <div class="c-relation__card">
            <picture class="c-relation__image">
              <?php if( has_post_thumbnail()): ?>
                <?php the_post_thumbnail(''); ?>
              <?php else: ?>
              <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/chal-4.jpg" alt="">
              <?php endif; ?>
            </picture><!-- /.c-relation__image -->
            <div class="c-relation__desc">
              <p class="c-relation__txt"><?php
                $title = get_the_title();
                $words = explode(' ', $title);

                foreach ($words as $word) {
                  echo '<span>' . esc_html($word) . '</span> ';
                }
                ?></p><!-- /.c-relation__txt -->
                <?php if (have_rows('site_card')) : ?>
               <ul class="c-relation__cats">
               <?php while (have_rows('site_card')) : the_row(); ?>

                <li class="c-relation__cat">
                  <span class="c-relation__cat-ttl">制作期間</span>
                  <span class="c-relation__cat-txt"><?php echo esc_html(get_sub_field('card_term')); ?></span>
                </li><!-- /.c-relation__cat -->
                <li class="c-relation__cat">
                  <span class="c-relation__cat-ttl">価格(想定)</span>
                  <span class="c-relation__cat-txt"><?php echo esc_html(get_sub_field('card_price')); ?></span>
                </li><!-- /.c-relation__cat -->
                <li class="c-relation__cat">
                  <span class="c-relation__cat-ttl">技術</span>
                  <span class="c-relation__cat-txt"><?php echo esc_html(get_sub_field('site_tec')); ?></span>
                </li><!-- /.c-relation__cat -->
                <?php endwhile; ?>
              </ul><!-- /.c-relation__cats -->
              <?php endif; ?>
            </div><!-- /.c-relation__desc -->
          </div><!-- /.c-relation__card -->
        </a>
        <?php if( is_single()): ?>
        </div>
        <?php endif; ?>