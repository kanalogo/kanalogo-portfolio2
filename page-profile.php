
<?php get_header(); ?>

    <main class="l-child-main ">
      <?php if ( have_posts() ): ?>
       <?php while( have_posts()): the_post(); ?> 
    


       <?php esc_url( get_template_part('template-child/child' , 'top') ); ?>

      <section class="p-works --mt0">
        
        <div class="l-inner">
           
        <?php esc_url( get_template_part('template-contents/profile' , 'info') ); ?>

          </div><!-- /.l-inner -->
          <?php the_content(); ?>
        

      </section><!-- /.detail -->
     
      <?php  endwhile; ?>
      <?php endif; ?>

  
        <section class="p-contact-banner">
        
          <button class="p-contact-banner__btn">
            <a href="<?php echo home_url('/home#contact'); ?>">お問い合わせはこちら</a>
          </button><!-- /.p-contact-banner__btn -->
        </section><!-- /.p-contact-banner -->

          
    </main>
		
    <?php get_footer(); ?>