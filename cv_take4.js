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
    cv+=("<meta name='viewport' content='width=device-width'/><meta charset='UTF-8'></head><body id='top'><div id='CV' class='instaFade'><div class='mainDetails'><div id='maininfo'><h1 class='quickFade delayTwo ' id='name'>" + fname + " " + localStorage['lname'] + "</h1></div><div id='contactDetails' class='quickFade delayFour'><ul><li id='email'>Email: " +  localStorage['email'] + "</li><li id='phone'>Phone: " + localStorage['phone'] + "</li></ul></div><div class='clear'></div></div><div id='mainArea' class='quickFade delayFive'><section><article><div class='sectionTitle'><h1>Personal Profile</h1></div><div class='sectionContent' id='personalprof'>" + localStorage['statement'] + "</div></article><div class='clear'></div></section>");
    cv+=("<section><div class='sectionTitle'><h1>Education</h1></div><div class='sectionContent'><article><h2>Kenyon College</h2><p id='collegeinfo'>Bachelor of Arts ");
    if(localStorage['mjcount']>0){
        for(i=1;i<=localStorage['mjcount'];i++){
            cv+=(", " + localStorage['major'+ i]);
        }
        cv+="</br>";
    }/*
    if(mCnt>0){
        CV+="Minor: ";
        for(i=1;i<=mCnt;i++){
            CV+= document.getElementById('addminor'+i ).value;
            if(i+1<=mCnt){
                CV+=", ";
            }
        }
        CV+="</br>";
    }
    if(cCnt>0){
        CV+="Concentration: ";
        for(i=1;i<=cCnt;i++){
            CV+= document.getElementById('addconcentration'+i ).value;
            if(i+1<=cCnt){
                CV+=", ";
  }
        }
        CV+="</br>";
    }
    if(document.getElementById('addoverallgpa') && document.getElementById('addoverallgpa').value){
        CV+="GPA: " +  document.getElementById('addoverallgpa').value + " ";
    }*/

    cv+=/*"Expected graduation: "+ document.getElementById('addgradyr').value +*/"</p></article></div><div class='clea\
r'></div></section>";

         //to end
         cv+=("</div></div></body>");
    return cv;
}
