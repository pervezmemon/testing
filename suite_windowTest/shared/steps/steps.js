// A quick introduction to implementing scripts for BDD tests:
//
// This file contains snippets of script code to be executed as the .feature
// file is processed. See the section 'Behaviour Driven Testing' in the 'API
// Reference Manual' chapter of the Squish manual for a comprehensive reference.
//
// The functions Given/When/Then/Step can be used to associate a script snippet
// with a pattern which is matched against the steps being executed. Optional
// table/multi-line string arguments of the step are passed via a mandatory
// 'context' parameter:
//
//   When("I enter the text", function(context) {
//     <code here>
//   });
//
// The pattern is a plain string without the leading keyword, but a couple of
// placeholders including |any|, |word| and |integer| are supported which can
// be used to extract arbitrary, alphanumeric and integer values resp. from the
// pattern; the extracted values are passed as additional arguments:
//
//   Then("I get |integer| different names", function(context, numNames) {
//     <code here>
//   });
//
// Instead of using a string with placeholders, a regular expression object can
// be passed to Given/When/Then/Step to use regular expressions.
//
try {
    // Include script based object map, if available
    source(squishinfo.scriptedObjectMapPath);
} catch (err) {};

Given("'|word|' application is loaded", function(context,value) {
    startApplication(value);
  });

When("user clicks on '|word|' '|word|'", function(context,value1, value2) {
    if(value2=="Button"){
    clickButton(waitForObject(":LJ TEST."+value1+"_"+value2));
    }
    else if(value2=="ComboBox"){
        expand(waitForObject(":LJ TEST_"+value2));
        
    }
    else if(value2=="MenuBar"){
        mouseClick(waitForObjectItem(":LJ TEST_MenuBar", "File"));
        
    }
});

Then("A user sees '|any|' on message text", function(context,value) {
    
    var message=waitForObjectExists(":LJ TEST.Text 100_Edit").text;
    test.log(message);
    test.compare(message, value);
   
   
});

Then(/^A user sees (\d) options on list$/, function(context, value) {
    test.compare(value,waitForObjectExists(":LJ TEST_ComboBox").itemCount);
});
