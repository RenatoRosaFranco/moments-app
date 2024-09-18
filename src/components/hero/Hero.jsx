import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {initialValues, momentSchema} from "../../schemas/momentSchema";
import './Hero.scss';

export const Hero = () => {
    const handleSubmit = (values) => {
        console.log('Formulário submetido com os seguintes dados:', values);
    }

    return(
        <section id="hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={momentSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ setFieldValue, isSubmitting }) => (
                                <Form>
                                    <div className="col-md-8" style={{ paddingRight: 80 }}>
                                        <h5>Novidade: <span className='badge'>Checklist para casais</span></h5>
                                        <h1 className='title bold'>Crie <span className='m-color'>memórias</span>
                                            <br /> compartilhe <span className='m-color'> momentos</span>.</h1>
                                        <p className='description'>Crie um contador dinâmico de tempo de sua memória especial.
                                            Preencha o formulário e receba o seu site personalizado + QR Code para
                                            compartilhar com aquele alguém especial. <span className='bold m-color'>
                                                (amigos, família e amor) 🙂</span></p>
                                        <br />

                                        <div className="row">
                                            <div className="col-md-12">

                                                <div className='row'>
                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="name">Nome</label>
                                                        <Field
                                                            name="name"
                                                            type="text"
                                                            className="form-control m-border"
                                                            placeholder='Dê a esse momento, um nome.'
                                                        />
                                                        <ErrorMessage name="name" component="div" className="error"/>
                                                    </div>

                                                    <div className="form-group col-md-6">
                                                        <label htmlFor="relationshipDate">Data do Acontecimento</label>
                                                        <Field
                                                            name="relationshipDate"
                                                            type="date"
                                                            className="form-control m-border"
                                                            place
                                                        />
                                                        <ErrorMessage name="relationshipDate" component="div"
                                                                      className="error"/>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="hour">Hora</label>
                                                        <Field
                                                            name="hour"
                                                            type="time"
                                                            className="form-control m-border"
                                                        />
                                                        <ErrorMessage name="hour" component="div" className="error"/>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="message">Mensagem</label>
                                                        <Field
                                                            name="message"
                                                            as="textarea"
                                                            placeholder='Escreva uma mensagem ou frase que para você expressa este momento.'
                                                            className="form-control m-border"
                                                            rows="3"
                                                        />
                                                        <ErrorMessage name="message" component="div" className="error"/>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="files">Selecione até 3 arquivos</label>
                                                        <input
                                                            name="files"
                                                            type="file"
                                                            className="form-control m-border"
                                                            multiple
                                                            onChange={(event) => {
                                                                const files = event.target.files;
                                                                setFieldValue("files", files);
                                                            }}
                                                        />
                                                        <ErrorMessage name="files" component="div" className="error"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div id="page-card">
                                            <p className='text-center'>
                                                Como vai ficar  👇
                                            </p>

                                            <div className="card jumbotron">
                                                <p className="card-url text-center ">
                                                    moments.com.br/
                                                </p>

                                                <div className="card-images m-border"></div>
                                            </div>

                                            <button
                                                type='submit'
                                                className='btn btn-primary m-button'
                                                onClick={handleSubmit}
                                                disabled={isSubmitting}
                                                style={
                                                    {
                                                        width: '100%',
                                                        fontWeight: 'bold',
                                                        fontSize: 18,
                                                        padding: '15px'
                                                    }
                                                }
                                            >
                                                {isSubmitting ? 'Gerando...' : 'Criar momento' }
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    );
};
