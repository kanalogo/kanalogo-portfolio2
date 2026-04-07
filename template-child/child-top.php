<div class="p-child-top">
        <div class="l-inner">
          
        <?php if (is_archive()): ?>
        <h2 class="c-child-heading__lv2"><?php 
        $post = get_queried_object();
        echo strtoupper($post->name); ?>
        <?php $ja_copy = get_field('ja_copy'); ?>
            <span><?php the_archive_title( ''); ?>一覧</span>
        </h2><!-- /.c-child-heading__lv2 -->
        <?php elseif (is_single()): ?>
            <h2 class="c-child-heading__lv2">
            <?php echo strtoupper(get_post_type()); ?>
             <span><?php echo esc_html(get_post_type_object(get_post_type())->labels->name); ?></span>
          </h2><!-- /.c-child-heading__lv2 -->
        <?php else: ?>
            <h2 class="c-child-heading__lv2">
            <?php echo esc_html(get_the_title()); ?>
        <?php $ja_copy = get_field('ja_copy'); ?>
        <?php if ($ja_copy) : ?>
            <span><?php echo strtoupper(esc_html($ja_copy)); ?></span>
            <?php endif; ?></h2><!-- /.c-child-heading__lv2 -->
        <?php endif; ?>
        <div class="c-bread__inner">
        <?php 
        if (function_exists( 'bcn_display')) {
           bcn_display(); }?>
        </div><!-- /.c-bread__inner -->

      </div><!-- /.l-inner -->
      </div><!-- /.p-child-top -->