import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import IsoServices from './IsoServices'
import "font-awesome/css/font-awesome.min.css";
import { AiFillCheckCircle } from "react-icons/ai";
import iso_img from '../../assets/iso_img.jpg'
import Aos from "aos";

const LeftSide = () => {

  
    React.useEffect(()=>{
        Aos.init({
          offset: 260,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 150,
        })
      },[])

  const style = { color: "#85BBE6", fontSize: "3rem", marginTop: "1.5rem" };
  return (
    
    <div className="mainContainer">
    
      <div className="firstItem" data-aos="slide-right">
        <p >
          Our highly-experienced team of ISO consultants have years of expertise
          in this field, assisting a diverse range of clients in the
          implementation and efficient use of effective management systems. Our
          approach to ISO consultancy is no different to the one we adopt when
          implementing ISO and BS:EN Management Standards. Ultimately, we
          believe in adopting a collaborative, supportive approach where our
          clients can receive as much assistance as they require. We simplify
          the entire process, ensuring it remains straight-forward and
          stress-free for you throughout.
        </p>
      </div>
      <h1 className="section_Heading" data-aos="slide-right">WHY MIGHT YOU NEED ISO CONSULTANCY?</h1>

      <div className="second_Item">
        <div class="row" data-aos="slide-right">
          <AiFillCheckCircle style={style} />
          <div class="column">
            <p className="itemList">
              You need Accredited Certification (UKAS, INAB etc).
            </p>
          </div>
          <AiFillCheckCircle style={style} />
          <div class="column">
            <p className="itemList">
              You want to improve your current systems.
            </p>
          </div>
        </div>
        <div class="row" data-aos="slide-right">
          <AiFillCheckCircle style={style} />
          <div class="column">
            <p className="itemList">
              You no longer have the skills in-house to effectively run a
              system.
            </p>
          </div>
          <AiFillCheckCircle style={style} />
          <div class="column">
            <p className="itemList">You need help auditing your system.</p>
          </div>
        </div>
        <div class="row" data-aos="slide-right">
          <AiFillCheckCircle style={style} />
          <div class="column">
            <p className="itemList">
              You would like to explore the idea of Certification before
              committing to full Certification.
            </p>
          </div>
          <AiFillCheckCircle style={style} />
          <div class="column">
            <p className="itemList">
              You need to upgrade a standard to an updated version.
            </p>
          </div>
        </div>
      </div>

      <p style={{ marginTop: "1.5rem", marginBottom: "1.3rem" }} data-aos="slide-right">
        Our consultant’s wealth of knowledge and expertise mean we can offer ISO
        consultancy for a wide range of certifications, some examples include:
      </p>

      <div className="third_item">
        <div class="row" data-aos="slide-right">
          <AiFillCheckCircle style={style} />
          <div class="column">
            <p className="itemList">ISO 9001 Quality Management</p>
          </div>
          <AiFillCheckCircle style={style} />
          <div class="column">
            <p className="itemList">ISO 27001 Information Security</p>
          </div>
        </div>
        <div class="row" data-aos="slide-right">
          <AiFillCheckCircle style={style} />
          <div class="column">
            <p className="itemList">ISO 14001 Environmental Management</p>
          </div>
          <AiFillCheckCircle style={style} />
          <div class="column">
            <p className="itemList">ISO 45001 Occupational Health and Safety</p>
          </div>
        </div>
        <div class="row" data-aos="slide-right">
          <AiFillCheckCircle style={style} />
          <div class="column">
            <p className="itemList">ISO 22301 Business Continuity</p>
          </div>
          <AiFillCheckCircle style={style} />
          <div class="column">
            <p className="itemList">ISO 17100 Translation</p>
          </div>
        </div>

        <div class="row" data-aos="slide-right">
          <AiFillCheckCircle style={style} />
          <div class="column">
            <p className="itemList">
              BS EN 15713 Secure Destruction of Confidential Materials
            </p>
          </div>
          <AiFillCheckCircle style={style} />
          <div class="column">
            <p className="itemList">BS 10012 Personal Information Management</p>
          </div>
        </div>

        <div class="row" data-aos="slide-right">
          <AiFillCheckCircle style={style} />
          <div class="column">
            <p className="itemList">AS9100 Aerospace Quality Management</p>
          </div>
          <AiFillCheckCircle style={style} />
          <div class="column">
            <p className="itemList">
              BS EN ISO 3834-1 Quality Management in the Field of Welding
            </p>
          </div>
        </div>

        <div class="row" data-aos="slide-right">
          <AiFillCheckCircle style={style} />
          <div class="column">
            <p className="itemList">ISO 17020 Conformity Assessment</p>
          </div>
        </div>
      </div>

      <p data-aos="slide-right">
        These are only some examples. If you require consultancy for a Standard
        <b> not listed above,</b> please contact our team as we may still be
        able to support you.
      </p>

      <button className="getQuoteBtn" data-aos="slide-right">GET A QUOTE FOR ISO CONSULTANCY</button>

      <p style={{ fontSize: "1.3rem", marginTop: "2rem", fontWeight: "700",marginBottom:"2rem",color:"#333a82" }} data-aos="slide-right">
        HOW CAN ISO QSL HELP YOU WITH CONSULTANCY?
      </p>

      <p style={{lineHeight:"26px"}} data-aos="slide-right">
        Whilst we <b>do not</b> provide Accredited Certification ourselves, we can
        certainly support you through the process with another provider. This is
        actually one of the most popular reasons for needing our ISO consultancy
        services.
      </p><br />

      <p style={{lineHeight:"26px"}} data-aos="slide-right"> 
        In most cases, <b>ISO certification</b> is more than sufficient for the
        majority of businesses but there are times where Accredited
        Certification to <b>UKAS, INAB</b> etc. is required by a customer, trade
        association or regulatory body.
      </p><br />

      <p style={{lineHeight:"26px"}} data-aos="slide-right">
        Despite us not providing Accredited Certification, our ISO consultants
        regularly audit Management Systems for Accredited Certification
        providers and are well accustomed to the process. This wealth of
        knowledge and expertise can therefore help you pass your assessment
        first time, in an average of six to nine months. If required, we can
        also help you source an Accredited Certification provider to assess your
        business and be with you during your Stage 1 and Stage 2 Assessments.
      </p><br />

      <p style={{lineHeight:"26px"}} data-aos="slide-right">
        Once you have achieved your Accreditation, our support doesn’t have to
        end there. We can help you stay on track with regular support to ensure
        you continue to meet the requirements of your Certification.
      </p><br />

      <p data-aos="slide-right" style={{lineHeight:"26px"}}>Not sure if you need Accredited Certification? <b>Contact</b> our experts today to discuss your requirements.</p>

      <button className="supportBtn" data-aos="slide-right">GET SUPPORT WITH YOUR ACCREDITED CERTIFICATION</button>

      <p style={{ fontSize: "1.3rem", marginTop: "2rem", fontWeight: "700",marginBottom:"2rem",color:"#333a82" }} data-aos="slide-right">
        WHAT IS THE PROCESS?
      </p>

      <p data-aos="slide-right">To begin with, our consultant will visit you to conduct a non-committal GAP analysis. This helps us to identify where your business is now, what needs to be completed to reach your intended goal and how many days consultancy would be required.</p>
      <br />
      <p data-aos="slide-right">Whilst this is not a formal consultancy day, you will benefit from the advice and support of our consultant, which will also be sent to you in a formal report.</p>
      <br />
      <p data-aos="slide-right">Should you wish to proceed, we will provide additional consultancy to help you implement our findings.</p>

      <img src={iso_img} style={{marginTop:"5rem"}} data-aos="slide-right"/>

      <button className="chooseBtn" data-aos="slide-right">Choose Your ISO Certificate </button>
      



    </div>
  );
};

export default LeftSide;
