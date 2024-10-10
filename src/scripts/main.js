// Main

// Imports


// Variables

const pieHikerBadgeList = [
	{
		name: "Novice Pie Hiker",
		link: "https://www.roblox.com/badges/2124804350/",
		image: "./src/assets/images/badge-novice-pie-hiker.png",
	},
	{
		name: "Intermediary Pie Hiker",
		link: "https://www.roblox.com/badges/2124874992/",
		image: "./src/assets/images/badge-intermediary-pie-hiker.png",
	},
	{
		name: "Certified Pie Hiker",
		link: "https://www.roblox.com/badges/2126097921/",
		image: "./src/assets/images/badge-certified-pie-hiker.png",
	},
]

// Local functions

function initializePiHikerBadges() {
	// Get element
	const pieHikerBadgesTable = document.getElementById("pie-hiker-badges");

	// Clear content
	pieHikerBadgesTable.textContent = "";

	// Add header
	{
		// Create row
		const tableRow = document.createElement("tr");
		const tableBadgeName = document.createElement("th");
		const tableBadgeIcon = document.createElement("th");

		// Modify content
		tableBadgeName.textContent = "Name";
		tableBadgeIcon.textContent = "Icon";

		// Build row
		tableRow.appendChild(tableBadgeName);
		tableRow.appendChild(tableBadgeIcon);

		// Append row
		pieHikerBadgesTable.appendChild(tableRow);
	}

	// Badges
	for (const badge of pieHikerBadgeList) {
		// Create row
		const tableRow = document.createElement("tr");
		const tableBadgeName = document.createElement("td");
		const tableBadgeIcon = document.createElement("td");
		const badgeLink = document.createElement("a");
		const badgeImage = document.createElement("img");

		// Modify hyperlink
		badgeLink.href = badge.link;
		badgeLink.target = "_blank";

		// Modify content
		tableBadgeName.textContent = badge.name;
		badgeImage.src = badge.image;
		badgeImage.setAttribute("height", "64px");

		// Build row
		badgeLink.appendChild(badgeImage);
		tableBadgeIcon.appendChild(badgeLink);
		tableRow.appendChild(tableBadgeName);
		tableRow.appendChild(tableBadgeIcon);

		// Append row
		pieHikerBadgesTable.appendChild(tableRow);
	}
}

function initializeDreamGame() {
	initializePiHikerBadges();
}

function onDOMContentLoaded() {
	initializeDreamGame();
}

// Calling / events

window.addEventListener("DOMContentLoaded", onDOMContentLoaded);
