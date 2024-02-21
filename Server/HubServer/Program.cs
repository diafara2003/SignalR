using HubServer;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddSignalR();

builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy",
        builder => builder.
    WithOrigins("http://localhost:5173")
    .AllowAnyMethod()
    .AllowAnyHeader()
    .AllowCredentials());
});
var app = builder.Build();



// Configure the HTTP request pipeline.

app.UseHttpsRedirection();


app.MapHub<DocusignHub>("docusign-hub");

app.UseCors("CorsPolicy");

app.Run();

