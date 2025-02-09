function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*"){
    return function innerFunction(param="special"){
        return `You are ${flair}${param}${flair}!`
    }
}

const Calculator = {
    add: function(a=1, b=3){return a+b},
    subtract: function(a=1, b=3){return a-b},
    multiply: function(a=1, b=3){return a*b},
    divide: function(a=10, b=5){return a/b}
}

function actionApplyer(int, arr){
    for (let i = 0; i < arr.length; i++){
        int = arr[i](int)
    }
    return int
}