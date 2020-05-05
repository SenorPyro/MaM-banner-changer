// ==UserScript==
// @name				MaM Banner changer
// @namespace			https://nowhere.com
// @version				0.2
// @description			Change site banner
// @author				pyrokiller
// @match				https://www.myanonamouse.net/*
// @match				http://www.myanonamouse.net/*
// @icon				https://www.myanonamouse.net/favicon.ico
// ==/UserScript==

// Mam uses CSP, which means most pages can't load images from external sources
// Therefore I suggest using the Anonamouse bitbucket to upload your banner to :
// https://www.myanonamouse.net/bitbucket-upload.php
// then use the URL from there in the variable below to change the banner
var bannerUrl = "https://cdn.myanonamouse.net/imagebucket/136627/pyrobanner.png";

window.addEventListener('load', changeBanner);
document.getElementById("msb").childNodes[0].src = "";

function changeBanner() {
	document.getElementById("msb").childNodes[0].src = bannerUrl;
}
