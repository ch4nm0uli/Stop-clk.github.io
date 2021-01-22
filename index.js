var Sec=0;
var Min=0;
var Hr=0;

var intObj;
function main(sec, min, hr){
  console.log("to startclk");
  startClk(sec,min,hr);
}

console.log("----------------------");
$(".start").on('click',function(){
    $(".start").off('click');
  main(0,0,0);
} );



$(".restart").click(function(){
  console.log("restart to startclk");

  $(".start").on('click',function(){
      $(".start").off('click');
    main(0,0,0);
  } );
    sec=0;
  clearInterval(intObj);
  console.log("intobj:"+intObj);
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
  console.log("in startclk");
  intObj=setInterval(function(){
    console.log("in incr");
    Sec =(Sec +1) % 60;
    console.log(Sec);

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


},1000);
console.log("OUT OF FUNCTION");
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
