const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb://admin:myfood123456@ds155774.mlab.com:55774/myfood'
    },
    Security: {
        secretyKey: 'd41d8cd98f00b204e9800998ecf8427e|68a9d93785b7d88013da33ec1ab946dc'
    }
}
module.exports = variables;