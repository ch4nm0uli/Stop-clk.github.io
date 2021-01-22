


StartHere();

function StartHere()
{
  /*****************************************************************************************************/
  var Min=0;
  var Hr=0;

  var intObj;
  function main(sec, min, hr){
    startClk(sec,min,hr);
  }

  $(".start").on('click',function(){
      $(".start").off('click');
    main(0,0,0);
  } );



  $(".restart").click(function(){
    $(".start").on('click',function(){
        $(".start").off('click');
      main(0,0,0);
    } );
      sec=0;
    clearInterval(intObj);
    $(".led").html("00");
  });




  $(".stop").on('click',function(){

    clearInterval(intObj);
    $(".start").on('click',function(){
        $(".start").off('click');
      main(Sec,Min,Hr);

  });});



  function startClk(sec, min, hr)
  {

    Sec=sec;
    Min=min;
    Hr=hr;
      clearInterval(intObj);
    intObj=setInterval(function(){
      Sec =(Sec +1) % 100;

      if(Sec==0)
      {

        Min=(Min+1)%60;
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
