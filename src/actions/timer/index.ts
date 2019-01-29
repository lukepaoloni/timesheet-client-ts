export const startTimer = (baseTime = 0) => ({
    type: 'START_TIMER',
    baseTime,
    now: new Date().getTime()
})

export const stopTimer = () => ({
    type: 'STOP_TIMER',
    now: new Date().getTime()
})

export const resetTimer = () => ({
    type: 'RESET_TIMER',
    now: new Date().getTime()
})