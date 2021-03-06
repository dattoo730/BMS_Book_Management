﻿
/*----------------------DAT - LAYOUT - BEGIN-----------------------*/
  //metisMenu
!function (a, b, c) { function d(b, c) { this.element = a(b), this.settings = a.extend({}, f, c), this._defaults = f, this._name = e, this.init() } var e = "metisMenu", f = { toggle: !0, doubleTapToGo: !1 }; d.prototype = { init: function () { var b = this.element, d = this.settings.toggle, f = this; this.isIE() <= 9 ? (b.find("li.active").has("ul").children("ul").collapse("show"), b.find("li").not(".active").has("ul").children("ul").collapse("hide")) : (b.find("li.active").has("ul").children("ul").addClass("collapse in"), b.find("li").not(".active").has("ul").children("ul").addClass("collapse")), f.settings.doubleTapToGo && b.find("li.active").has("ul").children("a").addClass("doubleTapToGo"), b.find("li").has("ul").children("a").on("click." + e, function (b) { return b.preventDefault(), f.settings.doubleTapToGo && f.doubleTapToGo(a(this)) && "#" !== a(this).attr("href") && "" !== a(this).attr("href") ? (b.stopPropagation(), void (c.location = a(this).attr("href"))) : (a(this).parent("li").toggleClass("active").children("ul").collapse("toggle"), void (d && a(this).parent("li").siblings().removeClass("active").children("ul.in").collapse("hide"))) }) }, isIE: function () { for (var a, b = 3, d = c.createElement("div"), e = d.getElementsByTagName("i"); d.innerHTML = "<!--[if gt IE " + ++b + "]><i></i><![endif]-->", e[0];)return b > 4 ? b : a }, doubleTapToGo: function (a) { var b = this.element; return a.hasClass("doubleTapToGo") ? (a.removeClass("doubleTapToGo"), !0) : a.parent().children("ul").length ? (b.find(".doubleTapToGo").removeClass("doubleTapToGo"), a.addClass("doubleTapToGo"), !1) : void 0 }, remove: function () { this.element.off("." + e), this.element.removeData(e) } }, a.fn[e] = function (b) { return this.each(function () { var c = a(this); c.data(e) && c.data(e).remove(), c.data(e, new d(this, b)) }), this } }(jQuery, window, document);
  //metisMenu END

  //sb - admin - 2

$(function () {
    $('#side-menu').metisMenu();
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function () {
    $(window).bind("load resize", function () {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function () {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
});
  //sb - admin - 2 END
//Customize - begin
//check all list
function toggle(source) {
    checkboxes = document.getElementsByName('lstdel');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
}
//multibledel ajax
function multibledelaccount() {
    checkboxes = document.getElementsByName('lstdel');
    var lst = new Array();
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        if (checkboxes[i].checked) {
            lst.push(checkboxes[i].value);
        }
    }
    if (lst.length > 0) {
        if (confirm("Are you sure?") == true) {
            alert("Done!");
        }
    }
    else alert("Notthing was selected for deleting.");
}
//multibledel ajax
function MultibleHiddenComment() {
    checkboxes = document.getElementsByName('lstdel');
    var lst = new Array();
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        if (checkboxes[i].checked) {
            lst.push(checkboxes[i].value);
        }
    }
    if (lst.length > 0) {
        if (confirm("Are you sure?") == true) {
            alert("Done!");
        }
    }
    else alert("Notthing was selected");
}
function ShowImageFromFile(input, id) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            // alert("fff");
            $(id)
                .attr('src', e.target.result)
                .width(200)
                .height(200);
        };
        reader.readAsDataURL(input.files[0]);

        //$("#anhdaidientxtfor").val()=dt;
    }
}
//Customize - End
  //Add Book Form Validation-Begin

$.validator.addMethod("AllNumberInteger", function (value, element) {
    return this.optional(element) || !/[^0-9\-\/]/.test(value);
}, );

$.validator.addMethod("NotAcceptedSpecialCharaters", function (value, element) {
    return this.optional(element) || /^\w+$/i.test(value);
});
$.validator.addMethod("CheckBlank", function (value, element) {
    var patterncheck = /[a-zA-Z]/;
    if (value == "" || !value.match(patterncheck)) {      
        return false;
    } else
        return true;
});

$("#addingbookformid").validate({
    rules: {
        booktitle: {
            required: true,
            minlength: 5,
            maxlength: 25,
            NameRegex: true,
            CheckBlank: true
        },
        booksummary: {
            required: true,
            minlength: 10,
            maxlength: 200,
            CheckBlank: true
        },
        bookcategory: {
            required: true,
        },
        bookauthor: {
            required: true,
        },
        bookpublishername: {
            required: true,
        },
        bookprice: {
            required: true,
            range: [1.00, 99999.00],
            maxlength: 8
        },
        bookquantity: {
            required: true,
            range: [1, 999999],
            AllNumberInteger: true,
            maxlength: 6
        },
        bookimageurl: {
            required: true,
            extension: "jpg|png"
        }
    },

    messages: {
        booktitle: {
            required: "Please provide a book title",
            minlength: "Book title must be at least 5 characters long",
            maxlength: "Book title must be maximum 25 characters long",
            NameRegex: "Please enter valid title. No special character allowed. ",
            CheckBlank: "This field mustn't be empty."
        },
        booksummary: {
            required: "Please provide a book summary",
            minlength: "Book summary must be at least 10 characters long",
            maxlength: "Book summary must be maximum 200 characters long",
            CheckBlank: "This field mustn't be empty."
        },
        bookcategory: {
            required: "Please provide a book category",
        },
        bookauthor: {
            required: "Please provide a book author",
        },
        bookpublishername: {
            required: "Please provide a book publisher name",
        },
        bookprice: {
            required: "Please provide a book price",
            range: "Please enter a book price between 1.00 and 99999.00",
            maxlength: "Book price must be maximum 8 characters long"
        },
        bookquantity: {
            required: "Please provide a book quantity",
            range: "Please enter a book quantity between 1 and 999999",
            maxlength: "Book quantity must be maximum 6 characters long",
            AllNumberInteger: "Please enter a valid number (integer)."
        },
        bookimageurl: {
            required: "Please provide a book image url",
            extension: "Please choose a valid image (png, jpg)."
        }
    },

    submitHandler: function (form) {
        alert("All Ok");
        form.submit();
    }
});

  //Add Book Form Validation-End
  //Register Form Validation-Begin
 $("#registerformid").validate({
        rules: {
            username: {
                required: true,
                minlength: 9,
                maxlength: 50,
                NotAcceptedSpecialCharaters: true,
                CheckBlank: true
            },
            email: {
                required: true,
                minlength: 9,
                maxlength: 50,
                email: true,
                CheckBlank: true
        },
            password: {
                required: true,
                minlength: 8,
                maxlength: 20,
                CheckBlank: true
            },
            repassword: {
                required: true,               
                equalTo: '[name="password"]'
            }

        },
       
        messages: {
            username: {
                required: "Please provide a username",
                minlength: "Username must be at least 9 characters long",
                maxlength: "Username must be maximum 50 characters long",
                NotAcceptedSpecialCharaters: "Please enter valid Username. No special character allowed. ",
                CheckBlank: "This field mustn't be empty."
            },
            email: {
                required: "Please provide a email as username",
                minlength: "Username must be at least 9 characters long",
                maxlength: "Username must be maximum 50 characters long",
                email: "Please enter valid email as a username! ",
                CheckBlank: "This field mustn't be empty."
        },
            password: {
                required: "Please provide a password",
                minlength: "Password must be at least 8 characters long",
                maxlength: "Password must be maximum 20 characters long",
                CheckBlank: "This field mustn't be empty."
            }, repassword: {
                required: "Please provide a Re-password",
                equalTo: "Password and Re-Password doesn't match!"
            }
        },

        submitHandler: function (form) {
        alert("All Ok");
        form.submit();
    }
});
  //Register Form Validation-End
//Login Form Validation-Begin

$("#loginformid").validate({
    rules: {
        email: {
            required: true,
            minlength: 9,
            maxlength: 50,
            email: true,
            CheckBlank: true
        },
        password: {
            required: true,
            minlength: 8,
            maxlength: 20,
            CheckBlank: true
        },

    },

    messages: {
        email: {
            required: "Please provide a email as username",
            minlength: "Username must be at least 9 characters long",
            maxlength: "Username must be maximum 50 characters long",
            email: "Please enter valid email as a username! ",
            CheckBlank: "This field mustn't be empty."
        },
        password: {
            required: "Please provide a password",
            minlength: "Password must be at least 8 characters long",
            maxlength: "Password must be maximum 20 characters long",
            CheckBlank: "This field mustn't be empty."
        }
    },

    submitHandler: function (form) {
        alert("All Ok");
        form.submit();
    }
});

//Login Form Validation-End

//Update Avata Form Validation-Begin

$("#changeavataformid").validate({
    rules: {
        avatar: {
            required: true,
            extension: "jpg|png"
        }
    },

    messages: {
        avatar: {
            required: "Please choose a image for your avatar",
            extension: "Please choose a valid image (png, jpg)."
        }
    },
    submitHandler: function (form) {
        alert("All Ok");
         form.submit();
    }
});

//Update Avata Form Validation-End
//Change password Form Validation-Begin

$("#changepasswordformid").validate({
    rules: {
        oldpassword: {
            required: true,
            CheckBlank: true
        },
        newpassword: {
            required: true,
            minlength: 8,
            maxlength: 20,
            CheckBlank: true
        },
        renewpassword: {
            required: true,
            equalTo: '[name="newpassword"]'
        }
    },

    messages: {
        oldpassword: {
            required: "Please provide a current password",
            CheckBlank: "This field mustn't be empty."
        },
        newpassword: {
            required: "Please provide a new password",
            minlength: "New Password must be at least 8 characters long",
            maxlength: "New Password must be maximum 20 characters long",
            CheckBlank: "This field mustn't be empty."
        },
        renewpassword: {
            required: "Please provide a Re-password",
            equalTo: "Password and Re-Password doesn't match!"
        }
    },
    submitHandler: function (form) {
        alert("All Ok");
        //  form.submit();
    }
});

  //Change password Form Validation-End
/*----------------------DAT - LAYOUT - END  -----------------------*/

/*----------------------DIENG - ... - BEGIN-----------------------*/
//Change Category Form Validation

$("#updateCategory").validate({
    rules: {
        Categoryname: {
            required: true,
            minlength: 8,
            maxlength: 30,
            CheckBlank: true
        },
        DescripCategory: {
            required: true,
            minlength: 20,
            CheckBlank: true
        }
    },
    messages: {
        Categoryname: {
            required: "Please provide a category name",
            minlength: "Category name must be at least 8 characters long",
            maxlength: "Category name must be maximum 30 characters long",
            CheckBlank: "This field mustn't be empty."
        },
        DescripCategory: {
            required: "Please provide description",
            minlength: "Description must be at least 8 characters long",
            CheckBlank: "This field mustn't be empty."
        }
    },
    submitHandler: function (form) {
        if (confirm("Are you sure?") == true) {
            alert("updated");
        }
    }
});
//Add Category Form Validation
$("#AddCategory").validate({
    rules: {
        Categoryname: {
            required: true,
            minlength: 8,
            maxlength: 30,
            CheckBlank: true
        },
        DescripCategory: {
            required: true,
            minlength: 20,
            CheckBlank: true
        }
    },
    messages: {
        Categoryname: {
            required: "Please provide a category name",
            minlength: "Category name must be at least 8 characters long",
            maxlength: "Category name must be maximum 30 characters long",
            CheckBlank: "This field mustn't be empty."
        },
        DescripCategory: {
            required: "Please provide description",
            minlength: "Description must be at least 8 characters long",
            CheckBlank: "This field mustn't be empty."
        }
    },
    submitHandler: function (form) {
        alert("ok");
        //  form.submit();
    }
});
//Change Book Form Validation
jQuery.validator.addMethod("NameRegex", function (value, element) {
    return this.optional(element) || !/^(?:[\p{L}\p{Mn}\p{Pd}\'\x{2019}]+\s[\p{L}\p{Mn}\p{Pd}\'\x{2019}]+\s?)+$/i.test(value);
}, "Name must contain only letters or space");
$("#updatingbookformid").validate({
    rules: {
        booktitle: {
            required: true,
            minlength: 5,
            maxlength: 25,
            NameRegex: true,
            CheckBlank: true
        },
        booksummary: {
            required: true,
            minlength: 10,
            maxlength: 200,
            CheckBlank: true
        },
        bookcategory: {
            required: true,
        },
        bookauthor: {
            required: true,
        },
        bookpublishername: {
            required: true,
        },
        bookprice: {
            required: true,
            range: [1.00, 99999.00],
            maxlength: 8
        },
        bookquantity: {
            required: true,
            range: [1, 999999],
            AllNumberInteger: true,
            maxlength: 6
        },
        bookimageurl: {
            required: true,
            extension: "jpg|png"
        }
    },

    messages: {
        booktitle: {
            required: "Please provide a book title",
            minlength: "Book title must be at least 5 characters long",
            maxlength: "Book title must be maximum 25 characters long",
            NameRegex: "Please enter valid title. No special character allowed. ",
            CheckBlank: "This field mustn't be empty."
        },
        booksummary: {
            required: "Please provide a book summary",
            minlength: "Book summary must be at least 10 characters long",
            maxlength: "Book summary must be maximum 200 characters long",
             CheckBlank: "This field mustn't be empty."
        },
        bookcategory: {
            required: "Please provide a book category",
        },
        bookauthor: {
            required: "Please provide a book author",
        },
        bookpublishername: {
            required: "Please provide a book publisher name",
        },
        bookprice: {
            required: "Please provide a book price",
            range: "Please enter a book price between 1.00 and 99999.00",
            maxlength: "Book price must be maximum 8 characters long"
        },
        bookquantity: {
            required: "Please provide a book quantity",
            range: "Please enter a book quantity between 1 and 999999",
            maxlength: "Book quantity must be maximum 6 characters long",
            AllNumberInteger: "Please enter a valid number (integer)."
        },
        bookimageurl: {
            required: "Please provide a book image url",
            extension: "Please choose a valid image (png, jpg)."
        }
    },

    submitHandler: function (form) {
        if (confirm("Are you sure?") == true) {
            alert("updated");
        }
    }
});
//imagePreview
function ShowImagePreview(imageUploader, previewImage) {
    if (imageUploader.files && imageUploader.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(previewImage).attr('src', e.target.result);
        }
        reader.readAsDataURL(imageUploader.files[0]);
    }
}
//delete book
function deleteBook(id) {
    if (confirm("Are you sure?") == true) {
        alert("Deleted.");
    }
};
//go to edit the book
function EditBooks(id) {
    $.ajax({
        url: "/Admin/Book/UpdateBook",
        type: 'Get',
        data: { id: id },

        success: function (result) {
            $('#managebookcontrol').html(result);

        },
        error: function (xhr) {
            console.log(xhr.responseText);
            alert("Error has occurred..");
        }
    });
}

//go to details the book
function DetailsBook() {
    $.ajax({
        url: "/Admin/Book/DetailsBook",
        type: 'Get',
        //data: { id: id },

        success: function (result) {
            $('#managebookcontrol').html(result);

        },
        error: function (xhr) {
            console.log(xhr.responseText);
            alert("Error has occurred..");
        }
    });
}
//Get back a last page
function GetBack() {
    location.reload(true);
}
//go to add book page
function AddBook() {
    $.ajax({
        url: "/Admin/Book/AddBook",
        type: 'Get',
        //data: { id: id },

        success: function (result) {
            $('#managebookcontrol').html(result);

        },
        error: function (xhr) {
            console.log(xhr.responseText);
            alert("Error has occurred..");
        }
    });
}
//go to add category page
function AddCategory() {
    $.ajax({
        url: "/Admin/Category/AddCategory",
        type: 'Get',
        //data: { id: id },

        success: function (result) {
            $('#manageCategorycontrol').html(result);

        },
        error: function (xhr) {
            console.log(xhr.responseText);
            alert("Error has occurred..");
        }
    });
}
//go to update category page
function UpdateCategory(id) {
    $.ajax({
        url: "/Admin/Category/UpdateCategory",
        type: 'Get',
        data: { id: id },

        success: function (result) {
            $('#manageCategorycontrol').html(result);

        },
        error: function (xhr) {
            console.log(xhr.responseText);
            alert("Error has occurred..");
        }
    });
}
//go to details category page
function DetailsCategory() {
    $.ajax({
        url: "/Admin/Category/DetailsCategory",
        type: 'Get',
        //data: { id: id },

        success: function (result) {
            $('#manageCategorycontrol').html(result);

        },
        error: function (xhr) {
            console.log(xhr.responseText);
            alert("Error has occurred..");
        }
    });
}

//format view table
$(document).ready(function () {
    $('#dataTables-ManageBook').DataTable();
    $('#dataTables-Manageaccount').DataTable();
    $('#managecommenttableid').DataTable();
    $('#dataTables-Manageoders').DataTable();
    $('#dataTables-detailorder').DataTable();
});

//Show details order
function ShowDetailOrder(id) {
    $.ajax({
        url: "/Admin/Order/DetailOrder",
        type: 'Get',
        data: { id: id },

        success: function (result) {
            $('#manageorder').html(result);

        },
        error: function (xhr) {
            console.log(xhr.responseText);
            alert("Error has occurred..");
        }
    });
}
//Get order
function GetOrder(id) {
    $.ajax({
        url: "/Admin/Order/UpdateStatus",
        type: 'Get',
        data: { id: id },

        success: function (result) {
            $('#manageorder').html(result);

        },
        error: function (xhr) {
            console.log(xhr.responseText);
            alert("Error has occurred..");
        }
    });
}
/*----------------------DIENG - ... - END  -----------------------*/