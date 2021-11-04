 
    var start=document.getElementById("start");
    start.addEventListener("click",()=>{
      document.getElementById("fscore").innerHTML=0;
       var sum=0;
      const select=document.getElementById("level").value;
      if(select=="0"){
       document.getElementsByTagName("h3")[2].innerHTML="No target";

     const words=["across","arrive","card","depend","draw","eight","happy","increase","kitchen","modern","pretty",
     "probably","question","ready","ruler","speak","useful","wine","yard","wear","sheet","remind","rush","repeat","needle","neither","month","introduce","heavy",
     "glad","foreign","floor","dangerous","condition","control","continue","amount","chocolate","daughter","dusty","horse","knock","keep","lonely","play","skirt","structure","together","village","win","usually","tonight","wedding","wise","total","private","order","other","rubber"
     ,"shoulder","train","public","naughty","nurse"];
       var a=0;
       var b=0;
       var time=setInterval(()=>{
          b++;
          if(b>59)
          {
             a++;
             b=0;
          }
          if(b<10)
          document.getElementById("time").innerHTML= a+":0"+b;
          else
          document.getElementById("time").innerHTML= a+":"+b;
       },1000);

       var stop= document.getElementById("stop");
         stop.addEventListener("click",()=>{

             clearInterval(time);
             alert(`you have written ${sum} words in ${a}:${b} minutes `)
          });
          var wordresponce=document.getElementById("wordresponce");
          wordresponce.addEventListener("keyup",()=>{
          var qword=document.getElementById("word").innerHTML;
          var resword=document.getElementById("wordresponce").value;
          if(resword==qword)
          {
          document.getElementById("word").innerHTML=words[Math.round(Math.random()*60)];
            sum++;
          document.getElementById("wordresponce").value="";
          }
          document.getElementById("fscore").innerHTML=sum;
    });
   }
 });
  

