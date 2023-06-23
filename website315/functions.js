
function buttonClick()
{
  
    if(document.getElementById('page_style').getAttribute("href")== "stylesheet1.css"){
        document.getElementById('page_style').setAttribute("href", "stylesheet2.css")
        localStorage.setItem('changeSheet', 'stylesheet2.css');
    }else{
        document.getElementById('page_style').setAttribute("href", "stylesheet1.css")
        localStorage.setItem('changeSheet', 'stylesheet1.css');
    }

}

window.onload = function(){
    if(localStorage.getItem("changeSheet")){
        document.getElementById("page_style").href = localStorage.getItem("changeSheet");
    }
    else{
        localStorage.setItem("changeSheet", "stylesheet2.css");
       
    }
}
   