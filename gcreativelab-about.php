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
                                <div class="wrapper">
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
                                    <div class="right">
                                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/about__hero.svg" height="600" width="600" alt="">
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
