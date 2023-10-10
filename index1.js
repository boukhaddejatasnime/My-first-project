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


var movie1=Movies("Titanic",["https://sf1.closermag.fr/wp-content/uploads/closermag/2023/05/titanic-sait-enfin-rose-meurt-fin.jpeg","https://variety.com/wp-content/uploads/2023/01/Screen-Shot-2023-01-12-at-10.56.39-AM.png"],"Romance/Drama","Kate Winslet/Leonardo DiCaprio",10)
console.log(movie1,"img")
$('#change').append(`<h3>${movie1.name}</h3>
<p>Description :${movie1.description}</p>
<p>Price : ${movie1.price}</p>
`)



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
