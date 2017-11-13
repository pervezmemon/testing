function main() {
    startApplication("LJTESTW");
    mouseClick(waitForObjectItem(":LJ TEST_MenuBar", "File"));
    mouseClick(waitForObjectItem(":File_MenuItem", "Open"));
    mouseClick(waitForObject(":LJ TEST.Text 100_Edit"), 95, 12, MouseButton.PrimaryButton);
    mouseDrag(waitForObject(":LJ TEST.Text 100_Edit"), 95, 11, -93, -1);
}
