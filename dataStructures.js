// level {2}


//////1st question

let filterArray = (arr) => {
    var oddArray = arr.filter((a)=>{
        return a%2 == 1;
    })
    return oddArray;
}

///////// 2nd question


let replaceVowels = (str) => {
    for (var i = 0; i < str.length ; i++)
    {
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')
        {
            var p = str[i].toUppercase();
            let start = str.slice(0, i);
            let end = str.slice(i+1,str.length);
            var ans = start + p + end;
            str = ans;
        }
        
    }
    return str;
}


/////////3rd question

let maxNumber = (arr) =>{
    var i = -1000000000000000000; // smallest negative no.
    for(var p = 0; p < arr.length; p++)
    {
        if(i < arr[p])
        {
            i = arr[p];
        }
    }
    return i;
}