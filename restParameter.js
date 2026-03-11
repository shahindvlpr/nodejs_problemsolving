function restParameter(...numbers)
{
    let sum = 0;
    for (let i of numbers)
    {
        sum = sum + i;
    }
    console.log("The sum is: " + sum);
}
restParameter(1, 2, 3, 4, 5);