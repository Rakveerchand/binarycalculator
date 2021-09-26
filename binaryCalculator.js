let val=document.getElementById("res");
function clickzero()
{
    val.innerHTML+='0';
}
function clickone()
{
    val.innerHTML+='1';
}
function clickeql()
{
    let exp=val.innerHTML;
    let num=/(\d+)/g;
    exp=exp.replace(num,function(match){
        return parseInt(match,2);
    })
    val.innerHTML=eval(exp).toString(2);
}
function clickmul()
{
    val.innerHTML+='*';
}
function clickdiv()
{
    val.innerHTML+='/';
}
function clickplus()
{
    val.innerHTML+='+';
}
function clickminus()
{
    val.innerHTML+='-';
}
function clickclr()
{
    val.innerHTML=' ';
}
