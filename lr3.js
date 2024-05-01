function z1(){
    let arr = (document.getElementById("array").value).split(',');
    let result1 = document.getElementById("result1");
    let result2 = document.getElementById("result2");
    let count = 0;
    let maxcount = 0;

    for(let i = 0; i < arr.length; i++)
    {
        if(Number(arr[i]) < 0){
            count++;
        }
    }
    result1.innerHTML = count;
    let size = arr.length;

    for (let i = 0; i < arr.length; i++)
    {
        let count = 0;
        if (Number(arr[i]) < 0) {
            for (let j = i; j < arr.length; j++)
            {
                if (Number(arr[j]) < 0) {
                    count++;
                    if (count > maxcount) { 
                        maxcount = count;
                    }
                }
                else{
                    count = 0;
                }
            }
        }
    }
    //-1, -2, 2, 3, 4, 5, -1,-1, -2, 2, 3, 4, 5, -1,-3
    result2.innerHTML = maxcount;
}