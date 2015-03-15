(function ($) {
  module('jQuery#thumbnailImageUpload', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function () {
    expect(1);
    strictEqual(this.elems.thumbnailImageUpload(), this.elems, 'should be chainable');
  });

  test('is thumbnailImageUpload', function () {
    expect(1);
    strictEqual(this.elems.thumbnailImageUpload().text(), 'thumbnailImageUpload0thumbnailImageUpload1thumbnailImageUpload2', 'should be thumbnailImageUpload');
  });

}(jQuery));
