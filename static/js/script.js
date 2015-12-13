(function(){
   $(document).ready(function()
   {
     $.ajax({
       url: 'static/js/calculator.js',
       dataType: "script",
       success: function (data, status, jqxhr)
       {
         console.log(exports.calculator.add(1, 2));
         var $display = $('.output').first();
         var total = 0;
         var calcVal = '';
         var display = 0;
         var op = false;

         updateDisplay(total);

      $('button').on('click', function()
      {
         var currentButton = $(this).val();
        // if the button is a number or a period
        if (!isNaN(parseInt(currentButton)) || currentButton === '.')
         {
            //store value for math operation
            if (display)
            {
               display += '' + currentButton;
            }
            else
            {
               display = currentButton;
            }
           calcVal = display;
           updateDisplay(display);
         }
         else
         {
            // store operation to perform function
           switch (currentButton)
           {
             case 'AC':
               allClear();
               break;
             case 'CE':
               clearCurrent();
               break;
             case '/':
               console.log('Dividing');
               break;
             case '*':
               console.log('Multiplying');
               break;
             case '%':
               console.log('Percenting');
               break;
             case '+':
               console.log('Adding');
               break;
             case '-':
               console.log('Subtracting');
               break;
             case '=':
               console.log('Equals');
               break;
             default:
               break;
           }
         }
      });

         function clearCurrent()
         {
           display = 0;
           updateDisplay(display);
         }

         function allClear()
         {
           display = 0;
           total = 0;
           updateDisplay(display);
         }

         function updateDisplay(val)
      {
         $display.val(val);
      }
       }
     });
   });
})();
