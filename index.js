
var observer = new IntersectionObserver((entries)=> {
  entries.forEach( entry => {
    console.log(entry.isIntersecting, entry.intersectionRatio, entry.target);
  })
}, {
  threshold: 0.5
});

var target = document.querySelector('.container__3');
observer.observe(target);
