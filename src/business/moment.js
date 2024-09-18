import {addDoc, collection} from 'firebase/firestore';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import { firestore, storage } from '../config/firebaseConfig';

export const createMoment = async (userData, images) => {
    try {
        const imageUrls = await Promise.all(
            images.map(async (image, index) => {
                const imageRef = ref(storage, `images/${Date.now()}_${index}`);
                await uploadBytes(imageRef, image);
                return await getDownloadURL(imageRef);
            })
        );

        await addDoc(collection(firestore, 'moments'), {
            ...userData,
            images: imageUrls,
        });

        return { success: true, message: 'Dados e imagens enviados com sucesso!' };
    } catch (error) {
        console.log('Erro ao enviar dados e imagens:', error);
        return { success: false, message: error.message };
    }
}