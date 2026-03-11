function funcOne()
{
    return 100;
}
function funcTwo()
{
    return funcOne() + 50;
}

console.log(funcTwo());

