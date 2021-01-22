


StartHere();

function StartHere()
{
  /*****************************************************************************************************/
  var Sec=0;
  var Min=0;
  var Hr=0;
  var Deg=0;
  var intObj;
  function main(sec, min, hr,deg){
    startClk(sec,min,hr,deg);
  }

  $(".start").on('click',function(){
      $(".start").off('click');
    main(0,0,0,0);
  } );



  $(".restart").click(function(){

    $(".start").on('click',function(){
        $(".start").off('click');
      main(0,0,0,0);
    } );
    clearInterval(intObj);
    $(".led").html("00");
    $(".hand").css("transform", "rotate(0deg)");
  });




  $(".stop").on('click',function(){

    clearInterval(intObj);
    $(".start").on('click',function(){
        $(".start").off('click');
      main(Sec,Min,Hr,Deg);

  });});



  function startClk(sec, min, hr,deg)
  {

    Sec=sec;
    Min=min;
    Hr=hr;
    Deg=deg;
    clearInterval(intObj);
    intObj=setInterval(function(){

      console.log(intObj);

      Sec =(Sec +1) % 100;


      if(Sec==0)
      {

        Min=(Min+1)%60;
        Deg = (Deg+6)%360;
        $(".hand").css("transform", "rotate("+Deg+"deg)");
        if(Min==0)
        {
          Hr++;
        }



      }

    setTime("sec",Sec);
    setTime("min",Min);
    setTime("hr",Hr);


  },10);
  }


  function setTime(str,n)
  {
    if(n==-1)
    {
      n=0;
    }
    if(n<10)
    $("."+str).text("0"+n);
    else
      $("."+str).text(n);
  }

  /*****************************************************************************************************/
}
