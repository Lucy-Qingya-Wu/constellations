
var data,temp,i;


data = [];


    for (i = 0; i < 5; i += 1) {
        temp = {};
        temp['name' + i] = i;
        data.push(temp);
    }
    console.log(data);
