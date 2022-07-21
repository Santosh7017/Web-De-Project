setTimeout(playLoader, 2000);

function playLoader() 
{
    document.querySelector(".loading-container").style.display = "none";
    document.querySelector(".oppoide-move").style.display = "block";
    document.querySelector(".all").style.display = "none";
    setTimeout(showall, 1500);
}
function showall(){
    document.querySelector(".loading-container").style.display = "none";
    document.querySelector(".oppoide-container").style.display = "none";
    document.querySelector(".all").style.display = "block";
}

function toggleHide()
{
    let show = document.getElementById("show");
    let img = document.getElementById("show-more");
    if(img.style.display!='none'){
        img.style.display = "none";
    }
    else{
        img.style.display='grid';
    }
}