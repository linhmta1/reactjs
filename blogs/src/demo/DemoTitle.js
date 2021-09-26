import MainTitle  from "../components/shared/MainTitle";
const DemoTitle = () => {
    return(
        <div>
            <MainTitle propsBtn= {{
                    type : "primary", 
                    href : "https://www.google.com",
                    as : "a",
                }} btnLabel='link' >
                Demo Title
            </MainTitle>
        </div>
    )
}
export default DemoTitle;