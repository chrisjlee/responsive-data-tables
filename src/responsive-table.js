
var rwd = (function ($) {
  // "use strict";
  var $tables = $('.table'),

  setupTables = function() {


    var th = [];

    $('.table').each(function(i) {
      th = getTableHeaderValues($('tr:first th', this));
      buildDataTableHeader(th, $(this)),
      td = $('td', this);

      td.each(function (i) {
        $(this).attr('data-th', th[i % 4]);
      })

    });


  },

  getTableHeaderValues = function(th) {
      var map = [];

      th.each(function () {
        map.push($(this).text().trim());
      });

      return map;
  },

  buildDataTableHeader = function (arr, $t) {
    console.log($t);
    var mapData = arr.join(", ");
    $t.attr('data-rwd-table-header', mapData);
  },

  buildTableRows = function (tr, map) {
    $('td',tr).each(function (i) {
      $(this).attr('data-th', map[i]);
    });
  };

  return {
    init: function () {
      setupTables();
    }

  };
})(jQuery || window.jQuery || {});

$(document).ready(function () {
  rwd.init();
});
