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
        calc.total = 0;
        calc.display = 0;

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
            updateDisplay(calc.display);
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
          calc.display = 0;
          updateDisplay(calc.display);
        }

        function allClear()
        {
          calc.display = 0;
          calc.total = 0;
          updateDisplay(calc.display);
        }

        function updateDisplay(val)
        {
          $display.val(val);
        }
      }
    });
  });
})();
