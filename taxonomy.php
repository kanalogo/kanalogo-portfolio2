
    
   <?php get_header(); ?>

<main class="l-child-main ">

<?php esc_url( get_template_part('template-child/child' , 'top') ); ?>

  <section class="p-works">

  
    <div class="l-inner">
      <div class="l-works__grid">
 
      <?php if ( have_posts() ): ?>
        <?php while( have_posts()): the_post(); ?>
        <?php esc_url( get_template_part('template-child/relation' , 'parts') ); ?>
     
    <?php  endwhile; ?>
    <?php endif; ?>

   
    </div><!-- /.l-works__grid -->
    </div>
  </section><!-- /.detail -->
 
 




      
</main>
    
<?php get_footer(); ?>