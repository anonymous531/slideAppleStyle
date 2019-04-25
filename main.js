var allLis = $(".menu > ul > li")
var allDiv1 = $(".menu > ul > li > .div1")
var allDiv2 = $(".menu > ul > li > .div2")
var images = $(".images")
var n = 0
var timer = setInterval(function(){
    $(images).css({
        transform:'translateX('+ n%4* -920 +'px)'
    })
    n++
    console.log('定时器')
},2000)
for(let i=0;i<allLis.length;i++){
    $(allLis[i]).on('click',function(e){
        let _this = e.currentTarget
        let index = $(_this).index()
        $(images).css({
            transform:'translateX('+index* -920+'px)'
        })
        $(_this).addClass('active').siblings('.active').removeClass('active') 
        n = index
    })
}
$('#window').on('mouseenter',function(){
    window.clearInterval(timer)
})
$('#window').on('mouseleave',function(){
    timer = setInterval(function(){
        $(images).css({
            transform:'translateX('+ n%4* -920 +'px)'
        })
        n++
    },2000)
})
