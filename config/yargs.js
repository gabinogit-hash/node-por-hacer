//se crearon dos obejtos para no reducir codigo
const descripcion = {
    demand: true,
    alias: 'd',
    descripcion: 'Descripcion de la tarea por hacer'
}
const completado = {
        default: true,
        alias: 'c',
        descripcion: 'Completado o Pendiente'
    }
    //---------------------------------------------------
const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de un tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un Tarea', {
        descripcion
    })
    .help()
    .argv;
module.exports = {
    argv
}