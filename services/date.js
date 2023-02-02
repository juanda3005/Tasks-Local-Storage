export const uniqueDates=(tasks)=>{
    const dates=tasks.map((task)=>task.dateFormat);
    const uniqueDates=[...new Set(dates)];
    return uniqueDates;
}

export const orderDates= (dates)=>{
    return dates.sort((a,b)=>{
        const firstDate=moment(a,"DD/MM/YYYY");
        const secondDate=moment(b,"DD/MM/YYYY")
        return firstDate.diff(secondDate);
    });
}