function processQueue() {

    if (currentPrinting || printQueue.length === 0) return;

    const screen = document.getElementById("statusScreen");
    const paper = document.getElementById("paper");

    currentPrinting = printQueue.shift();
    updateQueueDisplay();

    screen.innerText = "PRINTING: " + currentPrinting.name;

    paper.style.top = "10px";

    setTimeout(() => {
        screen.innerText = "PRINT COMPLETED ✔";
        paper.style.top = "-120px";

        currentPrinting = null;
        updateQueueDisplay();
        processQueue();

    }, 3000);
}
