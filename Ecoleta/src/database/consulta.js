// Importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

// Criar o objeto que irá fazer operações no Banco de Dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// Utilizar o objeto de Banco de Dados, para nossas operações
db.serialize(() => {

//     // Com comandos SQL eu vou:

    // 3. Consultar dados da Tabela
    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        console.log("Aqui estão seus registros: ")
        console.log(rows)
    })

    // // 4. Deletar um dado da Tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso!")
    // })

})