import mongoose from 'mongoose';

const registeredContactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const nonRegisteredContactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      sparse: true,
      
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const contactSchema = mongoose.Schema({
  registered_contacts: registeredContactSchema,
  not_registered_contacts: nonRegisteredContactSchema,
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
