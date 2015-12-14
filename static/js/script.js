(function ()
{
  $(document).ready(function ()
  {
    $.ajax({
      url: 'static/js/calculator.js',
      dataType: "script",
      success: function (data, status, jqxhr)
      {
        var calc = exports.calculator;
        var $display = $('.output').first();

        updateDisplay(calc.total);

        $('button').on('click', function ()
        {
          var currentButton = $(this).val();
          // if the button is a number or a period
          if (!isNaN(parseInt(currentButton)) || currentButton === '.')
          {
            //store value for math operation
            if (calc.display)
            {
              calc.display += '' + currentButton;
            }
            else
            {
              calc.display = currentButton;
            }
            calc.input += currentButton;
            updateDisplay(calc.display);
          }
          else
          {
            calc.input += currentButton;
            // store operation to perform function
            switch (currentButton)
            {
              case 'AC':
                calc.allClear();
                updateDisplay(calc.display);
                break;
              case 'CE':
                calc.clearEntry();
                updateDisplay(calc.display);
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

        function updateDisplay(val)
        {
          $display.val(val);
        }
      }
    });
  });
})();
