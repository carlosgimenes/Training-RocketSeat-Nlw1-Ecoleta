// Importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

// Criar o objeto que irá fazer operações no Banco de Dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// Utilizar o objeto de Banco de Dados, para nossas operações
db.serialize(() => {

//     // Com comandos SQL eu vou:

//     // 1. Criar uma Tabela
//     db.run(`
//         CREATE TABLE IF  NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     // 2. Inserir dados na Tabela
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `
    
//     const vaules = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Número 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Papeis e Papelão"
//     ]

//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

//    db.run(query, vaules, afterInsertData)

//     // 3. Consultar dados da Tabela
//     db.all(`SELECT name FROM places`, function(e rr, rows) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Aqui estão seus registros: ")
//         console.log(rows)
//     })

//     // 4. Deletar um dado da Tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso!")
    // })

})