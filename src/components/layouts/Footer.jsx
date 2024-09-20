import React from 'react';
import { useTranslation } from "react-i18next";
import './Footer.scss';

export const Footer = () => {
    const { t } = useTranslation();

    return(
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-6">
                            <p><span
                                className='bold'>SQUARE INC &copy; 2024</span>
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
                                    <a href={t('app.routes.termsOfUse')}>
                                        { t("footer.links.termsOfUse") }
                                    </a>
                                </li>
                                <li>
                                    <a href={t('app.routes.policyPrivacy')}>
                                        { t("footer.links.policyPrivacy") }
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