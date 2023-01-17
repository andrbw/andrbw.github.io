function FormValidation()
{
  $.when($.get("_data/Verbs.csv")).then(
    function (data) {
      var csvData = $.csv.toArrays(data, {
        separator: ";"
      });
      console.log (csvData);
    }
  );
}