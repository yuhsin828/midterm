var url = 'https://script.google.com/macros/s/AKfycbyAdQ9c8vbq4W2amts6CfrIc_bz49QOULzWICPUibuRlOfSMvxG67uYE5ZZQOY8AjmJ/exec';

let pageID = document.location.toString().split('?')[1];

$(document).ready(function () {
    getData();
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
    let ALBUM_IMGURL = data.data.imgurl;
    let ALBUM_NAME = data.data.name;
    let ALBUM_INFO = data.data.info;
    let PHOTO_NUM = data.data.photoNum;
    let VIEW_NUM = data.data.viewNum;
    let AUTHOR_IMG = data.data.authorImg;
    let ALBUM_AUTHOR = data.data.author;
    let content = theader(ALBUM_IMGURL, ALBUM_NAME, ALBUM_INFO, PHOTO_NUM, VIEW_NUM, AUTHOR_IMG, ALBUM_AUTHOR);
    $('header .container').append(content);

    for (let i = 0; i < data.data.images.length; i++) {
        let OBJ_IMURL = data.data.images[i].imgurl;
        let OBJ_TITLE = data.data.images[i].title;
        let OBJ_AUTHOR = data.data.images[i].author;
        let LIKE_NUM = data.data.images[i].likeNum;
        let COMMENT_NUM = data.data.images[i].commentNum;
        let content = tsection(OBJ_IMURL, OBJ_TITLE, OBJ_AUTHOR, LIKE_NUM, COMMENT_NUM);
        $('section .row').append(content);
    }
}

function theader(ALBUM_IMGURL, ALBUM_NAME, ALBUM_INFO, PHOTO_NUM, VIEW_NUM, AUTHOR_IMG, ALBUM_AUTHOR) {
    let html =
        `
        <div class="row h-100 position-relative">
            <img src="https://images.pexels.com/photos/${ALBUM_IMGURL}/pexels-photo-${ALBUM_IMGURL}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="h-100 object-fit-cover position-absolute p-0 img-fluid" alt="">
                <div class="black-mask h-100 position-absolute"></div>
                <div class="info position-absolute text-light text-center m-auto">
                    <div class="fz-28 pb-2">${ALBUM_NAME}</div>
                    <div class="fz-20 pb-2">${ALBUM_INFO}</div>
                    <div class="fz-14 pb-2">${PHOTO_NUM}張相片，${VIEW_NUM}次檢視</div>
                    <div class="fz-16 pb-3">
                        <a href="#" class="text-light"><i class="fa fa-share mx-1"></i></a>
                        <a href="#" class="text-light"><i class="fa fa-download mx-1"></i></a>
                    </div>
                    <div class="">
                        <a href="#"><img src="${AUTHOR_IMG}"
                            class="wz-85 rounded-circle img-fluid" alt=""></a>
                    </div>
                    <div class="fz-14">相片擁有者:${ALBUM_AUTHOR}</div>
                </div>
        </div>
        `;
    return html;
}

function tsection(OBJ_IMURL, OBJ_TITLE, OBJ_AUTHOR, LIKE_NUM, COMMENT_NUM) {
    let html =
        `
        <div class="col-xl-4 col-md-6 pt-1 px-1">
            <div class="imgbox position-relative hz-320">
                <a class="img position-absolute" href="#">
                    <img src="https://images.pexels.com/photos/${OBJ_IMURL}/pexels-photo-${OBJ_IMURL}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="w-100 h-100 object-fit-cover position-absolute img-fluid" alt="">
                </a>
                <div class="info position-absolute fz-12 text-light p-2">
                    <div class="line">${OBJ_TITLE}</div>
                    <div class="line d-flex justify-content-between">
                        <div class="line">相片擁有者：${OBJ_AUTHOR}</div>
                        <div class="line"><i class="fa fa-star-o" aria-hidden="true"></i>${LIKE_NUM}</div>
                        <div class="line"><i class="fa fa-comment-o" aria-hidden="true"></i>${COMMENT_NUM}</div>
                    </div>
                </div>
            </div>
        </div>
        `;
    return html;
}