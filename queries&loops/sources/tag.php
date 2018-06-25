<?php
/**
 * The template for displaying Tag pages
 *
 * Used to display archive-type pages for posts in a tag.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
get_header(); ?>
	<section id="primary" class="site-content">
		<div id="content" role="main">
            <div class="container">
                <!-- start breadcrumbs -->
            	<?php the_breadcrumb(); ?>
            	<!-- end breadcrumbs -->
            	<header class="page-header">
            		<h2 class="section-header">Коллекция "<?php echo single_cat_title("", false); ?>"</h2>
	            </header><!-- .entry-header -->
            </div>
             <?php
             $post_tag = get_query_var('tag');
             $args = 'tag='.$post_tag.'&posts_per_page=6';
             $myposts = query_posts($args);
             $i = 0;
             foreach( $myposts as $post ){ setup_postdata($post);

                if ($i % 2 == 0){
                    ?>

            <div class="row">
                    <!-- описание слева -->
                    <article id="post-<?php the_ID(); ?>" <?php post_class("container-fluid collection-item"); ?>>
                        <div class="row catalogue"  style="background: linear-gradient(rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url(
                                <?php
                                	if( has_post_thumbnail() ) {
                                      	echo get_the_post_thumbnail_url('','full-thumbnail');
                                    }else {
                                        echo get_bloginfo("template_url").'/static/images/catalogue-maria.jpg';
                                    }
                                ?>);background-repeat: no-repeat; background-attachment: fixed; background-size: cover; background-position: center;">
                            <div class="container catalogue-left">
                                <div class=" col-xs-12 col-sm-6 col-md-5">
                                    <h2 class="section-header"><?php the_title(); ?></h2>
                                    <p class="catalogue-description"><?php the_excerpt_max_charlength(380);?></p>
                                    <a class="btn btn-lg btn-white" href="<?php the_permalink(); ?>">СМОТРЕТЬ</a>
                                </div>
                                <?php
                            		if (class_exists('MultiPostThumbnails')) : ?>
                            	<div class=" col-xs-12 col-sm-6 col-md-7">
                                    <div class="catalogue-galary">
                                    <?php if(MultiPostThumbnails::has_post_thumbnail('post', 'thumbnail2')) { ?>
                                        <div class="catalogue-thumbnail" style="background: linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%),url('<?php echo  MultiPostThumbnails::get_post_thumbnail_url(get_post_type(), "thumbnail2", NULL, "full-thumbnail"); ?>'); background-repeat: no-repeat; background-size: 200%; background-position: center; filter:grayscale(1)"></div>
                                    <?php} elseif(MultiPostThumbnails::has_post_thumbnail('post', 'thumbnail3')) { ?>
                                        <div class="catalogue-thumbnail" style="background: linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%),url('<?php echo  MultiPostThumbnails::get_post_thumbnail_url(get_post_type(), "thumbnail3", NULL, "full-thumbnail"); ?>'); background-repeat: no-repeat; background-size: 200%; background-position: center; filter:grayscale(1)"></div>
                                    <?php} elseif(MultiPostThumbnails::has_post_thumbnail('post', 'thumbnail4')) { ?>
                                        <div class="catalogue-thumbnail" style="background: linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%),url('<?php echo  MultiPostThumbnails::get_post_thumbnail_url(get_post_type(), "thumbnail4", NULL, "full-thumbnail"); ?>'); background-repeat: no-repeat; background-size: 200%; background-position: center; filter:grayscale(1)"></div>
                                    <?php} elseif(MultiPostThumbnails::has_post_thumbnail('post', 'thumbnail5')) { ?>
                                        <div class="catalogue-thumbnail" style="background: linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%),url('<?php echo  MultiPostThumbnails::get_post_thumbnail_url(get_post_type(), "thumbnail5", NULL, "full-thumbnail"); ?>'); background-repeat: no-repeat; background-size: 200%; background-position: center; filter:grayscale(1)"></div>
                                    <?php} elseif(MultiPostThumbnails::has_post_thumbnail('post', 'thumbnail6')) { ?>
                                        <div class="catalogue-thumbnail" style="background: linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%),url('<?php echo  MultiPostThumbnails::get_post_thumbnail_url(get_post_type(), "thumbnail6", NULL, "full-thumbnail"); ?>'); background-repeat: no-repeat; background-size: 200%; background-position: center; filter:grayscale(1)"></div>
                                    <?php} elseif(MultiPostThumbnails::has_post_thumbnail('post', 'thumbnail7')) { ?>
                                        <div class="catalogue-thumbnail" style="background: linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%),url('<?php echo  MultiPostThumbnails::get_post_thumbnail_url(get_post_type(), "thumbnail7", NULL, "full-thumbnail"); ?>'); background-repeat: no-repeat; background-size: 200%; background-position: center; filter:grayscale(1)"></div>
                                    <?php } ?>
                            	    </div>
                            	</div>
                            		    <?php
                            		endif;
                            		?>
                            </div>
                        </div>
                    </article>
                    <?php
                } elseif ($i & 1) {
                    ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class("container-fluid collection-item"); ?>>
                        <div class="row  catalogue"  style="background: linear-gradient(rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url(
                                <?php
                                	if( has_post_thumbnail() ) {
                                      	echo get_the_post_thumbnail_url('','full-thumbnail');
                                    }else {
                                        echo get_bloginfo("template_url").'/static/images/catalogue-maria.jpg';
                                    }
                                ?>);background-repeat: no-repeat; background-attachment: fixed; background-size: cover; background-position: center;">
                            <div class="container catalogue-right">
                                <div class=" col-xs-12 col-sm-6 col-md-5 col-md-push-7">
                                    <h2 class="section-header"><?php the_title(); ?></h2>
                                    <p class="catalogue-description"><?php the_excerpt_max_charlength(380);?></p>
                                    <a class="btn btn-lg btn-white" href="<?php the_permalink(); ?>">СМОТРЕТЬ</a>
                                </div>
                                <?php
                            		if (class_exists('MultiPostThumbnails')) : ?>
                            	<div class=" col-xs-12 col-sm-6 col-md-7 col-xs-pull-0 col-sm-pull-6 col-md-pull-5">
                                    <div class="catalogue-galary">
                                    <?php if(MultiPostThumbnails::has_post_thumbnail('post', 'thumbnail2')) { ?>
                                        <div class="catalogue-thumbnail" style="background: linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%),url('<?php echo  MultiPostThumbnails::get_post_thumbnail_url(get_post_type(), "thumbnail2", NULL, "full-thumbnail"); ?>'); background-repeat: no-repeat; background-size: 200%; background-position: center; filter:grayscale(1)"></div>
                                    <?php} elseif(MultiPostThumbnails::has_post_thumbnail('post', 'thumbnail3')) { ?>
                                        <div class="catalogue-thumbnail" style="background: linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%),url('<?php echo  MultiPostThumbnails::get_post_thumbnail_url(get_post_type(), "thumbnail3", NULL, "full-thumbnail"); ?>'); background-repeat: no-repeat; background-size: 200%; background-position: center; filter:grayscale(1)"></div>
                                    <?php} elseif(MultiPostThumbnails::has_post_thumbnail('post', 'thumbnail4')) { ?>
                                        <div class="catalogue-thumbnail" style="background: linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%),url('<?php echo  MultiPostThumbnails::get_post_thumbnail_url(get_post_type(), "thumbnail4", NULL, "full-thumbnail"); ?>'); background-repeat: no-repeat; background-size: 200%; background-position: center; filter:grayscale(1)"></div>
                                    <?php} elseif(MultiPostThumbnails::has_post_thumbnail('post', 'thumbnail5')) { ?>
                                        <div class="catalogue-thumbnail" style="background: linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%),url('<?php echo  MultiPostThumbnails::get_post_thumbnail_url(get_post_type(), "thumbnail5", NULL, "full-thumbnail"); ?>'); background-repeat: no-repeat; background-size: 200%; background-position: center; filter:grayscale(1)"></div>
                                    <?php} elseif(MultiPostThumbnails::has_post_thumbnail('post', 'thumbnail6')) { ?>
                                        <div class="catalogue-thumbnail" style="background: linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%),url('<?php echo  MultiPostThumbnails::get_post_thumbnail_url(get_post_type(), "thumbnail6", NULL, "full-thumbnail"); ?>'); background-repeat: no-repeat; background-size: 200%; background-position: center; filter:grayscale(1)"></div>
                                    <?php} elseif(MultiPostThumbnails::has_post_thumbnail('post', 'thumbnail7')) { ?>
                                        <div class="catalogue-thumbnail" style="background: linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%),url('<?php echo  MultiPostThumbnails::get_post_thumbnail_url(get_post_type(), "thumbnail7", NULL, "full-thumbnail"); ?>'); background-repeat: no-repeat; background-size: 200%; background-position: center; filter:grayscale(1)"></div>
                                    <?php } ?>
                            	    </div>
                            	</div>
                            		    <?php
                            		endif;
                            		?>
                            </div>
                        </div>
                    </article>
                    <?php
                } else {
                    echo 'there is no projects in this category';
                }
             ?>
            </div>

              <?php
                $i++;
              }
              wp_reset_postdata(); // сбрасываем переменную $post
              ?>

		</div><!-- #content -->
	</section><!-- #primary -->

<?php get_footer(); ?>
