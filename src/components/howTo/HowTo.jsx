import React from 'react';
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
export const HowTo = () => {
    const howToItems = [
        {
            id: 1,
            title: 'Preencha o formulário com seus dados 📝'
        },
        {
            id: 2,
            title: 'Faça o pagamento pela plataforma 💰'
        },
        {
            id: 3,
            title: 'Receba o seu site + QR Code no e-mail ✉️'
        },
        {
            id: 4,
            title: 'Faça uma surpresa para alguem especial ❤️'
        }
    ];

    return (
        <section id="how-to">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="bold title text-center">Como funciona</h2>
                        <br />

                        <div className="row">
                            {howToItems.map((item, index) => (
                                <HowToItem key={item.id} item={item}/>
                            ))}
                        </div>

                        <br/>

                        <div className="text-center"><br /><br />
                            <button type='button' className='btn btn-primary btn-lg'>
                                Quero fazer meu site
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};