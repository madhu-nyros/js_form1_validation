function myFunction()
{
 var firstname =  document.forms["myform"]["firstname"].value;
 var lastname  =  document.forms["myform"]["lastname"].value;
 var name      =  new RegExp(/^[A-Za-z]+$/) ;
 var Email     =  document.forms["myform"]["Email"].value;
 var emailreg  =  new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
 var Phone     =  document.forms["myform"]["phone"].value;
 var phonereg  =  new RegExp(/\(\+[0-9]{2}\)\s[0-9]{3}[\s][0-9]{3}[\s][0-9]{4}/gm);
 var male = document.getElementById("genm").value;
 var female = document.getElementById("genf").value;
 var dropdown  =  document.getElementById("selection");
 var select    =  dropdown.options[dropdown.selectedIndex].value;
 var select1   =  dropdown.options[dropdown.selectedIndex].text;
 // country end
 var check     =  this.myform.checkbox.checked;
if (firstname == "")
{
    document.getElementById("first").innerHTML= "Enter FirstName";
    document.getElementById("firstname").style.borderColor = "red";
    document.getElementById("firstname").focus();
    return false;
}
else if(!name.test(firstname))
{
    document.getElementById("first").innerHTML ="Enter Correct Name";
 	document.getElementById("firstname").style.borderColor = "red";
 	document.getElementById("firstname").focus();
 	return false;
}
else
{
	document.getElementById("first").style.visibility = "hidden";
	document.getElementById("firstname").style.borderColor="initial";
}
 if(lastname == "")
{
	document.getElementById("last").innerHTML ="Enter LastName";
	document.getElementById("lastname").style.borderColor = "red";
	document.getElementById("lastname").focus();
	return false;
}
else if(lastname.length < 2)
{
    document.getElementById("last").innerHTML ="Enter atleast 2 characters";
	document.getElementById("lastname").style.borderColor = "red";
	document.getElementById("lastname").focus();
	return false;

}
else if(!name.test(lastname))
{
	document.getElementById("last").innerHTML="Enter Correct Name";
	document.getElementById("lastname").style.borderColor = "red";
    document.getElementById("lastname").focus();
    return false;
}
else
{
    document.getElementById("last").style.visibility = "hidden";
	document.getElementById("lastname").style.borderColor="initial";
}
 if(Email == "")
{
	document.getElementById("mail").innerHTML = "Enter Email ";
	document.getElementById("Email").style.borderColor = "red";
	document.getElementById("Email").focus();
    return false;
}
else if(!emailreg.test(Email))
{
	document.getElementById("mail").innerHTML =" Enter Valid Email";
	document.getElementById("Email").style.borderColor = "red";
	document.getElementById("Email").focus();
    return false;
}
else
{
	document.getElementById("mail").style.visibility = "hidden";
	document.getElementById("Email").style.borderColor="initial";
}
 if(Phone == "")
{
	document.getElementById("phone1").innerHTML = "Enter Phonenumber";
	document.getElementById("phone").style.borderColor ="red";
    document.getElementById("phone").focus();
    return false;
}
else if(!phonereg.test(Phone))
{
	document.getElementById("phone1").innerHTML ="Enter Valid Phonenumber";
	document.getElementById("phone").style.borderColor =" red";
	document.getElementById("phone").focus();
    return false;
}
else
{
	document.getElementById("phone1").style.visibility = "hidden";
	document.getElementById("phone").style.borderColor="initial";
}

//working gender
if(male.checked ==false && female.checked ==false)
{

   document.getElementById("Gender").innerHTML ="Please Select Gender";
    document.getElementById("gender").style.borderColor = "red";
    document.getElementById("gender").focus();
    return false;
}
else
{
	document.getElementById("Gender").style.visibility = "hidden";
	document.getElementById("gender").style.borderColor = "initial";
}
// working gender one
  if(select == 0)
 {
    document.getElementById("selection1").innerHTML ="Please Select Country";
 	return false;
 }
 else
 {
 	document.getElementById("selection1").style.visibility = "hidden";
 }
 if(!check)
{
    document.getElementById("privacy").innerHTML ="Agree Privacy Policy";
    return false;
}
else
{
	document.getElementById("privacy").style.visibility = "hidden";
}
if( myform.gender[0].checked == true)
{
   var gender= male;
}
 else
 {

   var gender = female;
}

// alert("FirstName:" +firstname+ "\nLastname :" +lastname+
//        "\nEmail:"+Email+ "\nPhone:"+Phone+"\nGender:"+gender+"\nCountry:"+select+"\nprivacy policy:"+check );


  DispWin = window.open('','NewWin', 'toolbar=no,status=Form Data,width=500,height=500')
  parameter = "<table border=1><tr><td><b>FirstName </b></td>"+"<td>" + firstname; + "</td></tr>"
  parameter += "<tr><td><b>LastName </b></td>"+"<td>" + lastname; + "</td></tr>"
  parameter += "<tr><td><b>Email</b></td>"+"<td>"+Email; + "</td></tr>"
  parameter += "<tr><td><b>Phone</b></td>"+"<td>" +Phone; + "</td></tr>"
  parameter += "<tr><td><b>Gender</b></td>"+"<td>" +gender;+ "</td></tr>"
  parameter += "<tr><td><b>Country</b></td>"+"<td>" +select; +"</td></tr>"
  parameter += "<tr><td><b>Privacy policy</b></td>"+"<td>"+check; +"</td></tr>"+"<br>"+"</table>"
  DispWin.document.write(parameter);
}

//^(\+\d{2})(\()?\d{3}(\))?(\s)?\d{3}(\s)\d{4}$