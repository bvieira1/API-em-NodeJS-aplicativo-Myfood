'use strict'

const app = require('../MyFood.Api/bin/express');
const variables = require('../MyFood.Api/bin/configuration/variables');

app.listen(variables.Api.port, () => {
    console.info(`Api inicializada com sucesso na porta ${variables.Api.port}`);
});