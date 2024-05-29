// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
 const date = document.getElementById("date");
 date.innerHTML= new Date().getFullYear();
// ********** close links ************
const nav_toggle = document.querySelector(".nav-toggle");
const link_container = document.querySelector(".links-container");
const links = document.querySelector(".links");
nav_toggle.addEventListener('click', function(){
    // link_container.classList.toggle("show-links");
    const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = link_container.getBoundingClientRect().height;
  if (containerHeight === 0) {
    link_container.style.height = `${linksHeight}px`;
  } else {
    link_container.style.height = 0;
  }
  console.log(link_container.getBoundingClientRect());
});

// ********** fixed navbar ************
const nav = document.querySelector('#nav');
const top_link = document.querySelector('.top-link');
console.log(nav);
window.addEventListener('scroll' ,function(evt){
     evt.preventDefault;
     const scrollHeight = window.pageYOffset;
     const navHeight = nav.getBoundingClientRect().height;
     if(scrollHeight> navHeight){
        nav.classList.add("fixed-nav");
        
     }else {
      nav.classList.remove("fixed-nav");
     }
     if (scrollHeight>500){
           top_link.classList.add("show-link");

     }
     else {
          top_link.classList.remove("show-link");
     }
})

// ********** smooth scroll ************
const scroll_link = document.querySelectorAll('.scroll-link');
scroll_link.forEach((link)=>{
      link.addEventListener("click",function (ele){
          ele.preventDefault();
          const id = ele.currentTarget.getAttribute("href").slice(1);
          console.log("my id " , id); 
          const  element = document.querySelector('#'+id);
          const navHeight = nav.getBoundingClientRect().height;
          console.log(element);
          console.log(navHeight);
          const containerHeight = link_container.getBoundingClientRect().height;
          console.log(containerHeight);
          const fixedNav = nav.classList.contains("fixed-nav");
          console.log(fixedNav) ;
          let position = element.offsetTop - navHeight;
          console.log(position);
          if (!fixedNav) {
            position = position - navHeight;
          }
          if (navHeight > 82) {
            position = position + containerHeight;
          }
          window.scrollTo({
            left: 0,
            top: position,
          });
          // close 
          link_container.style.height = 0;
      });
});
// select links
