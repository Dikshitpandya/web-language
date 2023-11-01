let GenerateTable = function(){
    // alert("form submitted");
    //local variables
    let row =  $('row').value;
    let column = $('column').value;
    let message = $("name").value;
    let loop = document.querySelector("input[name='loop']:checked").value;
    loop = parseInt(loop);
    console.log(row,column,loop,message);
    let output = $("output");
    let temp='';
    //decision making statement 
    if(loop === 1)
    {
        console.log('do while loop');
    }
    else if(loop === 3)
    {
        console.log("while loop");
        let i = 1;
        while(i<=row)
        {
            temp = temp + '<tr>';
            let j = 1;
            while(j<= column)
            {
                temp = temp + `<td>${message}</td>`;
                j++;
            }
            temp = temp  + '</tr>';
            i++;
        }
        console.log(temp);
        output.innerHTML = temp;
    }
    else if(loop === 2)
    {
        console.log("for loop");
        temp = '';
        for(let i=1;i<=row;i++)
        {
            temp += '<tr>';
            for(let j=1;j<=column;j++)
            {
                temp += `<td>${message}</td>`;
            }
            temp += '</tr>';
        }
        output.innerHTML = temp;
    }
    return false;
}
//test