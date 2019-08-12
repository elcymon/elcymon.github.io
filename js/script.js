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
      console.log(e);
      document.getElementById('scroll-location').innerText = 'value:' + e;
  }
function myPosition() {
    var loc = document.getElementsByClassName('sections');
    var elem = 'elcymon';
    for(var i = 0; i < loc.length; i++) {
        var elemLoc = loc[i];
        if (elemLoc.getBoundingClientRect().top < 10) {
            elem = elemLoc.getElementsByTagName("h2")[0].innerText;
        }
    }
    console.log('hi',loc);
    document.getElementById('link-location').innerText = elem;
}
// document.addEventListener(myPosition, 500);

  window.addEventListener('scroll', myPosition);