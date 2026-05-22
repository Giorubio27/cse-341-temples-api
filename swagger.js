// swagger.js
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Temple API',
    description: 'Automatically generated Swagger documentation for the Temple API.',
  },
  host: 'localhost:8080',
  schemes: ['http'],
};

// The file swagger-autogen will generate
const outputFile = './swagger-output.json'; 

// Point this to the root file containing your Express app routes
const endpointsFiles = ['./index.js']; 

// Generate the file
swaggerAutogen(outputFile, endpointsFiles, doc);