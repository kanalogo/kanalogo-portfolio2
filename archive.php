
    
   <?php get_header(); ?>

    <main class="l-child-main ">

    <?php esc_url( get_template_part('template-child/child' , 'top') ); ?>

      <section class="p-works">

          <div class="l-inner">
        
      <?php $types = get_terms( [ 'taxonomy' => 'contents-type']);
    if (!empty($types)): ?>

        <div class="p-taxonomy__buttons">
        <ul>
          <?php foreach ($types as $type ): ?> 
          <li class="p-taxonomy__button"><a href=" <?php echo get_term_link($type); ?>"><?php echo strtoupper($type->name) ?></a></li><!-- /.p-taxonomy__button -->
          <?php endforeach; ?>
        </ul>

        <?php endif; ?>
       
        </div><!-- /.p-taxonomy-buttons -->
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