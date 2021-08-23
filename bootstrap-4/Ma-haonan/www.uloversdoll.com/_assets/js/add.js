// JavaScript Document
function ById(id)
{
    return document.getElementById(id);
}
function TagName(obj,name)
{
    return obj.getElementsByTagName(name);
}
function add_price(){

    var num=0;
    var add_price=parseFloat(add_pic.innerHTML);
    var loadPrice=add_price;
    var add_price_show=ById("add_price_show");
    var add_sum=ById("add_sum");
    var itema=ById("itema");
    var item_title="";
    var new_add_price=add_price;

    var valArr = new Array;
    $(".pro-att input[type='radio']").each(function($i){
        valArr[$i]= $(this).attr("name");
    });
    var arr = new Array;
    //遍历当前数组
    for(var i = 0; i < valArr.length; i++){
        //如果当前数组的第i已经保存进了临时数组，那么跳过，
        //否则把当前项push到临时数组里面
        if (arr.indexOf(valArr[i]) == -1) arr.push(valArr[i]);
    }


    var hiddenArr = new Array;
    $(".pro-att input[type='hidden']").each(function($i){
        hiddenArr[$i]= $(this).attr("name");
    });
    var arry = new Array;
    for(var i = 0; i < hiddenArr.length; i++){
        if (arry.indexOf(hiddenArr[i]) == -1) arry.push(hiddenArr[i]);
    }


    for(var i=0;i<arr.length;i++){

        if(document.getElementsByName(arr[i]).length >= 1 ){
            if(document.getElementsByName(arr[i]).length > 1 ){
                inp11=document.getElementsByName(arr[i])[0].checked;
                inp21=document.getElementsByName(arr[i])[1].checked;
            }

            for(var j=0;j<document.getElementsByName(arr[i]).length;j++){
                if(document.getElementsByName(arr[i])[j].checked){
                    new_add_price+=parseFloat(document.getElementsByName(arr[i])[j].value);
                    add_price_show.innerHTML = new_add_price.toFixed(2);

                    //遍历出商品名称
                    if(i==0){
                        item_title=document.getElementsByName(arry[i])[j].value;
                    }else{
                        item_title+="+"+document.getElementsByName(arry[i])[j].value;
                    }
                }/*else{
                    if(inp11==false&&inp21==false){
                        add_price_show.innerHTML=loadPrice.toFixed(2);
                    }
                }*/
            }
        }
    }

    //商品名称

    itema.value = item_title;

    /*商品价格*/

    add_sum.value=add_price_show.innerHTML;

}


jQuery(function($){
    $(".pro-att input[name='Height']").click(function(){
        var x = $(this).next().val();
        var y = x.split("+")[1];
        var z = y.split(":")[1];
        $("input[name='sku']").val(z);
    })
})

jQuery(function($){
    $(".pro-att input[name='height']").click(function(){
        var x = $(this).next().val();
        var y = x.split("+")[1];
        var z = y.split(":")[1];
        $("input[name='sku']").val(z);
    })
})

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?32a94d27eded10f992686481b217e8d0";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();