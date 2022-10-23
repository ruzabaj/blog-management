import axios from 'axios';
import React,{useState} from 'react'
import { Modal, Button } from 'react-bootstrap';

function ModalDialog() {
  const [isShow, setInvokeModal] = useState(false);
  // const [deleteBlog , setDeleteBlog] =useState();

  const initModal = (id) => {
    return (
      setInvokeModal(!isShow)
      // axios.delete(`http://api.allureinternational.com.np/api/delete-blog/${id}`)
      // .then((res)=>{
      //   console.log(res)
      //   setDeleteBlog("delete, res.data.data.id")
      // })
      )}
  return (
    <div>
      <Button className='btn-delete' onClick={initModal}>
       Delete
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <h5> Do you really want to delete the blog?</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Delete
          </Button>
          <Button variant="dark" onClick={initModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default ModalDialog