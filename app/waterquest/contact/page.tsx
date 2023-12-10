import ContactForm from "@/components/contact-form";

const ContactPage = () => {
  return <main>
    <div className="container py-12">
      <div className="max-w-3xl mx-auto min-h-[70vh] flex items-center justify-center">
        <ContactForm />
      </div>
    </div>
  </main>;
};
export default ContactPage;
