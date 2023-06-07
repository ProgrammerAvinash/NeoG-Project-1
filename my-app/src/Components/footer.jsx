import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer">
      {/* <p>&#169; Swaroop Mens Wear 2023</p> */}
      <p>&copy; 2023</p>
      <div>
        <a href="https://github.com/ProgrammerAvinash" target="_blank">
          <i
            class="fa fa-github"
            style={{ fontSize: "40px", pointer: "cursor" }}
          ></i>{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/avinash-yadav-588744151/"
          target="_blank"
        >
          <i
            class="fa fa-linkedin"
            style={{ fontSize: "40px", pointer: "cursor" }}
          ></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
