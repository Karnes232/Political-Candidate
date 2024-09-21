import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";
const collectUserData = async (formData, redirectHref) => {
  const createdAt = new Date();
  const formDataObj = {};
  formData.forEach((value, key) => (formDataObj[key] = value));
  const id = uuidv4();
  await setDoc(doc(db, "contactoConElElectorado", id), {
    id: id,
    createdAt: createdAt,
    nombre: formDataObj.nombre,
    apellido: formDataObj.apellido,
    cedula: formDataObj.cedula,
    colegioElectoral: formDataObj.colegioElectoral,
    email: formDataObj.email,
    teléfono: formDataObj.teléfono,
    dirección: formDataObj.dirección,
    ciudad: formDataObj.ciudad,
    providencia: formDataObj.providencia,
    AfiliarMiembros: formDataObj.AfiliarMiembros,
    Publicidad: formDataObj.Publicidad,
    Donaciones: formDataObj.Donaciones,
    Iniciativas: formDataObj.Iniciativas,
  });

  window.location.href = redirectHref;
};

export default collectUserData;
