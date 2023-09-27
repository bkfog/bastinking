const selectionButtons = document.querySelectorAll('[data-selection]')
const SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊🏿',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '✋🏿',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✌🏿',
        beats: 'paper'
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection) {
    const meSelection = randomSelection()
    console.log(meSelection)
}

function makeSelection(selection) {
    const meSelection = randomSelection()
    const yourWinner = isWinner(selection, meSelection)
    const meWinner = isWinner(meSelection, selection)

    addSelectionResult(meSelection, meWinner)
    addSelectionResult(selection, yourWinner)
}

function addSelectionResult(selection, winner) {

}


function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}


function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}