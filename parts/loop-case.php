<?php
/**
 * Template part for displaying a single post
 */
?>

<?php
$args = array(
	'post_type' => 'case-study',
);
$query = new WP_Query( $args );
$getBackgroundImage = get_field('first_slide_background_image');
$caseBg = " url(".$getBackgroundImage['url'].") no-repeat fixed center;"."background-size: cover;";
$image = get_field('client_logo');
$size = 'large';
$width = $image['sizes'][ $size . '-width' ];
$height = $image['sizes'][ $size . '-height' ];
$client_img = get_field('client_feature_image');
$client_img01 = get_field('01_image');
$client_img02 = get_field('02_image');

$prev_post = get_previous_post();
$next_post = get_next_post();

?>

<div id="barba-wrapper">
        <div class="barba-container" data-namespace="caseinnerpage">
<!-- Swiper -->
<div class="swiper-container">
<div class="swiper-wrapper">
    <div class="swiper-slide menu">
        <ul id="menu">
                <li><a href="http://localhost:8888/DEV/gcreative/about/">About</a></li>
                <li><a href="http://localhost:8888/DEV/gcreative/services/">Services</a></li>
                <li><a href="http://localhost:8888/DEV/gcreative/case/">Case Study</a></li>
                <li><a href="http://localhost:8888/DEV/gcreative/team/">Team</a></li>
                <li><a href="http://localhost:8888/DEV/gcreative/contact/">Contact</a></li>
        </ul>

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
            

            <div class="case-inner-slide-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide main-slide">
                               
                            <div class="case__inner__holder">

                                <div class="case__inner__logo">
                                        <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>"  width="100%" style="max-width: 250px;"/>                                        
                                </div>
                                <div class="case__inner_title">
                                    <h1></h1>
                                </div>
                                <div class="case__inner__description">
                                    <p><?php the_field('client_short_description'); ?></p>
                                </div>
                                <div class="case__deliverables">
                                        <?php
                                        // vars	
                                        $deliverables = get_field('project_deliverables');
                                        // check
                                        if( $deliverables ): ?>
                                            <?php foreach( $deliverables as $deliverable ): ?>
                                                <?php if($deliverable == 'strategy') :  ?>
                                                    <div>
                                                        <img class="dev-ico" src="<?php echo get_template_directory_uri(); ?>/assets/images/services-icn/strategy.svg" width="75" height="84" alt="">
                                                        <!-- <h1 class="dev-icn-title"><?php echo $deliverable; ?></h1> -->
                                                    </div>
                                                <?php endif; ?>
                                                <?php if($deliverable == 'design') :  ?>
                                                    <div>
                                                        <img class="dev-ico" src="<?php echo get_template_directory_uri(); ?>/assets/images/services-icn/design.svg" width="75" height="84" alt="">
                                                        <!-- <h1 class="dev-icn-title"><?php echo $deliverable; ?></h1> -->
                                                    </div>
                                                <?php endif; ?>
                                                <?php if($deliverable == 'production') :  ?>
                                                    <div>
                                                        <img class="dev-ico" src="<?php echo get_template_directory_uri(); ?>/assets/images/services-icn/production.svg" width="75" height="84" alt="">
                                                        <!-- <h1 class="dev-icn-title"><?php echo $deliverable; ?></h1> -->
                                                    </div>
                                                <?php endif; ?>
                                                <?php if($deliverable == 'social') :  ?>
                                                    <div>
                                                        <img class="dev-ico" src="<?php echo get_template_directory_uri(); ?>/assets/images/services-icn/social-media.svg" width="75" height="84" alt="">
                                                        <!-- <h1 class="dev-icn-title"><?php echo $deliverable; ?></h1> -->
                                                    </div>
                                                <?php endif; ?>
                                                <?php if($deliverable == 'communications') :  ?>
                                                    <div>
                                                        <img class="dev-ico" src="<?php echo get_template_directory_uri(); ?>/assets/images/services-icn/communications.svg" width="75" height="84" alt="">
                                                        <!-- <h1 class="dev-icn-title"><?php echo $deliverable; ?></h1> -->
                                                    </div>
                                                <?php endif; ?>                               
                                            <?php endforeach; ?>
                                        <?php endif; ?>
                                </div>
                            </div>

                        </div>
                        
                    

                        <div class="swiper-slide case__slide">
                            <img src="<?php echo $client_img['url']; ?>" width="100%" height="100%" alt="" data-swiper-parallax="100">
                        </div>

                        <div class="swiper-slide case__slide">
                            <div class="case__inner__slide__holder">
                                <div class="case__inner__slide__title">
                                    <h1 data-swiper-parallax="-100"><?php echo get_field('01_title'); ?></h1>
                                </div>
                                <div class="case__inner__slide__subtitle">
                                    <h4 data-swiper-parallax="-110">Subtitle</h4>
                                </div>
                                <div class="case__inner__slide__description">
                                    <div data-swiper-parallax="-130"><?php echo get_field('title_01_description'); ?></div>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide case__slide">
                                <img src="<?php echo $client_img01['url']; ?>" width="100%" height="100%" alt="">
                        </div>

                        <div class="swiper-slide case__slide">
                                <div class="case__inner__slide__holder">
                                    <div class="case__inner__slide__title">
                                        <h1 data-swiper-parallax="20"><?php echo get_field('02_title'); ?></h1>
                                    </div>
                                    <div class="case__inner__slide__subtitle">
                                        <h4 data-swiper-parallax="40">Subtitle</h4>
                                    </div>
                                    <div class="case__inner__slide__description">
                                        <div data-swiper-parallax="50"><?php echo get_field('title_02_description'); ?></div>
                                    </div>
                                </div>
                            </div>
    
                        <div class="swiper-slide case__slide">
                                <img data-swiper-parallax="300" src="<?php echo $client_img02['url']; ?>" width="100%" height="100%" alt="">
                        </div>
                            
                        <div class="swiper-slide case__slide">
                                <div class="case__inner__slide__holder">
                                    <div class="case__inner__slide__title">
                                        <h1>Specs</h1>
                                    </div>
                                    <div class="case__inner__slide__subtitle">
                                        <h4>Subtitle</h4>
                                    </div>
                                    <div class="case__inner__slide__description">
                                        <p><?php echo get_field('full_project_deliverables'); ?></p>
                                    </div>
                                </div>
                        </div>

                        <div class="swiper-slide case__pagination">
                               <div class="case__inner__pagination__holder">

                                <?php

                                if(!empty($prev_post)) {

                                    $prev_thumb = get_the_post_thumbnail_url( $prev_post->ID,'full');
                                    
                                    ?>                                    
                                   <a href="<?php echo get_permalink($prev_post->ID); ?>" class="case__inner__top" style="background: url('<?php echo $prev_thumb; ?>') no-repeat center center;
                                    background-size: cover;
                                    -webkit-background-size: cover;
                                    -moz-background-size: cover; 
                                    -o-background-size: cover;" >
                                        <div class="case__page__holder">
                                            <div class="case__prev__title">
                                                <div class="case__prev">PREVIOUS CASE STUDY</div>
                                                <span><?php echo $prev_post->post_title; ?></span>
                                            </div>
                                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/pagination_up.svg" height="62" width="62" alt="">
                                        </div>
                                   </a>

                                   <?php }
                                   
                                   if(!empty($next_post)) {

                                    $next_thumb = get_the_post_thumbnail_url( $next_post->ID,'full');
                                    
                                   ?>

                                   
                                   <a href="<?php echo get_permalink($next_post->ID); ?>" class="case__inner__btm"
                                        style="background: url('<?php echo $next_thumb; ?>') no-repeat center center;
                                        background-size: cover;
                                        -webkit-background-size: cover;
                                        -moz-background-size: cover; 
                                        -o-background-size: cover;"   
                                    >
                                        <div class="case__page__holder">
                                        <div class="case__next__title">
                                            <div class="case__next">NEXT CASE STUDY</div>
                                            <span><?php echo $next_post->post_title; ?></span>
                                        </div>
                                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/pagination_down.svg" height="62" width="62" alt="">
                                        </div>
                                   </a>
                                   <?php } ?>
                               </div>
                        </div>
                        
                    </div>
                    <!-- Add Pagination -->
                    <!-- <div class="swiper-pagination"></div> -->
                </div>



            <!--  -->
    </div>
</div>
</div> <!-- Swiper Ends -->
        </div>
        </div>