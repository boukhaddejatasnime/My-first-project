function Movies(name,images,description,cast,price){
    return{
        name:name,
        images:images,
        date:new Date(),
        description:description,
        cast:cast,
        price:price()
    }
}


var movie1=Movies("choose your place",["images/movie.avif","images/drive.webp","images/canape.jpg","images/cinema.jpg"],"Romance/Drama","Kate Winslet/Leonardo DiCaprio",10)
console.log(movie1,"img")
$('#change').append(`<h3>${movie1.date}</h3>
<p>Price : ${movie1.price()}</p>
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
})
