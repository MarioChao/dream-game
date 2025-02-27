// Yume Nikki / Roblox Fangames

// Imports

import { freezeRows } from "./table-utility.js";

// Variables

let fangameList = []

// Local functions

async function updateFangames() {
	const fetchResponse = await fetch("../../src/assets/data/rynfgs.json");
	fangameList = await fetchResponse.json();
}

// Initialize functions

async function initRynfgs() {
	// Update fangames
	await updateFangames();

	// Modify text
	const rynfgsText = document.getElementById("rynfgs-text");
	rynfgsText.textContent = `Roblox YNFGs (${fangameList["places"].length})`;

	// Get table
	const rynfgsTable = document.getElementById("rynfgs-table");

	// Clear table
	rynfgsTable.textContent = "";

	// Add header
	{
		// Create row
		const tableRow = document.createElement("tr");
		const tableMapId = document.createElement("th");
		const tableMapLink = document.createElement("th");
		const tableMapName = document.createElement("th");
		const tableMapCreator = document.createElement("th");

		// Modify content
		tableRow.style.backgroundColor = "LightGoldenRodYellow";
		tableMapId.textContent = "Index";
		tableMapLink.textContent = "Link";
		tableMapName.textContent = "Map";
		tableMapCreator.textContent = "Creator";

		// Build row
		tableRow.appendChild(tableMapId);
		tableRow.appendChild(tableMapLink);
		tableRow.appendChild(tableMapName);
		tableRow.appendChild(tableMapCreator);

		// Append row
		rynfgsTable.appendChild(tableRow);
	}

	// Maps
	for (let mapId = 0; mapId < fangameList["places"].length; mapId++) {
		// Get info
		const map = fangameList["places"][mapId];

		// Create row
		const tableRow = document.createElement("tr");
		const tableMapId = document.createElement("td");
		const tableMapLink = document.createElement("td");
		const mapHyperlink = document.createElement("a");
		const tableMapName = document.createElement("td");
		const tableMapCreator = document.createElement("td");

		tableRow.style.backgroundColor = (mapId % 2 == 0) ? "BlanchedAlmond" : "Beige";
		tableMapId.textContent = mapId + 1;

		let placeId = parseInt(map["place_id"]);
		if (placeId === placeId) {
			// Modify hyperlink
			mapHyperlink.textContent = "sleep";
			mapHyperlink.href = `https://www.roblox.com/games/${placeId}`;
			mapHyperlink.target = "_blank";

			// Modify content
			tableMapName.textContent = map.name;
			tableMapCreator.textContent = map.creator;
		} else {
			mapHyperlink.textContent = "N/A";

			tableMapName.textContent = map.name || "N/A";
			tableMapCreator.textContent = map.creator || "N/A";
		}

		// Modify style
		tableRow.style.fontSize = "14px";

		// Build row
		tableMapLink.appendChild(mapHyperlink);
		tableRow.appendChild(tableMapId);
		tableRow.appendChild(tableMapLink);
		tableRow.appendChild(tableMapName);
		tableRow.appendChild(tableMapCreator);

		// Append row
		rynfgsTable.appendChild(tableRow);
	}

	// Freeze top row
	freezeRows(rynfgsTable, [0]);
}

function init() {
	initRynfgs();
}

function onDOMContentLoaded() {
	init();
}

// Calling / events

window.addEventListener("DOMContentLoaded", onDOMContentLoaded);
