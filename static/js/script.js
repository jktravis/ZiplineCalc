(function(){
   $(document).ready(function()
   {
      var $display = $('.output').first();
      var total = 0;
      var display;

      upDateDisplay(total);

      $('button').on('click', function()
      {
         var currentButton = $(this).val();
         if (!isNaN(parseInt(currentButton)))
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
            upDateDisplay(display);
         }
         else
         {
            // store operation to perform function
            console.log('operation');
         }
      });

      function upDateDisplay(val)
      {
         $display.val(val);
      }
   });
})();
