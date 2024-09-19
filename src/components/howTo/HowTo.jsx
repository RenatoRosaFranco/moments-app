import React from 'react';
import { useTranslation } from 'react-i18next';
import './HowTo.scss';

function HowToItem({ item }) {
    const { title } = item;

    return (
        <div className="col-md-3">
            <div className="panel panel-default item">
                <div className="panel-body text-center">
                    <h4 className="bold">{title}</h4>
                </div>
            </div>
        </div>
    );
}

const handleScroll = () => (
    () => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })
);

export const HowTo = () => {
    const { t } = useTranslation();
    const howToItems = t('howTo.howToItems', { returnObjects: true });

    return (
        <section id="how-to">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="bold title text-center">{t('howTo.title')}</h2>
                        <br />

                        <div className="row">
                            {howToItems.map((item, index) => (
                                <HowToItem key={item.id} item={item}/>
                            ))}
                        </div>

                        <br/>

                        <div className="text-center"><br /><br />
                            <button type='button'
                                    onClick={ handleScroll('hero') }
                                    className='btn btn-primary btn-lg'>
                                {t('howTo.buttonText')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};