function Movies(name,images,description,cast,price){
    return{
        name:name,
        images:images,
        date:new Date(),
        description:description,
        cast:cast,
        price:price
    }
}


var movie1=Movies("choose your place",["images/movie.avif","images/drive.webp","images/canape.jpg","images/cinema.jpg"],"Romance/Drama","Kate Winslet/Leonardo DiCaprio",10)
console.log(movie1,"img")
$('#change').append(`<h3>${movie1.date}</h3>
`)


function price(){
    if(movie1.images[1]){
        console.log("price:8dt")
    }
    if(movie1.images[2]){
        console.log("price:20dt")
    }
    else if(movie1.images[3]){
        console.log("price:15dt")
    }
}


function changeimg (item){
    var counter=0
 function getnext(){
      counter++
      counter=counter%item.length
      console.log(counter)
      return  item[counter]
    }
    return getnext
  }
  
  
console.log(changeimg());
var change=changeimg(movie1.images)


$('#img1').on('click',function(){
  var getnextindex=change()
  this.src=getnextindex
}) /////


/*function img{
    function getimg (images){
        this.images=images;
        this.index=0
        this.imageElement=document.getElementById("img1")
        this.descriptionElement=document.getElementById("description")
        this.priceElement=document.getElementById("price")
        this.prevButton=document.getElementById('previous')
        this.nextButton=document.getElementById("next")
    

this.showImage(this.index)
this.prevButton.addEventListener("click",this.Sprevious.console.log(this))
this.nextButton.addEventListener("click",this.Snext.console.log(this))
    }
showImage(i){
    if(i>=0 && i<this.images.length){
        var image=this.images[i]
        this.imageElement.src=image.src
        this.descriptionElement.textContent=image.description
        this.priceElement.textContent="price: $${img1.price}"
        
        
    }
}
Sprevious(){
    if(this.index>0){
        this.index--
        this.showImage(this.index)
    }
}
Snext(){
    if(this.index< this.images.length-1){
        this.index++
        this.showImage(this.index)
    }

}

}
var images=[
    {src:"images/cinema.jpg",description:"standard",price:"8dt"},
    {src:"images/canape.jpg",description:"comfortable",price:"15dt"},
    {src:"images/drve.webp",description:"from your car",price:"10dt"}
]
 var change=new img(imags)*/
