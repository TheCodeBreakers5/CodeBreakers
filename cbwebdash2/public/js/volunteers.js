$(document).ready(function(){  
      $('#dataTable').DataTable({  
           "ajax"     :     "flatfileDB/volunteers.json",  
           "columns"     :     [  
                {     "data"     :     "volName"     },  
                {     "data"     :     "volAddress"},  
                {     "data"     :     "volPhone"},  
               {     "data"     :     "volEmail"},
               {     "data"     :     "volLat"},
               {     "data"     :     "volLong"}
           ]  
      });
    
 }); 