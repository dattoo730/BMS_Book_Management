
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
}, );

$("#addingbookformid").validate({
    rules: {
        booktitle: {
            required: true,
            minlength: 5,
            maxlength: 25,
            NotAcceptedSpecialCharaters: true
        },
        booksummary: {
            required: true,
            minlength: 10,
            maxlength: 200,
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
            NotAcceptedSpecialCharaters: "Please enter valid title. No special character allowed. "
        },
        booksummary: {
            required: "Please provide a book summary",
            minlength: "Book summary must be at least 10 characters long",
            maxlength: "Book summary must be maximum 200 characters long"
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
                NotAcceptedSpecialCharaters: true
            },
            email: {
                required: true,
                minlength: 9,
                maxlength: 50,
                email: true
        },
            password: {
                required: true,
                minlength: 8,
                maxlength: 20,
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
                NotAcceptedSpecialCharaters: "Please enter valid Username. No special character allowed. "
            },
            email: {
                required: "Please provide a email as username",
                minlength: "Username must be at least 9 characters long",
                maxlength: "Username must be maximum 50 characters long",
                email: "Please enter valid email as a username! "
        },
            password: {
                required: "Please provide a password",
                minlength: "Password must be at least 8 characters long",
                maxlength: "Password must be maximum 20 characters long"
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
            email: true
        },
        password: {
            required: true,
            minlength: 8,
            maxlength: 20,
        },

    },

    messages: {
        email: {
            required: "Please provide a email as username",
            minlength: "Username must be at least 9 characters long",
            maxlength: "Username must be maximum 50 characters long",
            email: "Please enter valid email as a username! "
        },
        password: {
            required: "Please provide a password",
            minlength: "Password must be at least 8 characters long",
            maxlength: "Password must be maximum 20 characters long"
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
            required: true            
        },
        newpassword: {
            required: true,
            minlength: 8,
            maxlength: 20,
        },
        renewpassword: {
            required: true,
            equalTo: '[name="newpassword"]'
        }
    },

    messages: {
        oldpassword: {
            required: "Please provide a current password"
        },
        newpassword: {
            required: "Please provide a new password",
            minlength: "New Password must be at least 8 characters long",
            maxlength: "New Password must be maximum 20 characters long"
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

/*----------------------DIENG - ... - END  -----------------------*/