<?php
/*
Template Name: GCREATIVELAB ABOUT
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
                                <div class="wrapper">
                                    <div class="left"> <!--  Left Starts -->
                                        <div class="content__holder">
                                            <div class="content__header">WE ARE</div>
                                            <div class="content__subheader">PASSIONATE</div>
                                            <div class="content__description">
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac eleifend velit. In vestibulum laoreet orci vitae efficitur. Mauris faucibus tempor quam ut lacinia. Cras ultricies risus at nisi faucibus pulvinar.
                                                </p>
                                            </div>
                                            <div class="content__btn">
                                                <a href="http://localhost:8888/DEV/gcreative/services/">VISIT OUR CASE STUDY</a>
                                            </div>
                                            
                                        </div>
                                        <div class="address">INFO@GRAYLING.COM</div>
                                        <div class="content__hero">G</div>
                                    </div> <!--  Left Ends -->
                                    <div class="right">
                                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/about__hero.svg" height="600" width="600" alt="">
                                    </div>
                                </div>
								<!--  -->
						</div>
					</div>
				</div>

			</main> <!-- end #main -->
		    
		</div> <!-- end #inner-content -->
	
	</div> <!-- end #content -->

<?php get_footer(); ?>