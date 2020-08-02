// Baseline & Utils
import React from 'react'
import styles from './customModal.module.scss'

// Internal Components
import CustomButton from '../customButton/CustomButton';

// React Bootstrap Components
import { Modal, Form } from 'react-bootstrap';


const CustomModal = props => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ borderRadius: '16px' }}
        >
            <Modal.Body style={{ padding: '24px' }}>
                <h3 className={styles.thanksTitle}>¡Muchas gracias por querer formar parte del mundo Ecolophy!</h3>
                <div className={styles.thanksImgContainer}>
                    <img className={styles.thanksImg} src="https://i.ibb.co/c3gzmQ4/high-five1-1.jpg" alt="high-five1-1" border="0" />
                </div>
                <h5 className={styles.moreInfoText}>Por último, queremos saber un poco más de vos...</h5>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className={styles.formLabel}>¿Cual es tu nombre?</Form.Label>
                        <Form.Control className={styles.inputClass} type="text" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className={styles.formLabel}>¿En que barrio vivis?</Form.Label>
                        <Form.Control className={styles.inputClass} type="text" />
                    </Form.Group>
                    <div style={{ marginTop: '24px' }}>
                        <CustomButton type='primary' text='FINALIZAR' handleClick={() => alert('clicked')} />
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default CustomModal;