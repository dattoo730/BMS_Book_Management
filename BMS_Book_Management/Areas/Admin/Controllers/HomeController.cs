using BMS_Book_Management.Areas.Admin.Models;
using BMS_Book_Management.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BMS_Book_Management.Areas.Admin.Controllers
{
    public class HomeController : Controller
    {
       
        // GET: Admin/Home
        public ActionResult DashBoard()
        {
            return View();
        }
        public ActionResult Login()
        {
            return View();
        }
        public ActionResult ManageBooks()
        {
            return View();
        }
        public ActionResult ManageCategories()
        {
            return View();
        }

        public ActionResult ManageAccounts()
        {
            return View();
        }

        public ActionResult ManageComments()
        {
            return View();
        }
        public ActionResult ManageOrder()
        {
            OrderModel orderModel = new OrderModel();
            var order = orderModel.ShowAllOrder();
            return View(order);
        }
    }
}