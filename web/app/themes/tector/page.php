<?php
/*
  Template Name: tector
*/

get_header(); ?>

	<?php if ( have_posts() ) : ?>

		<?php while ( have_posts() ) : the_post(); ?>
			<?php 
			the_content();
			//get_template_part( 'partials/content', 'page' ); 
			?>

		<?php endwhile; ?>

	<?php endif; ?>


<?php get_footer(); ?>
