// =============================================
// Puerto
// =============================================

process.env.PORT = process.env.PORT || 3000;

// =============================================
// Entorno
// =============================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =============================================
// Base de datos
// =============================================

let urlDB;

// if (process.env.NODE_ENV === 'dev') {
//     urlDB = 'mongodb://localhost:27017/cafe';
// } else {
//     urlDB = 'mongodb+srv://cafe-user:TmUywo6XgSkawf@cafe.3ub6d.mongodb.net/cafe'
// }
urlDB = 'mongodb+srv://santy:santy@cluster0-zdxmp.mongodb.net/prueba?retryWrites=true&w=majority'
process.env.URLDB = urlDB;