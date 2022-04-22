import "./Modal_Load.scss"

const ModalLoading = ({title, type}) => {
    return (
        <div className="modal__load">
            <div className="modal__load__container">
                <div className={`header ${type}`}>
                    <p>{title}</p>
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