type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
  };

    const ContactFormEmail = ({ message, senderEmail }: ContactFormEmailProps) => {
        return (
          `message: ${message} \n senderEmail: ${senderEmail}`
        )
    };

    export default ContactFormEmail;