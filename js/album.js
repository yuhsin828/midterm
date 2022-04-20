var url = 'https://script.google.com/macros/s/AKfycbyAdQ9c8vbq4W2amts6CfrIc_bz49QOULzWICPUibuRlOfSMvxG67uYE5ZZQOY8AjmJ/exec';

// let url = "https://www.google.com/?name=Ben&from=taipei&job=teacher";
// let argumentAry = url.split('?');
// console.log(argumentAry);
// let argumentAry2 = argumentAry[1].split('&');
// // console.log(argumentAry2);
// for (let i = 0; i < argumentAry2.length; i++) {
//     argumentAry2[i] = argumentAry2[i].split('=');
// }
// console.log(argumentAry2);

let pageID = document.location.toString().split('?')[1];

let param = {};
param.method = 'getFakeAPI';
param.uid = '110819018';
param.token = 'smXciVKZ1fMyUb';
param.id = "pageID";

$.post(url, param, function (data) {
    console.log("success");
    console.log(data);
    //   initPage(data);
}).fail(function () {
    console.log("fail");
    console.log(data);
});