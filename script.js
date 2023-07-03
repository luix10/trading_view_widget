/*
let studies = [
    "STD;SMA",
    "STD;EMA",
    "STD;MACD",		
    "STD;RSI",
    "STD;Stochastic_RSI"
];
*/

let studies = [
    // "MASimple@tv-basicstudies",
    // "MAExp@tv-basicstudies",
    // "RSI@tv-basicstudies",
    "StochasticRSI@tv-basicstudies",
    // "MACD@tv-basicstudies",
];

/*
let studies = [
    {
        id: "MASimple@tv-basicstudies",
        inputs: {
            length: 12
        }
    },
    {
        id: "MAExp@tv-basicstudies",
        inputs: {
            length: 12
        }
    },

    {
        id: "RSI@tv-basicstudies",
        inputs: {
            length: 14
        }
    },

    //Falta saber as configurações corretas de Stoch RSI e MACD:
    {
        id: "StochasticRSI@tv-basicstudies",
        // Stoch RSI(14, 3)
        inputs: {
            "length": 20,
        }
    },

    {
        id: "MACD@tv-basicstudies",
        // MACD(12, 26, 9)
        // inputs: {
        //     length: 14
        }
    },
];
*/

var widget = new TradingView.widget({
    "symbol": "BINANCE:BTCUSDT",
    // "symbol": 'HITBTC:BTCUSDT',	  
    "interval": "60",
    "timezone": "America/Sao_Paulo",
    // "theme": "light",
    //"theme": "dark",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "allow_symbol_change": true,

    "container_id": "tv_chart",

    "autosize": false,
    "width": "100%",
    //"height": 1200,
    "height": 600,

    // "studies": studies,
    "studies": [
        {
            id: "RSI@tv-basicstudies",
            inputs: {
                // length: 17, //ok
                // source: "open", //ok
            }
        }, 
        // {
        //     id: "StochasticRSI@tv-basicstudies",
            // inputs: {
            //     "RSI Length": 20, //ok
            //     "Stochastic Length": 11, //ok
            //     "K": 5, //ok
            //     "D": 7, //ok
            //     "RSI Source": "open", //ok
            // }
        // },
        {
            id: "MACD@tv-basicstudies",
            inputs: {
                //
            },
            // inputs: {
            //     "fast length": 11,
            //     "slow length": 21,
            //     "signal smoothing": 7,
            // },
        }
    ],

    // "customIndicators": customIndicators,
    "studies_overrides": {
        // USAR NOME DO INDICADOR COMO APRESENTADO NA TELA DE BUSCA AO CLICAR NO BOTÃO "INDICATORS" 
        // USAR NOME DA PROPRIEDADE COMO NA TELA (INCLUSIVE MAIÚSCULAS)

        "relative strength index.length": 20, //ok, mas só com inputs: {}
        "relative strength index.upper band.value": 50, //ok, mas só com inputs: {}
        "relative strength index.source":"open", //ok, mas só com inputs: {}
        "relative strength index.lower band.value": 30, //ok, mas só com inputs: {}
        "relative strength index.rsi.linewidth": 3, //ok, mas só com inputs: {}
        "relative strength index.rsi.color": "black", //ok, mas só com inputs: {}

        // "macd.fast length": 11, //ok, mas só com inputs: {}
        // "macd.slow length": 21, //ok, mas só com inputs: {}
        // "macd.signal smoothing": 8, //ok, mas só com inputs: {}

        // "volume.volume.color.0": "blue", //ok
        // "volume.volume.color.1": "pink", //ok

        // "stochastic rsi.upper band.value": 50, //ok
        // "stochastic rsi.upper band.color": "red", //ok
        // "stochastic rsi.rsi length": 20, //ok
        // "stochastic rsi.stochastic length": 11, //ok
        // "stochastic rsi.rsi source": "open", //ok
    },
});  
