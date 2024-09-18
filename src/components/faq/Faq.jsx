import React from 'react';
import './Faq.scss';

export const Faq = ({ question }) => {
    let { title, answer } = question;

    return(
        <div className='col-md-12'>
            <div className="panel panel-default faq">
                <div className="panel-body">
                    <h4 className="faq-title bold">{title}</h4>
                    <p className='faq-answer'>{answer}</p>
                </div>
            </div>
        </div>
    );
};