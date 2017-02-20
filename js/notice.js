/**
 * Created by Rocky-Wang on 2017/2/20.
 */

function noticeInit() {
    // 获取通知栏所有操作对象
    var oNoticeDiv = document.getElementById('notice1');
    var oHeadUl = oNoticeDiv.getElementsByClassName('notice-hd')[0];

    var oBoardDiv = oNoticeDiv.getElementsByTagName('div')[0];

    var aTitles = oHeadUl.getElementsByTagName('li');
    var aBoardUls = oBoardDiv.getElementsByTagName('ul');

    var nNoticeLen = Math.min(aBoardUls.length,aTitles.length);

    console.log('the len is: ' + nNoticeLen);
    function resetStyleNotice() {
        for (var i = 0; i < nNoticeLen; i++){
            aTitles[i].className = " ";
            aBoardUls[i].style.display = "none";
        }
    }

    for (var i = 0; i < nNoticeLen; i++){
        (function (n) {
            aTitles[n].onmouseover = function ev() {
                // 复位样式
                resetStyleNotice();
                console.log('rest success!');
                // 设置当前样式
                aBoardUls[n].style.display = "block";
                aTitles[n].className = "selected";
            };

        })(i);
    }
}