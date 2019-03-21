using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BMS_Book_Management.Controllers
{
    public class BookController : Controller
    {
        // GET: Book
        public ActionResult Category()
        {
            return View();
        }
    }
}