using AspNetCore.SassCompiler;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews();

#if DEBUG
builder.Services.AddSassCompiler();
#endif

var app = builder.Build();

app.UseStaticFiles();
app.MapControllers();

app.Run();
