import * as Yup from 'yup';

export const initialValues = {
    name: '',
    relationshipDate: '',
    hour: '',
    message: '',
    images: []
};

export const momentSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Nome muito curto!')
        .max(50, 'Nome muito longo!')
        .required('Campo obrigatório!'),
    relationshipDate: Yup.date()
        .required('Campo obrigatório'),
    hour: Yup.string()
        .required('Campo obrigatório'),
    message: Yup.string()
        .min(10, 'Mensagem muito curta!')
        .required('Campo obrigatório')
});