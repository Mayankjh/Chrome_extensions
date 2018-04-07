console.log("my cool chrome extension readt to boost!!");
(function() {
  console.log("bookmarklet starting");
  let paragraphs = document.getElementsByTagName('p');
  for(let i= 0; i<paragraphs.length; i++){
    paragraphs[i].style['background-color'] = '#C036F3';
  }
})();
