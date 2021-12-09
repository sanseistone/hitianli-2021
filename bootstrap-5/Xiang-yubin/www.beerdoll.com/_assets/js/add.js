// JavaScript Document
function commafy(num) {
    num = num + "";

    if (/^.*\..*$/.test(num)) {
        var pointIndex = num.lastIndexOf(".");
        var intPart = num.substring(0, pointIndex);
        var pointPart = num.substring(pointIndex + 1, num.length);
        intPart = intPart + "";
        var re = /(-?\d+)(\d{3})/
        while (re.test(intPart)) {
            intPart = intPart.replace(re, "$1.$2")
        }
        num = intPart + "," + pointPart;

    } else {
        num = num + "";
        var re = /(-?\d+)(\d{3})/
        while (re.test(num)) {
            num = num.replace(re, "$1.$2")
        }
    }
    return num;
}

function ById(id) {
    return document.getElementById(id);
}

function TagName(obj, name) {
    return obj.getElementsByTagName(name);
}

function add_price() {

    var add_price = parseFloat(basic_price.innerHTML);
    var loadPrice = add_price;
    var add_price_show = ById("add_price_show");
    var old_price_show = ById("old_price_show");
    var add_sum = ById("add_sum");
    var itema = ById("itema");
    var item_title = "";
    var new_add_price = add_price;
    var discount_rate = ById("discount_rate");
    var valArr = new Array;
    $(".option-box-main input[type='radio']").each(function ($i) {
        valArr[$i] = $(this).attr("name");
    });
    var arr = new Array;
    //遍历当前数组
    for (var i = 0; i < valArr.length; i++) {
        //如果当前数组的第i已经保存进了临时数组，那么跳过，
        //否则把当前项push到临时数组里面
        if (arr.indexOf(valArr[i]) == -1) arr.push(valArr[i]);
    }


    var hiddenArr = new Array;
    $(".option-box-main input[type='hidden']").each(function ($i) {
        hiddenArr[$i] = $(this).attr("name");
    });
    var arry = new Array;
    for (var i = 0; i < hiddenArr.length; i++) {
        if (arry.indexOf(hiddenArr[i]) == -1) arry.push(hiddenArr[i]);
    }


    for (var i = 0; i < arr.length; i++) {

        if (document.getElementsByName(arr[i]).length >= 1) {
            /* if(document.getElementsByName(arr[i]).length > 1 ){
                 inp11=document.getElementsByName(arr[i])[0].checked;
                 inp21=document.getElementsByName(arr[i])[1].checked;
             }*/

            for (var j = 0; j < document.getElementsByName(arr[i]).length; j++) {
                if (document.getElementsByName(arr[i])[j].checked) {
                    new_add_price += parseFloat(document.getElementsByName(arr[i])[j].value);
                    add_price_show.innerHTML = commafy(new_add_price.toFixed(2));
                    if (old_price_show != null) {
                        /*if(parseFloat(discount_rate.innerHTML).toString() != "NaN"){*/
                        if (discount_rate != null) {
                            if (parseFloat(discount_rate.innerHTML).toString() != "NaN") {
                                old_price_show.innerHTML = commafy((new_add_price / (discount_rate.innerHTML)).toFixed(2)) + ' €';
                            } else {
                                old_price_show.innerHTML = commafy((new_add_price / 0.95).toFixed(2)) + ' €';
                            }
                        } else {
                            old_price_show.innerHTML = commafy((new_add_price / 0.95).toFixed(2)) + ' €';
                        }
                    }

                    //遍历出商品名称
                    if (i == 0) {
                        item_title = document.getElementsByName(arry[i])[j].value;
                    } else {
                        item_title += "+" + document.getElementsByName(arry[i])[j].value;
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
    add_sum.value = new_add_price.toFixed(2);

    var property = item_title.replace(/\s+|SD[0-9]*[+]?/g, " ");

    var property = property.split("+");

    for (var i = 1; i < (property.length + 1); i++) {

        $('.property-' + i + '').html(property[i - 1]);
    }

}


jQuery(function ($) {
    $(".option-box-main input[name='size']").click(function () {
        var x = $(this).next().val();
        var y = x.split("+")[1];
        $("input[name='sku']").val(y);
    })
})