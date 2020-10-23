function fetchData() {
  fetch("http://krista-t.com/bike-shop/wp-json/wp/v2/bike?_embed")


    //initialize data from json
    .then(function (response) {
      return response.json();
    })

    //receive data
    .then(function (data) {
      dataReceived(data);
      // console.log(data);
    });


}

fetchData();


function dataReceived(bikes) {

  //loop through data
  bikes.forEach(showBikes);

}


function showBikes(bike) {
  console.log(bike)

  //FIND TEMPLATE
  const template = document.querySelector('template#myposts').content;
  const copy = template.cloneNode(true);


  //WHAT TO SHOW
  copy.querySelector("h4").textContent = bike.title.rendered;
  copy.querySelector(".price").innerHTML = "Price-  $" +  bike.price ;
  copy.querySelector(".color div").style.background = bike.colors;
  copy.querySelector(".in-stock").textContent = "In Stock- " + bike.in_stock;

  //IF NO COLOR
  if (bike.colors == "N/A") {
    copy.querySelector(".color").innerHTML = "Colours- N/A";
  }


  //IMG
  const img_url = bike._embedded["wp:featuredmedia"][0].source_url;
  // console.log(img_url);
  copy.querySelector("img").src = img_url;
  document.querySelector("main").appendChild(copy);


}