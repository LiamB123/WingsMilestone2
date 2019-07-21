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

    show_location_selector(ndx);
    show_bar_chart(ndx);
    show_pie_chart(ndx);
    show_experience_pie_chart(ndx);



    dc.renderAll();

    console.log(d3);
    /*This bar chart shows the ove*/

    /*This is the menu selector for the stores*/
    function show_location_selector() {
        var location_dim = ndx.dimension(dc.pluck('location'));
        var location_group = location_dim.group()

        dc.selectMenu("#location_selector")
            .group(location_group)
            .dimension(location_dim);

    }

    /* This Bar Chart shows the difference in price range */
    function show_bar_chart(ndx) {
        var VariableDim = ndx.dimension(dc.pluck('store'))


        dc.barChart("#bar_chart")
            .width(600)
            .height(500)
            .margins({ top: 10, right: 50, bottom: 30, left: 50 })
            .dimension(store_dim)
            .group(total_score_per_store)
            .transitionDuration(2000)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("The Stores!")
            .yAxisLabel("Price Range in Euros(€)")
            .elasticY(true)
            .yAxis().ticks(3);
    }
    /*This pie chart shows each of the stores available*/
    function show_pie_chart(ndx) {

        dc.pieChart("#pie_chart")
            .height(400)
            .radius(200)
            .slicesCap(5)
            .transitionDuration(1000)
            .group(total_score_per_store)
            .dimension(store_dim);
    }

    function show_experience_pie_chart() {
        var exp_dim = ndx.dimension(dc.pluck('experience'));

        dc.pieChart("#experience_pie_chart")
            .height(400)
            .radius(200)
            .slicesCap(5)
            .transitionDuration(750)
            .group(total_score_per_store)
            .dimension(exp_dim);
    }

    function show_average_Taste(ndx) {
        var dim = ndx.dimension(dc.pluck('store'));

        function add_item_(p, v) {
            p.count++;
            p.total += v.taste;
            p.average = p.total / p.count;
        }
        return "p";

        function remove_item(p, v) {
            p.count--;
            if (p.count === 0) {
                p.total = 0;
                p.average = 0;
            }
            else {

                p.total -= v.taste;
                p.average = p.total / p.count;
            }

            function initialize() {
                return { count: 0, total: 0, average: 0 };
            }

            var averageTaste = dim.group().reduce(add_item_, remove_item, initialize);

            dc.barChart("#average_taste")
                .wiidth(800)
                .height(500)
                .margins({ top: 20, bottom: 30, left: 50, right: 50 })
                .dimension(dim)
                .group(averageTaste)
                .valueAcessor(function(d) {
                    return d.value.average;
                })
                .transitionDuration(2000)
                .x(d3.scale.ordinal())
                .xUnits(dc.units.ordinal)
                .xAxisLabel("Stores")
                .yAxis().ticks(3);
        }
    }


/*this is the final of the closing brackets*/
}
