import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SocialLinks = ({ data }) => {
  const [activeLink, setActiveLink] = useState(0);
  const handleIconHover = (index) => {
    setActiveLink(index);
  };
  console.log(data)
  return (
    <div className="st-social-link">
      {data.map((item, index) => {
        console.log(item)
        const {platform,url,image}=item;
        return(
        <Link
        to={url}
        className={index === activeLink ? 'st-social-btn active' : 'st-social-btn'}
        onMouseEnter={() => handleIconHover(index)}
        key={index}
        >
          <span className="st-social-icon"><img src={image.url} alt="" /></span>
          <span className="st-icon-name">{platform}</span>
        </Link>
      )}
        )}
      </div>
  )
}

SocialLinks.propTypes = {
  data: PropTypes.array,
}

export default SocialLinks;
