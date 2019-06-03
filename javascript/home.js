function submit_complete()
{
	
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


if(fname=="")
		document.getElementById("prgfname").innerHTML="Firstname cannot be blank";
		document.getElementById("fname").style.color="#ff0000b5";
		document.getElementById("i/pfname").style.border="1px solid #ff0000b5";
if(lname=="")
		document.getElementById("prglname").innerHTML="Lastname cannot be blank";
		document.getElementById("lname").style.color="#ff0000b5";
		document.getElementById("i/plname").style.border="1px solid #ff0000b5";
if( email=="")
		document.getElementById("prgemail").innerHTML="We need your email address to contact you";
		document.getElementById("email").style.color="#ff0000b5";
		document.getElementById("i/pemail").style.border="1px solid #ff0000b5";			
if(phonum=="")
		document.getElementById("prg_pho_num").innerHTML="phone number can't be blank";	
		document.getElementById("pho_num").style.color="#ff0000b5";
		document.getElementById("i/p_pho_num").style.border="1px solid #ff0000b5";		
if(addrss1=="")
		document.getElementById("prgaddrss1").innerHTML="Street cannot be blank";
		document.getElementById("addrss1").style.color="#ff0000b5	";
		document.getElementById("i/paddrss1").style.border="1px solid #ff0000b5";
if(addrss2=="")
		document.getElementById("prgaddrss2").innerHTML="Street address cannot be blank";
		document.getElementById("addrss2").style.color="#ff0000b5	";
		document.getElementById("i/paddrss2").style.border="1px solid #ff0000b5";
if(city=="")
		document.getElementById("prgcity").innerHTML="city cannot be blank";
		document.getElementById("city").style.color="#ff0000b5	";
		document.getElementById("i/pcity").style.border="1px solid #ff0000b5";
if(state=="")
		document.getElementById("prgstate").innerHTML="state cannot be blank";	
		document.getElementById("state").style.color="#ff0000b5	";
		document.getElementById("i/pstate").style.border="1px solid #ff0000b5";
if(zipcode=="")
		document.getElementById("prgzipcode").innerHTML="zipcode cannot be blank";	
		document.getElementById("zipcode").style.color="#ff0000b5	";
		document.getElementById("i/pzipcode").style.border="1px solid #ff0000b5";	
if(cratpswd=="")
		document.getElementById("prg_crtpswd").innerHTML="Password cannot be blank";	
		document.getElementById("crtpswd").style.color="#ff0000b5	";
		document.getElementById("i/p_crtpswd").style.border="1px solid #ff0000b5";	
if(vrfypswd=="")
		document.getElementById("prg_vrfypswd").innerHTML="Verify password cannot be blank";	
		document.getElementById("vrfypswd").style.color="#ff0000b5	";
		document.getElementById("i/p_vrfypswd").style.border="1px solid #ff0000b5";
	}
