import React from "react";
import "./style.css";
import pic1 from "../../assets/rightSectionPic1.jpg";
import pic2 from "../../assets/rightSectionPic2.jpg";
import pics3 from "../../assets/rightSectionPic3.jpg";
import pics4 from "../../assets/rightSectionPic4.jpg";
import Aos from "aos";

const RightSide = () => {
  React.useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className="rightSideMain">
      <button className="quoteBtn" data-aos="slide-left">
        GET A QUOTE FOR
        <br />
        ISO CONSULTANCY
      </button>

      <section className="firstSection" data-aos="slide-left">
        <img src={pic1} />
        <p>
          Understand why organisations opt for accredited certification such as
          UKAS, the process involved and how we can support you{" "}
        </p>
      </section>

      <section className="secondSection" data-aos="slide-left">
        <img src={pic2} />
        <p>
          We’re often asked, ‘what’s the difference between Certification and
          Accredited Certification?’ In principle, the systems are the same,
          it’s who certificates you and how they do it that’s different.
        </p>
      </section>

      <section className="thirdSection" data-aos="slide-left">
        <img src={pics3} />
        <p>
          Understand the different routes to getting certified and what’s
          involved here
        </p>
      </section>

      <section className="fourthSection" data-aos="slide-left">
        <img src={pics4} />
        <p>
          Did you know that an Accredited Certification Body cannot offer any
          assistance with the implementation of the ISO Standards and therefore
          a consultancy organisation such as ourselves is required. Find out
        </p>
      </section>
    </div>
  );
};

export default RightSide;
