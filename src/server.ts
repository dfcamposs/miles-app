import express from 'express';

import { ProgramsEndpoint } from "./interface/programs-endpoint";
import { UsersEndpoint } from './interface/users-endpoint';
import { TransactionsEndpoint } from './interface/transations-endpoint';
import { Container } from 'typescript-ioc';

const server = express();

const programsEndpoint = Container.get(ProgramsEndpoint);
const usersEndpoint = Container.get(UsersEndpoint);
const transationsEndpoint = Container.get(TransactionsEndpoint);

server.get('/programs', programsEndpoint.findAll.bind(programsEndpoint));
server.get('/programs/:id', programsEndpoint.findOne.bind(programsEndpoint));
server.post('/programs', programsEndpoint.create.bind(programsEndpoint));
server.put('/programs/:id', programsEndpoint.update.bind(programsEndpoint));
server.delete('/programs/:id', programsEndpoint.delete.bind(programsEndpoint));

server.get('/users', usersEndpoint.findAll.bind(usersEndpoint));
server.get('/users/:id', usersEndpoint.findOne.bind(usersEndpoint));
server.post('/users', usersEndpoint.create.bind(usersEndpoint));
server.put('/users/:id', usersEndpoint.update.bind(usersEndpoint));
server.delete('/users/:id', usersEndpoint.delete.bind(usersEndpoint));

server.get('/transations', transationsEndpoint.findAll.bind(transationsEndpoint));
server.get('/transations/:id', transationsEndpoint.findOne.bind(transationsEndpoint));
server.post('/transations', transationsEndpoint.create.bind(transationsEndpoint));
server.put('/transations/:id', transationsEndpoint.update.bind(transationsEndpoint));
server.delete('/transations/:id', transationsEndpoint.delete.bind(transationsEndpoint));

server.listen(3000, () => console.log('Running at port 3000!'));
