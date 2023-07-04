import Toast from 'react-bootstrap/Toast';

function Result({header, content}) {

    return (
        <div className="result">
            <Toast show={!!content.trim()}>
                <Toast.Header hidden={!header} closeButton={false}>{header}</Toast.Header>
                <Toast.Body>
                    {content}
                </Toast.Body>
            </Toast>
        </div>
    );
}

export default Result;