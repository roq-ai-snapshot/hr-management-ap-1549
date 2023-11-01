import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  company_name: yup.string().required(),
  contact_name: yup.string().required(),
  contact_title: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().required(),
  region: yup.string().required(),
  postal_code: yup.string().required(),
  country: yup.string().required(),
  phone: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
