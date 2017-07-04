casper.test.begin('Visual regression test for the form module.', function(test) {

  casper.loadPath('modules/form')

  .loadFixture('form')

  .then(function () {
    phantomcss.screenshot('.form', 'form module');
  })

  .run(function () {
    test.done();
  });

});
