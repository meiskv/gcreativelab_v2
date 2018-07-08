<?php
/*
Template Name: GCREATIVELAB SERVICES
*/

get_header(); ?>
			
	<div class="content">
	
		<div class="inner-content grid-x grid-margin-x grid-padding-x">
	
		    <main id="main-container" class="main small-12 medium-12 large-12 cell" role="main">
			<div id="barba-wrapper">
			<div class="barba-container" data-namespace="srvcpage">
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
                                <div class="wrapper services">
                                    <div class="left"> <!--  Left Starts -->
                                        <div class="content__holder">
                                            <div class="content__header">OUR CORE</div>
                                            <div class="content__subheader">DISCIPLINES</div>
                                            <div class="content__description">
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac eleifend velit. In vestibulum laoreet orci vitae efficitur. Mauris faucibus tempor quam ut lacinia. Cras ultricies risus at nisi faucibus pulvinar. Praesent cursus tellus lobortis erat facilisis aliquet. Donec magna lectus, cursus non tellus vel, tristique pharetra ligula.
                                                </p>
                                            </div>
                                            <div class="content__btn">
                                                <a href="http://www.gcreativelab.com/case/">SEE OUR CASE STUDY</a>
                                            </div>
                                            
                                        </div>
                                        <div class="address">INFO@GRAYLING.COM</div>
										<div class="content__hero">G</div>
										
                                    </div> <!--  Left Ends -->
                                    <div class="right slick-right">
											<div class="slick-services">
												<div class="slick-services-holder">
														<div class="slick-services-list">
															<img src="<?php echo get_template_directory_uri(); ?>/assets/images/services-icn/strategy.svg" width="122" height="132" alt="">
															<h1>Strategy</h1>
														</div>
												</div>
												<div class="slick-services-holder">
														<div class="slick-services-list">
															<img src="<?php echo get_template_directory_uri(); ?>/assets/images/services-icn/design.svg" width="122" height="132" alt="">
															<h1>Design</h1>
														</div>
												</div>
												<div class="slick-services-holder">
														<div class="slick-services-list">
															<img src="<?php echo get_template_directory_uri(); ?>/assets/images/services-icn/production.svg" width="122" height="132" alt="">
															<h1>Production</h1>
														</div>
												</div>
												<div class="slick-services-holder">
														<div class="slick-services-list">
															<img src="<?php echo get_template_directory_uri(); ?>/assets/images/services-icn/social-media.svg" width="122" height="132" alt="">
															<h1>Communications</h1>
														</div>
												</div>
												<div class="slick-services-holder">
														<div class="slick-services-list">
															<img src="<?php echo get_template_directory_uri(); ?>/assets/images/services-icn/public-relation.svg" width="122" height="132" alt="">
															<h1>Social Media</h1>
														</div>
												</div>
												
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
