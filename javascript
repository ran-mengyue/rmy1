var str="frankly, my dear, I don't give a damn";
	var arr=str.split(" ");
	console.log(arr)
    var b=new Array(i);
	for (var i=0;i<arr.length;i++){
    b[i]=arr[i][0].toUpperCase()+arr[i].substring(1);
    }
    str=b.join(" ");
    console.log(str)
