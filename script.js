const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

function resetDOM() {
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')

    nums.forEach((num) => {
        [
            num.classList.value = ''
        ]
    })

    nums[0].classList.add('in')
}

function runAnimation() {
    nums.forEach((num, i) => {

        num.addEventListener('animationend', (e) => {
            if (e.animationName === 'goIn') {
                num.classList.remove('in')
                num.classList.add('out')
                console.log(i);
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
                console.log(i);
            }
            else {
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })
    })
}


replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})