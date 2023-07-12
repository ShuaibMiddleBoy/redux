const incNum = () => {
    return {
        type : "INCREMENT"
    }
}


const decNum =  () => {
    return {
        type : "DECREMENT"
    }
}


export {incNum, decNum}