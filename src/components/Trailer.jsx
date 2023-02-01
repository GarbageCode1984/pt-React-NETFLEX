import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function Trailer() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <p className="trailer-btn" onClick={() => setShow(true)}>
                🎬 Watch Trailer
            </p>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body></Modal.Body>
            </Modal>
        </div>
    );
}

export default Trailer;
