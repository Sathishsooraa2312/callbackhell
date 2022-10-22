var box=document.createElement("h1")
var num=10;
box.innerHTML=num;
box.setAttribute("class","sample1")
document.body.append(box);

var res=document.querySelector(".sample1")
res.innerHTML=num
console.log(res.innerHTML)
setTimeout(()=>{
    res.innerHTML=--num
    console.log(res.innerHTML)
    setTimeout(()=>{
        res.innerHTML=--num
        console.log(res.innerHTML)
        setTimeout(()=>{
            res.innerHTML=--num
            console.log(res.innerHTML)
            setTimeout(()=>{
                res.innerHTML=--num
                console.log(res.innerHTML)
                setTimeout(()=>{
                    res.innerHTML=--num
                    console.log(res.innerHTML)
                    setTimeout(()=>{
                        res.innerHTML=--num
                        console.log(res.innerHTML)
                        setTimeout(()=>{
                            res.innerHTML=--num
                            console.log(res.innerHTML)
                            setTimeout(()=>{
                                res.innerHTML=--num
                                console.log(res.innerHTML)
                                setTimeout(()=>{
                                    res.innerHTML=--num
                                    console.log(res.innerHTML)
                                    setTimeout(()=>{
                                        res.innerHTML="HAPPY INDEPENDENCE DAY🌟🌟🌟"
                                        console.log(res.innerHTML)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)