<?php
/*
Template Name: GCREATIVELAB CASE STUDY
*/

get_header(); ?>
			
	<div class="content">
	
		<div class="inner-content grid-x grid-margin-x grid-padding-x">
	
		    <main id="main-container" class="main small-12 medium-12 large-12 cell" role="main">
            <div id="barba-wrapper">
                <div class="barba-container" data-namespace="casepage">
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
                                

                                <div class="case-study-slide-container">
										<div class="swiper-wrapper">
											<div class="swiper-slide main-slide">
                                                    <div class="wrapper case-study">
                                                            <div class="left"> <!--  Left Starts -->
                                                                <div class="case__study__holder">
                                                                    <div class="content__header">We are</div>
                                                                    <div class="content__subheader">OUR WORK</div>
                                                                    <div class="content__description">
                                                            
                                                                        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

                                                                        <?php the_content(); ?>
                                                                            
                                                                        <?php endwhile; endif; ?>
                                                                    </div>
                                                                    <!-- <div class="content__btn">
                                                                        <a href="http://www.gcreativelab.com/contact/">CONTACT US</a>
                                                                    </div> -->
                                                                    
                                                                </div>
                                                                <!-- <div class="address">©2018<i style="color: #D81C5C;">.</i> GCREATIVELAB<i style="color: #D81C5C;">.</i> LEGAL</div>
                                                                <div class="explore">WHO WE'VE WORK FOR
                                                                      <img src="<?php echo get_template_directory_uri(); ?>/assets/images/explore_arrow.svg" width="10" height="9" alt="">
                                                                </div> -->
                                                                <div class="content__hero movin__g">G</div>
                                                            </div> <!--  Left Ends -->
                                                            </div>
												<!-- Main Slide Content -->
												
                                            </div>
                                            
                                            <?php
                                            
                                            $paged          = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
                                            $posts_per_page = 10;
                                            $args = array(
                                                'post_type'         => 'case-study',
                                                'posts_per_page'    => $posts_per_page,
                                                'paged'             => $paged,
                                                'order'             => 'ASC',
                                            );
                                            $custom_query_case = new WP_Query( $args ); 
                                            $number = 0;
                                            ?>

                                            <?php if ( $custom_query_case->have_posts() ) : ?>
                                            <?php while ( $custom_query_case->have_posts() ): $custom_query_case->the_post(); global $post; $post_meta = get_post_meta($post->ID); ?>
                                            <?php
                                                $image = get_field('client_logo');
                                                $size = 'large';
                                                $number++;
                                        $width = $image['sizes'][ $size . '-width' ];
                                        $height = $image['sizes'][ $size . '-height' ];
                                            ?>

											<div class="swiper-slide case-slide">
                                                
                                                <div class="case__holder">
                                                        <!-- CASE STARTS ENDS -->
                                                        <div class="case__left">

                                                            <div class="case__title">
                                                                <h1><?php echo the_title(); ?></h1>
                                                            </div>
                                                            <div class="case__deliverables">
                                                                <h4><?php the_field('short_deliverables');?></h4>
                                                            </div>
                                                            <div class="case__description">
                                                            <p><?php the_field('description_excerpt'); ?></p>
                                                            </div>
                                                            <div class="case__button">
                                                                <a href="<?php echo get_permalink(); ?>">LEARN MORE</a>
                                                            </div>

                                                        </div>
                                                        <!-- CASE LEFT ENDS -->

                                                        <!-- /////////////// -->

                                                        <!-- CASE STARTS ENDS -->
                                                        <div class="case__right" style="background: url(<?php echo get_field('work_cover')['url']; ?>) no-repeat center center;
                                                                background-size: cover;
                                                                -webkit-background-size: cover;
                                                                -moz-background-size: cover; 
                                                                -o-background-size: cover;">
                                                            <!-- <img src="<?php echo get_field('home_slide_cover')['url']; ?>" alt=""> -->
                                                        </div>
                                                        <!-- CASE LEFT ENDS -->
                                                </div>
                                            </div>


                                            <?php endwhile; ?>
                                            <?php endif; ?>



                                           
                                                
											
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
