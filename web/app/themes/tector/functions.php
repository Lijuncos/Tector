<?php
function tector_setup() {
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'title-tag' );
    add_theme_support( 'custom-logo', array(
        'height' => 240,
        'width' => 240,
        'flex-height' => true,
    ) );
    register_nav_menus( array(
        'menu' => __( 'Primary Menu', 'tector' ),
    ));
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );

}
add_action( 'after_setup_theme', 'tector_setup' );

remove_filter('the_content', 'wpautop');
/*function tector_sidebar() {
    register_sidebar( array(
        'name' => __( 'Primary Sidebar', 'tector' ),
        'id'   => 'sidebar-1',
    ) );
}
add_action( 'widgets_init', 'tector_sidebar' );*/

function tector_enqueue () {

    //ESTILOS
    wp_enqueue_style( 'estilos', get_template_directory_uri () . '/styles.css' );
    wp_enqueue_style( 'fuentes', get_template_directory_uri () . '/fonts/fuentes.css' );
    
    //JAVASCRIPT
    wp_enqueue_script ('funciones', get_template_directory_uri (). '/js/functions.js');
}
add_action ('wp_enqueue_scripts', 'tector_enqueue');

remove_action( 'shutdown', 'wp_ob_end_flush_all', 1 );