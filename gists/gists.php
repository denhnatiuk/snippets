<?php
function demidovs_taxonomy_init() {
	// create a new taxonomy
	register_taxonomy(
		'people',
		'post',
		array(
			'label' => __( 'People' ),
			'rewrite' => array( 'slug' => 'person' ),
			'capabilities' => array(
				'assign_terms' => 'edit_guides',
				'edit_terms' => 'publish_guides'
			)
		)
	);
}
add_action( 'init', 'demidovs_taxonomy_init' );




// Create two taxonomies, Class and Year, for the post type "Lecture"
function wpcampuscpt_lecture_taxonomies() {
	// Add Class taxonomy, make it hierarchical (like categories)
	$labels = array(
		'name'              => _x( 'Classs', 'taxonomy general name' ),
		'singular_name'     => _x( 'Class', 'taxonomy singular name' ),
		'search_items'      => __( 'Search Classes' ),
		'all_items'         => __( 'All Classes' ),
		'parent_item'       => __( 'Parent Class' ),
		'parent_item_colon' => __( 'Parent Class:' ),
		'edit_item'         => __( 'Edit Class' ),
		'update_item'       => __( 'Update Class' ),
		'add_new_item'      => __( 'Add New Class' ),
		'new_item_name'     => __( 'New Class Name' ),
		'menu_name'         => __( 'Class' ),
	);
	$args = array(
		'hierarchical'      => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'class' ),
	);
	register_taxonomy( 'class', array( 'lecture' ), $args );
	// Add new Year taxonomy, make it non-hierarchical (like tags)
	$labels = array(
		'name'                       => _x( 'Years', 'taxonomy general name' ),
		'singular_name'              => _x( 'Year', 'taxonomy singular name' ),
		'search_items'               => __( 'Search Years' ),
		'popular_items'              => __( 'Popular Years' ),
		'all_items'                  => __( 'All Years' ),
		'parent_item'                => null,
		'parent_item_colon'          => null,
		'edit_item'                  => __( 'Edit Year' ),
		'update_item'                => __( 'Update Year' ),
		'add_new_item'               => __( 'Add New Year' ),
		'new_item_name'              => __( 'New Year Name' ),
		'separate_items_with_commas' => __( 'Separate years with commas' ),
		'add_or_remove_items'        => __( 'Add or remove years' ),
		'choose_from_most_used'      => __( 'Choose from the most used years' ),
		'not_found'                  => __( 'No years found.' ),
		'menu_name'                  => __( 'Years' ),
	);
	$args = array(
		'hierarchical'          => false,
		'labels'                => $labels,
		'show_ui'               => true,
		'show_admin_column'     => true,
		'update_count_callback' => '_update_post_term_count',
		'query_var'             => true,
		'rewrite'               => array( 'slug' => 'year' ),
	);
	register_taxonomy( 'year', 'lecture', $args );
}
add_action( 'init', 'wpcampuscpt_lecture_taxonomies', 0 );
