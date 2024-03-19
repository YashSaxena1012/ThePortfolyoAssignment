import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
const SinglePortfolio = ({ project,data, getData }) => {
  const { effect, duration, delay } = data;
  const {image,title,liveurl,githuburl}=project
  console.log(liveurl,githuburl)
  return (
    <div className="col-lg-4 col-md-6" data-aos={effect} data-aos-duration={duration} data-aos-delay={delay}>
      <div className="st-portfolio-single st-style1" onClick={() => getData(image.url, title,liveurl,githuburl)}>
        <div className="st-portfolio-item">
          <div className="st-portfolio st-zoom">
            <div className="st-portfolio-img st-zoom-in">
              <img src={image.url} alt="portfolio" />
            </div>
            <div className="st-portfolio-item-hover">
              <Icon icon="mdi:plus-circle" />
              <h5>{title}</h5>
              {/* <p>{subTitle}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

SinglePortfolio.propTypes = {
  data: PropTypes.object
}

export default SinglePortfolio
