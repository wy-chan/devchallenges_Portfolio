let projectsData;

let dataURL = 'https://raw.githubusercontent.com/wy-chan/devchallenges_Portfolio/main/projects.json';

var currentPage= 0;


function getPageData() {
  return $.ajax({
    headers: {
      Accept: 'application/json'
    },
    url:
      dataURL,
    success: function (jsonData) {
      if (typeof jsonData === 'string') {
        projectsData = JSON.parse(jsonData);
        console.log('projectsData');
        console.log(projectsData);
      }
    }
  });
}
function closePage(i){
  var element = document.getElementsByClassName("toPage")[i];
  element.classList.remove("active-btn");
}

function nextPage(){
  closePage(currentPage);
  if (currentPage <2){
    currentPage +=1;
  };
  getPage(currentPage);
}
function previousPage(){
   closePage(currentPage);
  if (currentPage >0){
    currentPage -=1;
  };
  getPage(currentPage);
}
function toPage(i){
   closePage(currentPage);
  currentPage = i;
   getPage(currentPage);
}

function getProjects(i){
  return projectsData.projects[i];
}

function loadProject(i,p){
  if(p == undefined){
  $('.project-img').eq(i).attr('style','opacity:0');
  $('.projectTitle').eq(i).attr('style','opacity:0');
  $('.projectDemo').eq(i).attr('style','opacity:0');
  $('.projectCode').eq(i).attr('style','opacity:0');
  $('.tag').eq(i).attr('style','opacity:0');
  $('.projectText').eq(i).attr('style','opacity:0');
  }
  else{
  $('.tag').eq(i).attr('style','opacity:1');
  $('.projectText').eq(i).attr('style','opacity:1');
  $('.project-img').eq(i).attr('src',p.image).attr('style','opacity:1');
  $('.projectTitle').eq(i).text(p.title).attr('style','opacity:1');
  $('.projectDemo').eq(i).attr('onclick',"window.open('"+p.demoURL+"','_blank')" ).attr('style','opacity:1');
  $('.projectCode').eq(i).attr('onclick',"window.open('"+p.codeURL+"','_blank')" ).attr('style','opacity:1');
  }
}

function getPage(i) {
  let projectA = getProjects(i*3);
  let projectB = getProjects(i*3+1);
  let projectC = getProjects(i*3+2);
  loadProject(0,projectA);
  loadProject(1,projectB);
  loadProject(2,projectC);
  var element = document.getElementsByClassName("toPage")[i];
  element.classList.add("active-btn");
}

$(document).ready(function () {
  getPageData().then(() => {
    getPage(currentPage);
  });

  $('#btn-toLeft').on('click', previousPage);
  $('#btn-toRight').on('click', nextPage);
  $('.toPage').eq(0).on('click',function(){toPage(0)});
  $('.toPage').eq(1).on('click',function(){toPage(1)});
  $('.toPage').eq(2).on('click',function(){toPage(2)});
});
