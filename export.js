// ==UserScript==
// @name        AI聊天匯出器
// @namespace    https://xuanheai.com/
// @version      0.1
// @description  以優化過的HTML格式匯出AI聊天記錄
// @include      https://xuanheai.com/*
// @author       Sardo Ip
// @grant        none
// ==/UserScript==

function test(){
  console.log('Hello World!');
}

function download(filename, text) {
  const downloadLink = document.createElement('a');
  downloadLink.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(text));
  downloadLink.setAttribute('download', filename);
  downloadLink.text = '下載內容';
  
  const buttonBar = document.querySelector('.btn-bar');
  buttonBar.appendChild(downloadLink);
}

// Start file download.
download("AI匯出.html","<html><head><title>測試</title></head></html>");


test();


