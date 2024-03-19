import "./Modal.scss";

const Modal = ({ img, title, liveUrl, githubUrl, modalClose }) => {
  const modalStyle = {
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "block",
  };
  return (
    <div className="modal show fade bd-example-modal-lg" style={modalStyle}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <div className="st-modal-buttons">
                <a
                  href={liveUrl}
                  className="st-modal-btn st-live-demo-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={githubUrl}
                  className="st-modal-btn st-github-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              
            </div>
            <button
              type="button"
              className="btn-close"
              onClick={modalClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="st-flex-center">
              <img src={img} />
            </div>
            {/* <p className="modal-subtitle">{subTitle}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
