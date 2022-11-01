import axios from "axios";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ModalDialog({element}) {
  const [isShow, setInvokeModal] = useState(false);
  const [deleteBlog, setDeleteBlog] = useState();

  const deleteblog = (id) => {
    alert(id)
    axios
      .delete(`http://api.allureinternational.com.np/api/delete-blog/${id}`)
      .then((res) => {
        console.log(res);
        setDeleteBlog("delete, res.data.data.id");
      });
  };
  const initModal = (id) => {
    return setInvokeModal(!isShow);
  };

  return (
    <div>
      <Button className="btn-delete" onClick={initModal}>
        Delete
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title></Modal.Title>
        </Modal.Header>
      {element.id}
        <Modal.Body>
          <h5> Do you really want to delete the blog?</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => deleteblog(element.id)}>
            Delete
          </Button>
          <Button variant="dark" onClick={initModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default ModalDialog;
