
$(document).ready(function() {   
$("input[name=time]").clockpicker({       
    placement: 'bottom',
    align: 'right',
    autoclose: true,
    default: 'now',
    donetext: "done"
});

});

document.addEventListener('DOMContentLoaded', function() {
    var timeInput = document.getElementById('time1');
  timeInput.addEventListener('click', function() {
    document.getElementsByTagName("html")[0].style.height = "500px";
  });
  timeInput.addEventListener('blur', function() {
    document.getElementsByTagName("html")[0].style.height = "300px";
  });
    var convertButton = document.getElementById('converttime');
    convertButton.addEventListener('click', function() {
      convert_time();
    });
    
  });

function convert_time()
{
    var textBoxValue = document.getElementById("time1").value;
    var regex = /^([01]\d|2[0-3]):?([0-5]\d)$/;
    document.getElementById("lbl").innerText = ' ';
    if (regex.test(textBoxValue)) {
        let first_part_time = textBoxValue.split(':')[0]
        if (first_part_time > 12 && first_part_time < 24)
        {
            let final_time = first_part_time-12;
            document.getElementById("lbl").innerText = final_time +":"+ textBoxValue.split(':')[1] + "  " +'PM';
        }
        else{
            if(textBoxValue.split(':')[0] != 00)
            {
                document.getElementById("lbl").innerText = first_part_time +":"+ textBoxValue.split(':')[1] + "  " +'AM';
            }else{
                document.getElementById("lbl").innerText = 12 +":"+ textBoxValue.split(':')[1] + "  " +'AM';
            }
        }
    }else{
        alert("Invalid Format")
        document.getElementById("time1").value = ' ';
    }
}
