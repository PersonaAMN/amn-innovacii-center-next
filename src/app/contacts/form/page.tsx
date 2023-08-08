import FeedbackForm from "@/components/contacts/Form";
import Form from "@/components/contacts/Form";
import Modal from "@/components/contacts/Modal";

const ContactForm = () => {
  return (
    <Modal>
      <h3 className="lg:text-5xl text-3xl font-extrabold text-center max-w-5xl w-full">
        Форма обратной связи
      </h3>
      <div>Пожалуйста, заполните поля</div>
      <FeedbackForm />
    </Modal>
  );
};

export default ContactForm;
