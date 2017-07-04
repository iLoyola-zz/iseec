casper.test.begin('Visual regression test for the pages module.', function(test) {

  casper.loadPath('modules/pages')

  .loadFixture('pages')

  .then(function () {
    phantomcss.screenshot('.pages', 'pages module');
  })

  .run(function () {
    test.done();
  });

});
