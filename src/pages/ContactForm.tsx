import React, { useRef, useState } from 'react';
import {
  Button,
  CircularProgress,
  Grid,
  Input,
  LinearProgress,
  Paper,
  TextField,
  Typography
} from '@material-ui/core';
import { Field, Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import { Redirect, useHistory } from 'react-router';
import { serialize } from 'v8';

export const ContactForm = () => {
  const reCAPTCHAref = useRef<ReCAPTCHA>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const history = useHistory();
  const siteKey = process.env.REACT_APP_SITE_KEY;
  const serverUrl = 'https://f12contactformapi.azurewebsites.net/email';
  const localUrl = 'https://localhost:44309/email';
  const keyAddress =
    'https://www.google.com/recaptcha/admin/site/478897509/setup';

  const submitContactFormData = async (data: any) => {
    const response = await fetch(serverUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return response;
  };
  const contactFormValidationSchema = Yup.object({
    name: Yup.string()
      .max(30, 'Name cannot be longer than 30 characters')
      .required('Name cannot be empty'),
    email: Yup.string()
      .required('Email cannot be empty')
      .email('Please enter a valid email'),
    subject: Yup.string()
      .required('Subject cannot be empty')
      .max(80, 'Subject cannot be longer than 80 characters'),
    message: Yup.string()
      .required('Message cannot be empty')
      .max(500, 'Message cannnot exceed character limit of 500')
  });
  type ContactFormProps = Yup.InferType<typeof contactFormValidationSchema>;
  return (
    <div className='ContactForm'>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        style={{
          maxWidth: 450,
          height: '100vh',

          margin: 'auto'
        }}
      >
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '40px 20px' }}>
            <Formik
              validateOnChange={true}
              initialValues={{
                name: '',
                email: '',
                subject: '',
                message: '',
                files: '',
                token: ''
              }}
              onSubmit={async (
                data,
                { setSubmitting, resetForm, setFieldError }
              ) => {
                setSubmitting(true);
                setIsSending(true);

                const res = await reCAPTCHAref.current!.executeAsync();
                if (res) {
                  data.token = res;
                }

                const response = await submitContactFormData(data);

                if (response.ok) {
                  history.push({
                    pathname: '/contactsubmission',
                    state: { success: true }
                  });
                } else {
                  try {
                    console.log('in response error');
                    const jsonResponse = await response.json();
                    Object.keys(jsonResponse.errors).forEach((key) => {
                      setFieldError(
                        key.toLowerCase(),
                        jsonResponse.errors[key]
                      );
                    });
                    setIsSending(false);
                  } catch (err) {
                    history.push({
                      pathname: '/contactsubmission',
                      state: { success: false }
                    });
                  }
                }

                reCAPTCHAref.current?.reset();
              }}
              validationSchema={contactFormValidationSchema}
            >
              {(props: FormikProps<ContactFormProps>) => {
                const { values, touched, errors, isSubmitting, setFieldValue } =
                  props;
                return (
                  <>
                    <Form>
                      <Grid container direction='row' spacing={3}>
                        <Grid item xs={12}>
                          <Typography variant='h5' color='primary' gutterBottom>
                            Contact Me
                          </Typography>
                          <Typography
                            variant='subtitle2'
                            style={{ textAlign: 'left' }}
                            color='textPrimary'
                          >
                            Please fill in the form below and I will get back to
                            you asap.
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            error={!!errors.name && touched.name}
                            helperText={errors.name}
                            required
                            disabled={isSubmitting}
                            fullWidth
                            variant='outlined'
                            placeholder='Name..'
                            label='Name'
                            name='name'
                            type='input'
                            as={TextField}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            error={!!errors.email && touched.email}
                            helperText={errors.email}
                            required
                            disabled={isSubmitting}
                            fullWidth
                            variant='outlined'
                            placeholder='Email..'
                            label='Email'
                            name='email'
                            type='input'
                            as={TextField}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            error={!!errors.subject && touched.subject}
                            helperText={errors.subject}
                            fullWidth
                            disabled={isSubmitting}
                            required
                            variant='outlined'
                            placeholder='Subject..'
                            label='Subject'
                            name='subject'
                            type='input'
                            as={TextField}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            error={!!errors.message && touched.message}
                            helperText={errors.message}
                            fullWidth
                            disabled={isSubmitting}
                            required
                            variant='outlined'
                            placeholder='Message..'
                            label='Message'
                            name='message'
                            type='input'
                            multiline
                            rows={4}
                            as={TextField}
                          />
                        </Grid>
                        {/* //<ImageUploader/> to be added */}
                        <Grid item xs={12}>
                          <ReCAPTCHA
                            sitekey={siteKey!}
                            size='invisible'
                            ref={reCAPTCHAref}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            fullWidth
                            color='primary'
                            variant='contained'
                            disabled={isSubmitting}
                            type='submit'
                          >
                            Send
                          </Button>
                        </Grid>
                      </Grid>
                    </Form>
                  </>
                );
              }}
            </Formik>
          </Paper>
          {isSending && <LinearProgress />}
        </Grid>
      </Grid>
    </div>
  );
};
