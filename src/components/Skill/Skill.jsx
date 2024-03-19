// import PropTypes from "prop-types";
// import "./Skill.scss";
// import SectionHeading from "../SectionHeading/SectionHeading";
// import { useApi } from "../../Context/Apicontext";

// const Skill = ({ data }) => {
//   const { title, text } = data;
//   const { apiData } = useApi();
//   const skills = apiData.skills;

//   const progressBars = document.querySelectorAll(".st-progressbar");

//   progressBars.forEach((progressBar) => {
//     const percentage = progressBar.getAttribute("data-progress");
//     progressBar.style.setProperty("--progress-width", `${percentage}%`);
//   });

//   return (
//     <section className="st-dark-bg">
//       <div className="st-height-b100 st-height-lg-b80"></div>
//       <SectionHeading title="Skills" />
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6">
//             <div className="st-skill-wrap">
//               <div
//                 className="st-skill-heading"
//                 data-aos="fade-right"
//                 data-aos-duration="800"
//               >
//                 <h2 className="st-skill-title">{title}</h2>
//                 <div className="st-skill-subtitle">{text}</div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-6">
//             <div className="st-height-b0 st-height-lg-b30"></div>
//             <div className="st-progressbar-wrap">
//               {console.log(apiData.skills)}
//               {skills.map((element, index) => (
//                 <div
//                   className="st-single-progressbar"
//                   key={index}
//                   data-aos={element.effect}
//                   data-aos-duration={element.duration}
//                   data-aos-delay={element.delay}
//                 >
//                   <div className="st-progressbar-heading">
//                     <h3 className="st-progressbar-title">{element.name}</h3>
//                     <div
//                       className="st-progressbar-percentage "
//                       data--duration="1.5s"
//                       data--delay="0.5s"
//                     >
//                       {element.percentage}
//                     </div>
//                   </div>
//                   <div
//                     className="st-progressbar"
//                     data-progress={element.percentage}
//                   >
//                     <div className="st-progressbar-in " style={{width:`${element.percentage}%`}}></div>
//                   </div>
//                   <div className="st-height-b30 st-height-lg-b20"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// Skill.propTypes = {
//   data: PropTypes.object,
// };

// export default Skill;



import PropTypes from "prop-types";
import "./Skill.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useApi } from "../../Context/Apicontext";
import { useState, useEffect } from "react";

const Skill = ({ data }) => {
  const { title, text } = data;
  const { apiData } = useApi();
  const skills = apiData.skills;
  const [progressBars, setProgressBars] = useState([]);

  useEffect(() => {
    setProgressBars(document.querySelectorAll(".st-progressbar"));
  }, []);

  return (
    <section className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Skills" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="st-skill-wrap">
              <div
                className="st-skill-heading"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <h2 className="st-skill-title">{title}</h2>
                <div className="st-skill-subtitle">{text}</div>
                <div className="st-imgcontainer group">
            {skills.map((element, index) => {
              return (
                  <img src={element.image.url} alt="" className="skill_img group" id={element.image.public_id} />
                )
            })}
          </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b30"></div>
            <div className="st-progressbar-wrap">
              {console.log(apiData.skills)}
              {skills.map((element, index) => (
                <div
                className="st-single-progressbar"
                key={index}
                data-aos={element.effect}
                data-aos-duration={element.duration}
                  data-aos-delay={element.delay}
                  >
                  <div className="st-progressbar-heading">
                    <h3 className="st-progressbar-title">{element.name}</h3>
                    <div
                      className="st-progressbar-percentage "
                      data--duration="1.5s"
                      data--delay="0.5s"
                    >
                      {element.percentage}
                    </div>
                  </div>
                  <div
                    className="st-progressbar"
                    data-progress={element.percentage}
                  >
                    <div
                      className="st-progressbar-in "
                      style={{ width: `${element.percentage}%` }}
                    ></div>
                  </div>
                  <div className="st-height-b30 st-height-lg-b20"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Skill.propTypes = {
  data: PropTypes.object,
};

export default Skill;
