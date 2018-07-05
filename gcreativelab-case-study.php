<?php
/*
Template Name: GCREATIVELAB CASE STUDY
*/

get_header(); ?>
			
	<div class="content">
	
		<div class="inner-content grid-x grid-margin-x grid-padding-x">
	
		    <main id="main-container" class="main small-12 medium-12 large-12 cell" role="main">
				
				<!-- Swiper -->
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide menu">
                        <?php glab_menu(); ?>
							<!-- <ul id="menu">
									<li><a href="http://localhost:8888/DEV/gcreative/about/">About</a></li>
									<li><a href="http://localhost:8888/DEV/gcreative/services/">Services</a></li>
									<li><a href="http://localhost:8888/DEV/gcreative/case/">Case Study</a></li>
									<li><a href="http://localhost:8888/DEV/gcreative/team/">Team</a></li>
									<li><a href="http://localhost:8888/DEV/gcreative/contact/">Contact</a></li>
							</ul> -->

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
                                

                                <div class="case-study-slide-container">
										<div class="swiper-wrapper">
											<div class="swiper-slide main-slide">
                                                    <div class="wrapper case-study">
                                                            <div class="left"> <!--  Left Starts -->
                                                                <div class="content__holder">
                                                                    <div class="content__header">WE ARE</div>
                                                                    <div class="content__subheader">OUR WORK</div>
                                                                    <div class="content__description">
                                                                        <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac eleifend velit. In vestibulum laoreet orci vitae efficitur. Mauris faucibus tempor quam ut lacinia. Cras ultricies risus at nisi faucibus pulvinar. Praesent cursus tellus lobortis erat facilisis aliquet. Donec magna lectus, cursus non tellus vel, tristique pharetra ligula.
                                                                        </p>
                                                                    </div>
                                                                    <div class="content__btn">
                                                                        <a href="http://localhost:8888/DEV/gcreative/case/">VISIT OUR CASE STUDY</a>
                                                                    </div>
                                                                    
                                                                </div>
                                                                <div class="address">INFO@GRAYLING.COM</div>
                                                                <div class="explore">DISCOVER THE STUDIO
                                                                      <img src="<?php echo get_template_directory_uri(); ?>/assets/images/explore_arrow.svg" width="10" height="9" alt="">
                                                                </div>
                                                                <div class="content__hero">G</div>
                                                            </div> <!--  Left Ends -->
                                                            </div>
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
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                                        Cras ac eleifend velit. In vestibulum laoreet orci vitae 
                                                                        efficitur. Mauris faucibus tempor quam ut lacinia. Cras 
                                                                        ultricies risus at nisi faucibus pulvinar. Praesent cursus 
                                                                        tellus lobortis erat facilisis aliquet. Donec magna lectus, 
                                                                        cursus non tellus vel, tristique pharetra ligula.</p>
                                                            </div>
                                                            <div class="case__button">
                                                                <a href="<?php echo get_permalink(); ?>">LEARN MORE</a>
                                                            </div>

                                                        </div>
                                                        <!-- CASE LEFT ENDS -->

                                                        <!-- /////////////// -->

                                                        <!-- CASE STARTS ENDS -->
                                                        <div class="case__right" style="background: url(<?php echo get_field('home_slide_cover')['url']; ?>) no-repeat center center;
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

			</main> <!-- end #main -->
		    
		</div> <!-- end #inner-content -->
	
	</div> <!-- end #content -->

<?php get_footer(); ?>
