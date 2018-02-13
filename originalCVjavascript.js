//javascript code for cv.html

$(document).ready(function () {
    console.log("in doc ready function");
    $('.cv').hide();

    $("#add-major-btn").click(add_major);
    $("#add-minor-btn").click(add_minor);
    $("#add-concentration-btn").click(add_concentration);
    $("#add-award-btn").click(add_award);
    $("#add-inexternship-btn").click(add_inexternship);
    $("#add-work-btn").click(add_work);
    $("#add-research-btn").click(add_research);
    $("#add-leader-btn").click(add_leadership);
    $("#add-activity-btn").click(add_activity);
    $("#add-skill-btn").click(add_skill);

    $("#add-btn").click(addEntry);
});
var ieCnt=0;
var mCnt=0;
var mjCnt=1;
var cCnt=0;
var aCnt=0;
var rCnt=0;
var workCnt=0;
var leadCnt=0;
var actCnt=0;
var skCnt=0;

function add_major(){
    console.log("In add_major function for major " + (mjCnt+1));
    if(mjCnt <3){
        mjCnt=mjCnt+1;
        $('#addmajors').append('</br><input type="text" id="addmajor'+ mjCnt +'" class="form-control" placeholder=\
"Major ' + mjCnt +'">'+ '<input type="text" id="addmajorgpa' + mjCnt + '" class="form-control" placeholder="Curren\
t within major'+ mjCnt +' GPA">')
    };
}


function add_minor(){
    if(mCnt <3){
        mCnt=mCnt+1;
        $('#addminors').append('</br><input type="text" id="addminor'+ mCnt +'" class="form-control" placeholder="\
Minor' + mCnt +'">')
    };
}

function add_concentration(){
    if(cCnt <3){
        cCnt=cCnt+1;
        $('#addconcentrations').append('</br><input type="text" id="addconcentration'+ cCnt +'" class="form-contro\
l" placeholder="Concentration ' + cCnt +'">')
    };
}

function add_award(){
    if(aCnt <30){
 aCnt=aCnt+1;
        $('#addawards').append('</br><input type="text" id="addaward'+ aCnt +'name" class="form-control" placehold\
er="Name of award ' + aCnt +'"><input type="text" id="addaward'+ aCnt +'date" class="form-control" placeholder="Da\
te received"><input type="text" id="addaward'+ aCnt +'des" class="form-control" placeholder="Description of award"\
>')
    };
}
function add_inexternship(){
    if(ieCnt <30){
        ieCnt=ieCnt+1;
        $('#addinexternship').append('</br><input type="text" id="addinextern'+ ieCnt +'title" class="form-control\
"placeholder="Title at company"><input type="text" id="addinextern'+ ieCnt +'srtdate" class="form-control" placeho\
lder="Start date"><input type="text" id="addinextern'+ ieCnt +'enddate" class="form-control" placeholder="End date\
"> <input type="text" id="addinextern'+ ieCnt +'" class="form-control" placeholder="Description of experience">')}
}

function add_work(){
    if(workCnt <30){
        workCnt=workCnt+1;
        $('#addwork').append('</br><input type="text" id="addwork'+ workCnt +'title" class="form-control" placehol\
der="Title at company"><input type="text" id="addwork'+ workCnt +'srtdate" class="form-control" placeholder="Start\
 date"><input type="text" id="addwork'+ workCnt +'enddate" class="form-control" placeholder="End date"> <input typ\
e="text" id="addwork'+ workCnt +'" class="form-control" placeholder="Job description">')}
}

function add_research(){
    if(rCnt <30){
        rCnt=rCnt+1;
        $('#addresearch').append('</br><input type="text" id="addresearch'+ rCnt +'title" class="form-control"plac\
eholder="Research topic"><input type="text" id="addresearch'+ rCnt +'srtdate" class="form-control" placeholder="St\
art date"><input type="text" id="addresearch'+ rCnt +'enddate" class="form-control" placeholder="End date"> <input\
 type="text" id="addresearch'+ rCnt +'des" class="form-control" placeholder="Research Description">')}
}

function add_leadership(){
    if(leadCnt <30){
        leadCnt=leadCnt+1;
        $('#addleader').append('</br><input type="text" id="addleadership'+ leadCnt +'title" class="form-control" \
placeholder="Leadership title"><input type="text" id="addleadership'+ leadCnt +'srtdate" class="form-control" plac\
eholder="Start date"><input type="text" id="addleadership'+ leadCnt +'enddate" class="form-control" placeholder="E\
nd date"><input type="text" id="addleadership'+ leadCnt +'des" class="form-control" placeholder="Leadership Descri\
ption">')}
}

function add_activity(){
    if(actCnt <30){
        actCnt=actCnt+1;
        $('#addactivities').append('</br><input type="text" id="addactivity'+ actCnt +'title" class="form-control"\
 placeholder="Activity name"> <input type="text" id="addactivity'+ actCnt +'des" class="form-control" placeholder=\
"Description">')}
}

function add_skill(){
    if(skCnt <30){
        skCnt=skCnt+1;
        $('#addskill').append('</br><input type="text" id="addskill'+ skCnt +'" class="form-control" placeholder="\
Skill">')}
}
function addEntry(){
    console.log("Adding an entry");
    $('#pagetitle').append($('#addfirst').val() + " " + $('#addlast').val() + " - CV");
//basic info
    $('#name').append($('#addfirst').val()+" "+$('#addlast').val());
    $('#phone').append($('#addphone').val());
    $('#email').append($('#addemail').val());
    $('#personalprof').append($('#addprof').val());

//Kenyon-related info
    for(i=1; i<=mjCnt;i++){
        $('#collegeinfo').append($('#addmajor' + i).val() + ", ")
    }
    if(mCnt>0){
        $('#collegeinfo').append("</br>Minor:")
        for(i=1;i<=mCnt;i++){
            $('#collegeinfo').append($('#addminor' + i).val() + ", ")
        }
    }
    if(cCnt>0){
        $('#collegeinfo').append("</br>Concentration:")
        for(i=1; i<=cCnt;i++){
            $('#collegeinfo').append($('#addconcentration' + i).val() + ", ")
        }
    }
    $('#collegeinfo').append("</br>GPA: " + $('#addoverallgpa').val() + " Expected graduation: "+$('#addgradyr').v\
al());

//awards
    if(aCnt>0){
        $('#mainArea').append('<section><div class="sectionTitle"><h1>Academic awards/</br>Scholarships</h1></div>\
<div id="awards" class="sectionContent">');
        for(i=1;i<=aCnt;i++){
            $('#awards').append("<article><h2>" +  $('#addaward'+i +"name").val() + "</h2><p class='subDetails'>"+\
$('#addaward'+i +"date").val()+"</p><p>" + $('#addaward'+i+"des").val()+"</p></article>");
        }
        $('#mainArea').append('</div><div class="clear"></div></section>');
    }

//experience
    if(ieCnt>0 || workCnt>0){
        $('#mainArea').append('<section><div class="sectionTitle"><h1>Work Experience</h1></div><div id="experienc\
e" class="sectionContent">');
        for(i=1;i<=ieCnt;i++){
            $('#experience').append("<article><h2>" +  $('#addinextern'+i +"title").val() + "</h2><p class='subDet\
ails'>"+ $('#addinextern'+i +"srtdate").val() +" - "+ $('#addinextern'+i +"enddate").val() +"</p><p>" + $('#addine\
xtern'+i).val()+"</p></article>");
        }
        for(i=1;i<=workCnt;i++){
            $('#experience').append("<article><h2>" +  $('#addwork'+i +"title").val() + "</h2><p class='subDetails\
'>"+ $('#addwork'+i +"srtdate").val() +" - "+ $('#addwork'+i +"enddate").val() +"</p><p>" + $('#addwork'+i).val()+\
"</p></article>");
        }
        $('#mainArea').append('</div><div class="clear"></div></section>');
    }
    //research
    if(rCnt>0){
        $('#mainArea').append('<section><div class="sectionTitle"><h1>Research Experience</h1></div><div id="resea\
rch" class="sectionContent">');
        for(i=1;i<=rCnt;i++){
            $('#research').append("<article><h2>" +  $('#addresearch'+i +"title").val() + "</h2><p class='subDetai\
ls'>"+ $('#addresearch'+i +"srtdate").val() +" - "+ $('#addresearch'+i +"enddate").val() +"</p><p>" + $('#addresea\
rch'+i +'des').val()  +"</p></article>");
        }
        $('#mainArea').append('</div><div class="clear"></div></section>');
    }

//Leadership and activities
    if(leadCnt >0 || actCnt >0){
        $('#mainArea').append('<section><div class="sectionTitle"><h1>Leadership/</br>activities</h1></div><div id\
="leadact" class="sectionContent">');
        for(i=1;i<=leadCnt;i++){
            $('#leadact').append("<article><h2>" +  $('#addleadership'+i +"title").val() + "</h2><p class='subDeta\
ils'>"+ $('#addleadership'+i +"srtdate").val() +" - "+ $('#addleadership'+i +"enddate").val() +"</p><p>" + $('#add\
leadership'+i +"des").val()+"</p></article>");
        }
        for(i=1;i<=actCnt;i++){
            $('#leadact').append("<article><h2>" +  $('#addactivity'+i +"title").val() + "</h2><p>" + $('#addactiv\
ity'+i +"des").val()+"</p></article>");
        }
        $('#mainArea').append('</div><div class="clear"></div></section>');
    }

//key skill
    if(skCnt >0){
        $('#mainArea').append('<section><div class="sectionTitle"><h1>Key Skills</h1></div><div class="sectionCont\
ent"> <ul id="keySkills" class="keySkills">');
        for(i=1;i<=skCnt;i++){
            $('#keySkills').append('<li>'+ $('#addskill'+i).val()+ '</li>');
        }
        $('#mainArea').append('</ul></div><div class="clear"></div></section>');
    }
    $('.cv').show();
    $('.inputdata').hide();

   // $.ajax({
//      url: '/cgi-bin/braunk_phoneApp.cgi?afname='+$('#addfirst').val()+'&alname='+$('#addlast').val()+'&aphone='\
+$('#addphone').val()+'&atype='+$('#addtype').val(),
//      dataType: 'text',
//      success: processResults,
//      error: function(){alert("Error: Something went wrong");}
  //  });
    console.log("at end of add entry function");
}


//addEntry(call to a  showcv function as well as take in the data and put in the SQL database)

//showcv(.inputdata.hide() and also insert the students data into cv format)
