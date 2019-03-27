using BMS_Book_Management.Models.AspNetIdentity;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace BMS_Book_Management.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Register()
        {
           

            return View();
        }
        public ActionResult Login()
        {

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public async Task<string> AddUser()
        {
            
            //var user = new ApplicationUser { UserName = "aaaaa", Email = "datt@gmail.com" };
            //UserStore<ApplicationUser> Store = new UserStore<ApplicationUser>(new ApplicationDbContext());
            //ApplicationUserManager userManager = new ApplicationUserManager(Store);
            //var result = await userManager.CreateAsync(user, "12345678");




            //ApplicationDbContext context = new ApplicationDbContext();
            //var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));
            //var role = new Microsoft.AspNet.Identity.EntityFramework.IdentityRole();
            //role.Name = "User";
            //roleManager.Create(role);
            return "OK";
        }


    }
}