function item_scroll(a) {
    var scroll_offset = a.offset(); //得到pos这个div层的offset，包含两个值，top和left
    console.log(scroll_offset);
    $("body,html").animate({
        scrollTop:scroll_offset.top //让body的scrollTop等于pos的top，就实现了滚动
    },1000);
}
item_scroll(a);