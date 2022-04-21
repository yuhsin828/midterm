var url = 'https://script.google.com/macros/s/AKfycbyAdQ9c8vbq4W2amts6CfrIc_bz49QOULzWICPUibuRlOfSMvxG67uYE5ZZQOY8AjmJ/exec';

let pageID = document.location.toString().split('?')[1];

$(document).ready(function () {
    getData();
});

$(function () {
    new WOW().init();
});

function getData() {
    let param = {};
    param.method = 'getFakeAPI';
    param.uid = '110819018';
    param.token = 'smXciVKZ1fMyUb';
    param.id = pageID;
    $.post(url, param, function (data) {
        console.log("success");
        console.log(data);
        initPage(data);
    }).fail(function () {
        console.log("fail");
        console.log(data);
    });
}

function initPage(data) {

    let ALBUM_ID = data.data.imgurl;
    let ALBUM_NAME = data.data.name;
    let ALBUM_INFO = data.data.info;
    let PHOTO_NUM = data.data.photoNum;
    let VIEW_NUM = data.data.viewNum;
    let AUTHOR_IMG = data.data.authorImg;
    let ALBUM_AUTHOR = data.data.author;
    let ALBUM_IMGURL = `https://images.pexels.com/photos/${ALBUM_ID}/pexels-photo-${ALBUM_ID}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
    $('header .headerimg').css('background-image', 'url(' + ALBUM_IMGURL + ')');
    $('title').append(ALBUM_NAME);
    let content = theader(ALBUM_NAME, ALBUM_INFO, PHOTO_NUM, VIEW_NUM, AUTHOR_IMG, ALBUM_AUTHOR);
    $('header .info').append(content);

    for (let i = 0; i < data.data.images.length; i++) {
        let ID_HERE = data.data.images[i].imgurl;
        let IMGURL = `https://images.pexels.com/photos/${ID_HERE}/pexels-photo-${ID_HERE}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
        $('.field' + (i + 1)).css('background-image', 'url(' + IMGURL + ')');

        let OBJ_TITLE = data.data.images[i].title;
        $('.field' + (i + 1) + ' .line1').append(OBJ_TITLE);

        let OBJ_AUTHOR = data.data.images[i].author;
        $('.field' + (i + 1) + ' .line2').append(OBJ_AUTHOR);

        let LIKE_NUM = data.data.images[i].likeNum;
        $('.field' + (i + 1) + ' .line3').append(LIKE_NUM);

        let COMMENT_NUM = data.data.images[i].commentNum;
        $('.field' + (i + 1) + ' .line4').append(COMMENT_NUM);
    }
}

function theader(ALBUM_NAME, ALBUM_INFO, PHOTO_NUM, VIEW_NUM, AUTHOR_IMG, ALBUM_AUTHOR) {
    let html =
        `
        <div class="fz-28 pb-2">${ALBUM_NAME}</div>
        <div class="fz-20 pb-2">${ALBUM_INFO}</div>
        <div class="fz-14 pb-2">${PHOTO_NUM}張相片，${VIEW_NUM}次檢視</div>
        <div class="fz-16 pb-3">
            <a href="#" class="text-light"><i class="fa fa-share mx-1"></i></a>
            <a href="#" class="text-light"><i class="fa fa-download mx-1"></i></a>
        </div>
        <div class="">
            <a href="#"><img src="${AUTHOR_IMG}"
                class="wz-85 rounded-circle img-fluid pb-2" alt=""></a>
        </div>
        <div class="fz-14">相片擁有者：${ALBUM_AUTHOR}</div>
        `;
    return html;
}