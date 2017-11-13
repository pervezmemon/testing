try {
    // Include script based object map, if available
    source(squishinfo.scriptedObjectMapPath);
} catch (err) {};

source(findFile('scripts', 'javascript/bdd.js'));

setupHooks(['../shared/scripts/bdd_hooks.js']);
collectStepDefinitions(['./steps', '../shared/steps']);

function main()
{
    testSettings.throwOnFailure = true;
    runFeatureFile("test.feature");
}
