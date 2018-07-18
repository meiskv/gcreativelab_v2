<?php
/*
Template Name: GCREATIVELAB HOME OLD
*/

get_header(); ?>
			
	<div class="content">
	
		<div class="inner-content grid-x grid-margin-x grid-padding-x">
	
		    <main id="main-container" class="main small-12 medium-12 large-12 cell" role="main">
			<div id="barba-wrapper">
					<div class="barba-container" data-namespace="homepage">
				<!-- Swiper -->
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide menu">
							
						<?php glab_menu(); ?>
								

						<div class="home__address">
							<h5>Contact:</h5>
							<div class="three__column__address">
								<div>OFFICE 214, BUILDING 4, DUBAI MEDIA CITY, PO BOX 24554, DUBAI, UAE</div>
								<div><a href="mailto:info@grayling.com">info@grayling.com</a>+971 02 XXX XXXX</div>
								<div>For job and Intern inquiries please write <a href="mailto:positions@grayling.com">positions@grayling.com</a></div>
							</div>
						</div>
						
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
						<div class="left-overlay"></div>
							<div class="menu-button">
								<img class="menu-icn" src="<?php echo get_template_directory_uri(); ?>/assets/images/menu-lines.svg" width="18" height="15" alt="">
							</div>
								<!--  -->
								<div class="home-slide-container">
										<div class="swiper-wrapper">
											<div class="swiper-slide main-slide" id="main-slide">
												
												<!--  -->
									<div class="wrapper home">
                                    <div class="left"> <!--  Left Starts -->
                                        <div class="content__holder home__holder">
                                            <div class="home__content__header_home">Hello.</div>
											<div class="home__content__header">WE ARE <i class="header_animation">BOLD</i></div>
											<div class="content__description">
                                                
												<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

												<?php the_content(); ?>
													
												<?php endwhile; endif; ?>	
                                            </div>
                                            <div class="home__content__btn">
												
                                            </div>
                                            
                                        </div>
										<!-- <div class="address">©2018<i style="color: #D81C5C;">.</i> GCREATIVELAB<i style="color: #D81C5C;">.</i> LEGAL</div>
										<div class="explore">DISCOVER THE STUDIO
												<img src="<?php echo get_template_directory_uri(); ?>/assets/images/explore_arrow.svg" width="10" height="9" alt="">
										  </div> -->
                                        <div class="content__hero movin__g">G</div>
                                    </div> <!--  Left Ends -->
                                </div>
								<!--  -->
												<!-- Main Slide Content -->
												
											</div>

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
										

												
											<div class="swiper-slide swiper-cases">
													<div class="case__home__holder">
														<div class="case__home__img">
															<img src="<?php echo get_field('client_feature_image')['url']; ?>" alt="">
															<!-- <img src="http://localhost:8888/DEV/gcreative/uploads/2018/06/cover.jpg" alt=""> -->
														</div>
														
														<div class="case__home__meta">
																
																<div class="case__home__title"><h1><?php echo the_title(); ?></h1></div>
																<div class="case__home__date">
																	<h4><?php echo get_field('subtitle'); ?></h4>
																</div>
														</div>
														<div class="case__home__category">
															<!-- <h4>CASE STUDY</h4> -->
															<p><?php echo the_field('description_excerpt'); ?></p>
														</div>
														<div class="case__home__btn">
															<a href="<?php echo get_permalink(); ?>">READ MORE</a>
														</div>
													<!-- <div class="case__home__number">.0<?php echo $number; ?></div> -->
													</div>
												</div>
												<?php endwhile; ?>
											<?php endif; ?>
											
												
											</div>
										</div>
										<!-- Add Pagination -->
										<!-- <div class="swiper-pagination"></div> -->
										<span class="home__backBtn">SURPRISE PRESS ME</span>
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
