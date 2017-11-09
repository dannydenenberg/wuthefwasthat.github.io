var primaryImage = document.getElementById('primary-jeffwu');
var secondaryImage = document.getElementById('secondary-jeffwu');

function fetchImage(path, cb) {
  var image_loader = new Image();
  image_loader.src = 'assets/images/' + path;
  image_loader.onload = function () {
    cb(image_loader);
  };
}

function setImage(image, path) {
  fetchImage(path, function(image_loader) {
    image.src = image_loader.src;
  })
}


/* From Modernizr */
function whichTransitionEvent(){
    var el = document.createElement('fakeelement');
    var transitions = {
        'WebkitTransition' :'webkitTransitionEnd',
        'MozTransition'    :'transitionend',
        'MSTransition'     :'msTransitionEnd',
        'OTransition'      :'oTransitionEnd',
        'transition'       :'transitionEnd'
    }
    for (var t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var secondaryPics = [
  "jeffwu/style_daio_starry_night.jpg",
  "jeffwu/style_daio_dragon.jpg",
  "jeffwu/style_udnie.jpg",
  "jeffwu/style_daio_brick.jpg",
  "jeffwu/style_algo_purple.jpg",

  "jeffwu/style_daio_ernestcelestine.jpg",
  "jeffwu/style_daio_abstract.jpg",
  "jeffwu/style_daio_painting1.jpg",
  "jeffwu/style_wave_kanagawa.jpg",
  "jeffwu/style_daio_mosaic3.jpg",
  "jeffwu/style_daio_painting3.jpg",

  "jeffwu/style_daio_blue.jpg",
  "jeffwu/style_daio_cave.jpg",
  "jeffwu/style_daio_child.jpg",
  "jeffwu/style_daio_matrix.jpg",
  "jeffwu/style_daio_napkin.jpg",
  "jeffwu/style_daio_calvin.jpg",
  "jeffwu/style_daio_sketch2.jpg",

  "jeffwu/style_daio_abstract_green.jpg",
  "jeffwu/style_daio_city.jpg",
  "jeffwu/style_daio_colorful7.jpg",
  "jeffwu/style_daio_colorful8.jpg",
  "jeffwu/style_daio_comics.jpg",
  "jeffwu/style_daio_mosaic5.jpg",
  "jeffwu/style_daio_painting14.jpg",
  "jeffwu/style_daio_atla.jpg",
  "jeffwu/style_daio_painting15.jpg",
  "jeffwu/style_daio_rainbowstars.jpg",
  "jeffwu/style_daio_scales.jpg",
  "jeffwu/style_daio_sketch8.jpg",
  "jeffwu/style_daio_smbc.jpg",
  "jeffwu/style_daio_nodes.jpg",

  "jeffwu/style_daio_triangle.jpg",
  "jeffwu/style_daio_leaves.jpg",
  "jeffwu/style_daio_aang.jpg",
  "jeffwu/style_daio_abstract10.jpg",
  "jeffwu/style_daio_mosaic2.jpg",

  "jeffwu/style_daio_purple.jpg",
  "jeffwu/style_daio_abstract5.jpg",
  "jeffwu/style_scream.jpg",
  "jeffwu/style_daio_abstract8.jpg",

  "jeffwu/style_daio_colorful2.jpg",
  "jeffwu/style_daio_nodes_color.jpg",
  "jeffwu/style_daio_rainbows.jpg",


  // "jeffwu/style_daio_starry_night2.jpg",
  "jeffwu/style_daio_abstract6.jpg",
  "jeffwu/style_daio_circuit.jpg",
  "jeffwu/style_algo_green.jpg",
  "jeffwu/style_daio_fruit.jpg",
  "jeffwu/style_daio_abstract3.jpg",
  "jeffwu/style_daio_points.jpg",

  "jeffwu/style_daio_flowers.jpg",
  // "jeffwu/style_daio_jaguar.jpg",
  "jeffwu/style_daio_fishlike.jpg",
  "jeffwu/style_daio_abstract2.jpg",
  "jeffwu/style_daio_news.jpg",
  "jeffwu/style_daio_abstract11.jpg",
  "jeffwu/style_daio_stars.jpg",
  "jeffwu/style_daio_vangogh.jpg",
  "jeffwu/style_daio_strands.jpg",
  "jeffwu/style_daio_map.jpg",
  "jeffwu/style_la_muse.jpg",
  "jeffwu/style_daio_abstract9.jpg",
  "jeffwu/style_daio_abstract4.jpg",
  "jeffwu/style_daio_purple2.jpg",
  "jeffwu/style_daio_paperclips.jpg",
  "jeffwu/style_daio_leaves2.jpg",
  "jeffwu/style_daio_abstract_alt.jpg",
  "jeffwu/style_daio_abstract13.jpg",
  "jeffwu/style_daio_colorful.jpg",
  "jeffwu/style_daio_greenred.jpg",
  "jeffwu/style_algo_hot.jpg",
  "jeffwu/style_daio_sketch6.jpg",
  "jeffwu/style_daio_mosaic4.jpg",
  "jeffwu/style_daio_abstract12.jpg",

  "jeffwu/style_daio_notebook.jpg",
  "jeffwu/style_daio_questions.jpg",
  "jeffwu/style_daio_colorful4.jpg",
  "jeffwu/style_daio_bear.jpg",
  "jeffwu/style_daio_painting6.jpg",
  "jeffwu/style_daio_nn.jpg",
  "jeffwu/style_daio_sketch7.jpg",
  "jeffwu/style_daio_colorful5.jpg",
  "jeffwu/style_daio_sketch4.jpg",
  "jeffwu/style_daio_ink.jpg",
  "jeffwu/style_daio_painting7.jpg",
  "jeffwu/style_daio_colorful6.jpg",
  "jeffwu/style_daio_painting13.jpg",
  "jeffwu/style_daio_hexagons.jpg",
  "jeffwu/style_daio_mosaic.jpg",
  "jeffwu/style_daio_metal.jpg",
  "jeffwu/style_daio_gold.jpg",

  // "jeffwu/style_daio_painting12.jpg",
  // "jeffwu/style_daio_mesh.jpg",
  // "jeffwu/style_daio_music.jpg",
  // "jeffwu/style_daio_abstract7.jpg",
  // "jeffwu/style_daio_painting11.jpg",
  // "jeffwu/style_daio_sketch3.jpg",
  // "jeffwu/style_daio_abstract14.jpg",
  // "jeffwu/style_daio_painting2.jpg",
  // "jeffwu/style_daio_painting4.jpg",
  // "jeffwu/style_daio_painting10.jpg",
  // "jeffwu/style_daio_painting5.jpg",
  // "jeffwu/style_daio_sketch.jpg",
  // "jeffwu/style_daio_ssbm.jpg",
  // "jeffwu/style_daio_stars2.jpg",
];

var setSecondaryImage = null;

var transitionEvent = whichTransitionEvent();
transitionEvent && secondaryImage.addEventListener(transitionEvent, function() {
  if (secondaryImage.style.opacity == 1) {
    fetchSecondary();
  }
}, false);


function secondaryFadeIn() {
  if (setSecondaryImage != null) {
    setSecondaryImage();
  }
  secondaryImage.style.opacity = 1;
  // secondaryImage.title = 'Testing';
  primaryImage.style.opacity = 0;
}
function secondaryFadeOut() {
  secondaryImage.style.opacity = 0;
  primaryImage.style.opacity = 1;
}

var fetching = false;
var secondaryIndex = 0;
function fetchSecondary() {
  if (fetching) { return; }
  fetching = true;

  // var secondaryIndex = Math.floor(Math.random() * secondaryPics.length);

  var pic = secondaryPics[secondaryIndex];
  secondaryIndex = (secondaryIndex + 1) % secondaryPics.length;
  if (secondaryIndex === 0) {
    secondaryPics = shuffle(secondaryPics)
  }
  console.log('fetching ', pic);
  fetchImage(pic, function(image_loader) {
    setSecondaryImage = function() {
      setSecondaryImage = null;
      secondaryImage.src = image_loader.src;
    };
    console.log('done fetching!');
    fetching = false;
  });
}
fetchSecondary();

secondaryImage.addEventListener("mouseover", secondaryFadeIn);
secondaryImage.addEventListener("mouseout", secondaryFadeOut);
secondaryImage.addEventListener("touchstart", secondaryFadeIn);
secondaryImage.addEventListener("touchend", secondaryFadeOut);
