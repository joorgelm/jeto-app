import Toast from 'react-bootstrap/Toast';

function Result({content}) {

    return (
        <div className="result">
            <Toast show={!!content.trim()}>
                <Toast.Body>
                    {content}
                </Toast.Body>
            </Toast>
        </div>
    );
}

export default Result;