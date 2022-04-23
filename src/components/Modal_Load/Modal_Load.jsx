import "./Modal_Load.scss"

const ModalLoading = ({ info }) => {
    return (
        <div className="modal__load">
            <div className="modal__load__container">
                <div className={`header ${info.type}`}>
                    <p>{info.title}</p>
                </div>
                <div className="body">
                    <div className="dots"></div>
                </div>
                <div className="fooder">
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default ModalLoading;