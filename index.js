const quot=document.getElementById("quot");
const author=document.getElementById("author");
const newq=document.getElementById("newq");
const whatsapp=document.getElementById("whatsapp");
const tweeter=document.getElementById("tweeter");
const instagram=document.getElementById("instagram");
let ndata,qdata;


const newquotes=()=>{
    let random=Math.floor(Math.random()*100);
    let qdata=ndata[random];
    quot.innerText=`${qdata.text}`;
   
    qdata.author==null
    ?(author.innerText="~ Author : unknown")
    :( author.innerText=`~ Author : "${qdata.author}"`)
  

}
const whatf=()=>{
    
    let url2='https://web.whatsapp.com/';
    window.open(url2);
   
}
const insta=()=>{
    let url1='https://www.instagram.com/';
    window.open(url1);
}
const tweet=()=>{
    let url=`https://twitter.com/intent/tweet?text=${qdata}`;
    window.open(url);
}



const quotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
     ndata= await data.json();
    newquotes();
  } catch (error) {
    alert("Please! Check your Internet connection");
  }
};

newq.addEventListener('click',newquotes);
whatsapp.addEventListener('click',whatf);
tweeter.addEventListener('click',tweet);
instagram.addEventListener('click',insta);
quotes();
