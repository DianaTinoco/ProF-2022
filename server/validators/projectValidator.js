// 1. Importar la biblioteca de validación
import * as Yup from 'yup';

// 2. Creando el esquema de validación
const projectSchema = Yup.object().shape({
  name: Yup.string().required('Se requiere un nombre para el proyecto'),
  area: Yup.string().required('Ingrese el nombre del area a la que pertenece'),
  cargo: Yup.string().required('Se requiere ingresar el cargo que tiene'),
  codigo: Yup.string()
    .max(10, 'El codigo esta limitado a 10 caracteres')
    .required('Se requiere un codigo de acceso'),
});

// 3. Creamos el middleware de validacion
const getProject = (req) => {
  // Extraemos la informacion del formulario
  const { name, area, cargo, codigo } = req.body;
  // Armar un objeto con los datos del proyecto
  return {
    name,
    area,
    cargo,
    codigo,
  };
};

export default { projectSchema, getProject };
