import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string()
      .matches(
        /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
        'Number must match the format XXX-XX-XX'
      )
      .required('Required')
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Name
          <Field type="text" name="name" className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label className={styles.label}>
          Number
          <Field type="text" name="number" className={styles.input} />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
