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
        [HttpGet]
        public ActionResult AddBook()
        {
            return View();
        }

        [HttpGet]
        public ActionResult UpdateBook(String id)
        {
            return View();
        }

        public ActionResult DeleteBook()
        {
            return View();
        }
        [HttpGet]
        public ActionResult DetailsBook()
        {
            return View();
        }

    }
}