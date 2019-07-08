/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 declare var Producto;

module.exports = {

    upload: async(req,res)=>{
        const parametros = req.allParams();

        const opcionesCarga = {
            maxBytes:10000000,
            dirname: __dirname + '/../../archivos',
        };

        if(parametros.idProducto) {

            req.file('imagen')
            .upload(
                opcionesCarga,
                (error, archivosSubidos) => {
                    if(error){
                        return res.serverError({
                            error: 500,
                            mensaje: 'Error subiendo archivo de imagen'
                        });
                    }
                    const noExistenArchivos = archivosSubidos.length === 0;
                    if(noExistenArchivos) {
                        return res.badRequest({
                            error: 400,
                            mensaje: 'No envia ningun archivo'
                        });
                    } else {
                        console.log(archivosSubidos);

                        try{

                        }catch(e){
                            return res.error({
                            })
                        }

                        
                        // LOGICA NEGOCIO
                        // GUARDAR LOS METADATOS DEL ARCHIVO
                        // (ID PRODUCTO)

                        return res.ok({mensaje: 'ok'});
                    }
                }
            );
        } else {
            return res.error({
                error:400,
                mensaje:'No envia id de producto'
            })
        }       
    }
};

