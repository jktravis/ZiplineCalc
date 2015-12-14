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
            { // Ensure display is stored as a string.
              if (!(currentButton === '.' && calc.display.match(/\./)))
              {
                if (calc.input.match(/[*+\-/]$/))
                {
                  calc.display = '' + currentButton;
                }
                else
                {
                  calc.display += '' + currentButton;
                }
              }
            }
            else
            {// Do initial assignment. Append from here on out.
              calc.display = currentButton;
            }
            calc.input += currentButton;
            updateDisplay(calc.display);
          }
          else
          {
            // Check if the input is able to be evaluated.
            var operators = ['+', '-', '*', '/'];
            if (operators.indexOf(currentButton) >= 0)
            {
              var inputMatch = calc.input.match(/^[\d\.]+[+\-*/][\d\.]+$/);
              if (inputMatch)
              { // todo rename to evaluateOperation
                calc.evaluateOperation();
                updateDisplay(calc.display);
                calc.input += currentButton;
              }
              else if (calc.input.match(/[+\-*/]/))
              {
                calc.input = calc.input.replace(/[+\-*/]/, currentButton);
              }
              else
              {
                calc.input += currentButton;
              }
            }
            else {
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
                case '=':
                  calc.evaluateOperation();
                  updateDisplay(calc.display);
                  break;
                default:
                  break;
              }
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
