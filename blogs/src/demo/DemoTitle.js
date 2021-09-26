import MainTitle  from "../components/shared/MainTitle";
const DemoTitle = () => {
    return(
        <div>
            <MainTitle>Demo Title </MainTitle>
            <MainTitle propsBtn={{type: "default"}} btnLabel='btn-default'> Demo Title  btn-default</MainTitle>
            <MainTitle propsBtn={{type: "primary"}} btnLabel='btn-primary'> Demo Title  btn-primary</MainTitle>
            <MainTitle propsBtn={{type: "primary", size:"large"}} btnLabel='btn-primary large'> Demo Title  btn-primary large</MainTitle>
            <MainTitle propsBtn={{type:"primary", htmlType:"submit", loading:true , loadingPos : "left"}} btnLabel='btn-primary'> Demo Title  btn-primary</MainTitle>
        </div>
    )
}
export default DemoTitle;