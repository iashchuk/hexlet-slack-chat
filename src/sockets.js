import io from 'socket.io-client';
import store from './store';
import actions from './store/actions';

const initSockets = () => {
  const socket = io();

  socket.on('newMessage', ({ data }) => store.dispatch(actions.addMessage(data.attributes)));
  socket.on('newChannel', ({ data }) => store.dispatch(actions.addChannel(data.attributes)));
  socket.on('renameChannel', ({ data }) => store.dispatch(actions.renameChannel(data.attributes)));
  socket.on('removeChannel', ({ data }) => store.dispatch(actions.removeChannel(data.id)));
};

export default initSockets;