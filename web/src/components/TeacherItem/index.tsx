import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/42624981?s=460&u=188dc2e1e9964c8008135f43468f0db8db3cf70b&v=4" alt="Jose Neto" />
        <div>
          <strong>José Neto</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
            <br /> <br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
            Mais de 200.00 pessoas já passaram por uma das minhas explosões.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;