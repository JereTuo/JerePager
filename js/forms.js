function validate()
{
	// Check
	// firstname, lastname
	var fn = document.forms["testForm"]["firstname"].value;
	var ln = document.forms["testForm"]["lastname"].value;
	var em = document.forms["testForm"]["email"].value;
		
	if (fn == "")
	{
		alert("Firstname is empty");
		return false;
	}
	if (ln == "")
	{
		alert("Lastname is empty");
		return false;
	}
	
	if(!looksLikeMail(em))
	{
		alert("False Email");
		return false;
	}
}

function looksLikeMail(str) 
{
    var atPos = str.lastIndexOf('@');
    var dotPos = str.lastIndexOf('.');
    return (atPos < dotPos && atPos > 0 && str.indexOf('@@') == -1 && lastDotPos > 2 && (str.length - lastDotPos) > 2);
}