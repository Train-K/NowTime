window.onload = function(){
	var obMonth = document.getElementById('n01');
	var obDay = document.getElementById('n02');
	var obHour = document.getElementById('n03');
	var obMin = document.getElementById('n04');
	var obSec = document.getElementById('n05');
	function date(){
		var oDate = new Date();
		var oMonth = oDate.getMonth()+1;
		var oDay = oDate.getDate();
		var oHour = oDate.getHours();
		var oMin = oDate.getMinutes();
		var oSec = oDate.getSeconds();
		oMonth=checkTime(oMonth);
		oDay=checkTime(oDay);
		oHour=checkTime(oHour);
		oMin=checkTime(oMin);
		oSec=checkTime(oSec);
		obMonth.innerText = oMonth;
		obDay.innerText = oDay;
		obHour.innerText = oHour;
		obMin.innerText = oMin;
		obSec.innerText = oSec;
	}date();
	setInterval(date,1000);
	function checkTime(i){
	if (i<10){
		i="0" + i;
	}
	return i;
	}
}