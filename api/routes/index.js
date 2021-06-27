const express = require("express");
const {PatchesGetOne, PatchesGetAll,PatchesAddOne,PatchesFullUpdateOne,
PatchesPartialUpdateOne,PatchesDeleteOne } = require("../controllers/patchesController")
const router = express.Router();

router.route("/patches")
.get(PatchesGetAll)
.post(PatchesAddOne);

router.route("/patches/:patchId")
.get(PatchesGetOne)
.put(PatchesFullUpdateOne)
.patch(PatchesPartialUpdateOne)
.delete(PatchesDeleteOne)

module.exports = router;