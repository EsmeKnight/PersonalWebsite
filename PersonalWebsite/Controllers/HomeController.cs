using Microsoft.AspNetCore.Mvc;

namespace PersonalWebsite.Controllers
{
    public class HomeController : Controller
    {

        [Route("/")]
        [Route("/home")]
        public IActionResult Index()
        {
            return View();
        }

        [Route("/webdevelopment")]
        public IActionResult Webdevelopment()
        {
            return View();
        }
    }
}
