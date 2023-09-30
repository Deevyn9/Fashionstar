import "./Reach.css";
import tenPlus from "../../assets/10+.svg";
import flagSA from "../../assets/flag-south-africa.svg";
import flagNG from "../../assets/flag-nigeria.svg";
import flagCB from "../../assets/flag-congo-brazzaville.svg";
import flagCN from "../../assets/flag-canada.svg";
import flagCK from "../../assets/flag-congo-kinshasa.svg";
import flagBT from "../../assets/flag-botswana.svg";
import flagJM from "../../assets/flag-jamaica.svg";
import flagGH from "../../assets/flag-ghana.svg";
import flagCAR from "../../assets/flag-central-african-republic.svg";

const Reach = () => {
  return (
    <div className="reach">
      <div className="reach__top">
        <p>Unlimited acces to</p>
        <img src={tenPlus} alt="numbers" />
        <p>models in different parts of the world</p>
      </div>
      <div className="reach__bottom">
        <div className="flags">
          <img src={flagSA} alt="" height={50} />
          <img src={flagNG} alt="" height={50} />
          <img src={flagCB} alt="" height={50} />
          <img src={flagCN} alt="" height={50} />
          <img src={flagCK} alt="" height={50} />
          <img src={flagBT} alt="" height={50} />
          <img src={flagJM} alt="" height={50} />
          <img src={flagGH} alt="" height={50} />
          <img src={flagCAR} alt="" height={50} />
        </div>
      </div>
    </div>
  );
};

export default Reach;
