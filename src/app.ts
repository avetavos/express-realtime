import feathers from '@feathersjs/feathers';
import express from '@feathersjs/express';
import socketio from '@feathersjs/socketio';
import configuration from '@feathersjs/configuration';
import 'dotenv/config';

import channels from './channels';

const app = express(feathers());

app.configure(configuration());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.configure(express.rest());
app.configure(socketio());
app.configure(channels);

const server = app.listen(process.env.PORT);

server.on('listening', () =>
	console.log('Feathers application started on http://%s:%d', process.env.PORT)
);
