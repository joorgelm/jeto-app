import Modal from 'react-bootstrap/Modal';
import {Spinner} from "react-bootstrap";
import {useSelector} from "react-redux"

function ProgressLoad() {

    const visibility = useSelector(state => state.loadingState)

    return (
        <Modal show={visibility} centered>
            <Modal.Body className="modal-spinner">
                <Spinner variant="light" as={"div"} animation="border" role="status"/>
            </Modal.Body>
        </Modal>
    );
}

export default ProgressLoad;