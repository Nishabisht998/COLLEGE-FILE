let pic=document.getElementById("image");
let input=document.getElementById('label');
input.onchange=function(){
    pic.src=URL.createObjectURL(input.files[0]);
}