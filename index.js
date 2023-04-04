const buttons = document.querySelectorAll('.index span')
const bgColor = ['#FFE2C0', '#DFE3D2', '#DEDFDF']
const spinBtn = document.querySelector('.button')

spinBtn.addEventListener('click', ()=>{

    document.querySelector('#image-8').style.transform = 'translateX(calc(cos(315deg) * 600px)) translateY( calc(sin(315deg) * 600px)) rotate(40deg)'
    document.querySelector('#image-7').style.transform = 'translateX(calc(cos(270deg) * 600px)) translateY( calc(sin(270deg) * 600px)) rotate(0deg)'
    document.querySelector('#image-6').style.transform = 'translateX(calc(cos(225deg) * 600px)) translateY( calc(sin(225deg) * 600px)) rotate(-40deg)'
    document.querySelector('#image-5').style.transform = 'translateX(calc(cos(180deg) * 600px)) translateY( calc(sin(180deg) * 600px)) rotate(270deg)'
    document.querySelector('#image-4').style.transform = 'translateX(calc(cos(135deg) * 600px)) translateY( calc(sin(135deg) * 600px)) rotate(220deg)'
    document.querySelector('#image-3').style.transform = 'translateX(calc(cos(90deg) * 600px)) translateY( calc(sin(90deg) * 600px)) rotate(180deg)'
    document.querySelector('#image-2').style.transform = 'translateX(calc(cos(45deg) * 600px)) translateY( calc(sin(45deg) * 600px)) rotate(140deg)'
    document.querySelector('#image-1').style.transform = 'translateX(calc(cos(0deg) * 600px)) translateY( calc(sin(0deg) * 600px)) rotate(0deg)'

    let tl = gsap.timeline()

    tl
    .to(spinBtn,{
        opacity:0,
        y:'400px',
        duration:2,
        ease: Expo.easeInOut,
    },'a')
    .to('.index',{
        opacity:1,
        y:'0px',
        duration:2,
        ease: Expo.easeInOut
    },'a')
})




// careusel animation 

buttons.forEach(function(slide, index){
    slide.addEventListener('click', function(){
        gsap.to('.circle',{
            rotate: index * 90,
            ease: Expo.easeInOut,
            duration: 1
        })
        gsap.to('.container',{
            backgroundColor: bgColor[index],
            duration:1,
            delay:.5

        })
        lowOpacity()

        gsap.to(this, {
            opacity: 1
        })
    })
})

function lowOpacity (){
    gsap.to('.index span',{
        opacity: .4
    })
}