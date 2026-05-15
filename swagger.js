const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Contacts API for CSE 341'
  },
  host: 'localhost:8080',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/contacts.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);