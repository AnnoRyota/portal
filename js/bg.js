// const main = document.getElementById('main-container');

// const observer = new IntersectionObserver(([entry]) => {
//   if (entry.isIntersecting) {
//     document.body.classList.add('fixed-bg');
//   } else {
//     document.body.classList.remove('fixed-bg');
//   }
// }, { threshold: 0 });

// observer.observe(main);

const mainvisual = document.getElementById("mainvisual");

const observer = new IntersectionObserver(([entry]) => {
  // hero が画面に見えている間は背景OFF
  if (entry.isIntersecting) {
    document.body.classList.remove("fixed-bg");
  }
  // hero が画面から完全に消えた瞬間、固定背景をON
  else {
    document.body.classList.add("fixed-bg");
  }
}, { threshold: 0 });

observer.observe(mainvisual);