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
		Rday = (td - bd + 30) + ' days';
		tm = tm - 1;
	} else {
		days.innerHTML = (td - bd) + ' days'
		Rday = (td - bd) + ' days'
	}

	if (tm < bm) {
		mons.innerHTML = (tm - bm + 12) + ' months';
		Rmonth = (tm - bm + 12) + ' months';
		ty = ty - 1;
	} else {
		mons.innerHTML = (tm - bm) + ' months'
		Rmonth = (tm - bm) + ' months'
	}

	age.innerHTML = "Age: " + (ty - by) + ' years';
	Ryear = "Age: " + (ty - by) + ' years';

});