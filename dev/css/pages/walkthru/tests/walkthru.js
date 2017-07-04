casper.test.begin('Visual regression test for the walkthru page.', function(test) {

  casper.loadPath('pages/walkthru')

  .loadFixture('walkthru')

  .then(function () {
    phantomcss.screenshot('.walkthru', 'walkthru page');
  })

  .run(function () {
    test.done();
  });

});
