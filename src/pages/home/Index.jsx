import React from 'react';
import faqData  from '../../data/faqData.json';
import './style.scss';
import {HowTo} from "../../components/howTo/HowTo";
import {Hero} from "../../components/hero/Hero";
import {Faq} from "../../components/faq/Faq";
import {Brand} from "../../components/brand/Brand";

const HomePage = () => {
    let questions = faqData;

    return(
        <section id="home-page">
            <Hero />
            <Brand />
            <HowTo />

            <section id="faq" style={{ paddingTop: 60, paddingBottom: 50 }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <h2 className="bold text-center">Perguntas Frequentes (FAQ)</h2>

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