queue()
    .defer(d3.json, "../data/transactionData.json")
    .await(makeGraphs);

// fetch("../data/transactionData.json")
// .then(function(results){
//   results.json().then(function(results){
//  makeGraphs(null,results);
//        });
//  });

function makeGraphs(error, transactionData) {
    console.log(transactionData);
    var ndx = crossfilter(transactionData);
    var store_dim = ndx.dimension(dc.pluck('store'));
    var total_score_per_store = store_dim.group().reduceSum(dc.pluck('cost'));

    show_bar_chart(ndx);
    show_pie_chart(ndx);

    dc.renderAll();

    console.log(d3);

    function show_bar_chart(ndx) {
        var VariableDim = ndx.dimension(dc.pluck('store'))


        dc.barChart("#bar_chart")
            .width(600)
            .height(500)
            .margins({ top: 10, right: 50, bottom: 30, left: 50 })
            .dimension(store_dim)
            .group(total_score_per_store)
            .transitionDuration(1000)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("The Stores!")
            .yAxis().ticks(6);
    }

    function show_pie_chart(ndx) {

        dc.pieChart("#pie_chart")
            .height(800)
            .radius(400)
            .slicesCap(5)
            .transitionDuration(1000)
            .group(total_score_per_store)
            .dimension(store_dim);
    }
}
