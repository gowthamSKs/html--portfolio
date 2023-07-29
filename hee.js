function validate(){
	var hello=documnet.getElementsByid("name");
	if (hello.value==" ")
	{
		documnet.getElementsByid("p1").innerHTML="name must not be emoty";
		return false;
	}
}