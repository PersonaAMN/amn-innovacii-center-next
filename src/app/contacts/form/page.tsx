import Form from "@/components/contacts/Form";
import Modal from "@/components/contacts/Modal";

const ContactForm = () => {
  return (
    <Modal>
      <h3 className="modal-head-text">Заголовок</h3>
      <div>Контакты</div>
      <Form />
    </Modal>
  );
};

export default ContactForm;
