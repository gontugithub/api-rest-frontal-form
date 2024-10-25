$(document).ready(function(){	
	$(document).on('submit', '#reg-form', function()
	{

        var name = $("#reg-form").find("input[name='Name']").val();
        var price = $("#reg-form").find("input[name='Price']").val();
        var description = $("#reg-form").find("input[name='Description']").val();

        console.log(name+price+description);

        $.ajax({	
			type : 'POST',
			url  : 'http://localhost:8080/api/products',
			data : JSON.stringify({ 
                     name: name,
                     description: description,
                     price: price
                     }),
            contentType:'application/json',
			success :  function(data)
		   {						
			console.log("success", data);	
			}
		});
		return false;
	});
});