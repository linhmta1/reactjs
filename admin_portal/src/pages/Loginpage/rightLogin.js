import { Row, Col } from "antd";

const backgroundURL = "/img/others/img-17.jpg";
const backgroundStyle = {
  backgroundImage: `url(${backgroundURL})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
const RightLogin = ()=>{
    return (
        <Col xs={0} sm={0} md={0} lg={8}>
              <div
                className="d-flex flex-column justify-content-between h-100 px-4"
                style={backgroundStyle}
              >
                <div className="text-right">
                  <img src="/img/logo-white.png" alt="logo" />
                </div>
                <Row justify="center">
                  <Col xs={0} sm={0} md={0} lg={20}>
                    <img
                      className="img-fluid mb-5"
                      src="/img/others/img-18.png"
                      alt=""
                    />
                    <h1 className="text-white">Welcome to emilus</h1>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus ullamcorper nisl erat, vel convallis elit
                      fermentum pellentesque.
                    </p>
                  </Col>
                </Row>
                <div className="d-flex justify-content-end pb-4">
                  <div>
                    <a
                      className="text-white"
                      href="/#"
                      onClick={(e) => e.preventDefault()}
                    >
                      Term & Conditions
                    </a>
                    <span className="mx-2 text-white"> | </span>
                    <a
                      className="text-white"
                      href="/#"
                      onClick={(e) => e.preventDefault()}
                    >
                      Privacy & Policy
                    </a>
                  </div>
                </div>
              </div>
            </Col>
    )
}
export default RightLogin;