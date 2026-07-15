const etfs = {

    VFV: {
        name: "Vanguard S&P 500 Index ETF",
        price: "$125.40",
        change: "+1.25%",
        dividend: "1.10%",
        risk: "Medium",
        category: "US Large Companies",
        high: "$130.20",
        low: "$95.50",
        market: "US Market",
        description: "Tracks the S&P 500 and invests in 500 large US companies."
    },


    VEQT: {
        name: "Vanguard All Equity ETF",
        price: "$42.80",
        change: "+0.85%",
        dividend: "1.70%",
        risk: "Medium-High",
        category: "Global Stocks",
        high: "$45.10",
        low: "$34.20",
        market: "Global Market",
        description: "A diversified ETF that invests in companies around the world."
    },


    XEQT: {
        name: "iShares Core Equity ETF",
        price: "$35.60",
        change: "+0.95%",
        dividend: "1.80%",
        risk: "Medium-High",
        category: "Global Stocks",
        high: "$38.50",
        low: "$28.40",
        market: "Global Market",
        description: "A fully equity ETF designed for long-term growth."
    },


    VOO: {
        name: "Vanguard S&P 500 ETF",
        price: "$580.30",
        change: "+1.30%",
        dividend: "1.20%",
        risk: "Medium",
        category: "US Companies",
        high: "$590.00",
        low: "$410.00",
        market: "US Market",
        description: "Follows the performance of the S&P 500 index."
    },


    SPY: {
        name: "SPDR S&P 500 ETF",
        price: "$590.10",
        change: "+1.10%",
        dividend: "1.25%",
        risk: "Medium",
        category: "Large US Companies",
        high: "$600.00",
        low: "$420.00",
        market: "US Market",
        description: "One of the largest ETFs tracking the S&P 500."
    },


    QQQ: {
        name: "Invesco Nasdaq 100 ETF",
        price: "$520.20",
        change: "+1.80%",
        dividend: "0.60%",
        risk: "High",
        category: "Technology",
        high: "$540.00",
        low: "$340.00",
        market: "NASDAQ",
        description: "Focuses on major technology and growth companies."
    }

};



function analyzeETF(){

    let input = document
    .getElementById("etfSearch")
    .value
    .toUpperCase();



    if(etfs[input]){

        let etf = etfs[input];


        document.getElementById("etfName").innerHTML = etf.name;

        document.getElementById("price").innerHTML = etf.price;

        document.getElementById("change").innerHTML = etf.change;

        document.getElementById("dividend").innerHTML = etf.dividend;

        document.getElementById("risk").innerHTML = etf.risk;

        document.getElementById("category").innerHTML = etf.category;


        document.getElementById("description").innerHTML =
        etf.description;


        document.getElementById("high").innerHTML =
        etf.high;


        document.getElementById("low").innerHTML =
        etf.low;


        document.getElementById("market").innerHTML =
        etf.market;


        createChart(etf);



    }

    else{

        alert("ETF not found. Try VFV, VEQT, XEQT, VOO, SPY, or QQQ.");

    }

}




function loadETF(symbol){

    document.getElementById("etfSearch").value = symbol;

    analyzeETF();

}




function createChart(etf){


    let chartArea =
    document.getElementById("etfChart");



    new Chart(chartArea, {


        type:"line",


        data:{


            labels:[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun"
            ],


            datasets:[{

                label: etf.name,

                data:[
                    100,
                    105,
                    110,
                    108,
                    115,
                    120
                ],


                borderWidth:3

            }]


        },


        options:{


            responsive:true,


            plugins:{


                legend:{

                    display:true

                }

            }

        }


    });


}