function GetHeight(ID,NAME)
{
	if (document.height) 
	{
		document.getElementById(ID).style.height = parent.frames[NAME].document.height +10 +"px" ;
	}
	else
	{
		document.getElementById(ID).style.height = parent.frames[NAME].document.body.scrollHeight +10 +"px";
	}
}