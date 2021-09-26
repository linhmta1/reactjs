import Input from "../components/shared/Input";
import IconLoading from "../components/shared/IconLoading";
const DemoInput = ()=>{
    const handleChange = (e)=>{
        console.log(e.target.value);
    }
    return (
        <div className="tcl-container">
            <div className="tcl-col-4">
                <Input type="text" placeholder="Enter Username ..."/>
                <Input type="password" placeholder="Enter Password ..." title="Password"/>
                <Input type="password" placeholder="Enter Username ..." title="Username-Onchange" onChange= {handleChange}/>
                <Input type="search" placeholder="Enter Username ..." className="hello"/>
                <Input type="search" placeholder="Enter Username ..." className="hello" icon={<IconLoading width = "1em"/>} />
                <Input type="search" placeholder="IconAAA ..." className="hello" icon={"AAA"} />
                <Input type="search" placeholder="Icon Right ..." className="hello" iconPos='right' icon={<IconLoading width = "1em"/>} />
            </div>
        </div>

    )
}
export default DemoInput;