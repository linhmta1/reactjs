import Button from '../components/shared/Button';
const  DemoButtonComp = ()=> {
    const handleClick = ()=>{
        console.log("click Me!");
    }
    return(
        <div>
            <Button type="default"> default </Button>
            <Button type="category"> category</Button>
            <Button type="primary"> primary </Button>
            <Button type="primary" size="large"> primary-large </Button>
            <Button type="primary" htmlType="submit"> submit </Button>
            <Button type="primary" size="large" onClick={()=> handleClick()}> Click Me</Button>
            <Button type="primary" htmlType="submit" loading={true} loadingPos = "left"> icon loading bên trái </Button>
            <Button type="primary" htmlType="submit" loading={true} loadingPos = "right"> icon loading bên phải</Button>
            <Button type="primary" href= 'https://www.google.com' as='a' > Link </Button>
            <Button className="customer" href= 'https://www.google.com' > Customer </Button>
            <Button className="customer" href= 'https://www.google.com' title="Google"> thêm title </Button>
        </div>
    )
}
export default DemoButtonComp;