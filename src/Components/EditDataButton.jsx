/* eslint-disable react-hooks/exhaustive-deps */
import { Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { VscEdit } from "react-icons/vsc";
import EditForm from "./EditForm";

export default function EditDataButton(props) {
  let [show, setShow] = useState(false);
  const [expData, setexpData] = useState(null)

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  const username = localStorage.getItem('username');
  const accesstoken = localStorage.getItem('accesstoken');
  const expId = props.expId

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/profile/${username}/experiences/${expId}`, {
        headers: {
          'Content-Type': 'application/json',
          'authentication': `${accesstoken}`
        }
      });
      if (response.ok) {
        let resp = await response.json()
        setexpData(resp)
        console.log(expData);
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <VscEdit
        className="icons experience-fragment-edit-button"
        onClick={handleShow}
        id="editbutton"
      ></VscEdit>
      <Modal
        {...props}
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Experience
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {expData && <EditForm expData={expData} onUpdate={props.onUpdate} onHide={handleClose} fetch = {props.fetch}/>}
        </Modal.Body>
      </Modal>
    </>
  );
}
