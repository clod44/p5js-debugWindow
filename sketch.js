let debugWindow;
function setup() {
    createCanvas(600, 500);

    debugWindow = new DebugWindow(0, 0, 150, height);
    //debugWindow.padding = 1;

    debugWindow.add("FPS", () => frameRate(), true);
    debugWindow.add("Mouse Y", () => mouseY, true);

    debugWindow.add("frames", () => frameCount, false);
    debugWindow.add("==========", "");

    debugWindow.add("==========", "", false, "default", 11);
    debugWindow.add("Mouse X", () => mouseX, true, "mouseX", 12); //give a higher order to be on top of the FPS. default=0
}

let isRemoving = false;
function draw() {
    let col = ((sin(frameCount * 0.01) + 1) * 0.5) * 255;
    colorMode(HSB, 255);
    background(col, 255, 255);
    colorMode(RGB, 255);

    if (isRemoving) {
        debugWindow.add("test!", () => frameCount, false, "test" + frameCount % 10, 10);
    } else {
        debugWindow.remove("test" + frameCount % 10);
    }
    isRemoving = (frameCount % 10 == 0) ? !isRemoving : isRemoving;
    debugWindow.display();
}