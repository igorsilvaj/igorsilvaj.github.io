import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Contact = () => {
  return (
    <div className="contactPage">
      {/* <RainingCode /> */}
      <p>
        Caso tenha alguma pergunta ou proposta, não hesite em usar o
        formulário.
      </p>
      <div className="contactForm">
        <Form
          action="https://formsubmit.co/igorjsilvabiz@gmail.com"
          method="POST"
          className=""
        >
          <Form.Group className="mb-3" controlId="">
            <Form.Control type="text" name="name" placeholder="Nome" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Control
              type="email"
              name="Email"
              placeholder="Email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Control
              type="text"
              name="Assunto"
              placeholder="Assunto"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Control
              as="textarea"
              name="Mensagem"
              placeholder="Mensagem"
              rows={5}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
};
