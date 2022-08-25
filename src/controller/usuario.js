const Usuario = require('../modelos/Usuario')

async function getAllUsuarios(req, res, next) {
    try {
        res.send(await Usuario.findAll());
    }
    catch (err) {
        next(err);
    }
}
async function getOneUsuario(req, res, next) {
    try {
        const usuario = await Usuario.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!usuario) throw new Error("Usuario não existe");
        res.send(usuario);
    }
    catch (err) {
        next(err);
    }
}
async function insertUsuario(req, res, next) { 
    try {
        const usuario = await Usuario.create(req.body);
        res.send(usuario);
    } catch (err) {
        next(err);
    }
}
async function updateUsuario(req, res, next) { 
    try {
        const usuario = await Usuario.findOne({
            where: {
                id: req.params.id
            }
        }); 
        
        if (!usuario) throw new Error("Usuario não existe");

        usuario.set(req.body);

        await usuario.save();

        res.send(usuario);

    } catch (err) {
        next(err);
    }
}
async function deleteUsuario(req, res, next) { 
    try {
        const usuario = await Usuario.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!usuario) throw new Error("Usuario não existe");

        await usuario.destroy();

        res.send({ success: true });

    } catch (err) {
        next(err);
    }
}


module.exports = { getAllUsuarios, getOneUsuario, insertUsuario, updateUsuario, deleteUsuario }


