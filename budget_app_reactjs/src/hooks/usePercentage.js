const usePercentage = (expences, total) => {
    let percentage=0;
    if (total >= 0  && expences === 0)
        percentage = 0
    else if (total === 0 && expences !== 0)
        percentage = -100
    else percentage =  Math.round((expences/total)* -100); 

    return percentage;
}
export default usePercentage;