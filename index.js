let img = [
    "https://rukminim2.flixcart.com/image/612/612/xif0q/painting/0/p/u/13-3-asfrp25409-art-street-original-imagp38zxkunrhwy.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/612/612/xif0q/painting/u/7/l/30-5-g4-godgiftcraft-original-imaghmhk5zs72te5.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/612/612/kkmwr680/painting/y/x/r/42-sanfpnl31211-saf-original-imafzxvjzwepgfzc.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/612/612/xif0q/painting/u/c/b/30-5-ms-6mm-5p-1730-16227-masstone-original-imagtg63jgs97aec.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/612/612/ktn9pjk0/painting/w/h/d/18-3-sanfjm32427-saf-original-imag6y75zcmheccy.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/612/612/k7nnrm80/painting/6/e/w/sanfhx131-saf-print-original-imafpug2asdfjekt.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/612/612/kzrbiq80/painting/p/a/p/30-5-sanfpnls32232-saf-original-imagbpfvhzmvqxza.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/612/612/xif0q/painting/4/b/i/30-5-ramgrd22a-craftsmall-original-imahy7hybfhkmemj.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/612/612/ktuewsw0/painting/3/8/j/indr929-indianara-original-imag73tazwch3gm4.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/612/612/kzsqykw0/painting/n/j/d/12-3-indr4064fl-indianara-original-imagbpzgjecdtw7g.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/612/612/xif0q/painting/0/p/u/13-3-asfrp25409-art-street-original-imagp38zxkunrhwy.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/612/612/xif0q/painting/u/c/b/30-5-ms-6mm-5p-1730-16227-masstone-original-imagtg63jgs97aec.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/612/612/xif0q/painting/s/8/1/11-4-paintingbbr246-kotart-original-imagujbjbubv7exv.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/612/612/xif0q/painting/a/c/u/30-5-ms-6mm-5p-1730-9675-masstone-original-imagtcrh4zwcvww8.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/612/612/xif0q/painting/v/j/z/11-4-paintingbbr233-kotart-original-imagujb4pjduxwez.jpeg?q=70"
]


let holder = document.querySelector("#container>.innerHolder")

for(let i=0;i<img.length;i++){
    let image = document.createElement("img")
    image.src = img[i]
    holder.append(image)
}


function start(){
    const scrollslider = ()=>{
        if(left==-760){
            gsap.to("#container>.innerHolder>img",{
                x:left+200,
                duration:1,
            })
            // console.log(leftv)
            left=-560
        }
        else if(left > -10440){
            gsap.to("#container>.innerHolder>img",{
                x:left,
                duration:1,
            })
        }
        else if(left === -10440){
            gsap.to("#container>.innerHolder>img",{
                x:left+200,
                duration:1,
            })
            left = 0
        }
       
    }
    
    
    let left = 0
    const automaticscrollslider = ()=>{
        setInterval(()=>{
            
            scrollslider(left-=760);
            },3300)
            
    }
    automaticscrollslider();

    
}

let left = 0

const scrollslider = ()=>{
    if(left==-760){
        gsap.to("#container>.innerHolder>img",{
            x:left+200,
            duration:1,
        })
        // console.log(leftv)
        left=-560
    }
    else if(left > -10440){
        gsap.to("#container>.innerHolder>img",{
            x:left,
            duration:1,
        })
    }
    else if(left === -10440){
        gsap.to("#container>.innerHolder>img",{
            x:left+200,
            duration:1,
        })
        left = 0
    }
   
}


let leftBTN = document.querySelector("#container>.BTN>.left")
let rightBTN = document.querySelector("#container>.BTN>.right")

leftBTN.addEventListener("click",function(){
    if(left<0){
        scrollslider(left+=760)
        console.log("left")
    }
})

rightBTN.addEventListener("click",function(){

        scrollslider(left-=760)
        console.log("left")
    
})

