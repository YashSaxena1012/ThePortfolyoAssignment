import PropTypes from 'prop-types';

const SingleResume2 = ({ element }) => {
  const { company_name, jobTitle, startDate, endDate, bulletPoints } = element;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="st-resume-timeline">
      <h3 className="st-resume-timeline-title">{company_name}</h3>
      <div className="st-resume-timeline-duration">
        {formatDate(startDate)} - {formatDate(endDate)}
      </div>
      <h4 className="st-resume-timeline-subtitle">{jobTitle}</h4>
      <div className="st-resume-timeline-text">
        <ul>
          {bulletPoints.filter(point => point.trim() !== "").map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

SingleResume2.propTypes = {
  element: PropTypes.object,
};

export default SingleResume2;

