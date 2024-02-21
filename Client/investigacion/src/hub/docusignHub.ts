import * as signalR from "@microsoft/signalr";
import { SwipeableDrawer } from "@mui/material";

const userId = "userId123";
const additionalParam = "paramValue";
const urlServer_HUB = `https://localhost:7028/docusign-hub?userId=${userId}&additionalParam=${additionalParam}`

const initialConecction = () => {
    const hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(urlServer_HUB)
        .configureLogging(signalR.LogLevel.Information)
        .build();

    return hubConnection;
}

export const startConnection = async () => {


    try {
        const wss = initialConecction();

        wss.on("ReceiveMessage", (e) => {

            console.log(e);
        });

        await wss.start();

        

        console.log("Conexión con SignalR establecida.");
    } catch (err) {
        console.error("Error al conectar con SignalR:", err);
    }
};

