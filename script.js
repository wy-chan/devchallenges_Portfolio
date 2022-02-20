let projectsData;
let projectsDataSorted;

let dataURL = 'https://raw.githubusercontent.com/wy-chan/devchallenges_Portfolio/main/projects.json';

var currentPage= 0;
var currentTag="All";

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
function changeTag(tag){
  var e1 = document.getElementById(currentTag);
  var e2 = document.getElementById(tag);
  e1.classList.remove("active-btn");
  e2.classList.add("active-btn");
  currentTag=tag;
}

function nextPage(){
  closePage(currentPage);
  if (currentPage <2){
    currentPage +=1;
  };
  getPage(currentPage);
  console.log(currentPage);
}

function previousPage(){
   closePage(currentPage);
  if (currentPage >0){
    currentPage -=1;
  };
  getPage(currentPage);
  console.log(currentPage);
}

function toPage(i){
   console.log(i);
   closePage(currentPage);
  currentPage = i-1;
   getPage(currentPage);
  console.log(currentPage);
}

function getProjects(i){
  return projectsDataSorted[i];
}

function sortProjects(tag){
  let newList=[];
  for(let i=0; i< 8;i++){
    let checkTag = projectsData.projects[i].tag.indexOf(tag);
    if(checkTag>= 0){
     newList.push(projectsData.projects[i]);
    }
  };
  console.log("sortedList");
  console.log(newList);
  return newList;
}

function toSort(tag){
  console.log("Tag")
  console.log(tag);
 closePage(currentPage);
 currentPage = 0
 projectsDataSorted = sortProjects(tag);
 getPage(currentPage);
 changeTag(tag);
  $('#project-total').text(projectsDataSorted.length);
  if(tag =="All"){
    $('#project-total').attr('style','color: black');
  }else{
    $('#project-total').attr('style','color: #2F80ED;font-weight:bold');
  }
}

function loadProject(i,p){
  if(p == undefined){
  $('.img-box').eq(i).attr('style','opacity:0');
  $('.project-img').eq(i).attr('src',"");
  $('.project-btn-s-box').eq(i).attr('style','opacity:0');
  $('.projectTitle').eq(i).text('').attr('style','opacity:0');
  $('.projectDemo').eq(i).attr('style','opacity:0').prop("disabled", true);
  $('.projectCode').eq(i).attr('style','opacity:0').prop("disabled", true);
  $('.tag').eq(i).text('').attr('style','opacity:0');
  $('.projectText').eq(i).text('').attr('style','opacity:0');
  }
  else{
  $('.tag').eq(i).text("#"+p.tag.join(' #')).attr('style','opacity:1');
  $('.projectText').eq(i).text(p.text).attr('style','opacity:1');
  $('.img-box').eq(i).attr('style','opacity:1');
  $('.project-btn-s-box').eq(i).attr('style','opacity:1');
  $('.project-img').eq(i).attr('src',p.image);
  $('.projectTitle').eq(i).text(p.title).attr('style','opacity:1');
  $('.projectDemo').eq(i).attr('onclick',"window.open('"+p.demoURL+"','_blank')" ).attr('style','opacity:1').prop("disabled", false);
  $('.projectCode').eq(i).attr('onclick',"window.open('"+p.codeURL+"','_blank')" ).attr('style','opacity:1').prop("disabled", false);

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
      projectsDataSorted = projectsData.projects;
      console.log('DataSorted');
      console.log(projectsDataSorted);
      getPage(currentPage);
  });

  $('#btn-toLeft').on('click', previousPage);
  $('#btn-toRight').on('click', nextPage);
  $('.toPage').on('click',function(){toPage($(this).text())});
$('.project-btn').on('click',function(){toSort($(this).text())});
});
