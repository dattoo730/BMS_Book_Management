using BMS_Book_Management.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BMS_Book_Management.Areas.Admin.Models
{
    public class DetailOrderModel
    {
        BMS_Book_ManagementDBEntities db = new BMS_Book_ManagementDBEntities();
        public List<DetailOrderViewModel> ShowDetailOrder(int id)
        {
            try
            {
                var detail = db.DetailOrders.Where(x => x.OrderID == id).ToList();
                List<DetailOrderViewModel> alldetail = new List<DetailOrderViewModel>();
                foreach (var i in detail)
                {
                    var d = new DetailOrderViewModel(i);
                    alldetail.Add(d);
                }
                return alldetail;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}