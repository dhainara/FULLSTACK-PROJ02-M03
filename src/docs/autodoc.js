const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json"
const endpointsFiles = ["/src/route/animes.route"];

swaggerAutogen(outputFile, endpointsFiles)