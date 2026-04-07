<?php 
  $title = "新たな価値を提供する | Kanalogo Studio";
  $description = "Kanalogo Studioのポートフォリオ デザインカンプの再現、CMS設計、レスポンシブ対応、アニメーション実装、公開までの進行管理意識 shopifyでのEC構築も請負います";
?>

<!-- meta情報 -->
<title><?php echo $title; ?></title>
<meta name="description" content="<?php echo $description; ?>">

<!-- ogp -->
<meta property="og:url" content="<?php esc_url(home_url('/')); ?>" />
<meta property="og:type" content="website" />
<meta property="og:title" content="<?php echo $title; ?>" />
<meta property="og:description" content="<?php echo $description; ?>" />
<meta property="og:site_name" content="<?php echo $title; ?>" />
<meta property="og:image" content="<?php esc_url(get_template_directory_uri()); ?>/assets/img/ogp_1.png" />
<meta property="og:locale" content="ja_JP" />
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:description" content="<?php echo $description; ?>" />

<!-- favicon -->
<link rel="icon" href="<?php esc_url(get_template_directory_uri()); ?>/assets/img/favicon.ico" type="image/svg+xml">
<link rel="apple-touch-icon" href="<?php esc_url(get_template_directory_uri()); ?>/assets/img/apple-touch-icon.png" sizes="180x180">
<link rel="icon" href="<?php esc_url(get_template_directory_uri()); ?>/assets/img/android-icon.png" sizes="192x192">



