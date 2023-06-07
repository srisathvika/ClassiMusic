console.log("Welcome to ClassiMusic");

//Initialize the variables:
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let box = Array.from(document.getElementsByClassName('box'));

let songs=[
    {songName:'Meghalu Lekunna', filePath:'1.mp3', coverPath:"https://picsum.photos/180/170?random=2"},
    {songName:'Jare Jare', filePath:'1.mp3', coverPath:"https://picsum.photos/180/170?random=3"},
    {songName:'Mella Mellaga', filePath:'1.mp3',coverPath:"https://picsum.photos/180/170?random=4"},
    {songName:'Tere Bina', filePath:'1.mp3', coverPath:"https://picsum.photos/180/170?random=5"},
    {songName:'Aise Kyun', filePath:'1.mp3', coverPath:"https://picsum.photos/180/170?random=6"},
    {songName:'Saibo', filePath:'1.mp3', coverPath:"https://picsum.photos/180/170?random=7"},
    {songName:'Sweety', filePath:'1.mp3', coverPath:"https://picsum.photos/180/170?random=8"},
    {songName:'Sahiba', filePath:'1.mp3', coverPath:"https://picsum.photos/180/170?random=9"},
    {songName:'Tere Naina', filePath:'1.mp3', coverPath:"https://picsum.photos/180/170?random=10"},
    {songName:'Yathana', filePath:'1.mp3', coverPath:"https://picsum.photos/180/170?random=11"},
    {songName:'Nasha', filePath:'1.mp3', coverPath:"https://picsum.photos/180/170?random=12"},
    {songName:'Chaar Kadam', filePath:'1.mp3', coverPath:"https://picsum.photos/180/170?random=13"},
    {songName:'Darasal', filePath:'1.mp3', coverPath:"https://picsum.photos/180/170?random=14"},
    {songName:'Munve Vaa', filePath:'1.mp3', coverPath:"https://picsum.photos/180/170?random=15"},
    {songName:'MalliRaava', filePath:'1.mp3', coverPath:"https://picsum.photos/180/170?random=16"},
]

box.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})
// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{

    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})

//Listen to events 
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    progressBar.value=progress;
})

progressBar.addEventListener('change',()=>{
    audioElement.currentTime=progressBar.value*audioElement.duration/100;
})