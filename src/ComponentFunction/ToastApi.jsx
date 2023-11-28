import Toast from 'react-bootstrap/Toast';

function ToastApi() {
  return (
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Error</strong>
        <small>reload</small>
      </Toast.Header>
      <Toast.Body>Some thing went wrong.</Toast.Body>
    </Toast>
  );
}

export default ToastApi;