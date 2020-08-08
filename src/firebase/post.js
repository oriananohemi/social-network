import { database, timeStamp } from './init';

export const saveEvent = (hour, date, sport, place, description) => {
  const infLocalStorage = localStorage.getItem('session');
  const convetInfoJson = JSON.parse(infLocalStorage);
  const IdUser = convetInfoJson.user.uid;
  const nameUser = convetInfoJson.user.displayName;
  console.log(IdUser);
  database.collection('events').add({
    id: IdUser,
    nombre: nameUser,
    hora: hour,
    fechaEvento: date,
    deporte: sport,
    lugar: place,
    descripcion: description,
    fechaPublicacion: timeStamp,
  }).then((respuesta) => {
    console.log(respuesta);
    window.location.href = '#/timeline';
  });
};

export const getEvent = id => database.collection('events').doc(id).get();

export const getEvents = () => database.collection('events').orderBy('fechaPublicacion', 'desc').get();

export const editEvent = (id, data) => database.collection('events').doc(id).update(data);

export const deletePost = id => database.collection('events').doc(id).delete();
