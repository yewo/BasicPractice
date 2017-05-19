;$(function () {
    'use strict';

    var sidebar = $('#sidebar'),    //选择侧栏
        maskup = $('.maskup'),      //选择遮罩层
        sidebar_trigger = $('#sidebar_trigger'),  //产生触发
        close =$('.close');         //选择关闭图标

    function showSideBar() {
        maskup.fadeIn();
        sidebar.css('right', 0);
    }

    function  hideSideBar() {
        maskup.fadeOut();
        sidebar.css('right', -sidebar.width());
    }

    sidebar_trigger.on('click', showSideBar)
    maskup.on('click', hideSideBar)
    close.on('click', hideSideBar)
})