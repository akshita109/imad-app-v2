//counter code
var button = document.getElementById("counter");
button.onclick = function()
{
    //create a request object
    var request = newXMLHttpRequest();
    //capture the response
    requst.onreadystatechange = function(){
         if(request.readystate === XMLHttpRequest.DONE){
             //take action
             if (request.status===200){
                  var counter = request.responseText;
                  var span = document.getElementById("count");
                  span.innerHTML = counter.toString();
             }
         }
         //take no action.wait.
    };
    //make the request
    request.open('GET','http://akshita109.imad.hasura-app.io/counter',true);
    request.send(null);
};
//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function()
{
    //make a request to server and send the names
    
    //capture the list of names and render it as a list
    var names = ['name1','name2','name3','name4'];
    var list='';
    for(var i=0; i<name.length; i++)
    {
        list =='<li>'+names[i]+'<li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
}; 
