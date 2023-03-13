new gviz.App(containerDiv)
    //set position and zoom
    .setGeoCenter({ x: 4500000, y: 2900000 }).setZoomFactor(3000)
    //add CSV layer
    .addCSVGridLayer(
        //data URL
        "https://raw.githubusercontent.com/eurostat/gridviz/master/assets/csv/Europe/pop_2018_5km.csv",
        //resolution, in CRS unit (m)
        5000,
        //the style
        [
            new gviz.SquareColorWGLStyle({
                //the CSV column to show
                colorCol: "Population",
                //value to [0,1] mapping function, see [below](#stretching)
                tFun: (value) => gviz.sExp(Math.min(value / 100000, 1), -15)
            })
        ]
    )
