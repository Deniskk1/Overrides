function optimizeHeaderScroll() {
    if (window.innerWidth > 990) {
      var prevScrollPos = window.pageYOffset;
      var header = document.getElementById("header");
      var isHeaderHidden = false;

      var handleScroll = function () {
        var currentScrollPos = window.pageYOffset;

        if (currentScrollPos > prevScrollPos) {
          // Scrolling down
          if (!isHeaderHidden && currentScrollPos > 120) {
            header.style.top = "-300px";
            isHeaderHidden = true;
          }
        } else {
          // Scrolling up
          header.style.top = "0";
          isHeaderHidden = false;
        }
        prevScrollPos = currentScrollPos;
      };

      window.addEventListener("scroll", handleScroll);
    }
  }

  optimizeHeaderScroll();