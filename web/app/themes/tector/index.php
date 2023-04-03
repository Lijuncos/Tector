<?php defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

get_header(); ?>

    <main class="main-content">
        <?php
        if ( have_posts() ) :
        
            while ( have_posts() ) : the_post();
                ?>
                <article <?php post_class(); ?>>
                    <!-- <h1><?php the_title();?></h1> -->
                    <!-- <header class="entry-header">
                        
                        <?php //the_title( '<h1 class="entry-title">', '</h1>' ); ?>
                    </header>.entry-header -->
                
                    <div class="entry-content">
                        <?php the_content(); //esc_html__( 'Continue reading &rarr;', 'tector' )?>
                    </div><!--.entry-content-->
                
                </article><!--#post-##-->
                
                <?php
                
            endwhile;
        
        else ://get_template_part ('partials/content-none'); 
            
        endif;
        ?>
    </main><!--.site-content-->

<?php get_footer(); ?>