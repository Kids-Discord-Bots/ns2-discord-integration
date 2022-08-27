import express from "express";

const __all__ = [
    "/stats"
]

export function init(app : express.Application) {
    app.get('/', function (req, res) {
        res.send("GET received")
    })

    app.post('/', function (req, res) {
        res.send("POST received")
    })

    for (const path of __all__) {
        import(`./routes${path}.ts`).then(route => {
            route.init(app, path)
        })
    }
}
