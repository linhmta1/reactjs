import { v4 as uuidv4 } from 'uuid';
import { ACT_DEL_INCOME, ACT_ADD_INCOME } from './action';
const getDataListDataIncom = () => {
    try {
        const dataListDataIncome = localStorage.getItem('listBudget') || '[]';
        return JSON.parse(dataListDataIncome)
    } catch (error) {
        return []
    }

}
const initState = {
    listDataIncome: getDataListDataIncom()
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case ACT_ADD_INCOME :
            const data = action.payload.data
            console.log(data);
            return {
                ...state, 
                listDataIncome:[
                    ...state.listDataIncome,
                    {
                        id: uuidv4(),
                        description: data.description,
                        amount: data.sign === 'add'? data.amount : data.amount * (-1)
                    }
                ]
            };
        case ACT_DEL_INCOME:
            return {
                ...state, listDataIncome: state.listDataIncome
                    .filter(dataItem => {
                        return dataItem.id !== action.payload.id;
                    })
            };
        default:
            return state
    }
    return state
}
export default reducer;