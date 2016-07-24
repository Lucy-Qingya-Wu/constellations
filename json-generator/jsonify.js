    var array = [];
    var n = 0;
    var firstFlag = 0;

    function addStar() {
        var name = document.getElementById("constellation-name").value;
        var xString = document.getElementById("x_coordinate").value;
        var yString = document.getElementById("y_coordinate").value;
        var color = document.getElementById("color").value;
        var spikesString = document.getElementById("number_of_spikes").value;

        var x = parseInt(xString);
        var y = parseInt(yString);
        var spikes = parseInt(spikesString);



        //array.push("<br>" + "{\"x_coordinate\": " + x + ", \"y_coordinate\": " + y + ", \"color\": \"" + color + "\" , \"number_of_spikes\":" + num + ", \"id\": \"star" + (n+1) + "\"" + "}");

        var temp = {};
        temp['id'] = 'star' + n;
        temp['x_coordinate'] = x;
        temp['y_coordinate'] = y;
        temp['color'] = color;
        temp['number_of_spikes'] = spikes;
        array.push(temp);
        console.log(array);
        console.log(array[n])

        //JSON.stringify(array);
        //console.log( "after json stringify: " + array);

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
            //document.getElementById('jsonObject').innerHTML = array;    

            //for loop to display each star object
            //var tempStar = "{ id: " + array[n].id + ", x_coordinate: " + array[n].x_coordinate + ", y_coordinate: " + array[n].y_coordinate + ", color: " + array[n].color + ", number_of_spikes: " + array[n].number_of_spikes + "}";
            array.toString();
            document.getElementById('jsonObject').innerHTML =  JSON.stringify(array); 

        n++;
        firstFlag = 1;
    }

    function updateArray(id, x, y, spikes){

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
        var foo = num;
        //var foo = num - 1;
        console.log("foo: ", foo);
        if(foo > -1){
            array.splice( foo, 1 );
            console.log(array);
        }

        for( i = 0 ; i < array.length ; i++){
            array[i].id = 'star' + i;
            console.log(array[i].id);
        }

        array.toString();
        document.getElementById('jsonObject').innerHTML =  JSON.stringify(array); 

    }

