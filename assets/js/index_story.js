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
var secondaryPics = [
  ["jeffwu/style_udnie.jpg",
        ""],
  ["jeffwu/style_scream.jpg",
        ""],
  ["jeffwu/style_la_muse.jpg",
        ""],
  ["jeffwu/style_wave_kanagawa.jpg",
        ""],
  ["jeffwu/style_algo_purple.jpg",
        "Shouldn't you be doing something else?"],
  ["jeffwu/style_algo_green.jpg",
        ""],
  ["jeffwu/style_algo_hot.jpg",
        ""],

  ["jeffwu/style_daio_ernestcelestine.jpg",
        "Perhaps you came to check out my blog or projects?"],
  ["jeffwu/style_daio_painting1.jpg",
        ""],
  ["jeffwu/style_daio_painting2.jpg",
        ""],
  ["jeffwu/style_daio_mosaic3.jpg",
        ""],
  ["jeffwu/style_daio_painting3.jpg",
        ""],
  ["jeffwu/style_daio_mosaic4.jpg",
        ""],
  ["jeffwu/style_daio_painting4.jpg",
        ""],
  ["jeffwu/style_daio_painting5.jpg",
        "Look, this art is only going to get worse."],

  ["jeffwu/style_daio_mosaic.jpg",
        ""],
  ["jeffwu/style_daio_blue.jpg",
        "Let's see how bad it has to get before you go."],
  ["jeffwu/style_daio_cave.jpg",
        "Something drawn by a caveman..."],
  ["jeffwu/style_daio_child.jpg",
        "Drawn by a little kid..."],
  ["jeffwu/style_daio_napkin.jpg",
        "Drawn on a napkin..."],

  ["jeffwu/style_daio_metal.jpg",
        "Not really art anymore..."],
  ["jeffwu/style_daio_mesh.jpg",
        "How worthless is your time?  Please, go do something else!"],
  ["jeffwu/style_daio_triangle.jpg",
        ""],
  ["jeffwu/style_daio_abstract7.jpg",
        ""],
  ["jeffwu/style_daio_leaves.jpg",
        ""],
  ["jeffwu/style_daio_abstract10.jpg",
        ""],
  ["jeffwu/style_daio_mosaic2.jpg",
        "*Sigh*, I knew you'd stay!  The moment you hovered over the first image, I was 100% sure you were a mindless drone who would make it to here.  And guess what?  I was right!"],

  ["jeffwu/style_daio_purple.jpg",
        "Was I right because of selection bias?  Maybe."],
  ["jeffwu/style_daio_abstract5.jpg",
        "But that only means there were less manipulable people who stopped before you."],
  ["jeffwu/style_daio_abstract8.jpg",
        ""],

  ["jeffwu/style_daio_colorful2.jpg",
        "I'll give you the benefit of the doubt.  Maybe your time is worth something but you love art."],

  ["jeffwu/style_daio_dragon.jpg",
        "Well since you'll take the time to appreciate them, I'll show you some good ones."],
  ["jeffwu/style_daio_brick.jpg",
        "Here's a beautiful mural.  I hope it gives your life some purpose."],

  ["jeffwu/style_daio_starry_night.jpg",
        "Maybe some classics, then?  Van Gogh..."],
  // ["jeffwu/style_daio_starry_night2.jpg",
  //       ""],
  ["jeffwu/style_daio_vangogh.jpg",
        ""],
  ["jeffwu/style_daio_abstract6.jpg",
        "Picasso..."],
  ["jeffwu/style_daio_abstract3.jpg",
        ""],
  ["jeffwu/style_daio_points.jpg",
        "Seurat..."],

  ["jeffwu/style_daio_flowers.jpg",
        "Wait, who?  That old art is boring.  Let's get weird."],
  ["jeffwu/style_daio_jaguar.jpg",
        ""],
  ["jeffwu/style_daio_fishlike.jpg",
        ""],
  ["jeffwu/style_daio_abstract.jpg",
        "Maybe some abstract art?"],
  ["jeffwu/style_daio_abstract2.jpg",
        ""],
  ["jeffwu/style_daio_abstract11.jpg",
        ""],
  ["jeffwu/style_daio_sketch2.jpg",
        ""],
  ["jeffwu/style_daio_strands.jpg",
        "Well, this \"art\" is undoubtedly getting worse again."],
  ["jeffwu/style_daio_sketch5.jpg",
        "I think modern art might just be humanity running out of ideas?"],
  ["jeffwu/style_daio_sketch.jpg",
        "But you're still here.  You know, I'm running low on faith in humanity because of people like you."],
  ["jeffwu/style_daio_ernestcelestine.jpg",
        "Did you even notice this image was repeated?"],
  ["jeffwu/style_daio_sketch4.jpg",
        "Yep, I'm running low on art, too."],
  ["jeffwu/style_daio_abstract9.jpg",
        "But only because I was lazy."],
  ["jeffwu/style_daio_abstract4.jpg",
        "In case you hadn't figured it out, these works of art were all created by artificial intelligences."],
        // "Well, okay, I'm starting to run out of good art for real."],
  ["jeffwu/style_daio_purple2.jpg",
        "I could generate millions of these."],
  ["jeffwu/style_daio_leaves2.jpg",
        ""],
  ["jeffwu/style_daio_sketch3.jpg",
        "The AIs started out copying us humans."],
  ["jeffwu/style_daio_abstract13.jpg",
        "But by now, they're more creative than us."],
  ["jeffwu/style_daio_colorful.jpg",
        "They can create things we find beautiful..."],
  ["jeffwu/style_daio_greenred.jpg",
        "And things too beautiful for us to understand."],
  ["jeffwu/style_daio_sketch6.jpg",
        "And maybe at the end of the day, I'd rather them in charge than automatons like you."],
  ["jeffwu/style_daio_abstract12.jpg",
        "It's actually starting to happen now."],

  ["jeffwu/style_daio_map.jpg",
        "AI's are being deployed everywhere."],
  ["jeffwu/style_daio_notebook.jpg",
        "They'll take up our knowledge effortlessly."],
  ["jeffwu/style_daio_news.jpg",
        "They'll control our news."],
  ["jeffwu/style_daio_music.jpg",
        "They'll compose our music."],
  // "jeffwu/style_daio_go.jpg",
  // "jeffwu/style_daio_fruit.jpg",
  ["jeffwu/style_daio_questions.jpg",
        "It's been making me think..."],
  ["jeffwu/style_daio_colorful4.jpg",
        "I'm not sure I want that yet."],
  ["jeffwu/style_daio_painting6.jpg",
        ""],
  ["jeffwu/style_daio_sketch7.jpg",
        ""],
  ["jeffwu/style_daio_abstract14.jpg",
        ""],
  ["jeffwu/style_daio_colorful5.jpg",
        ""],
  ["jeffwu/style_daio_ink.jpg",
        ""],
  ["jeffwu/style_daio_painting7.jpg",
        ""],
  ["jeffwu/style_daio_painting8.jpg",
        ""],
  ["jeffwu/style_daio_colorful6.jpg",
        ""],
  ["jeffwu/style_daio_painting10.jpg",
        ""],
  ["jeffwu/style_daio_painting11.jpg",
        ""],
  ["jeffwu/style_daio_painting12.jpg",
        ""],
  ["jeffwu/style_daio_painting13.jpg",
        ""],
  ["jeffwu/style_daio_hexagons.jpg",
        ""],
  ["jeffwu/style_daio_gold.jpg",
        ""],

  function() {
    setImage(primaryImage, 'jeffwu/style_daio_paperclips.jpg');
  },
  ["jeffwu/style_daio_paperclipscolor.jpg",
        "Oh shit, what just happened?"],
  // bad ones
  // ending 1?
  // "jeffwu/style_daio_circuit.jpg",
  // "jeffwu/style_daio_matrix.jpg",
  // ending 2?
  // "jeffwu/style_daio_paperclips.jpg",
  // "jeffwu/style_daio_paperclipscolor.jpg",
  // "jeffwu/style_daio_paperclipscolor2.jpg",
  // ending 3?
  // "jeffwu/style_daio_stars.jpg",
  // "jeffwu/style_daio_stars2.jpg",
];

var secondaryIndex = 0;
var setSecondaryImage = null;

var transitionEvent = whichTransitionEvent();
var opacityWas = 0;
transitionEvent && secondaryImage.addEventListener(transitionEvent, function() {
  if (opacityWas == secondaryImage.style.opacity) {
    return;
  }
  opacityWas = secondaryImage.style.opacity;
  if (opacityWas == 0) {
    secondaryIndex = secondaryIndex + 1;
    while (typeof secondaryPics[secondaryIndex] === 'function') {
      secondaryPics[secondaryIndex]();
      secondaryIndex = secondaryIndex + 1;
    }
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
  if (secondaryIndex == secondaryPics.length) {
    setImage(primaryImage, 'jeffwu/style_daio_paperclips.jpg');
  }
  secondaryImage.style.opacity = 0;
  primaryImage.style.opacity = 1;
}

var fetching = false;
function fetchSecondary() {
  if (fetching) { return; }
  fetching = true;

  var pic;
  var text;
  if (secondaryIndex < secondaryPics.length) {
    pic = secondaryPics[secondaryIndex][0];
    text = secondaryPics[secondaryIndex][1];
  } else {
    if ((secondaryIndex - secondaryPics.length) % 2 == 0) {
      pic = 'jeffwu/style_daio_paperclipscolor.jpg';
    } else {
      pic = 'jeffwu/style_daio_paperclipscolor2.jpg';
    }
  }
  console.log('fetching ', pic);
  fetchImage(pic, function(image_loader) {
    setSecondaryImage = function() {
      setSecondaryImage = null;
      secondaryImage.src = image_loader.src;
      if (text) {
        var p = document.createElement('p');
        p.appendChild(document.createTextNode(text));
        document.getElementById('main-text').appendChild(p);
      }
      window.scrollTo(0, document.body.scrollHeight);
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
