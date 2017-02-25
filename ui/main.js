//counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
    
    //make request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //capture the response in the correct span
    request.onreadystatechange = function() {
        if(request.readystate === XMLHttpRequest.DONE) {
            //Take some action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    
    //Make the request
    request.open('GET', 'http://anmoljindal.imad.hasura-app.io/counter', true);
    request.send(null);
};