const randomColor=function () {
    const hex="0123456789ABCDEF"
    let color="#"
    for (let i = 0; i < 6; i++) {

    color +=hex[Math.floor(Math.random()*16)]
        
    }
    return color
    
}
const startChangecolor=function () {

    
     intervalid=setInterval(changebgColor,500)

        
    
    function changebgColor() {
        document.body.style.backgroundColor=randomColor()
    }
}
const stopchangecolor=function () {
    clearInterval(intervalid)
    // intervalid=null


    
}
document.querySelector("#stop").addEventListener("click",stopchangecolor)
document.querySelector("#Start").addEventListener("click",startChangecolor)






// console.log(randomColor())