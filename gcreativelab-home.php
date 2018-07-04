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
												
												<!--  -->
									<div class="wrapper home">
                                    <div class="left"> <!--  Left Starts -->
                                        <div class="content__holder">
                                            <div class="home__content__header">Strategy</div>
                                            <div class="home__content__header">Design</div>
											<div class="home__content__header">Production</div>
                                            <div class="home__content__btn">
                                                <button>VISIT OUR CASE STUDY</button>
                                            </div>
                                            
                                        </div>
                                        <div class="address">INFO@GRAYLING.COM</div>
                                        <div class="content__hero">G</div>
                                    </div> <!--  Left Ends -->
                                </div>
								<!--  -->
												<!-- Main Slide Content -->
												<div class="address">INFO@GRAYLING.COM</div>
												<div class="explore">DISCOVER THE STUDIO
													  <img src="<?php echo get_template_directory_uri(); ?>/assets/images/explore_arrow.svg" width="10" height="9" alt="">
												</div>
											</div>
											<?php 
												for ($x = 1; $x <=5; $x++) {
												?>
											<div class="swiper-slide">
													<div class="case__home__holder">
														<div class="case__home__img">
															<img src="<?php echo get_template_directory_uri(); ?>/assets/images/case__hero.jpg" alt="">
														</div>
														<div class="case__home__category">
															<h4>CASE STUDY</h4>
														</div>
														<div class="case__home__meta">
																<div class="case__home__date">
																	<h4>June 26 - 2018</h4>
																</div>
																<div class="case__home__title"><h1>MEYDAN EQUINE</h1></div>
																<div class="case__home__btn">
																	<button>READ MORE</button>
																</div>
														</div>
													<div class="case__home__number">.0<?php echo $x; ?></div>
													</div>
												</div>
											<?php
											}
											?>
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
