$(document).ready(function(){  
      $('#dataTable').DataTable({  
           "ajax"     :     "flatfileDB/helpcentres.json",  
           "columns"     :     [  
                {     "data"     :     "hlpcName"     },  
                {     "data"     :     "hlpcAddress"},  
                {     "data"     :     "hlpcPhone"},  
                {     "data"     :     "hlpcEmail"},
               {     "data"     :     "hlpcLat"},
               {     "data"     :     "hlpcLong"}
               
               
           ]  
      });  
 }); 