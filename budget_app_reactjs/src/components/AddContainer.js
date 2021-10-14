import { useState, useRef } from 'react';
import {useDispatch} from 'react-redux'
import cls from 'classnames'
import {actADDIncomById} from '../store/action';

const AddContainer = ({
    type= 'add',
}) =>{
    const dispatch = useDispatch()
    const descriptionRef = useRef(null)
    const [formData, setFormData] = useState({
        'sign': 'add',
        'description' : '', 
        'amount' : '' ,
    });
    const addTypeCls = cls('add__type',{
        'red-focus' : type === 'sub',
    });
    const addDescriptionCls = cls('add__description',{
        'red-focus' : type === 'sub',
    });
    const addValueCls = cls('add__value',{
        'red-focus' : type === 'sub',
    });
    const handleChange= (event)=> {
        let { name, value} = event.target;
        if (name === 'amount' && value !== ''){
            value= Number(value)
            if(value <0){
                return
            }
        }
        setFormData((formData) => ({ ...formData, [name]: value}))
    }
    const handleKeyUp = (event) =>{
        if (event.code === 'Enter') {
            handleSubmit();
        }
    }
    const handleSubmit = () => {
        if(!formData.amount || !formData.description){
            return
        }
        dispatch(actADDIncomById(formData))
        setFormData({
            'sign': 'add',
            'description' : '', 
            'amount' : '' ,
        })
        descriptionRef.current.focus()
    }
    return (
        <div className="add">
            <div className="add__container">
            <select className={addTypeCls} defaultValue={formData.sign}  onChange={handleChange} name='sign' >
                <option value="add" >+</option>
                <option value="sub" >-</option>
            </select>
            <input ref={descriptionRef} type="text" value= {formData.description}  className={addDescriptionCls} placeholder="Add description" name = 'description'  onChange={handleChange}/>
            <input type="number" value= {formData.amount}   className={addValueCls} placeholder="Value" onChange={handleChange} name = 'amount'  onKeyUp={handleKeyUp} />
            <button className={formData.sign === 'sub'? "add__btn red" : "add__btn"  } onClick={handleSubmit}><i className="ion-ios-checkmark-outline" /> </button>
            </div>
        </div>
    )
}
export default AddContainer;