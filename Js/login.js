function Login(){
var done=0;
var username=document.login.username.value;
username=username.toLowerCase();
var password=document.login.password.value;
password=password.toLowerCase();
if (username=="jessie" && password=="republica") { window.location="https://artesvisuais.github.io/JdRep/3serie/3anoDownloads.html"; done=1; }
if (username=="Bob" && password=="republica") { window.location="https://artesvisuais.github.io/JdRep/2serie/2anoDownloads.html"; done=1; }
if (username=="Buzz" && password=="republica") { window.location="https://artesvisuais.github.io/JdRep/3serie/3anoDownloads.html"; done=1; }
if (username=="Rex" && password=="republica") { window.location="https://artesvisuais.github.io/JdRep/3serie/3anoDownloads.html"; done=1; }
//if (username=="outro" && password=="outrasenha") { window.location="http://www.seu_site.com.br"; done=1; }
if (done==0) { window.location="https://artevisuais.github.io/login.html"; done=1; }
}