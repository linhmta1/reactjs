import { useDispatch } from 'react-redux'
import { actDelIncomById } from "../store/action";
const Item = ({
    type = 'income',
    description,
    value,
    percentage,
    id
}) => {
    const dispatch = useDispatch()
    const handeDelete = (id)=>{
        dispatch(actDelIncomById(id));
    }
    return (
        <div className="item clearfix">
            <div className="item__description">{description}</div>
            <div className="right clearfix">
                <div className="item__value">{value}</div>
                { type ==='expenses' && <div className="item__percentage">{percentage}</div> }
                <div className="item__delete">
                    <button className="item__delete--btn" onClick={()=> handeDelete(id)}>
                        <i className="ion-ios-close-outline" />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Item;