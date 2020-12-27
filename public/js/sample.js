$("#rangeSelect").on('change',function () {
       //alert($('#rangeSelect').val())
  
        $.post("/admin",
        {
            to_range: ($('#rangeSelect').val()).toString(),
            
        },
        function (data, status) {
            console.log(data)
            $("#hello-new").html("<p> got value"+(data[rangeVal]).toString()+" </p>")

        })

});

