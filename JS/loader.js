setTimeout(playLoader, 1000);

function playLoader() 
{
    document.querySelector(".loading-container").style.display = "none";
    // document.querySelector(".oppoide").style.display = "block";
    document.querySelector(".oppoide-container").style.display = "flex";
    document.querySelector(".all").style.display = "none";
    setTimeout(showall, 1000);
    function showall(){
        document.querySelector(".loading-container").style.display = "none";
        document.querySelector(".oppoide-container").style.display = "none";
        document.querySelector(".all").style.display = "block";
    }
}