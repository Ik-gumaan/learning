// GIT: version control
// install git from git-scm.com
// Github: create an account and they will give workspace to save ur work(alse give its links)
// Gitbash: Linus command prompt
// Gitbash is use to push the code to github when no internet is avialibale (when internet appears then this will auto pushed there)
// select a folder and open it with gitbash to make a git repository
// Commands
//git: tells either your folder is git repository or not(if present then it will give description of it)
//git init: making folder a git repository
//git add -A: for making files trackable(file coloue changes to green ) (if any modification in file occurs, again use this command to acces new modified file trackable)
//git commit -m "String_that_work_You_Have Done or Main_Topic": giving name
//git config --global user.name="username_github_id": to commit it needs
//git config --global user.email="email_github_id": to commit it needs
// git remote add origin link_github:merging local and colud repository(connect)
// git push -u origin master: sending code from local to cloud
//git clone link_github: copy a repository to your system

const { default: App } = require("../../React Native/myproject/App");


var a = +prompt("Enter your age", "age");//+ is used to convert string into int
alert(a);
var b = a + a;
alert(b);
document.write("Hello World" + "<br>");
var x = "5";
if (x === 5) {///=== also checks type (first equal checks type) and == only checks value
    document.write("True" + "<br>")
}
else {
    document.write("False" + "<br>")
}

var students = ["ali", "basit", "shah"]//arrays 
document.write(students[0] + "<br>");//ali

var arr1 = new Array("ali", "Basit");//initializing array

var arr = []; //declaring arring
arr[0] = 56;
arr[1] = 89;
arr[2] = 8;
arr[3] = 88;

document.write(arr + "<br>");

/*arr.pop();//remove last element from an array
arr.push(99);//add element to last index of an array
arr.shift();//removes first element of an array
arr.unshift(1,2);////add elements to start of an array
arr.splice(0,2,42)////add elements to an array //arguments:(index at which to go, how many elmenets frome there to delete, elemnts)
arr.splice(0,2)////remove elements from an array //arguments:(index at which to go, how many elmenets frome there to delete)
document.write(arr);
*/
var arrCopy = arr.slice(1,3);//copy that array start from index 1 and less than 3rd index(i.e:copies 1 and 2)
document.write(arrCopy + "<br>");

var name = "Basheer";
document.write(name[2] + "<br>");

//changing cases
name = name.toUpperCase();//name.toLowerCase();
document.write(name + "<br>");
document.write(name.length + "<br>");
document.write(name.indexOf('a') + "<br>");//here A and a are not equal

var a = new Date();
document.write(a + "<br>");//printing date
document.write(a.toString() + "<br>");//printing date

document.write(a.getDay() + "<br>");//give index of the day(i.e: sun=0,mon=1.....)
// a.getMonth();//jan=0
// a.getDate();//1 is 1st of month till 31
// a.getFullYear();//i.e:2020
// a.getHours();//0 is 12 a.m
// a.getMinutes();//0-59
// a.getSeconds();//0-59
// a.getMilliSeconds();//0-999
document.write(a.getTime() + "<br>");//give time as miiliseconds since 1st january 1970

// var a = new Date("Feb 10,2000");
// a.setFullYear(2020);//year =2020
// a.setMonth(1);//1=feb
// a.setDate(1);//1= 1st of month 
// a.setHours(1);//1=1 a.m
// a.setMinutes(5);//5= 5 min
// a.setSeconds(5);//5= 5 sec
// a.setMilliSeconds(56);//56=56 milliseconds

//defining func
function hello(name) {
    document.write("Hello " + name + ' <br>')
}

//calling func
hello("aslam");

function add(a, b, c = 3) {//c is initialized this is also known as default parameter(it uses c=3 when c is not initialized in argument otherwise execute normally)
    var r = a + b + c;
    return r;
}

var res = add(1, 2, 4);
document.write(res + '<br>');

//switch statement
var st = "ali";

switch (st) {

    case "ali": document.write("ali"); break;
    case "alina": document.write("alina"); break;
    default: document.write("NOT");

}
document.write('<br>');

//event in javascript and attributes in html, one tag can also contain more than one event//
// onclick 
//onmousever
//onmouseout
function fun() {
    alert("Heading");
}

//events specifies for fields in forms
//onfocus: when we click on a input 
//onblur: after onfocus moving away from input then onblur is applied
//onchange: when the input value is change/update



// function setName() {
//     var name = document.getElementById("name");
//     name.value="a";
// }

// setName(); //Not Working



function inp() {
    var name = document.getElementById("name");
    alert(name.value);
    name.value = "";
}

//eval(string argument);// evaluate function use to evaluate calculation  

   // var a='a'; 
 //a.charCodeAt();// function which tells ASCII code  

 function what(){
var para=document.getElementsByTagName('p');
para[0].innerHTML= "<b>paragraph<b>";//use to add text in para or some html whereas innerText can also be used but it does not include html it only when we want to add text
para[0].className="myPara";//use to set class attribute of html 
}

//image.src=""; //used to change image source while image here is a variable (we can use all html tags with dot notation)
//a.href="#"; //used to change link
//a.style.cssProperty="value";//styling in JS

// examples of styling
//a.style.cssFloat="left";// only float property is bit different which uses css in starting here
//a.style.fontSize="100px";

// function eg(){
//     var div=document.getElementsById('main');//div
//     var paras=div.getElementsByTagName('p');// it will contain all para with div having id ='main'
//     }

//StopWatch
var sec=0;
var min=0;
var hour=0;

var secP=document.getElementById("sec");
var minP=document.getElementById("min");
var hourP=document.getElementById("hour");
var interval;

function timer(){
sec++;
if(sec<=59){    
    secP.innerHTML=sec; 
}
else if(sec>59){
    sec=0;
    min++;
    secP.innerHTML=sec; 
    minP.innerHTML=min; 
}

else if(min>59){
    min=0;
    hours++;
  minP.innerHTML=min;
    hourP.innerHTML=hour; 
}
}

function start(){
    interval=setInterval(timer,1000); //inbuilt function which has 2 parameter one is function second is time(in milliseconds), it executes the function again and again after the given interval of time 
var start=document.getElementById("start").disabled=true;//to disable button
}

function pause(){
    clearInterval(interval);
    var start=document.getElementById("start").disabled=false;//to enable button
}

function reset(){
    sec=0;
    min=0;
    hour=0;

    secP.innerHTML=sec; 
    minP.innerHTML=min; 
    hourP.innerHTML=hour; 
    clearInterval(interval);
    var start=document.getElementById("start").disabled=false;//to enable button

}




//Timer
var secsP=document.getElementById("secs");
var minsP=document.getElementById("mins");
var hoursP=document.getElementById("hours");


var div=document.getElementById("timer-div");
// div.childNodes[1].childNodes[1].remove();
// div.childNodes[3].childNodes[1].remove();
// div.childNodes[5].childNodes[1].remove();




function runTimer(){

if(!isNaN(hoursP.value) && !isNaN(minsP.value) && !isNaN(secsP.value)){

    var h1=document.getElementById("h1");
    var h2=document.getElementById("h2");
    var h3=document.getElementById("h3");
    var interval;
    
// h1.innerHTML+=" : "+hoursP.value
// h2.innerHTML+=" : "+minsP.value
// h3.innerHTML+=" : "+secsP.value
secsP.value--;
// console.log(div)

if(hoursP.value>0){
if(minsP.value<0){
    minsP.value=59;
    hoursP.value--;
}
if(secsP.value<0 && minsP.value==0){
    secsP.value=59;
    minsP.value=59;
    hoursP.value--;
}
}

if(minsP.value>0){
if(secsP.value<0){
    secsP.value=59;
    minsP.value--;
}    
}

if(secsP.value==0 && minsP.value==0 && hoursP.value==0){
stopTimer();
}
    h3.innerHTML=secsP.value;
    h2.innerHTML=minsP.value;
    h1.innerHTML=hoursP.value;        
}


else{
    alert("Invalid Input, The given input is not  a number")
}
}

function run(){
interval=setInterval(runTimer,1000); //inbuilt function which has 2 parameter one is function second is time(in milliseconds), it executes the function again and again after the given interval of time 
// var run=document.getElementById("run").disabled=true;//to disable button
}

function stopTimer(){
    clearInterval(interval);
    var run=document.getElementById("run").disabled=false;//to enable button
}

// function resetTimer(){
//     sec=0;
//     min=0;
//     hour=0;

//     secP.innerHTML=sec; 
//     minP.innerHTML=min; 
//     hourP.innerHTML=hour; 
//     clearInterval(interval);
//     var start=document.getElementById("start").disabled=false;//to enable button

// }


// setTimeOut(clear,5000); //inbuilt function which has 2 parameter one is function second is time(in milliseconds), it executes the function only one time after the given specific time 

                               // DOM//
// parentNode
// firstChild
// lastChild 
// previousSibling  
// nextSibling  
//childNodes //give all child nodes (access it tyrough array indexes) 
//nodeType //it identifies 1 for element ,3 for junk(#text) in console
//nodeName //tells about the tag or element of html(p,div etc)
// nodeValue //gives the data written in that node

//example of child nodes
/* <div>hellow //hellow is firstChild of div
    <p>hi</p> //p tag is 2nd
no</div> //no is 3rd
this all because of junk and text */

//var p1=document.getElementsByTagName('p');//it will give all p's in array form
// p[0].setAttribute("class", "parag");//set attribute and its value  
// p1[0].hasAttribute("class");//returns boolean value, it checks the any html attribute
// p1[0].getAttribute("class");//returns attribute value of the specified attribute in html
//p1[0].attributes;//gives number or length of attributes and give all attributes
//p1[0].attribute[0].nodeName;//gives name of attribute at 0 index
//p1[0].attribute[0].nodeValue;//gives value of attribute at 0 index


// CREATING HTML DOC USING ALL JS
// var para=document.createElement("p");//creating element or html tag using JS
// var text=document.createTextNode("This is a para created using JS");//creating text using JS
// para.appendChild(text);//setting child using JS
// para.innerText;//give all text(also its child tag texts) inside the tag

//para.classList.add("active");//add class=active in all para 
//para.classList.remove("active");//remove class=active from all para
//.checked //method used for radio buttons , returns boolean value


// TO DO APP//

var item=document.getElementById("inp");
var add=document.getElementById("add-item");
var list=document.getElementById("list");


function toAdd(){
var li=document.createElement("li");
var liText=document.createTextNode(item.value);
li.appendChild(liText);
list.appendChild(li);
item.value="";

var btnEdit=document.createElement("button");
var btnEditText=document.createTextNode("Edit");
btnEdit.appendChild(btnEditText);
btnEdit.setAttribute("onclick","toEdit(this)");
li.appendChild(btnEdit);



var btnDel=document.createElement("button");
var btnDelText=document.createTextNode("Delete");
btnDel.appendChild(btnDelText);
btnDel.setAttribute("onclick","toDel(this)")
li.appendChild(btnDel);

}


function toDelAll(){
list.innerHTML="";
}

function toDel(e){
e.parentNode.remove();//used to remove or delete elements

}

function toEdit(e){
var val=e.parentNode.firstChild.nodeValue;
var newVal=prompt("Edit the value:",val)
e.parentNode.firstChild.nodeValue=newVal;
}

//Object//

// general syntax of making object
var obj1={
    obj1Name:"ali",
    obj1Col:"white",
    obj1Age:"15"
};

obj1.isMale="true";//initializing another attribute or property or variable to object (uses dot notation (.))
// we can also pass array in an object or object in an array

var obj2={};//only prototype/declaration of object
obj2.name=undefined;// means no value 

var bool="name" in obj2;//checking property name 2 is in obj2 or not and return boolean value (also check by defaulf prototype property)

for(var prop in obj1){//known as loop of object uses to display all properties of object
document.write(prop+"  ");//give all properties of obj1
document.write(obj1[prop]+"  ");//give all values of properties of obj1
}

obj1.hasOwnProperty("obj1Name");//returns boolean value after checking obj1 has property obj1Name or not.(does not check by defaulf prototype property)
// in proto there is also some other properties such as constructor, hasOwnProperty etc which is only true while using "in" instead of" hasOwnProperty" 


function ConstructorOfObj2(name){//constructor name always start with a capital letter(differnece b/w function and contructor)
this.name=name;
// this.getName=function getName(){
//     return this.name;
// }
}

 ConstructorOfObj2.prototype.getName=function getName(){ //making prototype,(uses to make copy) so this property also inculded in that object whether its out of object definition(in proto) 
     return this.name;
 }


var obj2New=new ConstructorOfObj2("asim");// initialing new object using constructor
obj2New.name;



// Quiz APP

var myQuestions=[
    {
        question:"Q1: What is the capital of Pakistan?",
        answer:"Islamabad",
        options:["Karachi","Quetta","Islamabad","Multan"]
    },
    
    {
        question:"Q2: Who is the founder of Pakistan?",
        answer:"Quaid e Azam",
        options:["Allama Iqbal","Quaid e Azam","Chaudhry Rehmat Ali","Mirza Galib"]
    },

    {
        question:"Q3: (2*(3+(2/2)))?",
        answer:"8",
        options:["4","9","1","8"]
    },
];


function showQuest(e){

var quest=document.getElementById("quest");
var opt=document.getElementsByClassName("ans");
if(e<myQuestions.length){
    quest.innerHTML=myQuestions[e].question;
for(a=0;a<opt.length;a++){
opt[a].innerHTML=myQuestions[e].options[a];
}
}
}

var q=1;
var v=0;
function nextQuest(){
    if(v<myQuestions.length){validate(v);}
    if(v==myQuestions.length-1){
        document.getElementById("main").innerHTML="<h1 id='fS'>Final Score = "+score+"</h1><br><button onclick='playAgain()' id='PA'>Play Again</button>";
    }
    remOpt();
    showQuest(q);
    v++;
    q++;

}

function selOpt(e){
remOpt();
var opt=document.getElementsByClassName("ans")[e];
opt.setAttribute("class","ans active");

}

function remOpt(){
    var opt=document.getElementsByClassName("active");
    for(var a=0;a<opt.length;a++){
    opt[a].setAttribute("class","ans");    
}
}

var score=0; 
var myScore=document.getElementById("score");
function validate(e){
var opt=document.getElementsByClassName("active");
if(opt[0]==undefined){
alert("Kindly Choose an Answer");
v--;
q--;
}
else if(opt[0].innerHTML==myQuestions[e].answer ){
score+=10;
myScore.innerHTML="Score = "+score;

}
else{
    myScore.innerHTML="Score = "+score;
}
}

function playAgain(){
    document.location.href="Quiz App.html";
}



//window.location.href;//gives location/url/link of your webpage //it is also use to change webpage o give its value
//window.location.pathname;//gives pathname 
//window.location.hostname;//gives location/url/link hostname 
//window.location.hash;//it tells either u have # or not in url 
//window.location.assign("www.gooogle.com");//setting href or assigning value to webpage 
//window.location.replace("www.gooogle.com");//replacing previous url with new one(means going back shows nothing ) 
//window.location.reload();//cacher reloading //reload(false) is alse same
//window.location.reload(true);// reloading webpage from a server
// history.back();//use to go to backward webpage
// history.forward();//use to go to forward webpage
// history.go(1);//use to go to webpage in history either forward(+ve arguments) or backward(-ve arguments) it depends on argument.
// document.referrer();//gives refernce of the site from which we have come from to the webpage
// window.open(); //open a new black window
// window.open("www.google.com"); //open google in a new window
//window.open("www.google.com","tab_name","width=200,height=100"); //open google in a new window with name and width and height given(in pixel)
// window.open().document.write("Hi"); //open a new window and write their something
// window.close(); //close a window
//window.open("www.google.com","tab_name","width=200,height=100,top=50,left=50"); //top and left here shows that new window will how much away from actual postion 




//FIREBASE
//two types of databases:  SQL(relational) and NO SQL(non realtional) 
//SQL is table format and NO SQL is object format datbase(firebase is NO SQL database)
// Firebase is serverless doesnot require any server to save data in database
//some NO SQL database needs server as well such as MONGO DB


var name=document.getElementById("nam");
var roll=document.getElementById("roll");

function save(){

    var std={
        name:nam.value,
        roll:roll.value,
    };

//firebase.database().ref("student").set(std);//create an object name as "student" and set its data/properties as std in firebase database 
//firebase.database().ref("student").set("sudent array");//create an object name as "student" and set its value as "student array" in firebase database 
//firebase.database().ref("student").child("student1").set(std);//  student-->student1-->std properties then
//above and below are same but way are different
//firebase.database().ref("student/student1").set(std);//  student-->student1-->std properties then
// above one is replacing the previous content and below one is not replacing making random key and pushing next object
//firebase.database().ref("student/student1").push(std);//  student-->student1-->random key-->std properties then
//we can alse create our own key
//var key=firebase.database().ref("student/student1").push().key;//give automatic generated key

// firebase.database().ref("student/student1").once("value",function(data){ //In .once() "value" is constant/keyword while 2nd parameter must be function with a parameter(works when page is reloaded not realtime)
// data.val();//.val() to give that data in an order
//    });


// firebase.database().ref("student/student1").on("child_added",function(data){ //In .on() "child_added" mean when child is added give data (works realtime)
// data.val();//.val() to give that data in an order
//    });

// firebase.database().ref("student/student1").remove();//remove() = removing data


// EDITING DATA
// firebase.database().ref("student/student1").set({
// name:"ali";
// roll:123;
// })
}


// LINUX
// linux is open source operating system
// ASCII= American Standard Code International Interchange

// After Installing linux kernel Ubuntu open Terminal and start writing commands
//Commands:
// uptime: gives time at the mmoment
//ls: gives the directory details// root is home in ubuntu file manager
// mkdir folfer_name: creating folder// mkdir= make directory
//uname: os name 
//uname -srv: give os name, release and version
// uname --help: give some commands to help to undertand uname all commands
// man uname: gives all other commands to use with uname
// clear: clear the whole terminal/shell
//cd child_folder: move into a folder(change directory)
// touch file_name.extension: make a file
//su: change directory and take u to the root(sudo -i: also same)(exit: to exit from root)
// whiami: gives name of computer
//info: gives all commands(info uname: give uname all commands)
//q: to exit from info panel
//pwd: gives present working directory
//echo hello world > file_name.extension: write in file(>> is used to push data otherwise > only replace data)
//cat file_name.extension: gives file internal data
// cal: print calendar
// date: print date
// cd .. : to go 1 step behind in directory (cd ../.. =2 step and so on)
// cp from_dir_name/filename.extension to_dir_name: copy file or folder
//mv old_filename.extension new_filename.extension: rename
//rm filename.extension: remove/delete file
//rm -rf folder_name: remove/delete folder
//lscpu: gives config/info of whole system(dxdiag in windows)
// // df:gives disk description(df= disk files)(df -h: in more detail)
// whatis command_name: tell the function of command
//type command_name: tells whole herairchy to that command
// which command/file/folder: tells about existance of command/file/folder


// ES6
// javascript ES6 (ECMA Script 6)(ECMA= European Computer Manufacturing Asscociation)
// ES6 comes in 2015

// var scope is within a function (global)
// let scope is within a block/curly braces (local)
// we cannot declare variable with "let" again and again (gives error) but we can in "var"
// const is for constant
//Template Literals: ES6 introduced some simple solutions of some lengthy things such as concatenation
// ``= known as bectic
// var a= "Ali";
// var b= "Khan";
// console.log(`My Name is ${a} ${b}`);//it does not require any "+" to concatenate simple give space in bectic , string can be written simply in it where as variable can be written as ${var_name} like that it bectic


//merging two arrays in one using concat method or spread operator
// array1_name.concat(array2_name);//here concat is a method
// spread operator is "..." (it can be used with array or object) 
// array2_name=[...array1_name,2,3];//here 2 and 3 is array 2 values and array 1 values is merging using spread operator

// Object Destructuring(also for arrays)
// var stud={name:"hasan",roll:23};
// var{name,roll}=stud;//it makes name and roll variable and store stud property value in it so we can access it without object refrence;
// console.log(name + roll);

//Ternary operator
// var bool=(1<2)?"True":"False";
// console.log(bool);

// Function Expression : to decalre whole funtion o a variable
//  var x=function (){ //calling=x()
//     console.log("function Expression")
//  }


// Arrow Function : to decalre whole funtion o a variable(this keyword targets parent element in it while normal function targets that element)
// var y=()=>{ //calling=y()
// console.log("Arrow function")
// }

// var y=()=> "Ali"; //It is a function with returns Ali; 

// Getting Data from Firebase and use it in other functions
// var func=(getData)=>{
// firebase.database().ref("student/student1").on("value",function(data){
// getData(data.val());
// });
// }

// Array Functions
// filter is a high order function because it get a function in a parameter which is known as a callback funtion
// var arr=[{name:"ahmad",roll:1},{name:"anmol",roll:2}];
// arr.filter((a)=>{console.log(a)});//a gives here array items(it also use to get filter data)
// var filter=arr.filter((a)=>{  return a.name==="ahmad";});//fitering here(the element with name=ahmad is returned)
// console.log(filter);

// Array Map: High order function(do calcultion on each item of array/updations)
// var arr=[2,3,4,5];
// var maped=arr.map((a)=>{return a*2;})
// console.log(maped);


//Search
// var name="Hasnain";
// search="Ha";
// name.startsWith(search){ //check whether name starts with search or not (endsWith(search) is also same) (if true then it runs else does not)
//     console.log(name);
// }


// function getData(data){
// console.log(data);//here comes the data for use from firebase
// }


// async or Sync: keywords which used before functions/statemenets etc
//async : javascript wait for that function or statement to execute then move further 
// sync: javascript normally runs synchronous(line by line)
// await : keyword , used with fetch("") ,when getting data from server, it donot execute next line till it gets data;

// async function getData(){
// var data=await fetch("Server_Url_from_where_we_fetching_data_or_communicating")
// .then(data=>console.log(data))//executes if gets data
// .catch(err=>console.log(err))//executes if any error occur
// }

//Promise : till whole runs if u didnot get value then rejects either it remains on pending to resolve it
// var promise=new Promise(function(resolve,reject){
//   firebase.database().ref("obj_ref").on("child_added",function(data){
//     if(data.val()){
//         resolve(data.val());
//     }  
//     else{
//         reject("Something Went Wrong");
//     }
//   })
// })

// // when promise resolved then output will be from .then
// Promise.then(function(data){
// console.log(data.val());
// })
// // when promise reject then output will be from .catch
// .catch(function(err){
// console.log(err);
// })

//fetch: used to send/access data from API, returns promise which evaluated by .then and .catch
//fetching data from server
// fetch("Server_Url_from_where_we_fetching_data_or_communicating")
// .then(data=>console.log(data))//executes if gets data
// .catch(err=>console.log(err))//executes if any error occur


// ES6 Classes: In ES6 concepts of making classes is intoduced
// class Student{
//     constructor(name,roll){
//         this.name=name;
//         this.roll=roll;
//     }
// }

// class School extends Student{//extending class: inheritance
//     constructor(name,roll,school){
//         super(name,roll);
//         this.school=school;
//     }
// }

// var student1=new School("Ali",3,"Saylani");
// console.log(student1)

// FIREBASE AUTHENTICATION
// Signup using Email and Password

// function signup(){

//     email=document.getElementById("signup-email");
//     password=document.getElementById("signup-password");

// firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
// .then((result)=> console.log(result))
// .catch((error)=>console.log(error.message));

// }



// Login using Email and Password

// function Login(){

//     email=document.getElementById("login-email");
//     password=document.getElementById("login-password");

// firebase.auth().signInWithEmailAndPassword(email.value,password.value)
// .then((result)=>console.log("User Log in Succesfully ",result))
// .catch((error)=>console.log(error.message));
// }

// login using Facebook

function fbLogin(){

    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        var user = result.user;
        console.log("User==>",user);
      //   window.location="home.html";
      }).catch(function(error) {
        var errorMessage = error.message;
        console.log(errorMessage);
      });

}


//Signout from Facebook

// function signOut(){

//     firebase.auth().signOut()
//     .then(function() {
//         console.log("User==>");
//       //   window.location="login.html";
//       }).catch(function() {
//         console.log("errorMessage");
//       });

// }


// REACT JS
// Istalling React js
// 1.first install node.js(stable version)
// 2.go to cmd 
// 3.type npm install --global create-react-app(it takes time to install react globally)
// 4.type create-react-app firstproject(it will create project, take some time) 

// React is a library of javscript, component based model

//Library is once made and use again and again(it does not have strict rules)
//framework is collection of frameworks(it has some rules)
// SPA=Single Page Application(all pages in one html file )(follwed by react)
// MPA=Multiple Page Application(change html file while changing page)


// Folders come with React installation with purposes
// In public folder: index.html is the main file for the react app(i.e:SPA)
// .gitignore: it tells to ignore that thing which are present in this file while pushing code to git
//node_modules: carry all installed packages  which are to to used
// while pushing code to git it doesnot push node_modules, So developer will found out from dependencies that which libraries are used and install that to run react application
//In package.json : dependencies tells which library is using at the moment in your react app with its version number
// README.md: used in github to tell description about project
// In src :index.js is the main file 
// react gives u feasibity to write javascript and html in single .js file(this is also known as jsx) 


// REACT NATIVE : Use to build mobile apps
//it has same code as react but it donot use html code it has its oewn component which we use 
// andriod extension: .apk
// ios extenstion: .ipa
//React native code is same for ios or android only it have different extension on backend
//it has 2 ways to built app ,through
//1.EXPO CLI
//2.REACT NATIVE CLI


//EXPO CLI: for starter while learning is good
// you can only use react native version which expo gives
//for ios development it does not need mac laptop but it needs iphone
//Expo has all libraries in it installed we only use it(bootstrap,materialUI etc)
//it provides us link/QR code to perform testing from others app 
//it does not use html componenets for UI it has its own components which we imports and use
//Some Basic Components: View,Text,Image,TextInput,ScrollView,StyleSheet 


//EXPO INSTALLATION
//Download and install node js 
//Installation Command:npm i --global expo-cli  
//Install expo in mobile: to test app 
//creating project: expo init my-project and then select blank(first one) there
//after all open my-app in code
//to start project command: npm start/expo start

// React Navigation is used in ReactNative for routing/Navigation
//NAVIGATIONS:
//Stack Navigation: Top as header
//Bottomtab Navigation: like as youtube in footer
//Toptab Navigation: like as whatsapp at top
//Drawer Navigation: in side we click and have a menu as Playstore
// INSTALLATION
//command:  npm install @react-navigation/native
// then command: expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
//command for stack navigation: npm install @react-navigation/stack
//commannd for Drawyer Navigation:npm install @react-navigation/drawer
//commannd for BottomTab Navigation:npm install @react-navigation/bottom-tabs
//commannd for TopTab Navigation:npm install @react-navigation/material-top-tabs react-native-tab-view




//REACT NATIVE CLI: it is good in professional(best)
// you can only use react native other versions here
//for ios development it needs mac laptop and also it needs iphone
//here we have to install libraries by npm or some by directly from expo (bootstrap,materialUI etc)
//it makes extension .apk or .ipa and then send for testing to others


// After Starting: Files 
//App.js: main file in expo project(all other files that we make will use here by importing)
//babel.config.js: used to convert expo components 
//app.json: contains app info(version , name etc) 
//assets folder : contains images and fonts etc

//we donot use html tags for ui , we have to import components from react native for UI
//we also import stylesheet from react
//function components does not support state and lifecyle but it has others things in place of them

