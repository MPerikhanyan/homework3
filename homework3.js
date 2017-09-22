const volume = function(length, width, height){
  const volumeOfCube = length * width * height;
  return volumeOfCube ;
 };

 const func  = function(){
   return 9 ;                
 };
 
 const area = function(length, breadth) {
   const areaOfRectangle = length * breadth ;
   console.log(areaOfRectangle);
 };
 
 const fullName = function (fistname, lastname ) {
   return firstname + " " + lastname ;
  };
  
 const longestString = function(str1 ,str2 ,str3) {
	  if (str1.length > str2.length & str1.length > str3.length){return str1;}
	  else if ( str2.length > str1.length & str2.length > str3.length){ return str2 ;}
      else if (str3.length > str2.length & str3.length > str1.length){ return str3 ;}};

  
 const compare = function (num1 , num2){
    if (num1= num2) {return 0 ;}
    else if (num1 > num2)  {return 1;}
    else if (num1 < num2){ return -1 ;}
 };
 


 const firstTruethy = function (inp1 ,inp2 ,inp3 ) {
  const expression = inp1|| inp2|| inp3 ;
  return expression ;};
 