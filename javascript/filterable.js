  // The filterable project script
 function filter()
{
    //get the input element
    var input  = document.getElementById('filterinput');
    // get the li's
    var mylist = document.getElementsByClassName('collection-item');
        // get the a tags
    var myval= document.getElementsByTagName('a');
       for(var i=0 ; i< myval.length ; i++)
           {
     if(input.value.toUpperCase() == myval[i].innerHTML.substr(0,(input.value.length)).toUpperCase())
            {
                mylist[i].style.display = '';
            }
        else
            {
                
          mylist[i].style.display = 'none';         
            }
             
           }
          
}
    




     