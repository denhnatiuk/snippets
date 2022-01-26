
/**
 * Conditional import with promise
 *
 * @param  {type} condition description
 * @return {type}           description
 */

// Basic import
function conditionalImport ( feature, importing ){
  if (feature === 'undefined') {
    import(importing)
    .then((importing) => {
      console.log("do stuff");
    });
  }
}

function importWithComputedModuleSpecifiers(  feature, importing  ){
  if (feature === 'undefined') {
    import(`${importing}.js`)
    .then((importing) => {
      console.log("do stuff");
    })
    .catch(error => {

    });
  }
}

// destructuring
function conditionalImport ( {feature1 , feature2}, importing ){
  if (feature === 'undefined') {
    import(importing)
    .then(({feature1 , feature2}) => {
      console.log("do stuff");
    });
  }
}
// defaults use
function conditionalImport ( feature, importing ){
  if (feature === 'undefined') {
    import(importing)
    .then(({default: feature}) => {
      console.log("do stuff");
    });
  }
}

function multipleImport(
  {
  "feature1" : "feature/import/path1",
  "feature2" : "feature/import/path2",
  "feature3" : "feature/import/path3",
  }){
  Promise.all([
    import("feature/import/path1"),
    import("feature/import/path2"),
    import("feature/import/path3")
  ]).then(([
      feature1,
      feature2,
      feature3
  ])=>{
    console.log("do stuff");
  });
}

// using async functions (part of ES2017)
async function useAsyncImport(){
  //
  const myModule = await import('./myModule.js');
  //
  const {export1, export2} = await import('./myModule.js');
  //
  const [module1, module2, module3] =
    await Promise.all([
        import('./module1.js'),
        import('./module2.js'),
        import('./module3.js'),
    ]);
}
useAsyncImport();
// or
(async () => {
    const myModule = await import('./myModule.js');
})();
