function selectSegment(index) {
    const contentDivs = document.querySelectorAll('.segment-content');
    const buttons = document.querySelectorAll('.segmented-control-button');

    contentDivs.forEach((div) => {
        div.classList.add('hidden');
    });

    buttons.forEach((button) => {
        button.classList.remove('active');
    });

    contentDivs[index].classList.remove('hidden');
    buttons[index].classList.add('active');
}