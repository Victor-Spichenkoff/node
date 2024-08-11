import { RequestHandler } from "express";

export const uploadController: RequestHandler = (req, res) => {
    const { name } = req.body

    const photo = req.file
    if(!photo || !photo.mimetype.includes("image"))
        return res.status(404).send({ error: "Envie uma foto, ANIMAL! " })

    res.json(name)
}