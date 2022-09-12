$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:8
            },
            sname:{
                required:true,
                minlength:4
            },
            emailaddress:{
                required:true,
                email:true

            },
            pass:{
                minlength:6
            },
            day:{
                required:true
            },
            gender:{
                required:true
            }


        },
        messages:{
            fname:{
            required:"enter first name",
            }  
        }
     
        
    })
})