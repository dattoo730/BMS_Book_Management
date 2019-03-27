using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BMS_Book_Management.Controllers
{
    public class AccountController : Controller
    {
        // GET: Account
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult EditProfile()
        {
            return View();
        }
        public ActionResult _ChangePasswordPartial()
        {
            return View();
        }
        
    }
}