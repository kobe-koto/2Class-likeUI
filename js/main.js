// Encoding: UTF-8
// Made with heart by kobe-koto in AGPL-3.0 License License
// copyright 2021 kobe-koto

if (window.innerHeight>window.innerWidth) {
	if (!window.location.href.toString().match(/m-index.html/i) && window.location.href.toString().match(/index.html/i)) {
		window.location.href=window.location.href.replace(/index.html/i,"m-index.html")
	}
}

window.Class2 = {};

window.Class2.setCookie = function (name,value) {
	var days = 1;
	var exp = new Date();
	exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString;
}


window.Class2.getCookie = function (name) {
	var arr,reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if ((arr = document.cookie.match(reg))) {
		return unescape(arr[2]);
	} else {
		return null;
	}
}

window.Class2.Read = function (ElementID) {
	console.log(document.getElementById(ElementID).innerHTML);
}

window.Class2.write = function (ElementID,value) {
	document.getElementById(ElementID).innerHTML = value;
}

window.Class2.IDList = function () {
	console.log(
		"times\r\n" +
		"exam-no\r\n" +
		"exam-name\r\n" +
		"exam-type\r\n" +
		"question\r\n" +
		"choose-A\r\n" +
		"choose-B\r\n" +
		"choose-C\r\n" +
		"choose-D"
	);
}

window.Class2.setUserName = function (Name) {
	window.Class2.setCookie("UserName",Name);
	window.Class2.UserName = Name;
	console.log("THX," + window.Class2.UserName);
}
window.onload=window.Class2.init = function () {
	window.Class2.UserName = window.Class2.getCookie("UserName");
	if (window.Class2.UserName === null) {
		window.Class2.UserName = "nameless";
	}
	console.log(
		"Hey " + window.Class2.UserName + ", \r\n"+
		"Usage for 2class·SP:\r\n\r\n"+
		"to list IDs, shell \"window.Class2.IDList();\"\r\n"+
		"to read Element by IDs, shell \"window.Class2.read(id);\"\r\n"+
		"to change Element by IDs, shell \"window.Class2.write(id,value);\"\r\n"+
		"to set UserName, shell \"window.Class2.setUserName(Name);\"\r\n"+
		"to see the these things again, shell \"window.Class2.init();\""
	);
}