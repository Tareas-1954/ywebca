// Student Workspace
Fizz.buzz = function () {

var loop=1;
var output="";

  while (loop <=100) {
    output ="";

    if (loop%3 == 0)
      output="Fizz";
      
    // if divided by 5 with no remainder then += Buzz
    
    if (loop%5==0)
      output+="Buzz";

    if (loop%3!=0&&loop%5!=0)
      output = loop

    console.log(output);
    loop+=1;
  }
};