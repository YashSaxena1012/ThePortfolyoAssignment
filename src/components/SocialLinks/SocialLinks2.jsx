import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const SocialLinks2 = ({ data }) => {
  return (
    <div className="st-hero-social-links" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
      {data.map((item, index) => {
        const {url,image}=item;
        return(
        <Link to={url} className="st-social-btn" key={index}>
          <span className="st-social-icon"><img src={image.url} alt="" /></span>
          </Link>
      )})}
    </div>
  )
}

SocialLinks2.propTypes = {
  data: PropTypes.array,
}

export default SocialLinks2;