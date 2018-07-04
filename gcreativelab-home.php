<?php
/*
Template Name: GCREATIVELAB HOME
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
												
												<!-- Main Slide Content -->
												<div class="address">INFO@GRAYLING.COM</div>
												<div class="explore">DISCOVER THE STUDIO
													  <img src="<?php echo get_template_directory_uri(); ?>/assets/images/explore_arrow.svg" width="10" height="9" alt="">
												</div>
											</div>
											<div class="swiper-slide home-cs-slide">Slide 1</div>
											<div class="swiper-slide home-cs-slide">Slide 2</div>
											<div class="swiper-slide home-cs-slide">Slide 3</div>
											<div class="swiper-slide home-cs-slide">Slide 4</div>
											<div class="swiper-slide home-cs-slide">Slide 5</div>
										</div>
										<!-- Add Pagination -->
										<div class="swiper-pagination"></div>
									</div>
								<!--  -->
						</div>
					</div>
				</div>

			</main> <!-- end #main -->
		    
		</div> <!-- end #inner-content -->
	
	</div> <!-- end #content -->

<?php get_footer(); ?>
