import * as yup from 'yup';

export const hrManagerValidationSchema = yup.object().shape({
  experience: yup.number().integer().required(),
  qualification: yup.string().required(),
  specialization: yup.string().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
