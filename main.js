var allLis = $(".menu > ul > li")
var allDiv1 = $(".menu > ul > li > .div1")
var allDiv2 = $(".menu > ul > li > .div2")
var images = $(".images")
for(var i=0;i<allLis.length;i++){
    $(allLis[i]).on('click',function(e){
        let _this = e.currentTarget
        let index = $(_this).index()
        $(images).css({
            transform:'translateX('+index* -920+'px)'
        })
        $(_this).addClass('active').siblings('.active').removeClass('active')
        
    })
}
