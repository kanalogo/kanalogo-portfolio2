
    
   <?php get_header(); ?>

<main class="l-child-main ">

<?php esc_url( get_template_part('template-child/child' , 'top') ); ?>

  <section class="p-works">


    <div class="l-inner">

    <?php $types = get_terms( [ 'taxonomy' => 'contents-type']);
    if (!empty($types)): 
      $current_term = get_queried_object(); // 今表示中のターム取得
      ?>
    

        <div class="p-taxonomy__buttons">
        <ul>
          <?php foreach ($types as $type ): ?> 
            <?php
      $is_current = ($current_term && $current_term->term_id === $type->term_id);
    ?>
          <li class="p-taxonomy__button <?php echo $is_current ? 'current' : ''; ?>"><a href=" <?php echo get_term_link($type); ?>"><?php echo strtoupper($type->name) ?></a></li><!-- /.p-taxonomy__button -->
          <?php endforeach; ?>
        </ul>

        </div>

        <?php endif; ?>
      <div class="l-works__grid">
 
      <?php if ( have_posts() ): ?>
        <?php while( have_posts()): the_post(); ?>
        <?php esc_url( get_template_part('template-child/relation' , 'parts') ); ?>
     
    <?php  endwhile; ?>
    <?php endif; ?>

   
    </div><!-- /.l-works__grid -->

    <div class="p-pagenavi__inner">
    <?php if (function_exists( 'wp_pagenavi') ) { wp_pagenavi(); } ?>
    </div><!-- /.p-pagenavi__inner -->
    </div>
  </section><!-- /.detail -->
 
  <section class="p-contact-banner">
        
        <button class="p-contact-banner__btn">
          <a href="<?php echo home_url('/home#contact'); ?>">お問い合わせはこちら</a>
        </button><!-- /.p-contact-banner__btn -->
    </section><!-- /.p-contact-banner -->





      
</main>
    
<?php get_footer(); ?>