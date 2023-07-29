funtion validate(){
		var name1=document.getElementById("name")
		var pass1=document.getElementById("passwo")
		var phone=document.getElementById("phonee")

		if(name1.value==" "){
			alert("enter the name");
			document.form1.name.focus();
			return false;
		}
		{
			if (!isNaN(name1.value)){
				
			}
				documnet.form1.name.value="";
				documnet.form1.name.focus();
				return false;

			
			}
			{
				if (pass1<6){
					alert("enter atlest 6 charcters")
					document.form1.passwo.value=" ";
					document.form1.passwo.focus();
					return false;

				}
				
				if (phone.value==""){
				alert("enter ypur number");
				document.form1.phonee.focus();
				return false;
			}

			return true;
		}
	}
}

					
