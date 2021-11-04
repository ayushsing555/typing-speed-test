     var start=document.getElementById("start");
    start.addEventListener("click",()=>{
      document.getElementById("start").style.display="none";
      var target=20;
     
       var sum=0;
      const select=document.getElementById("level").value;
      if(select=="1"){
        document.getElementById("stop").style.display="none";
        document.getElementById("target").innerHTML=target;
        document.getElementById("fscore").innerHTML=0;
      const words=["Abnegation","cajole","circumlocution","clamor","denigrate","Disperate","EpheMeral","lconoclast","largess",
      "phlegmatic","quotidian","sanctimonious","Solipsism","Vociferous","Gratuitous","Incumbent","vocabulary","Epistolary","Heterogeneous","Philanthropic",
    "Spurious","Nauseous","Liquefy","Sherbet","Fuchsia","Minuscule","Ingenious","Sacrilegious","Accommodate","Orangutan","Mischievous","Gubernatorial","Acquiesce","Conscientious"];
    // console.log(words.length);
       var a=2;
       var b=59;
       var time=setInterval(()=>{
         if(a>0||b>0){
          b--;
          if(a>0&&b<0)
          {
             a--;
             b=59;
          }
        }
          if(b<10)
          document.getElementById("time").innerHTML= a+":0"+b;
          else
          document.getElementById("time").innerHTML= a+":"+b;
          if(a>=0&&b>=0&&sum>=20)
        {
            alert(" you won");
           clearInterval(time);

        }
       else if(a==0&&b==0&&sum<20)
         {
           alert("oops! your time out....");
           clearInterval(time);
         }
       },1000);
       
          var wordresponce=document.getElementById("wordresponce");
          wordresponce.addEventListener("keyup",()=>{
          var qword=document.getElementById("word").innerHTML;
          var resword=document.getElementById("wordresponce").value;
          if(resword==qword)
          {
          document.getElementById("word").innerHTML=words[Math.round(Math.random()*34)];
            sum++;
          document.getElementById("wordresponce").value="";
          }
          document.getElementById("fscore").innerHTML=sum;
    });
   
   }
 });
  

