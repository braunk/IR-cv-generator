//javascript code for cv.html

$(document).ready(function (){
    console.log("in doc ready function");
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
var mjCnt=0;
var cCnt=0;
var aCnt=0;
var rCnt=0;
var workCnt=0;
var leadCnt=0;
var actCnt=0;
var skCnt=0;

function add_major(){
    if(mjCnt <3){
	mjCnt=mjCnt+1;
	$('#addmajors').append('</br><input type="text" id="addmajor'+ mjCnt +'" class="form-control" placeholder="Major ' + mjCnt +'">'+ '<input type="text" id="addmajorgpa' + mjCnt + '" class="form-control" placeholder="Current within major'+ mjCnt +' GPA">')	    
    };
}
function add_minor(){
    if(mCnt <3){
	mCnt=mCnt+1;
	$('#addminors').append('</br><input type="text" id="addminor'+ mCnt +'" class="form-control" placeholder="Minor' + mCnt +'">')
    };
}

function add_concentration(){
    if(cCnt <3){
	cCnt=cCnt+1;
	$('#addconcentrations').append('</br><input type="text" id="addconcentration'+ cCnt +'" class="form-control" placeholder="Concentration ' + cCnt +'">')
    };
}

function add_award(){
    if(aCnt <30){
	aCnt=aCnt+1;
	$('#addawards').append('</br><input type="text" id="addaward'+ aCnt +'name" class="form-control" placeholder="Name of award ' + aCnt +'"><input type="text" id="addaward'+ aCnt +'date" class="form-control" placeholder="Date received"><input type="text" id="addaward'+ aCnt +'des" class="form-control" placeholder="Description of award">')
    };
}
function add_inexternship(){
    if(ieCnt <30){
	ieCnt=ieCnt+1;
	$('#addinexternship').append('</br><input type="text" id="addinextern'+ ieCnt +'title" class="form-control"placeholder="Title at company"><input type="text" id="addinextern'+ ieCnt +'srtdate" class="form-control" placeholder="Start date"><input type="text" id="addinextern'+ ieCnt +'enddate" class="form-control" placeholder="End date"> <input type="text" id="addinextern'+ ieCnt +'" class="form-control" placeholder="Description of experience">')}
}

function add_work(){
    if(workCnt <30){
	workCnt=workCnt+1;
	$('#addwork').append('</br><input type="text" id="addwork'+ workCnt +'title" class="form-control" placeholder="Title at company"><input type="text" id="addwork'+ workCnt +'srtdate" class="form-control" placeholder="Start date"><input type="text" id="addwork'+ workCnt +'enddate" class="form-control" placeholder="End date"> <input type="text" id="addwork'+ workCnt +'" class="form-control" placeholder="Job description">')}
}

function add_research(){
    if(rCnt <30){
	rCnt=rCnt+1;
	$('#addresearch').append('</br><input type="text" id="addresearch'+ rCnt +'title" class="form-control"placeholder="Research topic"><input type="text" id="addresearch'+ rCnt +'srtdate" class="form-control" placeholder="Start date"><input type="text" id="addresearch'+ rCnt +'enddate" class="form-control" placeholder="End date"> <input type="text" id="addresearch'+ rCnt +'des" class="form-control" placeholder="Research Description">')}
}

function add_leadership(){
    if(leadCnt <30){
	leadCnt=leadCnt+1;
	$('#addleader').append('</br><input type="text" id="addleadership'+ leadCnt +'title" class="form-control" placeholder="Leadership title"><input type="text" id="addleadership'+ leadCnt +'srtdate" class="form-control" placeholder="Start date"><input type="text" id="addleadership'+ leadCnt +'enddate" class="form-control" placeholder="End date"><input type="text" id="addleadership'+ leadCnt +'des" class="form-control" placeholder="Leadership Description">')}
}

function add_activity(){
    if(actCnt <30){
	actCnt=actCnt+1;
	$('#addactivities').append('</br><input type="text" id="addactivity'+ actCnt +'title" class="form-control" placeholder="Activity name"> <input type="text" id="addactivity'+ actCnt +'des" class="form-control" placeholder="Description">')}
}

function add_skill(){
    if(skCnt <30){
	skCnt=skCnt+1;
	$('#addskill').append('</br><input type="text" id="addskill'+ skCnt +'" class="form-control" placeholder="Skill">')}
}

function buildCV(){
    var CV=("<head><title id='pagetitle'>"+ document.getElementById('addfirst').value + " "+  document.getElementById('addlast').value +" - CV </title>");
//name email phone
    CV+="<meta name='viewport' content='width=device-width'/><meta charset='UTF-8'></head><body id='top'><div id='CV' class='instaFade'><div class='mainDetails'><div id='maininfo'><h1 class='quickFade delayTwo' id='name'>" +  document.getElementById('addfirst').value + " " +  document.getElementById('addlast').value + "</h1></div><div id='contactDetails' class='quickFade delayFour'><ul><li id='email'>Email: " +  document.getElementById('addemail').value + "</li><li id='phone'>Phone: " + document.getElementById('addphone').value + "</li></ul></div><div class='clear'></div></div>";
//personal prof
    CV+=" <div id='mainArea' class='quickFade delayFive'> <section><article><div class='sectionTitle'><h1>Personal Profile</h1></div><div class='sectionContent' id='personalprof'>" +document.getElementById('addprof').value + "</div></article><div class='clear'></div></section>";
//education
    CV+="<section><div class='sectionTitle'><h1>Education</h1></div><div class='sectionContent'><article><h2>Kenyon College</h2><p id='collegeinfo'>Bachelor of Arts ";
    if(mjCnt>0){
	for(i=1;i<=mjCnt;i++){
	    CV+=", " + document.getElementById('addmajor'+i ).value;
	}
	CV+="</br>";
    }
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
    }
    
    CV+="Expected graduation: "+ document.getElementById('addgradyr').value +"</p></article></div><div class='clear'></div></section>";
//awards
    if(aCnt>0){
	CV+="<section><div class='sectionTitle'><h1>Academic awards/</br>Scholarships</h1></div><div id='awards' class='sectionContent'>";
	for(i=1;i<=aCnt;i++){
	    CV+=("<article><h2>"+ document.getElementById('addaward'+i +'name').value+"</h2><p class='subDetails'>"+ document.getElementById('addaward'+i +'date').value+"</p><p>"+ document.getElementById('addaward'+i+'des').value+"</p></article>");
	}
	CV+="</div><div class='clear'></div></section>";
    }
//experience
    if(ieCnt>0 || workCnt>0){
	CV+="<section><div class='sectionTitle'><h1>Work Experience</h1></div><div id='experience' class='sectionContent'>";
	for(i=1;i<=ieCnt;i++){
	    CV+="<article><h2>" + document.getElementById('addinextern'+i +'title').value +"</h2><p class='subDetails'>"+ document.getElementById('addinextern'+i +'srtdate').value +" - "+document.getElementById('addinextern'+i+'enddate').value +"</p><p>" + document.getElementById('addinextern'+i).value+"</p></article>";
	}
	for(i=1;i<=workCnt;i++){
	    CV+="<article><h2>"+ document.getElementById('addwork'+i +'title').value + "</h2><p class='subDetails'>"+ document.getElementById('addwork'+i +'srtdate').value +" - "+ document.getElementById('addwork'+i +'enddate').value+"</p><p>"+ document.getElementById('addwork'+i).value + "</p></article>";
	}
	CV+="</div><div class='clear'></div></section>";
    }
//research
    if(rCnt>0){
	CV+="<section><div class='sectionTitle'><h1>Research Experience</h1></div><div id='research' class='sectionContent'>";
	for(i=1;i<=rCnt;i++){
	    CV+="<article><h2>" +document.getElementById('addresearch'+i +'title').value + "</h2><p class='subDetails'>"+ document.getElementById('addresearch'+i +'srtdate').value +" - "+ document.getElementById('addresearch'+i+'enddate').value +"</p><p>" + document.getElementById('addresearch'+i+'des').value+"</p></article>";
	}
	CV+="</div><div class='clear'></div></section>";
    }
//Leadership and activities
    if(leadCnt >0 || actCnt >0){
	CV+="<section><div class='sectionTitle'><h1>Leadership/</br>activities</h1></div><div id='leadact' class='sectionContent'>";
	for(i=1;i<=leadCnt;i++){
	    CV+="<article><h2>"+ document.getElementById('addleadership'+i +'title').value + "</h2><p class='subDetails'>"+  document.getElementById('addleadership'+i +'srtdate').value +" - "+  document.getElementById('addleadership'+i +'enddate').value +"</p><p>" +  document.getElementById('addleadership'+i +'des').value+"</p></article>";
	}
	for(i=1;i<=actCnt;i++){
	    CV+="<article><h2>"+ document.getElementById('addactivity'+i +'title').value + "</h2><p>" + document.getElementById('addactivity'+i +'des').value+"</p></article>";
	}
	CV+="</div><div class='clear'></div></section>";
    }
    //key skill
    if(skCnt >0){
	CV+="<section><div class='sectionTitle'><h1>Key Skills</h1></div><div class='sectionContent'><ul id='keySkills' class='keySkills'>";
	for(i=1;i<=skCnt;i++){
	    CV+='<li>'+ document.getElementById('addskill'+i).value+ '</li>';
	}
	CV+="</ul></div><div class='clear'></div></section>";
    }
    CV+="</div></div></body>";
    return CV;
}

function addEntry(){
    console.log("Adding an entry");
    console.log(buildCV());
    $('.inputdata').hide();
    $('.cv').empty();
    $('.cv').append(buildCV());
    $('.cv').show();

   // $.ajax({
//	url: '/cgi-bin/braunk_phoneApp.cgi?afname='+$('#addfirst').val()+'&alname='+$('#addlast').val()+'&aphone='+$('#addphone').val()+'&atype='+$('#addtype').val(),
//	dataType: 'text',
//	success: processResults,
//	error: function(){alert("Error: Something went wrong");}
  //  });
    console.log("at end of add entry function");
}
