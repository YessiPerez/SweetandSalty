let product = document.getElementById("lollipop");
let product2 = document.getElementById("santjordi");
let descriptions = document.getElementsByClassName("lollipop");
let descriptions2 = document.getElementsByClassName("santjordi");
let interval, interval2, interval3, interval4;
let n = 0, m = 0;
let priority = false, priority2 = false;

product.addEventListener("mouseleave", (function()
{
    priority = false;
    interval2 = setInterval(function()
    {
        if(!priority)
        {
            if(n > 0)
            {
                n -= 0.02;
                const t = n.toString();
                for(let x = 0; x < descriptions.length;)
                    descriptions.item(x++).style.opacity = t;
            }
            else
            {
                for(let x = 0; x < descriptions.length;)
                    descriptions.item(x++).style.display = "none";
                clearInterval(interval2);
            }
        }
    }, 16);
}), false);
product.addEventListener("mouseenter", e =>
{
    priority = true;
    const t = e.clientX.toString() + "px";
    const tt = e.clientY.toString() + "px";
    for(let x = 0; x < descriptions.length;)
    {
        let description = descriptions.item(x++);
        description.style.marginLeft = t;
        description.style.marginTop = tt;
        description.style.display = "inline-block";
    }
    interval = setInterval(function()
    {
        if(n < 1)
        {
            n += 0.01;
            const ttt = n.toString();
            for(let x = 0; x < descriptions.length;)
                descriptions.item(x++).style.opacity = ttt;
        }
        else
            clearInterval(interval);
    }, 16);
});
product.addEventListener("mousemove", e =>
{
    const t = e.clientX.toString() + "px";
    const tt = e.clientY.toString() + "px";
    for(let x = 0; x < descriptions.length;)
    {
        let description = descriptions.item(x++);
        description.style.marginLeft = t;
        description.style.marginTop = tt;
    }
});
product2.addEventListener("mouseleave", (function()
{
    priority2 = false;
    interval4 = setInterval(function()
    {
        if(!priority2)
        {
            if(n > 0)
            {
                n -= 0.02;
                const t = n.toString();
                for(let x = 0; x < descriptions2.length;)
                    descriptions2.item(x++).style.opacity = t;
            }
            else
            {
                for(let x = 0; x < descriptions2.length;)
                    descriptions2.item(x++).style.display = "none";
                clearInterval(interval4);
            }
        }
    }, 16);
}), false);
product2.addEventListener("mouseenter", e =>
{
    priority2 = true;
    const t = e.clientX.toString() + "px";
    const tt = e.clientY.toString() + "px";
    for(let x = 0; x < descriptions2.length;)
    {
        let description = descriptions2.item(x++);
        description.style.marginLeft = t;
        description.style.marginTop = tt;
        description.style.display = "inline-block";
    }
    interval3 = setInterval(function()
    {
        if(n < 1)
        {
            n += 0.01;
            const ttt = n.toString();
            for(let x = 0; x < descriptions2.length;)
                descriptions2.item(x++).style.opacity = ttt;
        }
        else
            clearInterval(interval3);
    }, 16);
});
product2.addEventListener("mousemove", e =>
{
    const t = e.clientX.toString() + "px";
    const tt = e.clientY.toString() + "px";
    for(let x = 0; x < descriptions2.length;)
    {
        let description = descriptions2.item(x++);
        description.style.marginLeft = t;
        description.style.marginTop = tt;
    }
});