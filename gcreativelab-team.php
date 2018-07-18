<?php
/*
Template Name: GCREATIVELAB TEAM
*/

get_header(); ?>
			
	<div class="content">
	
		<div class="inner-content grid-x grid-margin-x grid-padding-x">
	
		    <main id="main-container" class="main small-12 medium-12 large-12 cell" role="main">
			<div id="barba-wrapper">
  				<div class="barba-container" data-namespace="teampage">
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
								<!-- <div class="home-slide-container"> -->
								<div class="team-container">
										<div class="swiper-wrapper">
											<div class="swiper-slide main-slide">
												
												<!--  -->
									<div class="wrapper team">
											<div class="left"> <!--  Left Starts -->
												<div class="content__holder team__holder">
													<div class="content__header">WE ARE</div>
													<div class="content__subheader">GCREATIVE</div>
													<div class="content__description">
													<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
													
													<?php the_content(); ?>
														
													<?php endwhile; endif; ?>
													</div>
													<div class="content__btn">
														<a href="#">JOIN OUR TEAM</a>
													</div>
													
												</div>
												<!-- <div class="address">©2018<i style="color: #D81C5C;">.</i> GCREATIVELAB<i style="color: #D81C5C;">.</i> LEGAL</div> -->
												<div class="content__hero movin__g">G</div>
											</div> <!--  Left Ends -->
                                </div>
								<!--  -->
												<!-- Main Slide Content -->
												<!-- <div class="explore">DISCOVER THE TEAM
													  <img src="<?php echo get_template_directory_uri(); ?>/assets/images/explore_arrow.svg" width="10" height="9" alt="">
												</div> -->
											</div>

											
										

												
											<div class="swiper-slide swiper-team">
													<div class="team__holder" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/images/team-arian.jpg) no-repeat center center;
															background-size: cover;
															-webkit-background-size: cover;
															-moz-background-size: cover; 
															-o-background-size: cover;">
														<!-- <ul>
															<li>fb</li>
															<li>tw</li>
															<li>ig</li>
															<li>ld</li>
														</ul> -->
														<div class="team__meta">
															<div class="team__subheader">
																<h1>Managing Director</h1>
															</div>
															<div class="team__name">
																<h1>Arian Hashemi</h1>
															</div>
															<a href="#" class="team__email">arian.hashemi@grayling.com</a>
														</div>
													</div>
											</div>

											<div class="swiper-slide swiper-team">
													<div class="team__holder" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/images/team-sajid.jpg) no-repeat center center;
															background-size: cover;
															-webkit-background-size: cover;
															-moz-background-size: cover; 
															-o-background-size: cover;">
														<!-- <ul>
															<li>fb</li>
															<li>tw</li>
															<li>ig</li>
															<li>ld</li>
														</ul> -->
														<div class="team__meta">
															<div class="team__subheader">
																<h1>Design Director</h1>
															</div>
															<div class="team__name">
																<h1>Sajid Shafique</h1>
															</div>
															<a href="#" class="team__email">sajid.shafique@grayling.com</a>
														</div>
													</div>
											</div>

											<div class="swiper-slide swiper-team">
													<div class="team__holder" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/images/team-sarah.jpg) no-repeat center center;
															background-size: cover;
															-webkit-background-size: cover;
															-moz-background-size: cover; 
															-o-background-size: cover;">
														<!-- <ul>
															<li>fb</li>
															<li>tw</li>
															<li>ig</li>
															<li>ld</li>
														</ul> -->
														<div class="team__meta">
															<div class="team__subheader">
																<h1>Client Service Director</h1>
															</div>
															<div class="team__name">
																<h1>Sarah Rassasse</h1>
															</div>
															<a href="#" class="team__email">sarah.rassasse@grayling.com</a>
														</div>
													</div>
											</div>
											
											<div class="swiper-slide swiper-team">
													<div class="team__holder" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/images/team-amal.jpg) no-repeat center center;
															background-size: cover;
															-webkit-background-size: cover;
															-moz-background-size: cover; 
															-o-background-size: cover;">
														<!-- <ul>
															<li>fb</li>
															<li>tw</li>
															<li>ig</li>
															<li>ld</li>
														</ul> -->
														<div class="team__meta">
															<div class="team__subheader">
																<h1>Senior Graphic Designer</h1>
															</div>
															<div class="team__name">
																<h1>Amal Alatrash</h1>
															</div>
															<a href="#" class="team__email">amal.alatrash@grayling.com</a>
														</div>
													</div>
											</div>

											<div class="swiper-slide swiper-team">
													<div class="team__holder" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/images/team-bakir.jpg) no-repeat center center;
															background-size: cover;
															-webkit-background-size: cover;
															-moz-background-size: cover; 
															-o-background-size: cover;">
														<!-- <ul>
															<li>fb</li>
															<li>tw</li>
															<li>ig</li>
															<li>ld</li>
														</ul> -->
														<div class="team__meta">
															<div class="team__subheader">
																<h1>Account Executive</h1>
															</div>
															<div class="team__name">
																<h1>Bakir Daour</h1>
															</div>
															<a href="#" class="team__email">bakir.daour@grayling.com</a>
														</div>
													</div>
											</div>
											<div class="swiper-slide swiper-team">
													<div class="team__holder" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/images/team-dana.jpg) no-repeat center center;
															background-size: cover;
															-webkit-background-size: cover;
															-moz-background-size: cover; 
															-o-background-size: cover;">
														<!-- <ul>
															<li>fb</li>
															<li>tw</li>
															<li>ig</li>
															<li>ld</li>
														</ul> -->
														<div class="team__meta">
															<div class="team__subheader">
																<h1>Account Executive</h1>
															</div>
															<div class="team__name">
																<h1>Dana Malek</h1>
															</div>
															<a href="#" class="team__email">dana.malek@grayling.com</a>
														</div>
													</div>
											</div>
											<div class="swiper-slide swiper-team">
													<div class="team__holder" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/images/team-mary.jpg) no-repeat center center;
															background-size: cover;
															-webkit-background-size: cover;
															-moz-background-size: cover; 
															-o-background-size: cover;">
														<!-- <ul>
															<li>fb</li>
															<li>tw</li>
															<li>ig</li>
															<li>ld</li>
														</ul> -->
														<div class="team__meta">
															<div class="team__subheader">
																<h1>Graphic Designer</h1>
															</div>
															<div class="team__name">
																<h1>Mary Hechanova</h1>
															</div>
															<a href="#" class="team__email">mary.hechanova@grayling.com</a>
														</div>
													</div>
											</div>
											<div class="swiper-slide swiper-team">
													<div class="team__holder" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/images/team-omar.jpg) no-repeat center center;
															background-size: cover;
															-webkit-background-size: cover;
															-moz-background-size: cover; 
															-o-background-size: cover;">
														<!-- <ul>
															<li>fb</li>
															<li>tw</li>
															<li>ig</li>
															<li>ld</li>
														</ul> -->
														<div class="team__meta">
															<div class="team__subheader">
																<h1>Graphic Designer</h1>
															</div>
															<div class="team__name">
																<h1>Omar Hammad</h1>
															</div>
															<a href="#" class="team__email">omar.hammad@grayling.com</a>
														</div>
													</div>
											</div>
											<div class="swiper-slide swiper-team">
													<div class="team__holder" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/images/team-khadijha.jpg) no-repeat center center;
															background-size: cover;
															-webkit-background-size: cover;
															-moz-background-size: cover; 
															-o-background-size: cover;">
														<!-- <ul>
															<li>fb</li>
															<li>tw</li>
															<li>ig</li>
															<li>ld</li>
														</ul> -->
														<div class="team__meta">
															<div class="team__subheader">
																<h1>Copywriter</h1>
															</div>
															<div class="team__name">
																<h1>Khadija</h1>
															</div>
															<a href="#" class="team__email">khadija.hakimudi@grayling.com</a>
														</div>
													</div>
											</div>
											<div class="swiper-slide swiper-team">
													<div class="team__holder" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/images/team-mikhail.jpg) no-repeat center center;
															background-size: cover;
															-webkit-background-size: cover;
															-moz-background-size: cover; 
															-o-background-size: cover;">
														<!-- <ul>
															<li>fb</li>
															<li>tw</li>
															<li>ig</li>
															<li>ld</li>
														</ul> -->
														<div class="team__meta">
															<div class="team__subheader">
																<h1>Digital Designer</h1>
															</div>
															<div class="team__name">
																<h1>Mikhail Villamor</h1>
															</div>
															<a href="#" class="team__email">mikhail.villamor@grayling.com</a>
														</div>
													</div>
											</div>
											</div>
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
