// const imgStr = 'https://images.pexels.com/photos/ID_HERE/pexels-photo-ID_HERE.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
// let imgAry = [5693382, 3763578, 4545207, 3768164, 4609049, 4259707, 4473782, 4259138, 3807337, 7983157, 3933091, 7114420, 4260096, 7946449, 4624879, 4544901, 3806953, 4473871, 4545197, 5793919];
// let textAry = ['album1', 'album2', 'album3', 'album4', 'album5', 'album6', 'album7', 'album8', 'album9', 'album10', 'album11', 'album12', 'album13', 'album14', 'album15', 'album16', 'album17', 'album18', 'album19', 'album20'];
var url = 'https://script.google.com/macros/s/AKfycbyAdQ9c8vbq4W2amts6CfrIc_bz49QOULzWICPUibuRlOfSMvxG67uYE5ZZQOY8AjmJ/exec';

let pageID = [110813032, 110813038, 110819003, 110819006, 110819008, 110819009, 110819011, 110819012, 110819016, 110819018, 110819019, 110819020, 110819033, 110819038, 110819039]
// let pageID = document.location.toString().split('?')[1];

$(document).ready(function () {
    // imgAry.map(function (value, index) {
    //     $('section .row').append(t01(value, textAry[index]));
    // });
    getData();
});

$(function() {
    new WOW().init();
});

function getData() {
    let param = {};
    param.method = 'getFakeAPI';
    param.uid = '110819018';
    param.token = 'smXciVKZ1fMyUb';
    for (let i = 0; i < pageID.length; i++) {
        param.id = pageID[i];//pageID
        $.post(url, param, function (data) {
            console.log("success");
            console.log(data);
            let ALBUM_ID = data.data.ID;
            let ALBUM_IMGURL = data.data.imgurl;
            let ALBUM_NAME = data.data.name;
            let PHOTO_NUM = data.data.photoNum;
            let VIEW_NUM = data.data.viewNum;
            let content = t01(ALBUM_ID, ALBUM_IMGURL, ALBUM_NAME, PHOTO_NUM, VIEW_NUM);
            $('section .row').append(content);
            // initPage(data);
        }).fail(function () {
            console.log("fail");
            console.log(data);
        })
    }
    ;
}

function t01(ALBUM_ID, ALBUM_IMGURL, ALBUM_NAME, PHOTO_NUM, VIEW_NUM) {
    let html =
        `
        <div class="col-xl-3 col-md-4 col-sm-6 pt-3">
            <div class="imgbox position-relative hz-280">
                <a class="img position-absolute" href="./album.html?${ALBUM_ID}">
                    <img src="https://images.pexels.com/photos/${ALBUM_IMGURL}/pexels-photo-${ALBUM_IMGURL}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="w-100 h-100 object-fit-cover position-absolute img-fluid wow animate__animated animate__fadeIn" alt="">
                </a>
                <div class="info position-absolute fz-16 p-2 text-light">
                    <div class="line line1">${ALBUM_NAME}</div>
                    <div class="line line2">${PHOTO_NUM}張相片，${VIEW_NUM}次檢視</div>
                    <div class="line line3 text-end">
                        <a href="#"><i class="fa fa-share mx-1 text-light"></i></a>
                        <a href="#"><i class="fa fa-download mx-1 text-light"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `;
    return html;
}