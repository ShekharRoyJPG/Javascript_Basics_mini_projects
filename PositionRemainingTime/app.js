let sec=document.getElementById('seconds');
var 
    form = document.getElementById("form"),
	bdate = document.getElementById("date"),
	bmonth = document.getElementById("month"),
	byear = document.getElementById("year"),
	age = document.getElementById("age"),
	days = document.getElementById("days"),
	mons = document.getElementById("months"),
	today = new Date();
 var Cyear = today.getFullYear();
 var Cmonth = today.getMonth() + 1;
 var Cdate = today.getDate();
 var Ryear,Rmonth,Rday;

form.addEventListener('submit', function(event) {
	event.preventDefault();

	var by = Number.parseFloat(byear.value),
		bm = Number.parseFloat(bmonth.value),
		bd = Number.parseFloat(bdate.value),
		ty = Number.parseFloat(Cyear),
		tm = Number.parseFloat(Cmonth),
		td = Number.parseFloat(Cdate);

	if (td < bd) {
		days.innerHTML = (td - bd + 30) + ' days';
		Rday = (td - bd + 30);
		tm = tm - 1;
	} else {
		days.innerHTML = (td - bd) + ' days'
		Rday = (td - bd);
	}

	if (tm < bm) {
		mons.innerHTML = (tm - bm + 12) + ' months';
		Rmonth = (tm - bm + 12);
		ty = ty - 1;
	} else {
		mons.innerHTML = (tm - bm) + ' months'
		Rmonth = (tm - bm);
	}

	age.innerHTML = "Your Age: " + (ty - by) + ' years';
	Ryear = (ty - by);
	CoinCount =() =>{
		let DifY = 27 - Ryear;
		var d1 = new Date();
		d1.setDate(d1.getFullYear()+DifY); 
		d1.setHours(12,0,0); 
		var d2 = new Date(); 
		var diff = d1.getTime() - d2.getTime();
		sec.innerText=diff/1000;
	}
	setInterval(CoinCount,1000);
});


