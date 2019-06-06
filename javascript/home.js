function submit_complete()
{
	var fnameverify=/^([a-zA-Z]){2,10}$/;
	var lnameverify=/^([a-zA-Z]){2,10}$/;
	var emailverify=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})$/;
	var phnonumverify=/^([0-9]{3})-([0-9]{3})-([0-9]{4})$/;
	var address1verify=/^[a-zA-Z0-9]{5,30}$/;
	var address2verify=/^([a-zA-Z0-9]){5,30}$/;
	var cityverify=/^([a-zA-Z]){5,15}$/;
	var stateverify=/^([a-zA-Z]){5,15}$/;
	var zipverify=/^([0-9]){2,6}$/;
	var pswd1verify=/^([a-zA-Z0-9_\-\.\+\#]){8,15}$/;
	var pswd2verify=/^([a-zA-Z0-9_\-\.\+\#]){8,15}$/;


	
	var fname=document.myform.fname.value;
	var lname=document.myform.lname.value;
	var email=document.myform.email.value;
	var phonum=document.myform.phonum.value;
	var addrss1=document.myform.addrss1.value;
	var addrss2=document.myform.addrss2.value;
	var city=document.myform.city.value;
	var state=document.myform.state.value;
	var zipcode=document.myform.zipcode.value;
	var cratpswd=document.myform.createpswd.value;
	var vrfypswd=document.myform.verifypswd.value;
	var newpassword=document.getElementById('i/p_crtpswd').value;
	var confirmpassword=document.getElementById('i/p_vrfypswd').value;


	if(fname=="" )
	{
		document.getElementById("prgfname").innerHTML="Firstname cannot be blank";
		document.getElementById("fname").style.color="#ff0000b5";
		document.getElementById("i/pfname").style.border="1px solid #ff0000b5";
	}
	else if(fnameverify.test(fname))
	{
		
	}
	else
	{
		document.getElementById("prgfname").innerHTML="Please enter the valid fname";
		document.getElementById("fname").style.color="#ff0000b5";
		document.getElementById("i/pfname").style.border="1px solid #ff0000b5";
	}
	if(lname=="")
	{
		document.getElementById("prglname").innerHTML="Lastname cannot be blank";
		document.getElementById("lname").style.color="#ff0000b5";
		document.getElementById("i/plname").style.border="1px solid #ff0000b5";
	}
	else if(lnameverify.test(fname))
	{
		
	}
	else 
	{
		document.getElementById("prglname").innerHTML="Please enter the valid lname";
		document.getElementById("lname").style.color="#ff0000b5";
		document.getElementById("i/plname").style.border="1px solid #ff0000b5";
	}
	if( email=="" )
	{
		document.getElementById("prgemail").innerHTML="We need your email address to contact you";
		document.getElementById("email").style.color="#ff0000b5";
		document.getElementById("i/pemail").style.border="1px solid #ff0000b5";	
	}
	else if(emailverify.test(email))
	{

	}		
	else
	{
		document.getElementById("prgemail").innerHTML="Please enter valid email address";
		document.getElementById("email").style.color="#ff0000b5";
		document.getElementById("i/pemail").style.border="1px solid #ff0000b5";
	}
	if(phonum=="" )
	{
		document.getElementById("prg_pho_num").innerHTML="phone number can't be blank";	
		document.getElementById("pho_num").style.color="#ff0000b5";
		document.getElementById("i/p_pho_num").style.border="1px solid #ff0000b5";	
	}
	else if(phnonumverify.test(phonum))
	{
		
	}
	else
	{
		document.getElementById("prg_pho_num").innerHTML="Please enter the correct phonum";	
		document.getElementById("pho_num").style.color="#ff0000b5";
		document.getElementById("i/p_pho_num").style.border="1px solid #ff0000b5";	
	}
	if(addrss1=="")
	{
		document.getElementById("prgaddrss1").innerHTML="Street address1 cannot be blank";
		document.getElementById("addrss1").style.color="#ff0000b5	";
		document.getElementById("i/paddrss1").style.border="1px solid #ff0000b5";
	}
	else if(address1verify.test(addrss1))
	{
		
	}
	else
	{
		document.getElementById("prgaddrss1").innerHTML="Provide current addrss1";
		document.getElementById("addrss1").style.color="#ff0000b5	";
		document.getElementById("i/paddrss1").style.border="1px solid #ff0000b5";	
	}
	if(addrss2=="")
	{
		document.getElementById("prgaddrss2").innerHTML="Street address2 cannot be blank";
		document.getElementById("addrss2").style.color="#ff0000b5	";
		document.getElementById("i/paddrss2").style.border="1px solid #ff0000b5";
	}
	else if(address2verify.test(addrss2))
	{
		
	}
	else
	{
		document.getElementById("prgaddrss2").innerHTML="Provide current addrss2";
		document.getElementById("addrss2").style.color="#ff0000b5	";
		document.getElementById("i/paddrss2").style.border="1px solid #ff0000b5";	
	}
	if(city=="")
	{

		document.getElementById("prgcity").innerHTML="city cannot be blank";
		document.getElementById("city").style.color="#ff0000b5	";
		document.getElementById("i/pcity").style.border="1px solid #ff0000b5";
	}
	else if(cityverify.test(city))
	{
		
	}		
	else
	{
		document.getElementById("prgcity").innerHTML="Enter valid city name";
		document.getElementById("city").style.color="#ff0000b5	";
		document.getElementById("i/pcity").style.border="1px solid #ff0000b5";
	}
	if(state=="")
	{
		document.getElementById("prgstate").innerHTML="state cannot be blank";	
		document.getElementById("state").style.color="#ff0000b5	";
		document.getElementById("i/pstate").style.border="1px solid #ff0000b5";
	}
	else if(stateverify.test(state))
	{
		
	}	
	else
	{
		document.getElementById("prgstate").innerHTML="Enter valid state";	
		document.getElementById("state").style.color="#ff0000b5	";
		document.getElementById("i/pstate").style.border="1px solid #ff0000b5";
	}	

	if(zipcode=="")
	{
		document.getElementById("prgzipcode").innerHTML="zipcode cannot be blank";	
		document.getElementById("zipcode").style.color="#ff0000b5	";
		document.getElementById("i/pzipcode").style.border="1px solid #ff0000b5";
	}
	else if(zipverify.test(zipcode))
	{
		
	}
	else
	{
		document.getElementById("prgzipcode").innerHTML="Enter valid zipcode";	
		document.getElementById("zipcode").style.color="#ff0000b5	";
		document.getElementById("i/pzipcode").style.border="1px solid #ff0000b5";
	}

	if(cratpswd=="")
	{
		document.getElementById("prg_crtpswd").innerHTML="Password cannot be blank";	
		document.getElementById("crtpswd").style.color="#ff0000b5	";
		document.getElementById("i/p_crtpswd").style.border="1px solid #ff0000b5";	
	}
	else if(pswd1verify.test(cratpswd))
	{
		
	}
	else
	{
		document.getElementById("prg_crtpswd").innerHTML="Provide valid password";	
		document.getElementById("crtpswd").style.color="#ff0000b5	";
		document.getElementById("i/p_crtpswd").style.border="1px solid #ff0000b5";
	}
	if(vrfypswd=="")
	{
		document.getElementById("prg_vrfypswd").innerHTML="Verify password cannot be blank";	
		document.getElementById("vrfypswd").style.color="#ff0000b5	";
		document.getElementById("i/p_vrfypswd").style.border="1px solid #ff0000b5";
	}
	else if(pswd2verify.test(vrfypswd))
	{
		
	}
	else
	{
		document.getElementById("prg_vrfypswd").innerHTML="Provide valid password";	
		document.getElementById("vrfypswd").style.color="#ff0000b5	";
		document.getElementById("i/p_vrfypswd").style.border="1px solid #ff0000b5";	
	}
	if( cratpswd=="" && vrfypswd=="")
	{

	}
	else if(newpassword!=confirmpassword)
// else if(document.getElementById('i/p_crtpswd').value==document.getElementById("i/p_vrfypswd").value)
{
	document.getElementById("demo8").innerHTML="***Password does not match";
}
return false;
}

