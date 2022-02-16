import react from "react";
import "./Footer.css";

class Footer extends react.Component {
  render() {
    return (
      <div className="container-fluid footer-main fixed-bottom bg-dark">
        <div className="row p-2">
          <div className="col">
            <span className="text-white">&copy; 2022</span>
          </div>
        </div>
      </div>
    );
  }
}

// function Footer(){
//    return (<div className='footer-main'><span>hello</span></div>);
// }

export default Footer;
