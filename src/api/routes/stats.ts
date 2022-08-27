import express from "express";
import { WebhookClient } from 'discord.js'

export function init(app : express.Application, path : string) {
    app.post(path, async function (req, res) {
        console.log(req.body)

        // @ts-ignore
        const webhook = new WebhookClient({ url: process.env.DISCORD_WEBHOOK_URL });

        webhook.send("test").then()

        res.status(200).send("POST received")
    })
}
