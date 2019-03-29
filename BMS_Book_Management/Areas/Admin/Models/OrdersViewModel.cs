using BMS_Book_Management.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BMS_Book_Management.Areas.Admin.Models
{
    public class OrdersViewModel
    {
        public int OrderID;
        public string UserName;
        public string RecipientAddress;
        public string RecipientPhone;
        public string RecipientName;
        public Nullable<int> TotalValue;
        public string OrderNote;
        public Nullable<System.DateTime> CreatedDate;
        public string Status;

        public OrdersViewModel() { }
        public OrdersViewModel(Order o)
        {
            this.OrderID = o.OrderID;
            this.UserName = o.AspNetUser.UserName;
            this.RecipientAddress = o.RecipientAddress;
            this.RecipientPhone = o.RecipientPhone;
            this.RecipientName = o.RecipientName;
            this.TotalValue = o.TotalValue;
            this.OrderNote = o.OrderNote;
            this.CreatedDate = o.CreatedDate;
            this.Status = o.StatusObject.Name;
        }


    }
}