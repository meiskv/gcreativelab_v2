<?php
/*
Template Name: GCREATIVELAB ABOUT
*/

get_header(); ?>
			
	<div class="content">
	
		<div class="inner-content grid-x grid-margin-x grid-padding-x">
	
		    <main id="main-container" class="main small-12 medium-12 large-12 cell" role="main">
			<div id="barba-wrapper">
					<div class="barba-container" data-namespace="aboutpage">
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
						<div class="swiper-slide content content-about">
						<div class="left-overlay"></div>
							<div class="menu-button">
								<img class="menu-icn" src="<?php echo get_template_directory_uri(); ?>/assets/images/menu-lines.svg" width="18" height="15" alt="">
							</div>
								<!--  -->

								<!-- Slider main container -->
						<div class="about-container">
							<!-- Additional required wrapper -->
							<div class="swiper-wrapper">
								<!-- Slides -->
								<div class="swiper-slide main-slide">
									<div class="about-wrapper">
										<div class="left"> <!--  Left Starts -->
											<div class="content__holder about__holder">
												<div class="content__header">WE ARE</div>
												<div class="content__subheader">GCreative</div>
												<div class="content__description">
													
													<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	
													<?php the_content(); ?>
														
													<?php endwhile; endif; ?>	
												</div>
												<!-- <div class="content__btn">
													<a href="http://www.gcreativelab.com/services/">OUR SERVICES</a>
												</div> -->
												
											</div>
											<!-- <div class="address">©2018<i style="color: #D81C5C;">.</i> GCREATIVELAB<i style="color: #D81C5C;">.</i> LEGAL</div>
											<div class="explore about-explore">KNOW MORE ABOUT GRAYLING
													<img src="<?php echo get_template_directory_uri(); ?>/assets/images/explore_arrow.svg" width="10" height="9" alt="">
											  </div> -->
											<div class="content__hero movin__g">G</div>
										</div> <!--  Left Ends -->
										
									</div>
									
								</div>
								<div class="swiper-slide about__slide__fifty">
										<img src="<?php echo get_template_directory_uri(); ?>/assets/images/about-hero.svg" style="height:80%;" width="600" alt="">
								</div>
								<div class="swiper-slide about__slide__fifty__left">
										<img src="<?php echo get_template_directory_uri(); ?>/assets/images/about-connected-icon.svg" height="95" width="95" alt="">
										<div class="home__content__header_home">We are</div>
										<div class="about__content__subheader">CONNECTED</div>
										<div class="about__content__description">
												We are a part of Grayling Public Relations, a wholly owned subsidiary of Huntsworth PLC – a public relations focused group listed on the London Stock Exchange. This allows us to provide truly integrated strategic services, and worldwide reach with local expertise and knowledge, combined with unrivalled and diverse sector experience.	
										</div>
								</div>
								<div class="swiper-slide about__whole_map">
										<img src="<?php echo get_template_directory_uri(); ?>/assets/images/about-map.svg" style="height:100%;" width="100%" alt="">
										<!-- <?php get_template_part( 'parts/svg', 'globalmap' ); ?> -->
								</div>
								<div class="swiper-slide about__slide__fifty about__huntsworth">
										<img src="<?php echo get_template_directory_uri(); ?>/assets/images/about-huntsworth.svg" style="height:90%;" width="100%" alt="">
								</div>
								<div class="swiper-slide about__slide__fifty__left_1">
										<img src="<?php echo get_template_directory_uri(); ?>/assets/images/about-reputation-icon.svg" height="95" width="95" alt="">
										<div class="home__content__header_home">We build</div>
										<div class="about__content__subheader">DESIGN REPUTATION</div>
										<div class="about__content__description">
												We are a part of Grayling Public Relations, a wholly owned subsidiary of Huntsworth PLC – a public relations focused group listed on the London Stock Exchange. This allows us to provide truly integrated strategic services, and worldwide reach with local expertise and knowledge, combined with unrivalled and diverse sector experience.	
										</div>
								</div>
								<div class="swiper-slide slide-about">

										<?php get_template_part( 'parts/svg', 'exactmap' ); ?>								
								</div>

								<div class="swiper-slide page__pagination">
										<div class="page__pagination">
											<a href="http://www.gcreativelab.com/services/" class="btn__top">
												
												<span>OUR SERVICES</span>
												<img src="<?php echo get_template_directory_uri(); ?>/assets/images/pagination_up.svg" height="62" width="62" alt="">
												<div class="bg__arrow">
														<img src="<?php echo get_template_directory_uri(); ?>/assets/images/pagination-icn/arrow-01.svg" height="316" width="316" alt="">
												</div>
											</a>
											<a href="http://www.gcreativelab.com/case/" class="btn__btm">
													
													<span>OUR WORK</span>
												<img src="<?php echo get_template_directory_uri(); ?>/assets/images/pagination_down.svg" height="62" width="62" alt="">
												<div class="bg__arrow">
														<img src="<?php echo get_template_directory_uri(); ?>/assets/images/pagination-icn/arrow-02.svg" height="316" width="316" alt="">
												</div>
											</a>
										</div>
								</div>

								<!-- Inner Slide End -->
							</div>
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
