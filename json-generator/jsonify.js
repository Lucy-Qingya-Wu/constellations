    var array = [];
    var n = 0;
    var firstFlag = 0;

    function addStar() {
        var name = document.getElementById("constellation-name").value;
        var x = document.getElementById("x_coordinate").value;
        var y = document.getElementById("y_coordinate").value;
        var color = document.getElementById("color").value;
        var num = document.getElementById("number_of_spikes").value;

        array.push("<br>" + "{\"x_coordinate\": " + x + ", \"y_coordinate\": " + y + ", \"color\": \"" + color + "\" , \"number_of_spikes\":" + num + ", \"id\": \"star" + (n+1) + "\"" + "}");

        /*if(firstFlag == 0){
            var node = document.createElement("p");
            var textnode = document.createTextNode("\"name\" :" + "\""+ name + "\"" + ",");   
            node.appendChild(textnode);  
            document.getElementById("jsonObject").appendChild(node);

            var node = document.createElement("p");                 
            var textnode = document.createTextNode("\"stars\":[");    
            node.appendChild(textnode);  
            document.getElementById("jsonObject").appendChild(node);
             

            var node = document.createElement("p");                 
            var textnode = document.createTextNode(array[n]);    
            node.appendChild(textnode);
            node.setAttribute("id", "star" + (n+1) );  
            document.getElementById("jsonObject").appendChild(node); 
        }
        else{
            var node = document.createElement("p");                 
            var textnode = document.createTextNode("," + array[n]);    
            node.appendChild(textnode);  
            node.setAttribute("id", "star" + (n+1) );  
            document.getElementById("jsonObject").appendChild(node);   
        }*/

            document.getElementById('star-name').innerHTML = name;
            document.getElementById('jsonObject').innerHTML = array;        

        n++;
        firstFlag = 1;
    }

    function deleteStar() {
        var deleteID = document.getElementById("star-to-delete").value;
        var bar = document.getElementById(deleteID);
        console.log("bar: ",bar);
        console.log("deleteID: ",deleteID);
        //var element = document.getElementById(deleteID);
        //element.parentNode.removeChild(element);
        //var foo = array.indexOf(deleteID);
        var num = deleteID.match(/\d+/)[0] ;
        var foo = num - 1;
        console.log("foo: ", foo);
        if(foo > -1){
            array.splice( foo, 1 );
        }

        document.getElementById('jsonObject').innerHTML = array;

    }

