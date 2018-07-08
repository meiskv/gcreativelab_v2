<?php
/*
Template Name: GCREATIVELAB HOME
*/

get_header(); ?>
			
	<div class="content">
	
		<div class="inner-content grid-x grid-margin-x grid-padding-x">
	
		    <main id="main-container" class="main small-12 medium-12 large-12 cell" role="main">
				<div id="barba-wrapper">
					<div class="barba-container">
				<!-- Swiper -->
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide menu">
							
								<?php glab_menu(); ?>
								

						<div class="address">214, BUILDING 4, DUBAI MEDAI CITY, PO BOX 24554, DUBAI, UAE</div>
						
						<ul id="social">
							<li>FACEBOOK</li>
							<li>.</li>
							<li>INSTAGRAM</li>
							<li>.</li>
							<li>LINKEDIN</li>
							<li>.</li>
							<li>TWITTER</li>
						</ul>

						</div>
						<div class="swiper-slide content">
							<div class="menu-button">
								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/menu.svg" width="42" height="84" alt="">
							</div>
								<!--  -->
								<div class="home-slide-container">
										<div class="swiper-wrapper">
											<div class="swiper-slide main-slide">
												
												<!--  -->
									<div class="wrapper home">
                                    <div class="left"> <!--  Left Starts -->
                                        <div class="content__holder">
                                            <div class="home__content__header">Strategy</div>
                                            <div class="home__content__header">Design</div>
											<div class="home__content__header">Production</div>
                                            <div class="home__content__btn">
                                                <a href="http://localhost:8888/DEV/gcreative/case/">VISIT OUR CASE STUDY</a>
                                            </div>
                                            
                                        </div>
                                        <div class="address">INFO@GRAYLING.COM</div>
                                        <!-- <div class="content__hero">G</div> -->
                                    </div> <!--  Left Ends -->
                                </div>
								<!--  -->
												<!-- Main Slide Content -->
												<div class="address">INFO@GRAYLING.COM</div>
												<div class="explore">DISCOVER THE STUDIO
													  <img src="<?php echo get_template_directory_uri(); ?>/assets/images/explore_arrow.svg" width="10" height="9" alt="">
												</div>
											</div>
											<div class="swiper-slide swiper-slick">
													<div class="home-slick">
											<?php       
                                            $paged          = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
                                            $posts_per_page = 5;
                                            $args = array(
                                                'post_type'         => 'case-study',
                                                'posts_per_page'    => $posts_per_page,
                                                'paged'             => $paged,
                                                'order'             => 'ASC',
                                            );
                                            $custom_query = new WP_Query( $args ); 
                                            $number = 0;
                                            ?>

                                            <?php if ( $custom_query->have_posts() ) : ?>
                                            <?php while ( $custom_query->have_posts() ): $custom_query->the_post(); global $post; $post_meta = get_post_meta($post->ID); ?>
                                            <?php
                                                $image = get_field('client_logo');
                                                $size = 'large';
                                                $number++;
                                        $width = $image['sizes'][ $size . '-width' ];
                                        $height = $image['sizes'][ $size . '-height' ];
                                            ?>
										

											
													<div><?php echo $number; ?></div>
											
												
												<?php endwhile; ?>
											<?php endif; ?>
											<div>4</div>
											<div>5</div>
											<div>6</div>
										</div>
										</div>
											</div>
										</div>
										<!-- Add Pagination -->
										<!-- <div class="swiper-pagination"></div> -->
									</div>
								<!--  -->
						</div>
					</div>
				</div>
										</div>
										</div>
			</main> <!-- end #main -->
		    
		</div> <!-- end #inner-content -->
	
	</div> <!-- end #content -->

<?php get_footer(); ?>
