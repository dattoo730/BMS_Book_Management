using BMS_Book_Management.Areas.Admin.Models;
using BMS_Book_Management.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BMS_Book_Management.Areas.Admin.Controllers
{
    public class OrderController : Controller
    {
        
        // GET: Admin/Order
        //Details order
        [HttpGet]
        public ActionResult DetailOrder(int id)
        {
            DetailOrderModel detailOrderModel = new DetailOrderModel();
            List<DetailOrderViewModel> alldetail = detailOrderModel.ShowDetailOrder(id);
            return View(alldetail);
        }
        [HttpGet]
        //update status for order 
        public ActionResult UpdateStatus(int id)
        {
            OrderModel ordersViewModel = new OrderModel();
            var orderView = ordersViewModel.GetDetailOrder(id);
            
            return View(orderView);
        }
        [HttpPost]
        //update status for order 
        public ActionResult UpdateStatus(int OrderID, String Status)
        {
            OrderModel ordersViewModel = new OrderModel();
            int s = Convert.ToInt32(Status);
            var d = ordersViewModel.UpdateStatusOrder(OrderID,s);          
            return RedirectToAction("ManageOrder", "Home");
        }
        // cancel order
        public ActionResult CancalOrder()
        {
            return View();
        }
    }
}