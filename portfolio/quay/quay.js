(function() {
  
function Vector(x, y, z) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
}

Vector.prototype = {
  negative: function() {
    return new Vector(-this.x, -this.y, -this.z);
  },
  add: function(v) {
    if (v instanceof Vector) return new Vector(this.x + v.x, this.y + v.y, this.z + v.z);
    else return new Vector(this.x + v, this.y + v, this.z + v);
  },
  subtract: function(v) {
    if (v instanceof Vector) return new Vector(this.x - v.x, this.y - v.y, this.z - v.z);
    else return new Vector(this.x - v, this.y - v, this.z - v);
  },
  multiply: function(v) {
    if (v instanceof Vector) return new Vector(this.x * v.x, this.y * v.y, this.z * v.z);
    else return new Vector(this.x * v, this.y * v, this.z * v);
  },
  divide: function(v) {
    if (v instanceof Vector) return new Vector(this.x / v.x, this.y / v.y, this.z / v.z);
    else return new Vector(this.x / v, this.y / v, this.z / v);
  },
  equals: function(v) {
    return this.x == v.x && this.y == v.y && this.z == v.z;
  },
  dot: function(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  },
  cross: function(v) {
    return new Vector(
      this.y * v.z - this.z * v.y,
      this.z * v.x - this.x * v.z,
      this.x * v.y - this.y * v.x
    );
  },
  length: function() {
    return Math.sqrt(this.dot(this));
  },
  unit: function() {
    return this.divide(this.length());
  },
  min: function() {
    return Math.min(Math.min(this.x, this.y), this.z);
  },
  max: function() {
    return Math.max(Math.max(this.x, this.y), this.z);
  },
  toAngles: function() {
    return {
      theta: Math.atan2(this.z, this.x),
      phi: Math.asin(this.y / this.length())
    };
  },
  angleTo: function(a) {
    return Math.acos(this.dot(a) / (this.length() * a.length()));
  },
  toArray: function(n) {
    return [this.x, this.y, this.z].slice(0, n || 3);
  },
  clone: function() {
    return new Vector(this.x, this.y, this.z);
  },
  init: function(x, y, z) {
    this.x = x; this.y = y; this.z = z;
    return this;
  },
  noZ: function() {
    this.z = 0;
    return this;
  }
};

Vector.negative = function(a, b) {
  b.x = -a.x; b.y = -a.y; b.z = -a.z;
  return b;
};
Vector.add = function(a, b, c) {
  if (b instanceof Vector) { c.x = a.x + b.x; c.y = a.y + b.y; c.z = a.z + b.z; }
  else { c.x = a.x + b; c.y = a.y + b; c.z = a.z + b; }
  return c;
};
Vector.subtract = function(a, b, c) {
  if (b instanceof Vector) { c.x = a.x - b.x; c.y = a.y - b.y; c.z = a.z - b.z; }
  else { c.x = a.x - b; c.y = a.y - b; c.z = a.z - b; }
  return c;
};
Vector.multiply = function(a, b, c) {
  if (b instanceof Vector) { c.x = a.x * b.x; c.y = a.y * b.y; c.z = a.z * b.z; }
  else { c.x = a.x * b; c.y = a.y * b; c.z = a.z * b; }
  return c;
};
Vector.divide = function(a, b, c) {
  if (b instanceof Vector) { c.x = a.x / b.x; c.y = a.y / b.y; c.z = a.z / b.z; }
  else { c.x = a.x / b; c.y = a.y / b; c.z = a.z / b; }
  return c;
};
Vector.cross = function(a, b, c) {
  c.x = a.y * b.z - a.z * b.y;
  c.y = a.z * b.x - a.x * b.z;
  c.z = a.x * b.y - a.y * b.x;
  return c;
};
Vector.unit = function(a, b) {
  var length = a.length();
  b.x = a.x / length;
  b.y = a.y / length;
  b.z = a.z / length;
  return b;
};
Vector.fromAngles = function(theta, phi) {
  return new Vector(Math.cos(theta) * Math.cos(phi), Math.sin(phi), Math.sin(theta) * Math.cos(phi));
};
Vector.randomDirection = function() {
  return Vector.fromAngles(Math.random() * Math.PI * 2, Math.asin(Math.random() * 2 - 1));
};
Vector.min = function(a, b) {
  return new Vector(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.min(a.z, b.z));
};
Vector.max = function(a, b) {
  return new Vector(Math.max(a.x, b.x), Math.max(a.y, b.y), Math.max(a.z, b.z));
};
Vector.lerp = function(a, b, fraction) {
  return b.subtract(a).multiply(fraction).add(a);
};
Vector.fromArray = function(a) {
  return new Vector(a[0], a[1], a[2]);
};
Vector.angleBetween = function(a, b) {
  return a.angleTo(b);
};

window.Vector = Vector;
})();

(function(){
  'use strict';
  // Configuration options
  var opts = {
    background: 'black',
    numberOrbs: 150, // increase with screen size.  50 to 100 for my 2560 x 1400 monitor
    maxVelocity: 2.5, // increase with screen size--dramatically affects line density.  2-3 for me
    orbRadius: 1, // keep small unless you really want to see the dots bouncing. I like <= 1.
    minProximity: 100, // controls how close dots have to come to each other before lines are traced
    initialColorAngle: 7, // initialize the color angle, default = 7
    colorFrequency: 0.3, // 0.3 default
    colorAngleIncrement: 0.009, // 0.009 is slow and even
    globalAlpha: 0.010, //controls alpha for lines, but not dots (despite the name)
    manualWidth: false, // Default: false, change to your own custom width to override width = window.innerWidth.  Yes i know I'm mixing types here, sue me.
    manualHeight: false// Default: false, change to your own custom height to override height = window.innerHeight
  };
  
  // Canvas globals
  var canvasTop, linecxt, canvasBottom, cxt, width, height, animationFrame;

  // Global objects
  var orbs;
  
  // Orb object - these are the guys that bounce around the screen.
  // We will draw lines between these dots, but that behavior is found
  // in the Orbs container object
  var Orb = (function() {
  
    // Constructor
    function Orb(radius, color) {
      var posX = randBetween(0, width);
      var posY = randBetween(0, height);
      this.position = new Vector(posX, posY);
      
      var velS = randBetween(0, opts.maxVelocity); // Velocity scalar
      this.velocity = Vector.randomDirection().multiply(velS).noZ();
      
      this.radius = radius;
      this.color = color;
    }
    
    // Orb methods
    Orb.prototype = {
      update: function() {
        // position = position + velocity
        this.position = this.position.add(this.velocity);
        
        // bounce if the dot reaches the edge of the container.
        // this can be EXTREMELY buggy with large dot radiuses, but it works for this
        // drawing.
        if (this.position.x + this.radius >= width || this.position.x - this.radius <= 0) {
          this.velocity.x = this.velocity.x * -1;
        }
        if (this.position.y + this.radius >= height || this.position.y - this.radius <= 0) {
          this.velocity.y = this.velocity.y * -1;
        }
      },
      display: function() {
        cxt.beginPath();
        cxt.fillStyle = this.color;
        cxt.ellipse(this.position.x, this.position.y, this.radius, this.radius, 0, 0, 2*Math.PI, false);
        cxt.fill();
        cxt.closePath();
      },
      run: function() {
        this.update();
        this.display();
      }
    };
    
    return Orb;
  })();
  
  // Orbs object - this is a container that manages all of the individual Orb objects.
  // In addition, this object holds the color phasing and line-drawing functionality,
  // since it already iterates over all the orbs once per frame anyway.
  var Orbs = (function() {
  
    // Constructor
    function Orbs(numberOrbs, radius, initialColorAngle, globalAlpha, colorAngleIncrement, colorFrequency) {
      this.orbs = [];
      this.colorAngle = initialColorAngle;
      this.colorAngleIncrement = colorAngleIncrement;
      this.globalAlpha = globalAlpha;
      this.colorFrequency = colorFrequency;
      this.color = null;
      for (var i = 0; i < numberOrbs; i++) {
        this.orbs.push(new Orb(radius, this.color));
      }

    }
    
    Orbs.prototype = {
      run: function() {
        this.phaseColor();
        for (var i = 0; i < this.orbs.length; i++) {
          for (var j = i + 1; j < this.orbs.length; j++) {
            // we only want to compare this orb to orbs which are further along in the array,
            // since any that came before will have already been compared to this orb.
            this.compare(this.orbs[i], this.orbs[j]);
          }

          this.orbs[i].color = this.color;
          this.orbs[i].run();
        }

      },
      compare: function(orbA, orbB) {
        // Get the distance between the two orbs.
        var distance = Math.abs(orbA.position.subtract(orbB.position).length());
        if (distance <= opts.minProximity) {
          // the important thing to note here is that we're drawing this onto '#canvas-top'
          // since we want to preserve everything drawn to that layer.
          linecxt.beginPath();
          linecxt.strokeStyle = this.color;
          linecxt.globalAlpha = this.globalAlpha;
          linecxt.moveTo(orbA.position.x, orbA.position.y);
          linecxt.lineTo(orbB.position.x, orbB.position.y);
          linecxt.stroke();
          linecxt.closePath();
        }
      },
      phaseColor: function() {
        // color component = sin(freq * angle + phaseOffset) => (between -1 and 1) * 127 + 128
        var r = Math.floor(Math.sin(this.colorFrequency*this.colorAngle + Math.PI*0/3) * 127 + 128);
        var g = Math.floor(Math.sin(this.colorFrequency*this.colorAngle + Math.PI*2/3) * 127 + 128);
        var b = Math.floor(Math.sin(this.colorFrequency*this.colorAngle + Math.PI*4/3) * 127 + 128);
        this.color = 'rgba(' + r + ', ' + g + ', ' + b + ', 1)';
        this.colorAngle += this.colorAngleIncrement;
      }
    };
     
    return Orbs;
  })();
  
  // This function is called once and only once to kick off the code.
  // It links DOM objects like the canvas to the respective global variable.
  function initialize() {
    canvasTop = document.querySelector('#canvas-top'); // this canvas is for the lines between dots
    canvasBottom = document.querySelector('#canvas-bottom'); // this canvas is for the dots that bounce around
    linecxt = canvasTop.getContext('2d');
    cxt = canvasBottom.getContext('2d');

    window.addEventListener('resize', resize, false);
    resize();
  }
  
  // This function is called after initialization and window resize.
  function resize() {
    width = opts.manualWidth ? opts.manualWidth : window.innerWidth;
    height = opts.manualHeight ? opts.manualHeight : window.innerHeight;
    setup();
  }
  
  // after window resize we need to 
  function setup() {
    canvasTop.width = width;
    canvasTop.height = height;
    canvasBottom.width = width;
    canvasBottom.height = height;
    //fillBackground(linecxt); // Enable this line if you want to save an image of the drawing.
    fillBackground(cxt);
    orbs = new Orbs(opts.numberOrbs, opts.orbRadius, opts.initialColorAngle, opts.globalAlpha, opts.colorAngleIncrement, opts.colorFrequency);
    // If we hit this line, it was either via initialization procedures (which means animationFrame is undefined)
    // or through window resize, in which case we need to cancel the old draw loop and make a new one.
    if (animationFrame !== undefined) { cancelAnimationFrame(animationFrame); } 
    draw();
  }
  
  // Notice that we only fillBackground on one of the two canvases.  This is because we want to animate
  // the dot layer (we don't want to leave trails left by the dots), but preserve the line layer.
  function draw() {
    fillBackground(cxt);
    orbs.run();
    // Update the global animationFrame variable -- this enables to cancel the redraw loop on resize
    animationFrame = requestAnimationFrame(draw);
  }
  
  // generic background fill function
  function fillBackground(context) {
    context.fillStyle = opts.background;
    context.fillRect(0, 0, width, height);
  }
  
  // get random float between two numbers, inclusive
  function randBetween(low, high) {
    return Math.random() * (high - low) + low;
  }
  
  // get random INT between two numbers, inclusive
  function randIntBetween(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
  }
  
  // Start the code already, dammit!
  initialize();




  })();

  var container = $(".nav-container"),
    target = $(".hero-banner").outerHeight() - 60;

  $(window).scroll(function() {
    if ($(window).scrollTop() >= target) {
      container.addClass("scroll-nav");
    } else {
      container.removeClass("scroll-nav");
    }
  }); // End scroll

  // Typing Stuff
  //set animation timing
  var animationDelay = 2500,
    //loading bar effect
    barAnimationDelay = 3800,
    barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
    //letters effect
    lettersDelay = 50,
    //type effect
    typeLettersDelay = 150,
    selectionDuration = 500,
    typeAnimationDelay = selectionDuration + 800,
    //clip effect 
    revealDuration = 600,
    revealAnimationDelay = 1500;

  initHeadline();

  function initHeadline() {
    //insert <i> element for each letter of a changing word
    singleLetters($('.cd-headline.letters').find('b'));
    //initialise headline animation
    animateHeadline($('.cd-headline'));
  }

  function singleLetters(words) {
    words.each(function() {
      var word = $(this),
        letters = word.text().split(''),
        selected = word.hasClass('is-visible');
      for (i in letters) {
        if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
        letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
      }
      var newLetters = letters.join('');
      word.html(newLetters).css('opacity', 1);
    });
  }

  function animateHeadline($headlines) {
    var duration = animationDelay;
    $headlines.each(function() {
      var headline = $(this);

      if (headline.hasClass('loading-bar')) {
        duration = barAnimationDelay;
        setTimeout(function() {
          headline.find('.cd-words-wrapper').addClass('is-loading')
        }, barWaiting);
      } else if (headline.hasClass('clip')) {
        var spanWrapper = headline.find('.cd-words-wrapper'),
          newWidth = spanWrapper.width() + 10
        spanWrapper.css('width', newWidth);
      } else if (!headline.hasClass('type')) {
        //assign to .cd-words-wrapper the width of its longest word
        var words = headline.find('.cd-words-wrapper b'),
          width = 0;
        words.each(function() {
          var wordWidth = $(this).width();
          if (wordWidth > width) width = wordWidth;
        });
        headline.find('.cd-words-wrapper').css('width', width);
      };

      //trigger animation
      setTimeout(function() {
        hideWord(headline.find('.is-visible').eq(0))
      }, duration);
    });
  }

  function hideWord(word) {
    var nextWord = takeNext(word);

    if (word.parents('.cd-headline').hasClass('type')) {
      var parentSpan = word.parent('.cd-words-wrapper');
      parentSpan.addClass('selected').removeClass('waiting');
      setTimeout(function() {
        parentSpan.removeClass('selected');
        word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
      }, selectionDuration);
      setTimeout(function() {
        showWord(nextWord, typeLettersDelay)
      }, typeAnimationDelay);

    } else if (word.parents('.cd-headline').hasClass('letters')) {
      var bool = (word.children('i').length >= nextWord.children('i').length) ? true : false;
      hideLetter(word.find('i').eq(0), word, bool, lettersDelay);
      showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

    } else if (word.parents('.cd-headline').hasClass('clip')) {
      word.parents('.cd-words-wrapper').animate({
        width: '2px'
      }, revealDuration, function() {
        switchWord(word, nextWord);
        showWord(nextWord);
      });

    } else if (word.parents('.cd-headline').hasClass('loading-bar')) {
      word.parents('.cd-words-wrapper').removeClass('is-loading');
      switchWord(word, nextWord);
      setTimeout(function() {
        hideWord(nextWord)
      }, barAnimationDelay);
      setTimeout(function() {
        word.parents('.cd-words-wrapper').addClass('is-loading')
      }, barWaiting);

    } else {
      switchWord(word, nextWord);
      setTimeout(function() {
        hideWord(nextWord)
      }, animationDelay);
    }
  }

  function showWord(word, $duration) {
    if (word.parents('.cd-headline').hasClass('type')) {
      showLetter(word.find('i').eq(0), word, false, $duration);
      word.addClass('is-visible').removeClass('is-hidden');

    } else if (word.parents('.cd-headline').hasClass('clip')) {
      word.parents('.cd-words-wrapper').animate({
        'width': word.width() + 10
      }, revealDuration, function() {
        setTimeout(function() {
          hideWord(word)
        }, revealAnimationDelay);
      });
    }
  }

  function hideLetter($letter, word, $bool, $duration) {
    $letter.removeClass('in').addClass('out');

    if (!$letter.is(':last-child')) {
      setTimeout(function() {
        hideLetter($letter.next(), word, $bool, $duration);
      }, $duration);
    } else if ($bool) {
      setTimeout(function() {
        hideWord(takeNext(word))
      }, animationDelay);
    }

    if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
      var nextWord = takeNext(word);
      switchWord(word, nextWord);
    }
  }

  function showLetter($letter, word, $bool, $duration) {
    $letter.addClass('in').removeClass('out');

    if (!$letter.is(':last-child')) {
      setTimeout(function() {
        showLetter($letter.next(), word, $bool, $duration);
      }, $duration);
    } else {
      if (word.parents('.cd-headline').hasClass('type')) {
        setTimeout(function() {
          word.parents('.cd-words-wrapper').addClass('waiting');
        }, 200);
      }
      if (!$bool) {
        setTimeout(function() {
          hideWord(word)
        }, animationDelay)
      }
    }
  }

  function takeNext(word) {
    return (!word.is(':last-child')) ? word.next() : word.parent().children().eq(0);
  }

  function takePrev(word) {
    return (!word.is(':first-child')) ? word.prev() : word.parent().children().last();
  }

  function switchWord($oldWord, $newWord) {
    $oldWord.removeClass('is-visible').addClass('is-hidden');
    $newWord.removeClass('is-hidden').addClass('is-visible');
  }

  $(document).on("click", ".call-button", function(e) {
    e.preventDefault();
    // Make something fancy happen
    $('.call-form').toggle();
  });

 // End ready

var main = document.getElementById('main');

function checkNav() {
  if (main.classList.contains('active')) {
    closeNav();    
  }
  else {
    openNav();
  }
}
function openNav() {
  main.classList.add('active');
}
function closeNav() {
  main.classList.remove('active');
}

window.onload = function(){
  $(".containerquay").fadeOut('fast').delay(2000).queue(function() {$(this).remove();});
};