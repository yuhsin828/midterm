const imgStr = 'https://images.pexels.com/photos/ID_HERE/pexels-photo-ID_HERE.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
let imgAry = [5693382, 3763578, 4545207, 3768164, 4609049, 4259707, 4473782, 4259138, 3807337, 7983157, 3933091, 7114420, 4260096, 7946449, 4624879, 4544901, 3806953, 4473871, 4545197, 5793919];
let textAry = ['album1', 'album2', 'album3', 'album4', 'album5', 'album6', 'album7', 'album8', 'album9', 'album10', 'album11', 'album12', 'album13', 'album14', 'album15', 'album16', 'album17', 'album18', 'album19', 'album20'];

$(document).ready(function () {
    imgAry.map(function (value, index) {
        $('section .row').append(t01(value, textAry[index]));
    });
});



// var url = 'https://script.google.com/macros/s/AKfycbyAdQ9c8vbq4W2amts6CfrIc_bz49QOULzWICPUibuRlOfSMvxG67uYE5ZZQOY8AjmJ/exec';
// let param = {};
// param.method = 'getFakeAPI';
// param.uid = '110819018';
// param.token = 'sCNmJc58HxJw1p';
// param.id = "110819018";
// $.post(url, parameter, function(data) {
//   console.log("success");
//   console.log(data);
//   initPage(data);
// }).fail(function() {
//   console.log("fail");
// });


// var url = "";
// var parameter = {};
// var jqxhr = $.post(url, parameter, function(data) {
//   console.log("success");
//   console.log(data);
//   initPage(data);
// })
// .done(function(data) {
//   console.log( "second success");
//   console.log(data)
// })
// .fail(function() {
//   console.log( "error" );
// })
// .always(function() {
//   console.log( "finished" );
// });


function t01(ID_HERE, TEXT_HERE) {
    let html =
    `
        <div class="col-xl-3 col-md-4 col-sm-6 pt-3">
            <div class="imgbox position-relative hz-280">
                <a class="img position-absolute" href="./album.html">
                    <img src="https://images.pexels.com/photos/${ID_HERE}/pexels-photo-${ID_HERE}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        class="w-100 h-100 object-fit-cover position-absolute img-fluid" alt="">
                </a>
                <div class="info position-absolute fz-16 py-0">
                    <div class="line line1">${TEXT_HERE}</div>
                    <div class="line line2">N張相片，NNN次檢視</div>
                    <div class="line line3">
                        <i class="fa fa-share"></i>
                        <i class="fa fa-download"></i>
                    </div>
                </div>
            </div>
        </div>

    `;
    return html;
}