const Comments = require("../comments/comments.controller");
const { Router } = require("express");
const router = Router();

// obtener todas los comentarios
router.get("/allcomments", Comments.getComments);
// insertar comentario
router.post("/addcomments", Comments.addComments);
// actualizar comentario
router.put("/uptadecomments", Comments.uptadeComments);
// eliminar comentario
router.delete("/deletecomments", Comments.deleteComments);

module.exports = router;
