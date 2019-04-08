(function() {
    
    // MOUSE CLICK ON LIGHTNING ACTION
    let btnLightning = document.querySelector('#lightning');
    btnLightning.addEventListener('click', showText, false);
  
    
    // ALL QUOTES
    let quotes = ["After all this time? Always",
                    "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
                    "Fear of a name only increases fear of the thing itself.",
                    "But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
                    "It matters not what someone is born, but what they grow to be.",
                    "Things we lose have a way of coming back to us in the end, if not always in the way we expect. ",
                    "I think I’ll just go down and have some pudding and wait for it all to turn up — it always does in the end. ",
                    "I mean, it’s sort of exciting, isn’t it, breaking the rules? ",
                    "We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.",
                    "Every human life is worth the same, and worth saving."

    ];
    
    // RANDOM CHOSE FROM ALL QUOTES
    let randomQuote = Math.floor(Math.random() * 10);
    
    
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