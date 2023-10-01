import "./Contact.css";
import Blue from "../../assets/Blue Customer.svg";
import Brown from "../../assets/Brown Customer.svg";
import Black from "../../assets/Black Customer.svg";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Thousands of Customers Love us</h2>
      <p>
        We render consultation services, in order to have more insight on the
        modelling style required. We ensure to provide professional models, that
        makes your product look great!
      </p>
      <div className="contact__images">
        <img src={Blue} alt="blue customer" />
        <img src={Brown} alt="brown customer" />
        <img src={Black} alt="black customer" />
      </div>
      <button>SEND A TEXT!</button>
    </div>
  );
};

export default Contact;
