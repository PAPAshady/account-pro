import ContactInfos from '@templates/contactUs/ContactInfos/ContactInfos';
import ContactForm from '@templates/contactUs/ContactForm/ContactForm';

export default function page() {
  return (
    <div className="space-y-27">
      <ContactInfos />
      <ContactForm />
    </div>
  );
}
