using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BMS_Book_Management.Areas.Admin.Controllers
{
    public class BookController : Controller
    {
        // GET: Admin/Book
        public ActionResult AddBook()
        {
            return View();
        }
       

        public ActionResult UpdateBook()
        {
            return View();
        }

        public ActionResult DeleteBook()
        {
            return View();
        }
        public ActionResult DetailsBook()
        {
            return View();
        }

    }
}