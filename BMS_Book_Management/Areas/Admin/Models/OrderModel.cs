using BMS_Book_Management.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BMS_Book_Management.Areas.Admin.Models
{
    public class OrderModel
    {
        
        public List<OrdersViewModel> ShowAllOrder()
        {
            using (BMS_Book_ManagementDBEntities db = new BMS_Book_ManagementDBEntities())
            {
                try
                {
                    List<Order> allorder = db.Orders.ToList();
                    var order = new List<OrdersViewModel>();
                    foreach (var i in allorder)
                    {
                        var d = new OrdersViewModel(i);
                        order.Add(d);
                    }
                    return order;
                }
                catch (Exception ex)
                {
                    return null;
                }
            }
        }
        public OrdersViewModel GetDetailOrder(int id)
        {
            using (BMS_Book_ManagementDBEntities db = new BMS_Book_ManagementDBEntities())
            {
                try
                {
                    var order = db.Orders.Where(x => x.OrderID == id).FirstOrDefault();
                    var orderViewS = new OrdersViewModel(order);
                    return orderViewS;
                }
                catch (Exception ex)
                {
                    return null;
                }
            }    
        }
        public bool UpdateStatusOrder(int id, int Status)
        {
            using (BMS_Book_ManagementDBEntities db = new BMS_Book_ManagementDBEntities())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        var i = 0;
                        var order = db.Orders.Where(x => x.OrderID == id).FirstOrDefault();
                        if (Status != order.StatusID)
                        {
                            order.StatusID = Status;
                            db.Entry(order).State = EntityState.Modified;
                            i = db.SaveChanges();
                            transaction.Commit();
                        }
                        if (i >= 1)
                            return true;
                        return false;
                    }
                    catch (Exception ex)
                    {
                        transaction.Rollback();
                        return false;
                    }
                }
            }
        }
    }
}