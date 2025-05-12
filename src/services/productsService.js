import { db } from '../firebase-config';
import { collection, getDocs, query, where } from 'firebase/firestore'; // Додали query та where

export const getAllProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const products = [];
    
    querySnapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return products;
  } catch (error) {
    console.error("Error fetching products: ", error);
    throw error;
  }
};

export const getActivePromotions = async () => {
  try {
    console.log("Початок завантаження акцій...");
    const promotionsCol = collection(db, 'promotions');
    const q = query(promotionsCol, where('isActive', '==', true));
    const snapshot = await getDocs(q);
    
    console.log("Знайдено акцій:", snapshot.size);
    snapshot.forEach(doc => {
      console.log("Акція:", doc.id, doc.data());
    });
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Помилка отримання акцій:", error);
    throw error;
  }
};