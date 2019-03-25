using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BMS_Book_Management.Areas.Admin.Controllers
{
    public class CategoryController : Controller
    {
        // GET: Admin/Category
        [HttpGet]
        public ActionResult AddCategory()
        {
            return View();
        }
        [HttpGet]
        public ActionResult UpdateCategory(String id)
        {
            return View();
        }
        public ActionResult DeleteCategory()
        {
            return View();
        }
        [HttpGet]
        public ActionResult DetailsCategory()
        {
            return View();
        }
    }
}