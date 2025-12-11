
export const CHANGE_STATS="CHANGE_STATS"
export const changeStats=(typeStatus,sum)=>({
    type:CHANGE_STATS,
    payload:{typeStatus,sum}
})