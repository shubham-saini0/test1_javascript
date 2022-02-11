function submit()
{
var val1=document.getElementById("name").value;
var val2=document.getElementById("number").value;
if(val1==""&&val2=="")
{
    document.getElementById("name").style.borderColor="red";
    document.getElementById("number").style.borderColor="red";
    alert("No input");
}
if(!isNaN(val1)){
    document.getElementById("name").style.borderColor="red";
    document.getElementById("i1").innerHTML+='<p>Invalid text</p>';
}
if(isNaN(val2)){
    document.getElementById("number").style.borderColor="red";
    document.getElementById("i2").innerHTML+='<p>Invalid text</p>';
}

}