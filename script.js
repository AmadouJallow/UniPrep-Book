let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")

let count=0


let students=[
  {
    profileImage:"https://cdn.glitch.com/30b4d53b-3d98-4526-8efc-bb25fcd6f9b1%2F90914192_281341302850688_4677603930945880064_n.jpg?v=1585156512116",
    Name: "Edison",
    Quote:"Life is too short to be depressed about",
    SuperLative:"Super Sarcastic", 
    color:"5px solid red",
  },
  {
    profileImage:"https://cdn.glitch.com/30b4d53b-3d98-4526-8efc-bb25fcd6f9b1%2F74913854_2467643680191631_450960253136142336_n.jpg?v=1585156641160",
    Name: "Lesroy",
    Quote:"Understandable",
    SuperLative:"Super Sleepy", 
    color:"5px solid orange",
  },
  {
    profileImage:"https://cdn.glitch.com/30b4d53b-3d98-4526-8efc-bb25fcd6f9b1%2F90945813_571727916773645_3254808448352649216_n.jpg?v=1585156702273",
    Name: "Mahel",
    Quote:"You think you caught time but time has you in its grasp",
    SuperLative:"Very Thoughtful", 
    color:"5px solid yellow",
  },
  {
    profileImage:"https://cdn.glitch.com/30b4d53b-3d98-4526-8efc-bb25fcd6f9b1%2F90884418_850092988749064_4829691441611538432_n.jpg?v=1585157627345",
    Name: "Lisandro",
    Quote:"I may be shorter but I got a taller IQ than you",
    SuperLative:"Most humblest", 
    color:"5px solid green",
  },
  {
    profileImage:"https://cdn.glitch.com/30b4d53b-3d98-4526-8efc-bb25fcd6f9b1%2F78816439_1169621626564736_3082115338163191808_n.jpg?v=1585158205022",
    Name: "Farid",
    Quote:"Why get a house when you can live in the gym",
    SuperLative:"Very persevering", 
    color:"5px solid blue",
  },
  {
    profileImage:"https://cdn.glitch.com/30b4d53b-3d98-4526-8efc-bb25fcd6f9b1%2F90875593_630353177817244_213516559589572608_n.png?v=1585158583683",
    Name: "Nicholas",
    Quote:"It is what it is",
    SuperLative:"Tallest person",
     color:"5px solid #4b0082",
  },
  {
    profileImage:"https://cdn.glitch.com/30b4d53b-3d98-4526-8efc-bb25fcd6f9b1%2F90922697_225897251940633_3244593787762114560_n.jpg?v=1585161406870",
    Name: "Ruth",
    Quote:"I hate mathhh",
    SuperLative:"Very enthusiastic", 
     color:"5px solid 	#EE82EE",
  },
    {
    profileImage:"https://cdn.glitch.com/30b4d53b-3d98-4526-8efc-bb25fcd6f9b1%2F90842905_630995884422611_2667721547526963200_n.jpg?v=1585162084638",
    Name: "Munira",
    Quote:"I am the nicest person",
    SuperLative:"Very chill", 
    color:"5px solid #800020 ",
  },
  
]
document.querySelector("#pic").src= students[count].profileImage
document.querySelector("#name").innerHTML= students[count].Name
document.querySelector("#quote").innerHTML= students[count].Quote
document.querySelector("#superlative").innerHTML= students[count].SuperLative
document.querySelector("#profile").style.border= students[count].color
// document.querySelector("#profile").style.textalign= 


let search= document.querySelector("#search")
search.addEventListener("click" , ()=>{
count++;
let find= document.querySelector("#find").value  
students.forEach((studentName, index)=>{
  console.log(studentName.Name)
  if(find.toUpperCase()==studentName.Name.toUpperCase()){
    count = index
    changeProfile()
  }
})
})     

function changeProfile(){
  document.querySelector("#pic").src= students[count].profileImage
  document.querySelector("#name").innerHTML= students[count].Name
  document.querySelector("#quote").innerHTML= students[count].Quote
  document.querySelector("#superlative").innerHTML= students[count].SuperLative
  document.querySelector("#profile").style.border= students[count].color
}


let lastProfile= students.length-1
nextButton.addEventListener("click",()=>{
  console.log('next')
  count++;
  if(count > lastProfile){
    count = [0]
  }
  document.querySelector("#pic").src= students[count].profileImage
document.querySelector("#name").innerHTML= students[count].Name
document.querySelector("#quote").innerHTML= students[count].Quote
document.querySelector("#superlative").innerHTML= students[count].SuperLative
document.querySelector("#profile").style.border= students[count].color
})
let firstProfile= students.length-1
backButton.addEventListener("click",()=>{
  console.log('back')
  count--;
  if(count < [0]){
    count = firstProfile
  }
  document.querySelector("#pic").src= students[count].profileImage
document.querySelector("#name").innerHTML= students[count].Name
document.querySelector("#quote").innerHTML= students[count].Quote
document.querySelector("#superlative").innerHTML= students[count].SuperLative
document.querySelector("#profile").style.border= students[count].color
})

