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
            // Store value for math operation.
            if (calc.display)
            { // Ensure display is initially stored as a string.
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
            // Check if an operation has already been provided.
            // This is used to determine if the calculation needs
            // to occur now, and the display updated.
            if (calc.operatorProvided === true) {
              calc.activateOperation();
              updateDisplay(calc.display);
            }
            else {
              calc.operatorProvided = true;
            }
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
                calc.lastOperation = '/';
                console.log('Dividing');
                break;
              case '*':
                calc.lastOperation = '*';
                console.log('Multiplying');
                break;
              case '%':
                console.log('Percenting');
                break;
              case '+':
                calc.lastOperation = '+';
                console.log('Adding');
                break;
              case '-':
                calc.lastOperation = '-';
                console.log('Subtracting');
                break;
              case '=':
                calc.lastOperation = '=';
                console.log('Equals');
                updateDisplay(calc.display);
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
