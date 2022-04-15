// import React, { Component } from "react";
import React, { useState, useRef } from "react";
import "./StyleContact.css"
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jkf0lye', 'template_yzzul39', form.current, 'tM_vV_tS80_1_qK8p')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        //   alert("Email Sended Success");
    };



    return (

        <motion.div id="super"
        // initial={{width: 0}}
        // animate={{width:"100%"}}
        // exit={{x:window.innerWidth}}
        initial={{scaleX : 0,transition:{ duration:0.3}}}
        animate={{scaleX : 1,transition:{ duration:0.3}}}
        exit={{scaleX : 0,transition:{ duration:0.3}}}
        >
            <div id="wrapper">
            <div id="page-content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="Contact" className="container">
                                <div className="about-super">
                                    <div className="page-head">
                                        <h1>Contact</h1>
                                        <span> <i className="fa fa-phone fa-2x" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                                <div className="bor"></div>
                                <div className="resume-body">
                                    <div className="talk container">
                                        <h2 className="mb-20">Let's Talk <br />
                                            <span className="bo">
                                                <h1></h1>
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                                <div className="section1">
                                    {/* <div className="boxA">
                                        <input className="col-lg-5 text-white bg-transparent" type="text" placeholder="Name" />
                                        </div> */}

                                    <Formik
                                        initialValues={{ name: '', email: '', content: '' }}
                                        onSubmit={(values, { setSubmitting }) => {
                                            setTimeout(() => {
                                                // alert(JSON.stringify(values, null, 2));
                                                setSubmitting(false);
                                            }, 1000, emailjs.sendForm('service_jkf0lye', 'template_yzzul39', form.current, 'tM_vV_tS80_1_qK8p')
                                                .then((result) => {
                                                    console.log(result.text);
                                                }, (error) => {
                                                    console.log(error.text);
                                                },
                                                // (alert('Alert For your User!') ? "" : location.reload();)
                                                alert("Thank you for contacting, Your message has been send successfully, Have a nice day :)"),
                                              
                                                )
                                             
                                               
                                                );
                                                window.location.reload();
                                                


                                        }}
                                        validationSchema={Yup.object({
                                            name: Yup.string()
                                                .max(15, 'Must be 15 characters or less')
                                                .required('Name is required'),

                                            email: Yup.string()
                                                .email('Invalid email address')
                                                .required('Email is required'),
                                        })}

                                    >
                                        {(formik) => (
                                            // <Form onSubmit={sendEmail} ref={form}>
                                            <Form ref={form}>
                                                <div className="form-group col-lg-5 ">
                                                    <label htmlFor="name" className="text-white mt-10" >Name</label>
                                                    <Field name="name" id="naa" className={(formik.touched.name && formik.errors.name) ? 'form-control is-invalid text-white' : 'form-control text-white   '} type="text" />
                                                    {formik.touched.name && formik.errors.name ? (
                                                        <div className="invalid-feedback">{formik.errors.name}</div>
                                                    ) : null}
                                                </div>

                                                <div className="form-group col-lg-5 ">
                                                    <label htmlFor="email" className="text-white">Email Address</label>
                                                    <Field name="email" id="naa" className={(formik.touched.email && formik.errors.email) ? 'form-control is-invalid text-white ' : 'form-control text-white '} type="email" />
                                                    {formik.touched.email && formik.errors.email ? (
                                                        <div className="invalid-feedback">{formik.errors.email}</div>
                                                    ) : null}
                                                </div>

                                                <div className="form-group col-lg-5">
                                                    <label htmlFor="message" className="text-white">Message</label>
                                                    <Field name="content" id="naa" placeholder="How can I help you?" className="form-control text-white" as="textarea" rows={3} cols={10} />
                                                </div>

                                                <div className="form-group mt-10">

                                                    <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>{formik.isSubmitting ? "Please wait..." : "Send Message"} </button>

                                                </div>

                                            </Form>
                                        )
                                        }
                                    </Formik >




                                </div>
                                <div className="section2">

                                    <div className="col-7 text-white">
                                        <a href="mailto: nikhilshinde221@gmail.com">
                                            <FontAwesomeIcon icon={faPaperPlane} size="2x" color="#00A3E1" className="i1" />
                                            <br />
                                            NIKHILSHINDE221@GMAIL.COM
                                        </a>
                                    </div>
                                    <div className="col-6 mt-2 text-white">
                                        <FontAwesomeIcon icon={faLocationDot} size="2x" color="#00A3E1" className="i1" />
                                        <br />
                                        Pune-42, Maharashtra, India

                                    </div>
                                    <div className="col-6 mt-3 text-white">
                                        <FontAwesomeIcon icon={faPhone} size="2x" color="#00A3E1" className="i1" />
                                        <br />
                                        (+91) 9370621842
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </motion.div>



    );

}
export default Contact