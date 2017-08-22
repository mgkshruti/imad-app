console.log('Loaded!');
//counter code
var button=document.getElementById('counter');
var counter=0;


button.onclick=function(){
    //Make a request to counter endpoint
    //create a req object
    var request=new XMLHttpRequest();
    
    //capture the response and store in a variable
    request.onreadystatechange=function(){
        if(request.readystate=== XMLHttpRequest.DONE){
            //take some action
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
    span.innerHTML=counter.tostring();
    
                
            }            //else
        }
    };
    //Render the variable in the correct span
    counter=counter + 1;
    //make a request
    request.open('GET','http://sruthimss08.imad.hasura-app.io/counter',true);
    request.send(null);

};