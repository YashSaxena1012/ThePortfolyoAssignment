import PropTypes from "prop-types";
import "./Portfolio.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useState } from "react";
import SinglePortfolio from "./SinglePortfolio";
import Modal from "../Modal/Modal";
import { useApi } from "../../Context/Apicontext";

const PortfolioSection = ({ data }) => {
  // Modal
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);
  const { apiData } = useApi();
  const projects = apiData.projects;
  const getData = (imgLink, title,liveUrl,githubUrl) => {
    let tempData = [imgLink, title, liveUrl, githubUrl];
    setTempData((item) => [1, ...tempData]);
    setModal(true);
  };

  const modalClose = () => {
    setModal(false);
  };

  // Load Items
  const itemsPerPage = 6;
  const [visibleItems, setVisibleItems] = useState(
    projects.slice(0, itemsPerPage)
  );

  const [showLoadMore, setShowLoadMore] = useState(true);

  const loadMoreItems = () => {
    const currentLength = visibleItems.length;
    const nextChunk = projects.slice(
      currentLength,
      currentLength + itemsPerPage
    );
    setVisibleItems((prevItems) => [...prevItems, ...nextChunk]);

    if (currentLength + itemsPerPage >= projects.length) {
      setShowLoadMore(false);
    }
  };

  return (
    <>
      <section id="portfolio">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <SectionHeading title={"Portfolio"} />
        <div className="container">
          <div className="row">
            {visibleItems.map((element, index) => (
              <SinglePortfolio
                project={element}
                data={data}
                key={index}
                getData={getData}
              />
            ))}
            <div className="col-lg-12 text-center">
              <div className="st-portfolio-btn">
                {showLoadMore && (
                  <button
                    className="st-btn st-style1 st-color1"
                    onClick={loadMoreItems}
                  >
                    Load more
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
      {modal === true ? (
        <Modal
          img={tempData[1]}
          title={tempData[2]}
          liveUrl={tempData[3]}
          githubUrl={tempData[4]}
          modalClose={modalClose}
        />
      ) : (
        ""
      )}
    </>
  );
};

PortfolioSection.propTypes = {
  data: PropTypes.object,
};

export default PortfolioSection;
