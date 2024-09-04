// Functions

/**
 * Freeze rows of the table element; previous frozen rows will unfreeze
 * @param {HTMLTableElement} tableElement 
//  * @param {Number[]} rows 
 * @param {Boolean} fillCellBackground 
 */
export function freezeRows(tableElement, rows = [], fillCellBackground = true) {
	// Sort input rows
	rows.sort();

	// Set table position
	tableElement.style.position = "relative";

	// Set variables
	const tableRows = tableElement.childNodes;
	let inputRowIndex = 0;
	let nextTop = 0;

	// Go through each row
	for (let row = 0; row < tableRows.length; row++) {
		// Increment input row index
		while (inputRowIndex < rows.length && rows[inputRowIndex] < row) {
			inputRowIndex++;
		}

		// Validate input row index
		let willFreeze = true;
		if (inputRowIndex >= rows.length) {
			willFreeze = false;
		} else if (rows[inputRowIndex] != row) {
			willFreeze = false;
		}

		// Freeze or unfreeze row
		if (willFreeze) {
			const tableRow = tableRows[row];
			for (const tableData of tableRow.childNodes) {
				tableData.style.position = "sticky";
				tableData.style.top = `${nextTop}px`;
				if (fillCellBackground) {
					tableData.style.backgroundColor = tableRow.style.backgroundColor;
				}
			}
			nextTop += tableRow.getBoundingClientRect().height;
			console.log(nextTop);
		} else {
			const tableRow = tableRows[row];
			for (const tableData of tableRow.childNodes) {
				tableData.style.top = `-100px`;
			}
		}
	}
}
