canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="blue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();
 
    ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(300, 200, 40, 0, 2*Math.PI);
ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth=5;
    ctx.strokeStyle="red"
    ctx.arc(400, 200, 40, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="orange";
    ctx.lineWidth=5;
    ctx.arc(250, 235, 40, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="green";
    ctx.lineWidth=5;
    ctx.arc(350, 235, 40, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="grey";
    ctx.lineWidth=5;
    ctx.rect(100, 120, 430, 200);
    ctx.stroke();