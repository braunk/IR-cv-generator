$(document).ready(function(){
    if(getVals()){
        console.log("name is " +name);
        $('.cv').append(buildCV());
    }
    else
        console.log("error");
});
var name;
function supportsLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

function getVals(){
    if(!supportsLocalStorage()){return false;}
    fname=localStorage['fname'];
    return true;
}
function buildCV(){
    var cv=("<head><title id='pagetitle'>"+ fname + " - CV </title></head>");
    
//personal info and statement
    cv+=("<meta name='viewport' content='width=device-width'/><meta charset='UTF-8'></head><body id='top'>
   <div id='CV' class='instaFade'><div class='mainDetails'><div id='maininfo'><h1 class='quickFade delayTwo ' id='name'>
" + fname + " " + localStorage['lname'] + "</h1></div><div id='contactDetails' class='quickFade delayFour'><ul><li id='email'>
Email: " +  localStorage['email'] + "</li><li id='phone'>Phone: " + localStorage['phone'] + "</li></ul></div>
<div class='clear'></div></div><div id='mainArea' class='quickFade delayFive'><section><article><div class='sectionTitle'>
<h1>Personal Profile</h1></div><div class='sectionContent' id='personalprof'>" + localStorage['statement'] + "</div>
</article><div class='clear'></div></section>");
         
         //to end
         cv+=("</div></div></body>");
    return cv;
}
