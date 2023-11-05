export const incNumber = (num) => {
    return {
        type: 'INCREMENT',
        jp: num
    }
}

export const decNumber = (bum) => {
    return {
        type: 'DECREMENT',
        payload:bum
    }
}