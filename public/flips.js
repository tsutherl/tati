//TODO: look for pattern 
const flips = {
    topLeftCorner: (positions) => {
        //changing 16 pos
        positions[4] = 0
        positions[5] = 1.25
        positions[6] = 0
        positions[7] = 0
        positions[8] = 1.5
        positions[9] = 0
        positions[10] = 0
        positions[11] = 1.5
        positions[12] = 0
        positions[14] = 1.25
        positions[21] = 0
        positions[22] = 2.75
        positions[23] = 1.25
        positions[75] = -2.75
        positions[76] = 0
        positions[77] = 1.25
    },
    topRightCorner: (positions) => {
        //changing 18 pos TODO: find out why we're having to change more
        positions[48] = 0
        positions[49] = 2.75
        positions[50] = 1.25
        positions[54] = 0
        positions[55] = 0
        positions[56] = 1.5
        positions[57] = 0
        positions[58] = 2.75
        positions[59] = 1.25
        positions[66] = 2.75
        positions[67] = 0
        positions[68] = 1.25
        positions[69] = 0
        positions[70] = 0
        positions[71] = 1.5
        positions[138] = 2.75
        positions[139] = 0
        positions[140] = 1.25
    },
    // bottomLeftCorner: (positions) => {
    //     positions[48] = 
    //     positions[49] = 
    //     positions[50] = 
    //     positions[54] = 
    //     positions[55] = 
    //     positions[56] = 
    //     positions[57] = 
    //     positions[58] = 
    //     positions[59] = 
    //     positions[66] = 
    //     positions[67] = 
    //     positions[68] = 
    //     positions[69] = 
    //     positions[70] = 
    //     positions[71] = 
    //     positions[138] = 
    //     positions[139] = 
    //     positions[140] = 
    // },
    // bottomRightCorner: (positions) => {
    //     positions[48] = 
    //     positions[49] = 
    //     positions[50] = 
    //     positions[54] = 
    //     positions[55] = 
    //     positions[56] = 
    //     positions[57] = 
    //     positions[58] = 
    //     positions[59] = 
    //     positions[66] = 
    //     positions[67] = 
    //     positions[68] = 
    //     positions[69] = 
    //     positions[70] = 
    //     positions[71] = 
    //     positions[138] = 
    //     positions[139] = 
    //     positions[140] = 
    // },
}


rightTopFlipVertices = new Float32Array( [
    -2.75, 2.75,  1.0,
    -2.75, 5.5,  1.0, 
    -5.5, 5.5,  1.0,

    -5.5, 5.5,  1.0, //1
    -5.5,  2.75,  1.0,
    -2.75, 2.75,  1.0, 

     0, 5.5, 1.0, //2
    -2.75, 5.5,  1.0,
    -2.75,  2.75,  1.0,

    -2.75,  2.75,  1.0,
     0,  2.75,  1.0,
     0, 5.5, 1.0,

     0, 5.5, 1.0, //3
     0,  2.75,  1.0,
     2.75,  2.75,  1.0,

     2.75,  2.75,  1.0,
     0,  2.75, 1.25,
     0, 5.5, 1.0,

     0, 0, 1.5, //4
     0,  2.75,  1.25,
     2.75,  2.75,  1.0,

     2.75,  2.75,  1.0,
     2.75,  0,  1.25,
     0, 0, 1.5,

    -2.75,  2.75,  1.0, //5
    -5.5, 2.75, 1.0, 
    -5.5,  0,  1.0,

    -5.5,  0,  1.0,
    -2.75,  0,  1.0,
    -2.75,  2.75,  1.0,

    -2.75,  2.75,  1.0, //6
    -2.75, 0, 1.0, 
     0, 0, 1.0,

     0, 0, 1.0,
     0, 2.75,  1.0,
    -2.75,  2.75,  1.0,

     2.75, 2.75,  1.0, //7
     0, 2.75, 1.0, 
     0, 0, 1.0,

     0,  0,  1.0,
     2.75,  0,  1.0,
     2.75,  2.75,  1.0,

     2.75,  2.75,  1.0, //8
     2.75,  0,  1.0,
     5.5,  0,  1.0,

     5.5,  0,  1.0,
     2.75,  0, 1.25,
     2.75,  2.75,  1.0,

    -5.5,  0,  1.0, //9
    -5.5, -2.75, 1.0, 
    -2.75, -2.75,  1.0, 

    -2.75, -2.75,  1.0, 
    -2.75,  0,  1.0,
    -5.5,  0,  1.0,

     0,  0,  1.0, //10
    -2.75, 0, 1.0, 
    -2.75, -2.75,  1.0, 

    -2.75, -2.75,  1.0,
     0, -2.75,  1.0,
     0,  0,  1.0,

     0,  0,  1.0, //11
     0, -2.75, 1.0, 
     2.75, -2.75,  1.0, 

     2.75, -2.75,  1.0, 
     2.75,  0,  1.0,
     0,  0,  1.0,

     5.5,  0,  1.0, //12
     2.75,  0,  1.0,
     2.75, -2.75,  1.0, 

     2.75, -2.75,  1.0,
     5.5,  -2.75,  1.0,
     5.5,  0,  1.0,

    -2.75, -2.75,  1.0, //13
    -5.5, -2.75,  1.0,
    -5.5, -5.5,  1.0, 

    -5.5, -5.5,  1.0, 
    -2.75, -5.5,  1.0, 
    -2.75, -2.75,  1.0, 

    -2.75, -2.75,  1.0, //14
    -2.75, -5.5,  1.0, 
     0, -5.5, 1.0,

     0, -5.5, 1.0,
     0,  -2.75,  1.0,
    -2.75, -2.75,  1.0,  

     2.75, -2.75,  1.0, //15
     0,  -2.75,  1.0,
     0, -5.5, 1.0, 

     0, -5.5, 1.0, 
     2.75,  -5.5,  1.0,
     2.75, -2.75,  1.0,

     2.75, -2.75,  1.0,
     2.75, -5.5,  1.0,
     5.5, -5.5, 1.0, //16

     5.5, -5.5, 1.0, //16
     5.5,  -2.75,  1.0,
     2.75, -2.75,  1.0,
])


