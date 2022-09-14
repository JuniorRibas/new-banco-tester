const knex = require('knex')


async function run() {
     const banco = await knex({
          client: 'mysql',
          connection: {
               host: '127.0.0.1',
               port: 3306,
               user: 'your_database_user',
               password: 'your_database_password',
               database: 'myapp_test'
          }
     });

     let result = await banco.raw('select 1')
     console.log(result)
}

run()