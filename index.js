
$(document).ready(function () {
    // Activate menu items
    $("#symhealthregistrations").addClass("active open");
    $("#symhealth2").addClass("active");


    Metronic.init(); // Init Metronic core components
    Layout.init(); // Init current layout
    QuickSidebar.init(); // Init quick sidebar

    // Initialize DataTable
    $('#sample_editable_1').DataTable({
        dom: 'T<"clear">lfrtip',
        tableTools: {
            "sSwfPath": "<?php echo base_url(); ?> assets/swf/copy_csv_xls_pdf.swf", // Make sure this path is correct
            "aButtons": [
                "copy", "csv", "xls", "pdf", "print"
            ]
        }
    });

    // Form validation for the report form
    $("#report").validate({

        rules: {
            category: {
                required: true
            },
            name: {
                required: true
            },
            gender: {
                required: true
            },
            address: {
                required: true
            },
            othercategory: {
                required: true
            },
            email: {
                required: true,
                email: true // Ensure email is in the correct format
            },
            age: {
                required: true,
                digits: true, // Ensure age is a number
                min: 1, // Minimum age value (optional, can be customized)
                max: 120 // Maximum age value (optional, can be customized)
            }
        },
        // Custom error messages
        messages: {
            category: {
                required: '<span style="color:red;">Please select category</span>'
            },
            name: {
                required: '<span style="color:red;">Please enter name</span>'
            },
            gender: {
                required: '<span style="color:red;">Please select gender</span>'
            },
            address: {
                required: '<span style="color:red;">Please enter address</span>'
            },
            othercategory: {
                required: '<span style="color:red;">Please select other category</span>'
            },
            email: {
                required: '<span style="color:red;">Please enter email</span>',
                email: '<span style="color:red;">Please enter a valid email</span>'
            },
            age: {
                required: '<span style="color:red;">Please enter age</span>',
                digits: '<span style="color:red;">Please enter a valid age (number)</span>',
                min: '<span style="color:red;">Age must be at least 1</span>',
                max: '<span style="color:red;">Age must be less than or equal to 120</span>'
            }
        },
        // Custom error placement (insert after the parent of the element)
        errorPlacement: function (error, element) {
            error.insertAfter(element.parent());
        }

    });
});
