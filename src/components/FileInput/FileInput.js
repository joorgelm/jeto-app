import Form from 'react-bootstrap/Form';

function FileInput({sendMethod: send}) {

    return (
        <div className="file-input">
            <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Control onChange={send} type="file" size="lg"/>
            </Form.Group>
        </div>
    );
}

export default FileInput;