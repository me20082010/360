window.onload = function() {
  
    var speed=1.8;
    var column={
      num:8,
      max:200,
      min:30,
      
    }
    var a = [];
    var item = {
        index: 0,
        value: 0
    };

    var oUl = document.getElementById('lines');
    var oItem = document.getElementById('item');



    var stml = '';
    for (var i = 0; i < column.num; i++) { //柱子的个数
        stml += '<li></li>';
        a[i] = {};
        a[i].length =(column.max/column.num)*i*0.9+column.min; //柱子初始高度
        a[i].speed = speed; //柱子生长速度
        //					console.log(a[i].speed);
    }

    oUl.innerHTML = stml;
    var tem = 0;

    var move = function() {
        for (var i = 0; i < a.length; i++) {
            if (a[i].length > column.max) { //柱子的最高高度
                a[i].speed = -speed;
            }
            if (a[i].length < column.min) { //柱子的最低高度
                a[i].speed = speed;
            }

            a[i].length += a[i].speed;
            if (item.index == i) {
                item.value = a[i].length;
                // console.log(item.value);
            }
            oUl.children[i].style.height = a[i].length + 'px';
            oItem.style.bottom = (item.value) + 'px';
            oItem.style.left = 20+50 * (item.index ) + 'px';
        }
        tem++;
        if (tem < 2000) {
            requestAnimationFrame(move);
        }
    };
    move();
    document.onkeyup = function(e) {
        if (e.keyCode == 32 && item.value > a[item.index+1].length) {
            item.index++;
        } else if (item.value < a[item.index+1].length) {
            alert('die');
        }
    };
};