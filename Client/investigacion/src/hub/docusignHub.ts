import * as signalR from "@microsoft/signalr";

const userId = "userId123";
const additionalParam = "paramValue";
const urlServer_HUB = `https://localhost:7028/docusign-hub?userId=${userId}&additionalParam=${additionalParam}`



export const startConnection = async () => {

    const hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(urlServer_HUB)
        .configureLogging(signalR.LogLevel.Information)
        .build();


    try {


        hubConnection.on("ReceiveMessage", (e) => {

            console.log(e);
        });

        await hubConnection.start();
        console.log("Conexión con SignalR establecida.");
    } catch (err) {
        console.error("Error al conectar con SignalR:", err);
    }
};

