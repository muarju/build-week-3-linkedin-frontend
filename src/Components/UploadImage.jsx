import { Form } from 'react-bootstrap'

const UploadImage = ({image}) => {
    return (
        <Form.Label 
        htmlFor="file-input" 
        className="d-flex pt-2 upload-image-label" 
        // title={(image && image !== "https://via.placeholder.com/150" ) && image}
        >
            <i className="fas fa-image upload-image-icon"></i>{image ? <>Edit</> : <>Upload</>} Image
        </Form.Label>
    )
}

export default UploadImage
