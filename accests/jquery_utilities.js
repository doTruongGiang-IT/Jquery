var characters = [
    {
        "name": "Sheldon Cooper",
        "gender": "male",
        "actor": "Jim Parsons",
        "nickname": "Shelly",
        "image": "image/Sheldon.jpg"
    },
    {
        "name": "Leonard Leakey Hofstadter",
        "gender": "male",
        "actor": "Johnny Galecki",
        "nickname": "Lenny",
        "image": "image/Leonerd.jpg"
    },
    {
        "name": " Rajesh Ramayan Koothrappali",
        "gender": "male",
        "actor": "Kunal Nayyar",
        "nickname": "Raj",
        "image": "image/Rajesh.jpg"
    },
    {
        "name": "Bernadette Maryann Rostenkowski",
        "gender": "female",
        "actor": "Melissa Rauch",
        "nickname": "Bernie",
        "image": "image/Bernie.jpg"
    },
    {
        "name": "Penny Hofstadter",
        "gender": "female",
        "actor": "Kaley Cuoco",
        "nickname": "Patsy",
        "image": "image/penny.jpg"
    }
];

$(function() {
    $('#btn1').click(function (e) { 
        e.preventDefault();
        var isContain = $.contains(document.body, $('center')[0]);
        if( isContain ) {
            $(`
                <div>3. Javascript</div>
                <div>4. PHP</div>
            `).appendTo('#boxData');
            $('#btn1').attr('disabled', 'disabled');
        }
          
    });
});

$(function() {
    $('#btn2').click(function() {
        $.each($('#boxData2 div'), function (index, value) { 
            ( index % 2 ==0 ) ? $(value).addClass('bg2') : $(value).addClass('bg');
       });
       $('#btn1').removeAttr('disabled');
    });
});

$(function() {
    var arr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
    $('#btn3').click(function(e) {
        e.preventDefault();
        var newArr = $.grep(arr, function(val, index) {
            return(val % 2 ==0 && val > 5);
        });
        console.log(arr);
        console.log(newArr);
    });
});

$(function() {
    var arr = [300, 'jquery', 500, 'html', 250, 'php', 'jquery'];
    $('#btn4').click(function(e) {
        e.preventDefault();
        var index = $.inArray('jquery', arr);
        console.log(index);
    });
});

$(function() {
    var a, b;
    a = $('#boxData2 .item');
    console.log(a);
    console.log(a + "");

    $('#btn5').click(function(e) {
        e.preventDefault();
        b = $.makeArray(a);
        console.log(b);
        console.log(b + "");
        console.log(b.reverse());
    });
});

$(function() {
    var b;
    var arr = [2, 4, 6, 8];
    var obj = {
        "name": "Penny Hofstadter",
        "gender": "female",
        "actor": "Kaley Cuoco",
        "nickname": "Patsy",
        "image": "image/penny.jpg"
    };

    $('#btn6').click(function(e) {
        e.preventDefault();
        b = $.map(obj, function(val, index) {
            return(index + ": " + val);
        });
        console.log(b);
    });
});

$(function() {
    var arr1, arr2, newArr;
    arr1 = [0,2,4,6,8];
    arr2 = [1,3,5,7,9];
    $('#btn7').click(function(e) {
        e.preventDefault();
        newArr = $.merge(arr1, arr2);
        console.log(newArr);
    });
});

$(function() {
    $('#btn8').click(function(e) {
        e.preventDefault();
        
    });
});

$(function() {
    $('#btn9').on('click', function(e) {
        e.preventDefault();
        //$('body div div.bg').addClass('bg2');
        $('div + p').addClass('bg2');
    });
});