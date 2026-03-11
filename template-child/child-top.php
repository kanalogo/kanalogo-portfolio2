<div class="p-child-top">
        <div class="l-inner">
          
        <h2 class="c-child-heading__lv2"><?php 
        $post = get_queried_object();
        echo strtoupper($post->name); ?>
        <?php $ja_copy = get_field('ja_copy'); ?>
        <?php if ($ja_copy) : ?>
            <span><?php echo esc_html($ja_copy); ?></span></h2><!-- /.c-child-heading__lv2 -->
            <?php endif; ?>
        <div class="c-bread__inner">
        <?php 
        if (function_exists( 'bcn_display')) {
           bcn_display(); }?>
        </div><!-- /.c-bread__inner -->

      </div><!-- /.l-inner -->
      </div><!-- /.p-child-top -->