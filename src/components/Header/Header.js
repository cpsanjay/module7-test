import "./Header.css";
import HeaderGirl from "../../images/header-girl.png";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-container_cta">
          <div className="header-container_h2">SUMMER 2020</div>
          <div className="header-container_h1">NEW COLLECTION</div>
          <div className="header-container_desc">
            We know how large objects will act, <br /> but things on a small
            scale.
          </div>
          <button className="header-container_btn">SHOP NOW</button>
        </div>
        <div></div>
        <div className="header-container_img">
          <img src={HeaderGirl} alt="" />
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
          <div className="circle-4"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
