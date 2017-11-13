function main() {
    startApplication("LJTESTW");
    mouseDrag(waitForObject(":LJ TEST_Window"), 279, 11, -677, -16);
    mouseClick(waitForObject(":LJ TEST.Check Box1_CheckBox"));
    mouseClick(waitForObject(":LJ TEST.Check Box2_CheckBox"));
    mouseClick(waitForObject(":LJ TEST.N_RadioButton"));
    mouseClick(waitForObject(":LJ TEST.Y_RadioButton"));
    mouseDrag(waitForObject(":LJ TEST.This is literal text_Label"), 141, 16, -131, -10);
    expand(waitForObject(":LJ TEST_ComboBox"));
    mouseClick(waitForObjectItem(":LJ TEST_ComboBox", "A"));
    mouseClick(waitForObject(":LJ TEST.Entry1:_Edit"), 33, 15, MouseButton.PrimaryButton);
    type(waitForObject(":LJ TEST.Entry1:_Edit"), "entries");
    mouseClick(waitForObjectItem(":LJ TEST_List", "Y"));
    clickButton(waitForObject(":LJ TEST.Create_Button"));
    clickButton(waitForObject(":LJ TEST.Update_Button"));
    clickButton(waitForObject(":LJ TEST.Delete_Button"));
    doubleClick(waitForObject(":LJ TEST.Text 100_Edit"), 78, 12, MouseButton.PrimaryButton);
}
