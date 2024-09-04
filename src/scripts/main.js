// Imports

import { pieHikeGameList } from "https://mariochao.github.io/heart-pie-app/src/scripts/pie-hiking-data.js";
import { freezeRows } from "./table-utility.js";

// Functions

function initializePieHikingMaps() {
	// Modify text
	const pieHikingMapsText = document.getElementById("pie-hiking-maps-text");
	pieHikingMapsText.textContent = `Pie Hiking Maps (${pieHikeGameList.length})`;

	// Get table
	const pieHikingMapsTable = document.getElementById("pie-hiking-maps-table");

	// Clear table
	pieHikingMapsTable.textContent = "";

	// Add header
	{
		// Create row
		const tableRow = document.createElement("tr");
		const tableMapId = document.createElement("th");
		const tableMapName = document.createElement("th");
		const tableMapLink = document.createElement("th");

		// Modify content
		tableRow.style.backgroundColor = "LightGoldenRodYellow";
		tableMapId.textContent = "Index";
		tableMapName.textContent = "Map";
		tableMapLink.textContent = "Link";

		// Build row
		tableRow.appendChild(tableMapId);
		tableRow.appendChild(tableMapName);
		tableRow.appendChild(tableMapLink);

		// Append row
		pieHikingMapsTable.appendChild(tableRow);
	}

	// Maps
	for (let mapId = 0; mapId < pieHikeGameList.length; mapId++) {
		// Get info
		const map = pieHikeGameList[mapId];

		// Create row
		const tableRow = document.createElement("tr");
		const tableMapId = document.createElement("td");
		const tableMapName = document.createElement("td");
		const tableMapLink = document.createElement("td");
		const mapHyperlink = document.createElement("a");

		// Modify hyperlink
		mapHyperlink.textContent = "hike";
		mapHyperlink.href = map.link;
		mapHyperlink.target = "_blank";

		// Modify content
		tableRow.style.backgroundColor = (mapId % 2 == 0) ? "BlanchedAlmond" : "Beige";
		tableMapId.textContent = mapId + 1;
		tableMapName.textContent = map.name;

		// Build row
		tableMapLink.appendChild(mapHyperlink);
		tableRow.appendChild(tableMapId);
		tableRow.appendChild(tableMapName);
		tableRow.appendChild(tableMapLink);

		// Append row
		pieHikingMapsTable.appendChild(tableRow);
	}

	// Freeze top row
	freezeRows(pieHikingMapsTable, [0]);
}

function initializePieHiking() {
	initializePieHikingMaps();
}

function onDOMContentLoaded() {
	initializePieHiking();
}

// Calling / events

window.addEventListener("DOMContentLoaded", onDOMContentLoaded);
