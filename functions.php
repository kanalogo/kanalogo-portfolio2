<?php

/* ======================================== 
    テーマの設定
======================================== */

function my_setup() {
    add_theme_support('post-thumbnails'); // アイキャッチ画像を有効化
    add_theme_support('automatic-feed-links'); // 投稿とコメントのRSSフィードのリンクを有効化
    add_theme_support('title-tag'); // タイトルタグ自動生成
    add_theme_support('menus'); // タイトルタグ自動生成
    add_theme_support(
    'html5', //HTML5でマークアップ
    array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'excerpt',

    )
    );
}
add_action('after_setup_theme', 'my_setup');

/* ======================================== 
    css, jsの読み込み
======================================== */
function my_script_init() {
    wp_enqueue_style('css-swiper', get_template_directory_uri() . '/assets/css/lib/swiper-bundle.min.css');
    wp_enqueue_style('style', get_template_directory_uri() . '/assets/scss/style.css', filemtime(get_theme_file_path('/assets/scss/style.css')), true);
    wp_enqueue_script('js-swiper', get_template_directory_uri() . '/assets/js/lib/swiper-bundle.min.js');
    wp_enqueue_script( 'my', get_template_directory_uri() . '/assets/js/main.js', array( 'jquery' ), '1.0.2', true );
    wp_enqueue_script( 'animate', get_template_directory_uri() . '/assets/js/scrollAnime.js', array( 'jquery' ), '1.0.3', true );
    wp_enqueue_script( 'swiper', get_template_directory_uri() . '/assets/js/swiper.js', array( 'jquery' ), '1.0.1', true );
}
add_action('wp_enqueue_scripts', 'my_script_init');


/*====================================================
# 投稿者アーカイブにアクセスされたらリダイレクト
=====================================================*/
function author_archive_redirect() {
    if( is_author() ) {
        wp_redirect( home_url());
        exit;
    }
}
add_action( 'template_redirect', 'author_archive_redirect' );

/*====================================================
# REST APIの出力を制限
=====================================================*/
function filter_rest_endpoints( $endpoints ) {
    if ( isset( $endpoints['/wp/v2/users'] ) ) {
        unset( $endpoints['/wp/v2/users'] );
    }
    if ( isset( $endpoints['/wp/v2/users/(?P<id>[\d]+)'] ) ) {
        unset( $endpoints['/wp/v2/users/(?P<id>[\d]+)'] );
    }
    return $endpoints;
}
add_filter( 'rest_endpoints', 'filter_rest_endpoints' );


/*  ====================================
    カスタム投稿タイプの追加 
    ==================================== */

add_action('init', 'create_post_type');

function create_post_type() {
    register_post_type(
    'works',
    array(
        'label' => '制作実績',
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'supports' => array(
            'title',
            'editor',
            'thumbnail',
            'revisions',
            'excerpt',

        ),
    )
    );
    register_taxonomy(
    'contents-cat',
    'works',
    array(
        'label' => 'カテゴリー',
        'hierarchical' => true,
        'public' => true,
        'show_in_rest' => true,
    )
    );
    register_taxonomy(
        'contents-type',
        'works',
        array(
            'label' => 'サイト種類',
            'hierarchical' => true,
            'public' => true,
            'show_in_rest' => true,
        )
        );
    
}

/*  ===============================================
    スラッグ名が日本語だったら自動的に投稿タイプ＋id付与へ
    変更（スラッグを設定した場合は適用しない）
    =============================================== */
function auto_post_slug( $slug, $post_ID, $post_status, $post_type ) {
    if ( preg_match( '/(%[0-9a-f]{2})+/', $slug ) ) {
        $slug = utf8_uri_encode( $post_type ) . '-' . $post_ID;
    }
    return $slug;
}
add_filter( 'wp_unique_post_slug', 'auto_post_slug', 10, 4  );


/*  ===============================================
    functions.php	
    SVGをアップロードできるようにする
    =============================================== */
function add_file_types_to_uploads($file_types){

    $new_filetypes = array();
    $new_filetypes['svg'] = 'image/svg+xml';
    $file_types = array_merge($file_types, $new_filetypes );

    return $file_types;
}
add_action('upload_mimes', 'add_file_types_to_uploads');


/*  ===============================================
	管理画面 サイドバーのカスタマイズ
    ===============================================*/

add_action( 'admin_menu', 'remove_menus' );
    function remove_menus(){
    // remove_menu_page( 'index.php' ); //ダッシュボード
    remove_menu_page( 'edit.php' ); //投稿メニュー
    //remove_menu_page( 'upload.php' ); //メディア
    //remove_menu_page( 'edit.php?post_type=page' ); //ページ追加
    remove_menu_page( 'edit-comments.php' ); //コメントメニュー
    //remove_menu_page( 'themes.php' ); //外観メニュー
    //remove_menu_page( 'plugins.php' ); //プラグインメニュー
    //remove_menu_page( 'tools.php' ); //ツールメニュー
    //remove_menu_page( 'options-general.php' ); //設定メニュー
}


/*  =============================================
    Contact Form 7で自動挿入されるPタグ、brタグを削除
    ============================================= */
add_filter('wpcf7_autop_or_not', 'wpcf7_autop_return_false');
function wpcf7_autop_return_false() {
  return false;
}

/*  =============================================
    問い合わせフォームのみreCAPTCHAを読み込ませる
    ============================================= */
// function load_recaptcha_js() {
//     if ( ! is_page( 'contact' ) ) {
//     wp_deregister_script( 'google-recaptcha' );
//     }
//     }
//     add_action( 'wp_enqueue_scripts', 'load_recaptcha_js',100 );


function remove_archive_title_prefix($title) {

    if (is_category()) {
      $title = single_cat_title('', false);
  
    } elseif (is_tag()) {
      $title = single_tag_title('', false);
  
    } elseif (is_tax()) {
      $title = single_term_title('', false);
  
    } elseif (is_post_type_archive()) {
      $title = post_type_archive_title('', false);
  
    }
  
    return $title;
  }
  
  add_filter('get_the_archive_title', 'remove_archive_title_prefix');


  /*  ====================================
    自動挿入されるPタグを消す
    ==================================== */

  function remove_wpautop_on_page_content() {
    if (is_page()) {
      remove_filter('the_content', 'wpautop');
    }
  }
  add_action('wp', 'remove_wpautop_on_page_content');