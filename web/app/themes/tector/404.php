<?php
/**
 * The template for displaying 404 pages (Not Found)
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */

get_header(); ?>

	<div id="content" class="e404" role="main">
		<i class="fas fa-times"></i>
		<h1 class="page-title"><?php _e( '404 No se pudo encontrar la pagina solicitada', 'tector' ); ?></h1>
		<div class="page-wrapper">
			<div class="page-content">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
					Volver al Inicio
				</a>
			</div><!-- .page-content -->
		</div><!-- .page-wrapper -->

	</div><!-- #content -->

<?php get_footer(); ?>
