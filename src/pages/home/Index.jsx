import React from 'react';
import { useTranslation } from "react-i18next";
import './style.scss';

import { HowTo } from "../../components/howTo/HowTo";
import { Hero } from "../../components/hero/Hero";
import { Faq } from "../../components/faq/Faq";
import { Brand } from "../../components/brand/Brand";

const HomePage = () => {
    const { t } = useTranslation();
    const questions = t('faq.items', { returnObjects: true });

    return(
        <section id="home-page">
            <Hero />
            <Brand />
            <HowTo />

            <section id="faq" style={{ paddingTop: 60, paddingBottom: 50 }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <h2 className="bold text-center">{t('faq.title')}</h2>

                            {questions.map((question, index) => (
                                <Faq key={index} question={question} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default HomePage;