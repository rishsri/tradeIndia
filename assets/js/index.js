const images = document.getElementsByClassName("imageConatiner")
const backDrop = document.getElementById('back-drop')
for(let i = 0; i <images.length; i++ ){
    images[i].addEventListener('click',(e)=> {
        backDrop.style.display = 'flex';
        document.getElementById("modelImages").src = e.toElement.src;
    })
} 

backDrop.addEventListener('click',(e)=>{
    e.toElement.id === backDrop.id && (backDrop.style.display = 'none');
});

document.getElementById('btn-close').addEventListener('click',()=>{
    backDrop.style.display = 'none';
});

// window.addEventListener("resize", function(event) {
//     console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
// })