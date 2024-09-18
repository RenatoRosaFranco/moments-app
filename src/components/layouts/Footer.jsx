import React from 'react';
import './Footer.scss';

export const Footer = () => {
    return(
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-6">
                            <p>
                                Feito por <span className='bold'>SQUARE Inc</span>
                            </p>
                        </div>

                        <div className="col-md-6">
                            <ul className="list-unstyled list-inline text-right">
                                <li>
                                    <p>
                                        CNPJ: 48.344.046/0001-54
                                    </p>
                                </li>
                                <li>
                                    <a href="/termos-de-uso">
                                        Termos de uso
                                    </a>
                                </li>
                                <li>
                                    <a href="/termos-de-privacidade">
                                        Termos de privacidade
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;