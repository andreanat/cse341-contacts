const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Contacts API for CSE 341'
  },
  host: "cse341-contacts-8tcc.onrender.com",
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js', './routes/contacts.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);