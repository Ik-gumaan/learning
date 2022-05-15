var button=document.getElementById("submit");

var myName=document.getElementById("name");
var city=document.getElementById("city");
var country=document.getElementById("country");
var email=document.getElementById("email");
var phone=document.getElementById("phone");
var comment=document.getElementById("comment");
var key=0;


function imageView(logo){
    var img=document.getElementById(logo);
    console.log(img)
    window.location=img.src;    
}

function submitData(){
key++;
var peopleComment={
key:key,
name:myName.value,
city:city.value,
country:country.value,
email:email.value,
phone:phone.value,
comment:comment.value
};

firebase.database().ref("/").child("Comments/"+peopleComment.key).set(peopleComment);
}
