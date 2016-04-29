function makeCoffee(evt) {
         $('#coffee_image').attr('src', "static/coffee_machine.jpg");
         setTimeout(function() { $('#coffee_image').attr('src', "static/coffee_mug.jpg"); }, 500);
         setTimeout(function() { $('#coffee_image').attr('src', "static/coffee_beans.jpg"); }, 1500);
    }

    $('#coffee_image').click(makeCoffee);