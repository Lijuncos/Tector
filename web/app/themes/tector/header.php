<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="profile" href="https://gmpg.org/xfn/11">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css">
        <?php wp_head(); ?>
    </head>
    
    <body>
        <?php wp_body_open(); ?>
        <header class="site-header">
            <div class="header-logo">
                <img src="<?php bloginfo('template_url');?>/img/logo-tector.png" alt="Holcim Tector">
            </div>
            <div class="navbar container">
                
                <p class="site-description" style="display:none;"><?php bloginfo( 'description' ); ?></p>
                
                <?php wp_nav_menu( array('tector' => 'menu',) );?>

                <button class="menu-button">
                    <span></span><span></span><span></span>
                </button>
            </div>
            <div class="menu-mobile">
                <?php wp_nav_menu( array('tector' => 'menu',) );?>
            </div>
        </header><!-- .site-header -->