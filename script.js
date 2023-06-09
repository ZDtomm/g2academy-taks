const textElement = ['Web Developer', 'Design Graphic'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let word = '';

(function ngetik () {
 
 if(count==textElement.length) {
   count = 0;
 }
 
 currentTxt=textElement[count];
 word=currentTxt.slice (0,++txtIndex);
 document.querySelector ('.efek-ngetik').textContent=word ;
  if(word.length == currentTxt.length){
    count ++;
    txtIndex = 0;
  }

setTimeout(ngetik,150);

})();

function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function toggleLike(button) {
  button.classList.toggle('liked');
}

function toggleDislike(button) {
  button.classList.toggle('dislike');
}