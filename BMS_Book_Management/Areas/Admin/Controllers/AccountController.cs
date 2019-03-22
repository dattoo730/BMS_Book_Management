using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BMS_Book_Management.Areas.Admin.Controllers
{
    public class AccountController : Controller
    {
        // GET: Admin/Account
        public ActionResult AddAccount()
        {
            return View();
        }
        public ActionResult UpdateAccount()
        {
            ViewBag.ModalHeaderName = "Update Account";
            return View();
        }
        public ActionResult DeleteAccount()
        {
            return View();
        }
        public ActionResult DetailsAccount()
        {
            return View();
        }

        [HttpGet]
        public ActionResult _ChangePasswordPartial()
        {

            return View();
        }
    }
}