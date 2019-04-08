(function() {
    
    // MOUSE CLICK ON LIGHTNING ACTION
    let btnLightning = document.querySelector('#lightning');
    btnLightning.addEventListener('click', showText, false);
  
    
    // ALL QUOTES
    let quotes = ["After all this time? Always",
                    "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
                    "Fear of a name only increases fear of the thing itself.",
                    "But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light.",


    ];
    
    // RANDOM CHOSE FROM ALL QUOTES
    let randomQuote = Math.floor(Math.random() * 4);
    
    
    function showText(e) {

    // PUTTING QUOTE TO THE BOX
    document.querySelector('p').innerHTML = (quotes[randomQuote]);
    
    // RESET ALL
    document.getElementById("reset").onclick = function () {
    document.getElementById("box").innerHTML = "";
    location.reload();
        }
    }
    
    })();