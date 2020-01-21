import React from 'react';

interface Props {
    title: String;
}

const Card: React.FC<Props> = ({ title, children }) => (
    <section className="card">
        <header className="card-header">
            <h1 className="card-title">{title}</h1>
        </header>
        <div className="card-content">
            {children}
        </div>
        <footer className="card-footer"></footer>
    </section>
);

export default Card;

