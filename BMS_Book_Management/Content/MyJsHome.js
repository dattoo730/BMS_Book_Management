
$.validator.addMethod("CheckDateOfBirth", function (value, element) {
    var myDate = new Date(value);
    var today = new Date();
    if (myDate > today) {
        return false;
    }
    return true;
});

jQuery.validator.addMethod("NameRegex", function (value, element) {
    return this.optional(element) || !/^(?:[\p{L}\p{Mn}\p{Pd}\'\x{2019}]+\s[\p{L}\p{Mn}\p{Pd}\'\x{2019}]+\s?)+$/i.test(value);
}, "Name must contain only letters or space");

$.validator.addMethod("CheckBlank", function (value, element) {
    var patterncheck = /[a-zA-Z]/;
    if (value == "" || !value.match(patterncheck)) {
        return false;
    } else
        return true;
});

$.validator.addMethod("AllNumberInteger", function (value, element) {
    return this.optional(element) || !/[^0-9\-\/]/.test(value);
});

$.validator.addMethod("NotAcceptedSpecialCharaters", function (value, element) {
    return this.optional(element) || /^\w+$/i.test(value);
});








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

$("#updateprofileformid").validate({
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
        fullname: {
            required: true,
            minlength: 5,
            maxlength: 20,
            NameRegex: true,
            CheckBlank: true
        },
        phone: {
            required: true,
            AllNumberInteger: true,
            minlength: 10,
            maxlength: 10

        },
        address: {
            minlength: 5,
            maxlength: 50,
        },
        birthday: {
            required: true,
            date: true,
            CheckDateOfBirth: true
        },
        status: {
            required: true,
        },
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
        fullname: {
            required: "Please provide a full name",
            minlength: "Full name must be at least 5 characters long",
            maxlength: "Full name must be maximum 20 characters long",
            NameRegex: "Please enter valid full name. No special character allowed. ",
            CheckBlank: "This field mustn't be empty."
        },
        phone: {
            required: "Please provide a phone number",
            minlength: "Phone number must be at least 10 characters long",
            maxlength: "Phone number must be maximum 10 characters long",
            AllNumberInteger: "Please enter a valid phone number."
        },
        address: {
            minlength: "Address must be at least 5 characters long",
            maxlength: "Address must be maximum 50 characters long",
        },
        birthday: {
            required: "Please provide date of birth",
            date: "Please provide a valid date of birth",
            CheckDateOfBirth: "Birth day can't be greater than today"
        },
        status: {
            required: "Please provide a status",
        }
    },

    submitHandler: function (form) {
        alert("Form Submiting");
        form.submit();
    }
});