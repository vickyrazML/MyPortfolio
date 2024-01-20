

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


// To reveal element while scroll......
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  

function animate(){
    let animate = document.getElementsByClassName("animate");
    for (var i = 0; i < animate.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = animate[i].getBoundingClientRect().top;
        var elementVisible = 0;

        if (elementTop < windowHeight - elementVisible) {
            animate[i].classList.add("active");
        } else {
            animate[i].classList.remove("active");
        }
    }
}
window.addEventListener("load", animate);

//Hilight active nav link





/*
const timelineArray = [ 
    { 
        year: "1995", 
        eventt:  
"JavaScript Introduced by Brendan Eich at Netscape", 
    }, 
    { 
        year: "1997", 
        eventt:  
"ECMAScript created to Standardize JavaScript", 
    }, 
    { 
        year: "1999", 
        eventt:  
"ECMAScript3: Introduction of RegEx, try-catch", 
    }, 
    { 
        year: "2009", 
        eventt:  
"ECMAScript5: strict mode, Object method", 
    }, 
    { 
        year: "2015", 
        eventt:  
"ES6: introduced classes, Arraow functons, let/const variables ", 
    }, 
    { 
        year: "2016 Onwards", 
        eventt:  
"introducing features like async/await, spread/rest operators etc.", 
    }, 
]; 
  
function container() { 
    debugger;
    timelineArray.map((e, i) => { 
        let clss = "right"; 
        let dot = "dotRight"; 
        if (i % 2 == 0) { 
            clss = "left"; 
            dot = "dotLeft"; 
        } 
        const year = document.createElement("h3"); 
        year.innerText = e.year; 
        const eventt = document.createElement("p"); 
        eventt.innerText = e.eventt; 
        const item = document.createElement("div"); 
        item.appendChild(year); 
        item.appendChild(eventt); 
        item.classList.add("expcard"); 
        const contain = document.createElement("div"); 
        const li = document.createElement("li"); 
        contain.classList.add(dot); 
        contain.appendChild(item); 
        li.appendChild(contain); 
        li.classList.add(clss); 
        document.getElementById("menu").appendChild(li); 
    }); 
} 
container();
*/

/*const header = document.getElementById("navbar")
         window.onscroll = function() {
        debugger;
        var top = window.scrollY;
        if(top >=100) {
            header.classList.add('navbarDark');
        }
        else {
            header.classList.remove('navbarDark');
        }
        } 
        
        <script>
        

        
        let slideIndex = 1;
        showSlides(slideIndex);

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }
    </script>*/