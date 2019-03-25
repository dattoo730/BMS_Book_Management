using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BMS_Book_Management.Areas.Admin.Controllers
{
    public class CommentController : Controller
    {
        // GET: Admin/Comment
        public ActionResult AddComment()
        {
            return View();
        }
        public ActionResult ReplyComment()
        {
            return View();
        }
        public ActionResult UpdateComment()
        {
            return View();
        }
        public ActionResult DeleteComment()
        {
            return View();
        }
        public ActionResult DetailsComment()
        {
            return View();
        }
    }
}