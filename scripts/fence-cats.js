let catProductsHTML = '';

catProducts.forEach((catProduct)=>{
  catProductsHTML += `
    <div class="cat-preview" >
      <img class = "thumbnail" src="${catProduct.thumbnail}">
      <div class ="thumbnail-mini-row">`;

  for(let i = 0; i< catProduct.thumbnailMini.length;i++){
    catProductsHTML = catProductsHTML.concat(`\n        <img class = \"thumbnail-mini\" src=\"${catProduct.thumbnailMini[i]}\">`);
  }

  catProductsHTML = catProductsHTML.concat("\n      </div>\n    </div>");
});

console.log(catProductsHTML);

document.querySelector('.js-catProducts-grid').
innerHTML = catProductsHTML;