import React from 'react';
import SubHeader from "./components/subheader";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CiTwitter } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Questions = () => {
    return (
        <>
            <SubHeader />
            <div style={{ paddingTop: "5%", height: "100vh" }} className='buzzing-main'>
                <div className='buzzing-terms-container text-center' style={{ background: "none" }}>
                    <div className='questions-text'>Questions</div>
                    <div className='form-question'>
                        <InputGroup>
                            <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                            <InputGroup.Text style={{ color: "black", paddingTop: "5px" }} id="basic-addon1">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.75 15.75L12.3855 12.3795L15.75 15.75ZM14.25 7.875C14.25 9.56576 13.5784 11.1873 12.3828 12.3828C11.1873 13.5784 9.56576 14.25 7.875 14.25C6.18424 14.25 4.56274 13.5784 3.36719 12.3828C2.17165 11.1873 1.5 9.56576 1.5 7.875C1.5 6.18424 2.17165 4.56274 3.36719 3.36719C4.56274 2.17165 6.18424 1.5 7.875 1.5C9.56576 1.5 11.1873 2.17165 12.3828 3.36719C13.5784 4.56274 14.25 6.18424 14.25 7.875V7.875Z" stroke="black" stroke-width="2" stroke-linecap="round" />
                                </svg>

                            </InputGroup.Text>

                        </InputGroup>
                    </div>
                   <div className='icons-questions'>
                   <div className='icons-hover' style={{ color: "gray", fontSize: "50px" }}>
                        <CiTwitter />
                    </div>
                    <div className='icons-hover' style={{ color: "gray", fontSize: "40px" }}>
                        <FaGoogle />

                    </div>
                    <div className='icons-hover' style={{ color: "gray", fontSize: "40px" }}>
                        <FaPinterest />

                    </div>
                    <div className='icons-hover' style={{ color: "gray", fontSize: "40px" }}>
                        <FaLinkedin />
                    </div>
                   </div>
                </div>
            </div>
        </>
    );
};

export default Questions;
