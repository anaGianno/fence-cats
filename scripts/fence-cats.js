const catProducts = [{
  thumbnail: 'images/sus-cat1.jpg', 
  thumbnailMini:
  ['images/sus-cat2.jpg','images/sus-cat3.jpg','images/sus-cat4.jpg']
},{
  thumbnail: 'images/green-cat1.jpg', 
  thumbnailMini:
  ['images/green-cat2.jpg']
},{
  thumbnail: 'images/cool-cat1.jpg', 
  thumbnailMini:
  ['images/cool-cat2.jpg','images/cool-cat3.jpg']
},{
  thumbnail: 'images/blue-cat1.jpg', 
  thumbnailMini:
  ['images/blue-cat2.jpg']
},{
  thumbnail: 'images/curtain-cat1.jpg', 
  thumbnailMini:
  ['images/curtain-cat2.jpg']
},{
  thumbnail: 'images/goat-cat1.jpg', 
  thumbnailMini:
  ['images/goat-cat2.jpg','images/goat-cat3.jpg']
},{
  thumbnail: 'images/story-cat1.jpg', 
  thumbnailMini:
  ['images/story-cat2.jpg','images/story-cat3.jpg',
    'images/story-cat4.jpg','images/story-cat5.jpg']
},{
  thumbnail: 'images/sad-cat1.jpg', 
  thumbnailMini:
  ['images/sad-cat2.jpg','images/sad-cat3.jpg',]
},{
  thumbnail: 'images/run-cat1.jpg', 
  thumbnailMini:
  ['images/run-cat2.jpg','images/run-cat3.jpg',
    'images/run-cat4.jpg','images/run-cat5.jpg']
},{
  thumbnail: 'images/murder-cat1.jpg', 
  thumbnailMini:
  ['images/murder-cat2.jpg','images/murder-cat3.jpg']
},{
  thumbnail: 'images/black-cat1.jpg', 
  thumbnailMini:
  ['images/black-cat2.jpg']
},{
  thumbnail: 'images/wary-cat1.jpg', 
  thumbnailMini:
  ['images/wary-cat2.jpg','images/wary-cat3.jpg']
}];

catProducts.forEach((catProduct)=>{
  //const html = `
  //<div class="cat-preview" >
  //  <img class = "thumbnail" src="${catProduct.thumbnail}">
  //  <div class ="thumbnail-mini-row">
  //    <img class = "thumbnail-mini" src="${catProduct.thumbnailMini}">
  //  </div>  
  //</div>
  //`;

  var html = `
  <div class="cat-preview" >
    <img class = "thumbnail" src="${catProduct.thumbnail}">
    <div class ="thumbnail-mini-row">`;

  for(let i = 0; i< catProduct.thumbnailMini.length;i++){
    html = html.concat("\n      <img class = \"thumbnail-mini\" src=\"${" + catProduct.thumbnailMini[i] + "}\">");
  }

  html = html.concat("\n    </div>\n  </div>");
  console.log(html);
});