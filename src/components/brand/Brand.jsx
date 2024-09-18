import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram, faReddit } from '@fortawesome/free-brands-svg-icons';
import './Brand.scss';

export const Brand = (props) => {
    return(
        <section id="brand">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-unstyled list-inline text-center">
                            <li>
                                <p>Em destaque no</p>
                            </li>
                            <li>
                                <a href='https://tiktok.com/momentsApp' target='_blank' rel="noreferrer">
                                    <FontAwesomeIcon icon={faTiktok} size="2x" className='icon' />
                                </a>
                            </li>
                            <li>
                                <a href='https://instagram.com/momentsApp' target='_blank' rel="noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" className='icon' />
                                </a>
                            </li>
                            <li>
                                <a href='https://reddit.com/mommentsApp' target='_blank' rel="noreferrer">
                                    <FontAwesomeIcon icon={faReddit} size="2x" className='icon' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};