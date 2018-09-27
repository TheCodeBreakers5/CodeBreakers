$(document).ready(function(){  
      $('#dataTable').DataTable({  
           "ajax"     :     "flatfileDB/reliefmaterial.json",  
           "columns"     :     [  
                {     "data"     :     "rlmtName"     },  
                {     "data"     :     "rlmtCategory"},  
                {     "data"     :     "rlmtStock"},
                {     "data"     :     "rlmtLocation"}
           ]  
      });  
 }); 