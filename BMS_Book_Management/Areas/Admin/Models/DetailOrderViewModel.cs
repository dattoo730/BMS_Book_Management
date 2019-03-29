using BMS_Book_Management.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BMS_Book_Management.Areas.Admin.Models
{
    public class DetailOrderViewModel
    {
        public int OrderID;
        public String BookName;
        public Nullable<int> Quantity;
        public Nullable<float> Price;
        public string OrderNote;
        public string RecipientAddress;
        public string RecipientPhone;
        public string RecipientName;
        public String Status;

        public DetailOrderViewModel() { }
        public DetailOrderViewModel(DetailOrder d)
        {
            this.OrderID = d.OrderID;
            this.BookName = d.Book.Title;
            this.Quantity = d.Quantity;
            this.Price = (float)d.Book.Price;
            this.RecipientName = d.Order.RecipientName;
            this.RecipientPhone = d.Order.RecipientPhone;
            this.RecipientAddress = d.Order.RecipientAddress;
            this.Status = d.Order.StatusObject.Name;
            this.OrderNote = d.Order.OrderNote;
        }
    }
}