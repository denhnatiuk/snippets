<?php
// проверка и добавление всех дополнительных изображений
if (class_exists('MultiPostThumbnails')) :
  for ($i=0; $i<20; $i++){
    if(MultiPostThumbnails::has_post_thumbnail('post', 'thumbnail'.$i)) {
      ?>
        <div class="additional-thumbnail bg-thumbnail" style="
            background: linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%),
                        url('
                        <?php echo  MultiPostThumbnails::get_post_thumbnail_url(get_post_type(), "thumbnail".$i , NULL, "bg-thumbnail"); ?>
                        ');
            background-repeat: no-repeat;
            background-size: 200%;
            background-position: center;
            background-attachment: fixed;
            filter:grayscale(1)
            "></div>
      <?php
    }
    if(!MultiPostThumbnails::has_post_thumbnail('post', 'thumbnail'.$i)&&$i>5){
      break;
    }
  }
endif;

// автоматически определять куда вставлять в тексте следующую картинку
if (class_exists('MultiPostThumbnails')) :
  $imgUrls = [];
  for ($i=0; $i<20; $i++){
    if(MultiPostThumbnails::has_post_thumbnail('post', 'thumbnail'.$i)) {
      $url = MultiPostThumbnails::get_post_thumbnail_url(get_post_type(), "thumbnail".$i , NULL, "bg-thumbnail");
      array_push($imgUrls, $url);
    }
    if(!MultiPostThumbnails::has_post_thumbnail('post', 'thumbnail'.$i)&&$i>5){
      break;
    }
  }
endif;

function wordsCount($text){
  //prepare for counting
  $text = trim(preg_replace("#\s*[(\'|\"|\.|\!|\?|;|,|\\|\/|\-|:|\&|@)]\s*#", " ", $wc)); //# remove one-letter 'words' that consist only of punctuation
  $text = preg_replace("/\s\s+/", " ", $wc);                                              //# remove superfluous whitespace
  substr_count($str, $search, $start, $end);                                              //если необходимо уменьшить диапазон поиска
}
