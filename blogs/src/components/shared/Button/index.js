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
    if (as === 'a') {
        return(
            <a className={classes} type={htmlType} size={size}   {...restProps}>
                {content}
            </a>
        )
    }
  
    return(
        <button className={classes} type={htmlType} size={size}  {...restProps}>
            {content}
        </button>
    )
}
export default Button;