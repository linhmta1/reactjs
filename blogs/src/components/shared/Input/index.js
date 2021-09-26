import './input.css';
import {useState} from 'react';
import cls from 'classnames';
import IconSearch from '../iconSearch';
const Input = ({
    type = 'text',
    className,
    title,
    iconPos= 'left',
    icon = <IconSearch/>,
    ...restProps
})=>{
    const [localType,setLocalType] = useState(type);
    const handleLocaltype = () => {
        if (localType === 'text'){
            setLocalType('password');
        }else if(localType === 'password'){
            setLocalType('text');
        } 
    }
    const classNames = cls('toggle-password ',{
        'ion-eye-disabled' : localType === 'password',
        'ion-eye' : localType === 'text'
    })
    if(type ==='search'){
        const classSearch = cls('input-search__input',className)
        return(
            <div className="input-search">
                {iconPos === 'left' && icon}
                <input className={classSearch} type={localType} {...restProps}/>
                {iconPos === 'right' && icon}
            </div>
        )
    }
    return(
        <div className="form-control">
            {title && <label>{title}</label> }
            {type ==='password' && <i className={classNames} onClick={()=>handleLocaltype()}></i>}
            <input type={localType}  {...restProps}/>
        </div>
    )
}
export default Input;