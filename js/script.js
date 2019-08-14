function navFunction() {
    var x = document.getElementById("nav-links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function scrollInfo() {
      var e = document.documentElement.scrollTop;
      // console.log(e);
      document.getElementById('scroll-location').innerText = 'value:' + e;
  }
function myPosition() {
    var loc = document.getElementsByClassName('sections');
    var elem = document.getElementById('nav-active').innerText;
    for(var i = 0; i < loc.length; i++) {
        var elemLoc = loc[i];
        if (elemLoc.getBoundingClientRect().top /  document.documentElement.clientHeight < 0.3) {
          
            elem = elemLoc.getElementsByTagName("h2")[0].innerText;
            if (elem == 'Simon Obute') {
              elem = 'elcymon';
            }
            // console.log(elem,elemLoc.getBoundingClientRect().top);
        }
    }
    document.getElementById('nav-active').innerText = elem;
    // var footer = document.getElementsByTagName('footer');
    console.log('footer',document.getElementById('welcome-section').getBoundingClientRect().top / document.documentElement.clientHeight)
    if (document.getElementById('nav-links').style.display === 'block') {
      document.getElementById('nav-links').style.display = 'none';
    }
}
// document.addEventListener(myPosition, 500);

  window.addEventListener('scroll', myPosition);