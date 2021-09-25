import cls from 'classnames'
import IconLoading from '../IconLoading'
const Button = ({
    type= 'default', 
    loading,
    loadingPos ='left',
    htmlType,
    children,
    as ='button',
    className,
    size,
    ...restProps
})=> {
    const classes = cls('btn',{
        'btn-default': type === 'default', 
        'btn-category' : type === 'category',
        'btn-primary' : type === 'primary',
        'btn-size-large' : size === 'large'
    },className);
    const content = (
      <>
        {loading && loadingPos === "left" && <IconLoading />}
        {children}
        {loading && loadingPos === "right" && <IconLoading />}
      </>
    );
    const innerProps={
        className: classes,
        type : htmlType,
        size : size,
        ...restProps,
    }
    if (as === 'a') {
        return(
            <a {...innerProps} >
                {content}
            </a>
        )
    }
  
    return(
        <button  {...innerProps}>
            {content}
        </button>
    )
}
export default Button;