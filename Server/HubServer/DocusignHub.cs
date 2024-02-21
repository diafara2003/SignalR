
using Microsoft.AspNetCore.SignalR;

namespace HubServer
{
    public class DocusignHub : Hub
    {


        public override async Task OnConnectedAsync()
        {
            // Aquí puedes guardar el usuario que se conecta
            string id = Context.UserIdentifier;
            // Puedes almacenar este userId en alguna estructura de datos, como un diccionario
            string userId = Context.GetHttpContext().Request.Query["userId"];
            string additionalParam = Context.GetHttpContext().Request.Query["additionalParam"];



            await Clients.All.SendAsync("ReceiveMessage", $"{Context.ConnectionId} has joinned");
        }


        public override Task OnDisconnectedAsync(Exception? exception)
        {
            return base.OnDisconnectedAsync(exception);
        }
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }




    }
}
