import './register.css';
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import {
    Link,useParams
  } from "react-router-dom";
const Registerpage = () => {
    let { slug } = useParams();
    console.log(slug);
    return (
        <main className="login">
        <div className="spacing" />
        <div className="tcl-container">
            <div className="tcl-row">
            <div className="tcl-col-12 tcl-col-sm-6 block-center">
                <h1 className="form-title text-center">Login</h1>
                <div className="form-login-register">
                <form >
                    <div className="form-control">
                        <Input type="text" placeholder="Enter Password ..." title="Username"/>
                    </div>
                    <div className="form-control">
                        <Input type="text" placeholder="Enter Password ..." title="NickName"/>
                    </div>
                    <div className="form-control">
                        <Input type="password" placeholder="Enter Password ..." title="Password"/>
                    </div>
                    <div className="form-control">
                        <Input type="password" placeholder="Enter Password ..." title="Password Confirm"/>
                    </div>
                    <div className="d-flex tcl-jc-between tcl-ais-center">
                        <Button type="primary" size="large"> Submit</Button>
                        <Link to="/register">Regiter</Link>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        <div className="spacing" />
        </main>

    )
}
export default Registerpage;