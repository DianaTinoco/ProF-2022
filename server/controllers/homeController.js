// URL: Get /
const index = (req, res) => {
  // Calculando emojis
  const emojieDataset = [
    '😎',
    '🗼',
    '😏',
    '☕',
    '🙋‍♂️',
    '👏',
    '🤓',
    '🖤',
    '💨',
    '💫',
    '🕳',
  ];
  const emojie =
    emojieDataset[Math.floor(Math.random() * emojieDataset.length)];
  // View-Models
  const viewModel = {
    title: 'Control de Acceso',
    author: 'Diana Laura Paredes Tinoco',
    emojie,
  };
  res.render('home/indexView', viewModel);
};

// URL: Get /about
const about = (req, res) => {
  res.render('home/aboutView', {
    cargo: 'Administradora',
    name: 'Diana Laura Paredes Tinoco',
    email: 'L181130113@gamadero.tecnm.mx',
    cargo1: 'Administrador',
    name1: 'Zuriel Roman Hernandez',
    email1: 'L181130122@gamadero.tecnm.mx',
  });
};
// URL: Get /area
const area = (req, res) => {
  res.render('home/areaView', {});
};

// URL: Get /regis
const regis = (req, res) => {
  res.render('home/regisView', {});
};

export default {
  // Action Methods
  index,
  about,
  area,
  regis,
};
