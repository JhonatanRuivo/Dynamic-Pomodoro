const date = new Date()
const hourNow = date.getHours()

class SetTimePeriod {
    constructor(morning, day, afternoon, night)
    {
        this.morning = morning
        this.day = day
        this.afternoon = afternoon
        this.night = night 
    }
    
    verifyPeriodTime(hour) {
        const morning = [6, 7, 8]
        const day = [9, 10, 11, 12, 13, 14, 15, 16]
        const afternoon = [17, 18, 19]
        const night = [0, 1, 2, 3, 4, 5, 20, 21 ,22, 23]

        if(morning.includes(hour)) {
            return "morning"
        } else if(day.includes(hour)) {
            return "day"
        } else if(afternoon.includes(hour)) {
            return "afternoon"
        } else if (night.includes(hour)) {
            return "night"
        } else {
            return 
        }
    }
}

const setTime = new SetTimePeriod()
const timeNow = setTime.verifyPeriodTime(7)


function changeBackgroundImage(time) {
    const tagBgImage = document.getElementById("bg-main")

    switch(time) {
        case "morning":
            tagBgImage.src = "./public/morning.jpg"
            break
        case "day":
            tagBgImage.src = "./public/day.jpg"
            break
        case "afternoon":
            tagBgImage.src = "./public/afternoon.jpg"
            break
        case "night":
            tagBgImage.src = "./public/night.jpg"
            break
    }
}

function changeTitle(time) {
   const tagTitle = document.querySelector('.title')
   
   switch(time) {
    case "morning":
        tagTitle.innerText = "Good Morning!"
        break
    case "day":
        tagTitle.innerText = "Good Day!"
        break
    case "afternoon":
        tagTitle.innerText = "Good Afternoon!"
        break
    case "night":
        tagTitle.innerText = "Good Night!"
        break
}

}

changeBackgroundImage(timeNow)
changeTitle(timeNow)
console.log(timeNow);
