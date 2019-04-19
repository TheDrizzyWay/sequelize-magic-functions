import express from 'express';
import logger from 'morgan';
import db from './models';

const app = express();
const { Rapper, Album } = db;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('*', (req, res) => res.status(200).send({
  message: 'Testing sequelize magic functions.',
}));

app.post('/rapper', async (req, res) => {
  try {
    const { body: { name } } = req;
    const newRapper = await Rapper.create({name});

    return res.status(201).json({ data: newRapper.dataValues});
  } catch(error) {
    console.log(error.message);
  }
});

app.post('/album', async (req, res) => {
  try {
    const { body: { name } } = req;
    const newAlbum = await Album.create({name});

    return res.status(201).json({ data: newAlbum.dataValues});
  } catch(error) {
    console.log(error.message);
  }
});

app.post('/magic', async (req, res) => {
  try {
    const { body: { name, userId } } = req;
    const findAlbum = await Album.findOrCreate({
      where: { name }
    });

    const findRapper = await Rapper.findByPk(userId);
    const newAlbum = await findRapper.addAlbum(findAlbum[0]);

    return res.status(201).json(newAlbum);
  } catch(error) {
    console.log(error.message);
  }
});

app.post('/album/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const findRapper = await Rapper.findByPk(id);
    const findAlbums = await findRapper.getAlbums();

    return res.status(200).json(findAlbums);
  } catch(error) {
    console.log(error.message);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

export default app;
