// Baseline & Utils
import React from 'react'
import styles from './customModal.module.scss'

// Internal Components
import CustomButton from '../customButton/CustomButton';

// External Components
import { Modal, Form } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';



const CustomModal = props => {

    const barrios = ['Agronomía', 'Almagro', 'Balvanera', 'Barracas', 'Belgrano', 'Boedo', 'Caballito', 'Chacarita', 'Coghlan', 'Colegiales', 'Constitución', 'Flores', 'Floresta', 'La Boca', 'La Paternal', 'Liniers', 'Mataderos', 'Monte Castro', 'Montserrat', 'Nueva Pompeya', 'Núñez', 'Palermo', 'Parque Avellaneda', 'Parque Chacabuco', 'Parque Chas', 'Parque Patricios', 'Puerto Madero', 'Recoleta', 'Retiro', 'Saavedra', 'San Cristóbal', 'San Nicolás', 'San Telmo', 'Vélez Sársfield', 'Versalles', 'Villa Crespo', 'Villa del Parque', 'Villa Devoto', 'Villa General Mitre', 'Villa Lugano', 'Villa Luro', 'Villa Ortúzar', 'Villa Pueyrredón', 'Villa Real', 'Villa Riachuelo', 'Villa Santa Rita', 'Villa Soldati', 'Villa Urquiza', 'GBA Norte', 'GBA Sur', 'GBA Oeste']

    const contenidoInicial =
        <Modal.Body style={{ padding: '24px' }}>
            <h3 className={styles.thanksTitle}>¡Muchas gracias por querer formar parte del mundo Ecolophy!</h3>
            <div className={styles.thanksImgContainer}>
                <img className={styles.thanksImg} src="https://i.ibb.co/c3gzmQ4/high-five1-1.jpg" alt="high-five1-1" border="0" />
            </div>
            <h5 className={styles.moreInfoText}>Por último, queremos saber un poco más de vos...</h5>
            <Form>
                <Form.Group controlId="nombre">
                    <Form.Label className={styles.formLabel}>¿Cual es tu nombre?</Form.Label>
                    <Form.Control name="nombre" value={props.formData.nombre} onChange={props.handleChange} type="text" className={styles.inputClass} />
                </Form.Group>

                <Form.Group controlId="barrio">
                    <Form.Label className={styles.formLabel}>¿En qué barrio vivis?</Form.Label>
                    {/* <Form.Control name="barrio" value={props.formData.barrio} onChange={props.handleChange} type="text" className={styles.inputClass} /> */}
                    <Typeahead
                        // onChange={(selected) => {
                        //     // Handle selections...
                        // }}
                        id="autocomplete-input"
                        inputProps={{
                            name: "barrio",
                            value: props.formData.barrio
                        }}
                        onChange={(selected) => props.handleOnChangeAutocomplete(selected[0])}
                        onInputChange={props.handleOnInputChangeAutocomplete}
                        options={barrios}
                        emptyLabel='No se encontraron sugerencias de barrios, de todos modos podés ingresar el que quieras...'
                        className={styles.inputClass}
                    />
                </Form.Group>
                <div style={{ marginTop: '24px' }}>
                    <CustomButton type='primary' text='FINALIZAR' disabled={!props.validateForm()} handleClick={props.handleSubmit} />
                </div>
            </Form>
        </Modal.Body>

    const contenidoFinal =
        <Modal.Body style={{ padding: '24px' }}>
            <h3 className={styles.thanksTitle}>¡Ya terminamos!</h3>
            <div className={styles.thanksImgContainer}>
                <img className={styles.thanksImg} src="https://i.ibb.co/j5QJS3F/confirm.png" alt="confirm" border="0" />
            </div>
            <h4 className={styles.thanksSubtitle}>Pronto te tendremos novedades del lanzamiento de Ecolophy</h4>
            <p className={styles.contactText}>Si te querés comunicar directamente con nosotros, podés hacerlo por mail a hola@ecolophy.com</p>
            <div style={{ marginTop: '24px' }}>
                <CustomButton type='primary' text='VOLVER' handleClick={props.handleCloseForm} />
            </div>
        </Modal.Body>



    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ borderRadius: '16px' }}
        >
            {props.formEnviado ? contenidoFinal : contenidoInicial}
        </Modal>
    )
}

export default CustomModal;