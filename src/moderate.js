var start=document.getElementById("start");
start.addEventListener("click",()=>{
    document.getElementById("start").style.display="none";

  var target=20;
  document.getElementById("target").innerHTML=target;
  document.getElementById("fscore").innerHTML=0;
   var sum=0;
  const select=document.getElementById("level").value;
  if(select=="2"){
    document.getElementById("stop").style.display="none";
    document.getElementById("word").style.width="100%";
    document.getElementById("target0").style.display="none";
    document.getElementById("score").style.display="none";
    document.getElementById("word").style.height="250px";
    const words=["Several other products are obtained indirectly from nature which includes timber, paper, medicinal herbs, fibers, cotton, silk and various kinds of food. To fulfill the demand for these products, human beings have now engaged in the slaughter of trees and the destruction of nature. Different industries also poison nature with harmful gases and chemicals in addition to using excessive natural resources.",
    "Nature includes living and non-living components that together make life on Earth possible. Some forms of nature can be seen through the lush green forests, the vast sky above us, the oceans without an end, the mountains standing tall and so on. Nature nourishes the survival needs of plants, animals and humans alike. It provides the essential components of oxygen, sunlight, soil and water.",
     "Every member of the living world obtains its life support from nature. Nature guides the cycling of air, water and life between the different constituents or spheres on Earth. The treasures in nature not only provide for our basic requirements of survival but also fuel the raw materials to support factories and industries on which the modern world primarily runs.",
    "Since the population is increasing at an exponential rate largely in India and many parts of the world, the “use” of resources has now turned to depletion. Adding to this, are the excessive levels of atmospheric and environmental pollution. Industrial wastes, unchecked use of vehicles, illegal cutting of trees, poaching of animals, nuclear power plants and many more are contributing to the disruption of the natural systems and global warming.",
     "Since the population is increasing at an exponential rate largely in India and many parts of the world, the “use” of resources has now turned to depletion. Adding to this, are the excessive levels of atmospheric and environmental pollution. Industrial wastes, unchecked use of vehicles, illegal cutting of trees, poaching of animals, nuclear power plants and many more are contributing to the disruption of the natural systems and global warming.",
      "Get Latest Edition of RS Aggarwal Solutions Class 6 Maths Pdf Download on AplusTopper.com. It provides step by step RS Aggarwal Maths Book Class 6 Solutions PDF Free Download. RS Aggarwal Class 6 Maths Book Solutions PDF with Free PDF download option, which contains chapter wise solutions. In RS Aggarwal Mathematics Class 6 Solutions PDF Download all questions are solved and explained by passionate mathematics teachers as per CBSE board guidelines.",
    "APlusTopper.com provides step by step solutions for Selina Concise Chemistry Class 9 ICSE Solutions 2019-20 Pdf free download are solved step-by-step in order to improve student problem solving skills. Selina Publishers Concise Chemistry Book Class 9 ICSE Solutions all questions are solved and explained by expert teachers as per ICSE board guidelines. By studying these Selina ICSE Solutions for Class 9 Chemistry you can easily get good marks in ICSE Board Examinations.",
    "The talent of Acharya Ramchandra Shukla Ji was multi-faceted. He was a great essayist, critic and thinker. He is considered the first basic critic of Hindi. His history of Hindi literature is considered to be superior in history. Acharya Ramchandra Shukla was the pride of Hindi. He started writing in Hindi from his student life He edited 'Bhramar Geetasar', 'Bharatendu Sahitya', 'Tulsi Granthavali' and 'Jayasi Granthavali'."];
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
      if(a>=0&&b>=0&&sum>=2)
    {
        alert(" you won");
       clearInterval(time);
    }
   else if(a==0&&b==0&&sum<2)
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
      document.getElementById("word").innerHTML=words[Math.round(Math.random()*7)];
        sum++;
      document.getElementById("wordresponce").value="";
      }
});

}
});


