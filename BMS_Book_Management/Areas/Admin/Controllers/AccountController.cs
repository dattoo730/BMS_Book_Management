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
        public ActionResult _AddAccountPartial()
        {
            return View();
        }
        

        [HttpGet]
        public ActionResult UpdateAccount(string id)
        {
            ViewBag.AccountID = id;
            return View();
        }

        [HttpGet]
        public ActionResult DeleteAccount(string id)
        {
            return View();
        }

        [HttpGet]
        public ActionResult DetailsAccount(string id)
        {
            ViewBag.AccountID = id;
            return View();
        }

        [HttpGet]
        public ActionResult _ChangePasswordPartial()
        {

            return View();
        }

        [HttpGet]
        public ActionResult _ResetPasswordPartial(string id)
        {
            ViewBag.AccountID = id;
            return View();
        }

        [HttpPost]
        public ActionResult DeleteConfirm(string id)
        {
            ViewBag.AccountID = id;
            return View();
        }
    }
}