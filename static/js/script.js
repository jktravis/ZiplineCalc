(function(){
   $(document).ready(function()
   {
      var total = 0;
      var display = total;

      $('button').on('click', function(e)
      {
         console.log($(this).val());
      })
   });
})();
