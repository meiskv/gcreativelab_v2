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
								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/menu-lines.svg" width="18" height="15" alt="">
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
												<div class="content__subheader">PASSIONATE</div>
												<div class="content__description">
													
													<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	
													<?php the_content(); ?>
														
													<?php endwhile; endif; ?>	
												</div>
												<div class="content__btn">
													<a href="http://www.gcreativelab.com/services/">OUR SERVICES</a>
												</div>
												
											</div>
											<div class="address">©2018<i style="color: #D81C5C;">.</i> GCREATIVELAB<i style="color: #D81C5C;">.</i> LEGAL</div>
											<div class="content__hero movin__g">G</div>
										</div> <!--  Left Ends -->
									</div>
								</div>
								<div class="swiper-slide slide-about">
										<img src="<?php echo get_template_directory_uri(); ?>/assets/images/about-hero.svg" height="600" width="600" alt="">
								</div>
								<div class="swiper-slide slide-about">
										<img src="<?php echo get_template_directory_uri(); ?>/assets/images/about-connected-icon.svg" height="95" width="95" alt="">
										<div class="home__content__header_home">WE ARE</div>
										<div class="content__subheader">CONNECTED</div>
										<div class="content__description">
												We are a part of Grayling Public Relations, a wholly owned subsidiary of Huntsworth PLC – a public relations focused group listed on the London Stock Exchange. This allows us to provide truly integrated strategic services, and worldwide reach with local expertise and knowledge, combined with unrivalled and diverse sector experience.	
										</div>
								</div>
								<div class="swiper-slide slide-about">
										<img src="<?php echo get_template_directory_uri(); ?>/assets/images/about-map.svg" height="100%" width="1900" alt="">
								</div>
								<div class="swiper-slide slide-about">
										<img src="<?php echo get_template_directory_uri(); ?>/assets/images/about-huntsworth.svg" height="600" width="600" alt="">
								</div>
								<div class="swiper-slide slide-about">
										<img src="<?php echo get_template_directory_uri(); ?>/assets/images/about-exact-map.svg" height="100%" width="2100" alt="">
								</div>
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
