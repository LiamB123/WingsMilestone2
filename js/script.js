queue()
    .defer(d3.json, "../data/transactionData.json")
    .await(makeGraphs);

function makeGraphs(error, transactionData) {
    var ndx = crossfilter(transactionData);
    var store_dim = ndx.dimension(dc.pluck('store'));
    var total_score_per_store = store_dim.group().reduceSum(dc.pluck('cost'));

    show_test(ndx)

    dc.renderAll();


dc.barChart('#Test')
    .width(300)
    .height(500)
    .margins({ top: 10, right: 50, bottom: 30, left: 50 })
    .diimension(store_dim)
    .group(total_score_per_store)
    .transitionDuration(1000)
    .x(d3.scale.ordinal())
    .xUnits(dc.units.ordinal)
    .xAxisLabel("The Stores!")
    .yAxis().ticks(1);

}
