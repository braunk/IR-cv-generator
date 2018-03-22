//javascript code for cvform_take5.js.html

$(document).ready(function (){
    console.log("in doc ready function");

//clicking on add or remove buttons
    $("#add-major-btn").click(add_major);
    $("#rm-major-btn").click(rm_major);
    $("#add-minor-btn").click(add_minor);
    $("#rm-minor-btn").click(rm_minor);
    $("#add-concentration-btn").click(add_concentration);
    $("#rm-concentration-btn").click(rm_concentration);
    $("#add-award-btn").click(add_award);
    $("#rm-award-btn").click(rm_award);
    $("#add-inexternship-btn").click(add_inexternship);
    $("#rm-inexternship-btn").click(rm_inexternship);
    $("#add-work-btn").click(add_work);
    $("#rm-work-btn").click(rm_work);
    $("#add-research-btn").click(add_research);
    $("#rm-research-btn").click(rm_research);
    $("#add-leader-btn").click(add_leadership);
    $("#rm-leader-btn").click(rm_leadership);
    $("#add-activity-btn").click(add_activity);
    $("#rm-activity-btn").click(rm_activity);
    $("#add-skill-btn").click(add_skill);
    $("#rm-skill-btn").click(rm_skill);
    $("#add-CEL-btn").click(add_CEL);
    $("#rm-CEL-btn").click(rm_CEL);
    
//submit button clicked
    $("#submit-btn").click(savetolocal);
});

var ieCnt=0;
var mCnt=0;
var mjCnt=0;
var cCnt=0;
var aCnt=0;
var rCnt=0;
var workCnt=0;
var leadCnt=0;
var actCnt=0;
var skCnt=0;
var CELCnt=0;

function add_major(){
    if(mjCnt <3){
        mjCnt=mjCnt+1;
        $('#addmajors').append('</br><input type="text" id="addmajor'+ mjCnt +'" class="form-control" placeholder="Major ' + mjCnt +'">'+ '<input type="text" id="addmajorgpa' + mjCnt + '" class="form-control" placeholder="Current within\
 major'+ mjCnt +' GPA">')
    };
}
function rm_major(){
    if(mjCnt >0){
        $('#addmajor'+mjCnt).remove();
        $('#addmajorgpa'+mjCnt).remove();
        $('br:last-child').remove();
        mjCnt=mjCnt-1;
    }
}
function add_minor(){
    if(mCnt <3){
        mCnt=mCnt+1;
        $('#addminors').append('</br><input type="text" id="addminor'+ mCnt +'" class="form-control" placeholder="Minor ' + mCnt +'">')
    };
}
function rm_minor(){
    if(mCnt >0){
        $('#addminor'+mCnt).remove();
        $('br:last-child').remove();
        mCnt=mCnt-1;
    }
}
function add_concentration(){
    if(cCnt <3){
        cCnt=cCnt+1;
        $('#addconcentrations').append('</br><input type="text" id="addconcentration'+ cCnt +'" class="form-control" placeholder="Concentration ' + cCnt +'">')
    };
}
function rm_concentration(){
    if(cCnt >0){
        $('#addconcentration'+cCnt).remove();
        $('br:last-child').remove();
        cCnt=cCnt-1;
    }
}
function add_award(){
    if(aCnt <30){
        aCnt=aCnt+1;
        $('#addawards').append('</br><input type="text" id="addaward'+ aCnt +'name" class="form-control" placeholder="Name of award ' + aCnt +'"><input type="text" id="addaward'+ aCnt +'date" class="form-control" placeholder="Date recei\
ved"><input type="text" id="addaward'+ aCnt +'des" class="form-control" placeholder="Description of award">')
    };
}
function rm_award(){
    if(aCnt >0){
        $('#addaward'+aCnt + 'name').remove();
        $('#addaward'+aCnt + 'date').remove();
        $('#addaward'+aCnt + 'des').remove();
        $('br:last-child').remove();
        aCnt=aCnt-1;
    }
}
function add_inexternship(){
    if(ieCnt <30){
        ieCnt=ieCnt+1;
        $('#addinexternship').append('</br><input type="text" id="addinextern'+ ieCnt +'title" class="form-control"placeholder="Title at company"><input type="text" id="addinextern'+ ieCnt +'srtdate" class="form-control" placeholder="St\
art date"><input type="text" id="addinextern'+ ieCnt +'enddate" class="form-control" placeholder="End date"> <input type="text" id="addinextern'+ ieCnt +'" class="form-control" placeholder="Description of experience">')}
}
function rm_inexternship(){
    if(ieCnt >0){
        $('#addinextern'+ieCnt + 'title').remove();
        $('#addinextern'+ieCnt + 'srtdate').remove();
        $('#addinextern'+ieCnt + 'enddate').remove();
        $('#addinextern'+ieCnt).remove();
        $('br:last-child').remove();
        ieCnt=ieCnt-1;
    }
}
function add_work(){
    if(workCnt <30){
        workCnt=workCnt+1;
        $('#addwork').append('</br><input type="text" id="addwork'+ workCnt +'title" class="form-control" placeholder="Title at company"><input type="text" id="addwork'+ workCnt +'srtdate" class="form-control" placeholder="Start date"><\
input type="text" id="addwork'+ workCnt +'enddate" class="form-control" placeholder="End date"> <input type="text" id="addwork'+ workCnt +'" class="form-control" placeholder="Job description">')}
}
function rm_work(){
    if(workCnt >0){
        $('#addwork'+workCnt + 'title').remove();
        $('#addwork'+workCnt + 'srtdate').remove();
        $('#addwork'+workCnt + 'enddate').remove();
        $('#addwork'+workCnt).remove();
        $('br:last-child').remove();
        workCnt=workCnt-1;
    }
}
function add_research(){
    if(rCnt <30){
        rCnt=rCnt+1;
        $('#addresearch').append('</br><input type="text" id="addresearch'+ rCnt +'title" class="form-control"placeholder="Research topic"><input type="text" id="addresearch'+ rCnt +'srtdate" class="form-control" placeholder="Start date\
"><input type="text" id="addresearch'+ rCnt +'enddate" class="form-control" placeholder="End date"> <input type="text" id="addresearch'+ rCnt +'des" class="form-control" placeholder="Research Description">')}
}
function rm_research(){
    if(rCnt >0){
        $('#addresearch'+rCnt + 'title').remove();
        $('#addresearch'+rCnt + 'srtdate').remove();
        $('#addresearch'+rCnt + 'enddate').remove();
        $('#addresearch'+rCnt + 'des').remove();
        $('br:last-child').remove();
        rCnt=rCnt-1;
    }
}
function add_leadership(){
    if(leadCnt <30){
        leadCnt=leadCnt+1;
        $('#addleader').append('</br><input type="text" id="addleadership'+ leadCnt +'title" class="form-control" placeholder="Leadership title"><input type="text" id="addleadership'+ leadCnt +'srtdate" class="form-control" placeholder=\
"Start date"><input type="text" id="addleadership'+ leadCnt +'enddate" class="form-control" placeholder="End date"><input type="text" id="addleadership'+ leadCnt +'des" class="form-control" placeholder="Leadership Description">')}
}
function rm_leadership(){
    if(leadCnt >0){
        $('#addleadership'+leadCnt + 'title').remove();
        $('#addleadership'+leadCnt + 'srtdate').remove();
        $('#addleadership'+leadCnt + 'enddate').remove();
        $('#addleadership'+leadCnt + 'des').remove();
        $('br:last-child').remove();
        leadCnt=leadCnt-1;
    }
}
function add_activity(){
    if(actCnt <30){
        actCnt=actCnt+1;
        $('#addactivities').append('</br><input type="text" id="addactivity'+ actCnt +'title" class="form-control" placeholder="Activity name"> <input type="text" id="addactivity'+ actCnt +'des" class="form-control" placeholder="Descrip\
tion">')}
}
function rm_activity(){
    if(actCnt >0){
        $('#addactivity'+actCnt + 'title').remove();
        $('#addactivity'+actCnt + 'des').remove();
        $('br:last-child').remove();
        actCnt=actCnt-1;
}
}
function add_skill(){
    if(skCnt <30){
        skCnt=skCnt+1;
        $('#addskill').append('</br><input type="text" id="addskill'+ skCnt +'" class="form-control" placeholder="Skill">')}
}
function rm_skill(){
    if(skCnt >0){
        $('#addskill'+skCnt).remove();
        $('br:last-child').remove();
        skCnt=skCnt-1;
    }
}
function add_CEL(){
    if(CELCnt <30){
        CELCnt=CELCnt+1;
        $('#addCEL').append('</br><input type="text" id="addCEL'+ CELCnt +'" class="form-control" placeholder="Course title">')}
}
function rm_CEL(){
    if(CELCnt >0){
        $('#addCEL'+CELCnt).remove();
        $('br:last-child').remove();
        CELCnt=CELCnt-1;
    }
}


function supportsLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}
function savetolocal(){
    if (!supportsLocalStorage()) {console.log("no loc storage"); }
    else{
        localStorage["fname"]=document.getElementById('addfirst').value;
        localStorage["lname"]=document.getElementById('addlast').value;
        localStorage["email"]=document.getElementById('addemail').value;
        localStorage["phone"]=document.getElementById('addphone').value;
    }
}
