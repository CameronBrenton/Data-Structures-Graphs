const vertices = ['A', 'B', 'C', 'D', 'E']

const vertexIndexs = {
	'A': 0,
	'B': 1,
	'C': 2,
	'D': 3,
	'E': 4
}

const adjacencyMatrix = [
	[0, 1, 0, 1, 0],
	[1, 0, 1, 0, 0],
	[0, 1, 0, 1, 1],
	[1, 0, 1, 0, 1],
	[0, 0, 1, 1, 0]
]

// findAdjacencies

const findAdjacencies = (node) => {
	const adjacentNodes = []

	// get the row in the matrix
	for (let i = 0; i < vertices.length; i++) {
		nodeVertex = vertexIndexs[node]
		if (adjacencyMatrix[nodeVertex][i] === 1) {
			adjacentNodes.push(vertices[i])
		}
	}
	// loop through the row
	// if there is a 1, push the node
	// otherwise skip
	return adjacentNodes
}

// isConnected





console.log(findAdjacencies('A'))

console.log(findAdjacencies('D'))