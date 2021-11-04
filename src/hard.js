var start=document.getElementById("start");
start.addEventListener("click",()=>{
    document.getElementById("start").style.display="none";

  var target=20;
  document.getElementById("target").innerHTML=target;
  document.getElementById("fscore").innerHTML=0;
   var sum=0;
  const select=document.getElementById("level").value;
  if(select=="3"){
    document.getElementById("stop").style.display="none";
    document.getElementById("word").style.width="100%";
    document.getElementById("target0").style.display="none";
    document.getElementById("score").style.display="none";
    document.getElementById("word").style.height="250px";
    const words=["“Strange Bedfellows!” lamented the title of a recent letter to Museum News, in which a certain Harriet Sherman excoriated the National Gallery of Art in Washington for its handling of tickets to the much-ballyhooed “Van Gogh’s van Goghs” exhibit. A huge proportion of the 200,000 free tickets were snatched up by homeless opportunists in the dead of winter, who then scalped those tickets at $85 apiece to less hardy connoiseurs.",
     "Yet, Sherman’s bedfellows are far from strange. Art, despite its religious and magical origins, very soon became a commercial venture. From bourgeois patrons funding art they barely understood in order to share their protegee’s prestige, to museum curators stage-managing the cult of artists in order to enhance the market value of museum holdings, entrepreneurs have found validation and profit in big-name art.",
     "This trend toward commodification of high-brow art took an ominous, if predictable, turn in the 1980s during the Japanese “bubble economy.” At a time when Japanese share prices more than doubled, individual tycoons and industrial giants alike invested record amounts in some of the West’s greatest masterpieces. Ryoei Saito, for example, purchased van Gogh’s Portrait of Dr. Gachet for a record-breaking $82.5 million.",
     "The work, then on loan to the Metropolitan Museum of Modern Art, suddenly vanished from the public domain. Later learning that he owed the Japanese government $24 million in taxes, Saito remarked that he would have the paining cremated with him to spare his heirs the inheritance tax. This statement, which he later dismissed as a joke, alarmed and enraged many.",
     "Ethical appeals notwithstanding, great art will increasingly devolve into big business. Firstly, great art can only be certified by its market value. Moreover, the “world at large” hasn’t the means of acquisition. Only one museum currently has the funding to contend for the best pieces–the J. Paul Getty Museum, founded by the billionaire oilman. The art may disappear into private hands, but its transfer will disseminate once static fortunes into the hands of various investors, collectors, and occasionally the artist.",
     "Students studying Reading Comprehension passages often want to see the hardest passages in LSAT history. To that end, here is a list of the hardest Reading Comprehension passages of all time, in chronological order. It is accompanied by our at-times jesting commentary. Although we can no longer offer direct downloads of the games due to LSAC rules, this publication identifier link will tell you where to find them.",
    "Overall, this was a difficult RC section because the second passage—about Louise Gluck—was also tough. Test takers who fought their way through that passage would soon arrive at this brutal closer to the section. The science-based topic—embryo polarity, or how organisms determine what is up and down, and front and back—is unknown to most students, and certainly presented a reading challenge. The passage was then followed by eight questions, furthering the misery.",
    "Maize is just another word for corn, so at first this passage doesn’t look too difficult. Indeed, the first paragraph is fairly easy to understand. It lays out the importance of maize to the cultures that cultivated it. After the first paragraph, however, the discussion turns extremely detailed and covers the physical science behind why maize is so bountiful. Corn never tasted so bad.",
    "Similar to the Maize passage, the first paragraph of this passage is fairly easy to understand (it discusses the replication of experimental results in fairly clear terms). Thereafter, the passage discusses “riddled basins of attraction” and fractals as an analogy of systems where replicating results can be impossible. Those portions of the passage lead most students to feel that the passage was impossible.",
    "This passage covers Maxine Hong Kingston and the literary antecedents of her writings in Chinese talk-stories. While the passage wasn’t overly absorbing, the eight questions were where the real difficulty appeared, and many students struggled between two or more answers on more than one occasion. Overall, after reading the passage, most students wanted nothing more to do with Kingston or her stories."]
   var a=2;
   var b=30;
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


