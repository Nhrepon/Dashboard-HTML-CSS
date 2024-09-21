
var itemList = document.querySelectorAll("ul li a");
itemList.forEach(function (item){
    item.onclick= function (e){

        document.getElementById("content-title").innerHTML = this.innerText + " page";
    }
})


