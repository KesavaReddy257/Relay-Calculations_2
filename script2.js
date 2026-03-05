/*
const x = document.getElementById('vector_group');
const fields = {
    "Yy0": -180,
    "Yd1": -210,
    "Dd2": -240,
    "Dd4": -300,
    "Yd5": -330,
    "Yy6": -360,
    "Yd7": -390 + 360,
    "Dd8": -420 + 360,
    "Dd10": -480 + 360,
    "Yd11": -510 + 360,
    "Dd0": -180,
    "Dy1": -210,
    "Dz2": -240,
    "Dz4": -300,
    "Dy5": -330,
    "Dd6": -360,
    "Dy7": -390 + 360,
    "Dz8": -420 + 360,
    "Dz10": -480 + 360,
    "Dy11": -510 + 360
}
let y ;
x.addEventListener("change", () =>{
    const vector_value = x.value;
    y = fields[vector_value] || 0;
    console.log(y);
    calculate();
});


const inputs = document.querySelectorAll("input");
const hvct_primary = document.getElementById('HVCT_PRIMARY');
const hvct_secondary = document.getElementById('HVCT_SECONDARY');
const lvct_primary = document.getElementById('LVCT_PRIMARY');
const lvct_secondary = document.getElementById('LVCT_SECONDARY');
const no_of_lvs = document.getElementById("NO_OF_LVS");
const range = document.getElementById('Range');
const tarfo_Rating = document.getElementById('Tarfo_Rating');
const vhv = document.getElementById('VHV');
const vlv = document.getElementById('VLV');
const is1 = document.getElementById('IS1');
const is2 = document.getElementById('IS2');
const k1 = document.getElementById("K1");
const k2 = document.getElementById("K2");
const is_hs1 = document.getElementById("IS_HS1");
const is_hs2 = document.getElementById("IS_HS2");
const ih2 = document.getElementById("IH2");
const ih5 = document.getElementById("IH5");


inputs.forEach(input => {
    input.addEventListener("change",() => {
        calculate();
    })
});

let VHV;
vhv.addEventListener('change', () => {
    VHV = parseFloat(vhv.value);
    console.log("VHV:", VHV);
});

let VLV;
vlv.addEventListener('change', () => {
    VLV = parseFloat(vlv.value);
    console.log("VLV:", VLV);
});

let Range;
range.addEventListener('change', () => {
    Range = range.value  || 0;
    console.log("Range:", Range);
});

let Tarfo_Rating;
tarfo_Rating.addEventListener('change', () => {
    Tarfo_Rating = parseFloat(tarfo_Rating.value);
    console.log("Tarfo_Rating:", Tarfo_Rating);
});

let IS1;
is1.addEventListener('change', () => {
    IS1 = parseFloat(is1.value);
    console.log("IS1:", IS1);
});

let IS2;
is2.addEventListener('change', () => {
    IS2 = parseFloat(is2.value);
    console.log("IS2:", IS2);
});

let  K1;
k1.addEventListener('change', () => {
    K1 = parseFloat(k1.value);
});

let K2  ;
k2.addEventListener('change', () => {
    K2 = parseFloat(k2.value);
});

let IS_HS1 ;
is_hs1.addEventListener('change', () => {
    IS_HS1 = parseFloat(is_hs1.value);
});

let IS_HS2 ;
is_hs2.addEventListener('change', () => {
    IS_HS2 = parseFloat(is_hs2.value);
});

let IH2 ;
ih2.addEventListener('change', () => {
    IH2 = parseFloat(ih2.value);
});

let IH5 ;
ih5.addEventListener('change', () => {
    IH5 = parseFloat(ih5.value);
});

let HVCT_primary ;
hvct_primary.addEventListener('change', () => {
    HVCT_primary = parseFloat(hvct_primary.value);
    console.log("HVCT Pry:", HVCT_primary);
});


let HVCT_secondary;
hvct_secondary.addEventListener('change', () => {
    HVCT_secondary = parseFloat(hvct_secondary.value);
    console.log("HVCT Primary:", HVCT_secondary);
});

let LVCT_primary;
lvct_primary.addEventListener('change', () => {
    LVCT_primary = parseFloat(lvct_primary.value);
    console.log("LVCT Primary:", LVCT_primary);
});

let LVCT_secondary;
lvct_secondary.addEventListener('change', () => {
    LVCT_secondary = parseFloat(lvct_secondary.value);
    console.log("LVCT Primary:", LVCT_secondary);
});

let NO_OF_LVS ;
no_of_lvs.addEventListener("change", ()=> {
    NO_OF_LVS = no_of_lvs.value;
    console.log(NO_OF_LVS);
});
// const values = {};

// inputs.forEach(input =>{
//     input.addEventListener("change", () =>{
//         values[input.id] = parseFloat(input.value) || 0;
//     }
// } );


// console.log("HVCT Primary:", HVCT_primary);
// console.log("HVCT Secondary:", HVCT_secondary);
// console.log("LVCT Primary:", LVCT_primary); 

const HV_MatchingFactor  = document.getElementById('HV_MatchingFactor');
const LV_MatchingFactor = document.getElementById("LV_MatchingFactor");

const HV_FL_CUR_RPH = document.getElementById("HV_FL_CUR_RPH");
const HV_FL_CUR_YPH = document.getElementById("HV_FL_CUR_YPH");
const HV_FL_CUR_BPH = document.getElementById("HV_FL_CUR_BPH");
const LV_FL_CUR_RPH = document.getElementById("LV_FL_CUR_RPH");
const LV_FL_CUR_YPH = document.getElementById("LV_FL_CUR_YPH");
const LV_FL_CUR_BPH = document.getElementById("LV_FL_CUR_BPH");

const HV_IP_Pickup = document.getElementById("HV_IP_Pickup");
const LV_IP_Pickup = document.getElementById("LV_IP_Pickup");
const HV_3P_Pickup = document.getElementById("HV_3P_Pickup");
const LV_3P_Pickup = document.getElementById("LV_3P_Pickup");

const HV_pickup_MAX_CUR_RPH = document.getElementById("HV_pickup_MAX_CUR_RPH");
const HV_pickup_MAX_CUR_YPH = document.getElementById("HV_pickup_MAX_CUR_YPH");
const HV_pickup_MAX_CUR_BPH = document.getElementById("HV_pickup_MAX_CUR_BPH");
const LV_pickup_MAX_CUR_RPH = document.getElementById("LV_pickup_MAX_CUR_RPH");
const LV_pickup_MAX_CUR_YPH = document.getElementById("LV_pickup_MAX_CUR_YPH");
const LV_pickup_MAX_CUR_BPH = document.getElementById("LV_pickup_MAX_CUR_BPH");

const HV_SEC_CUR_RPH = document.getElementById("HV_SEC_CUR_RPh");
const HV_SEC_CUR_YPH = document.getElementById("HV_SEC_CUR_YPH");
const HV_SEC_CUR_BPH = document.getElementById("HV_SEC_CUR_BPH");
const LV_SEC_CUR_RPH = document.getElementById("LV_SEC_CUR_RPh");
const LV_SEC_CUR_YPH = document.getElementById("LV_SEC_CUR_YPH");
const LV_SEC_CUR_BPH = document.getElementById("LV_SEC_CUR_BPH");

const HV_80SLOPE_SEC_CUR_RPH = document.getElementById("HV_80SLOPE_SEC_CUR_RPH");
const HV_80SLOPE_SEC_CUR_YPH = document.getElementById("HV_80SLOPE_SEC_CUR_YPH");
const HV_80SLOPE_SEC_CUR_BPH = document.getElementById("HV_80SLOPE_SEC_CUR_BPH");
const LV_80SLOPE_SEC_CUR_RPH = document.getElementById("LV_80SLOPE_SEC_CUR_RPH");
const LV_80SLOPE_SEC_CUR_YPH = document.getElementById("LV_80SLOPE_SEC_CUR_YPH");
const LV_80SLOPE_SEC_CUR_BPH = document.getElementById("LV_80SLOPE_SEC_CUR_BPH");


function calculate() {

    let IHV_FULL_LOAD;
    let ILV_FULL_LOAD;
    if(Range === "MVA"){
        IHV_FULL_LOAD = (Tarfo_Rating * 1000000) / (VHV * Math.sqrt(3));
        ILV_FULL_LOAD = (Tarfo_Rating * 1000000) / (VLV * Math.sqrt(3));
        console.log("IHV_full_load: ", IHV_FULL_LOAD);
        console.log("ILV_fullkload", ILV_FULL_LOAD);
    }
    else {
        IHV_FULL_LOAD = (Tarfo_Rating * 1000) / (VHV * Math.sqrt(3));
        ILV_FULL_LOAD = (Tarfo_Rating * 1000) / (VLV * Math.sqrt(3));
        
    }

    const IHV_FULL_LOAD_Sec = IHV_FULL_LOAD / (HVCT_primary / HVCT_secondary);
    const ILV_FULL_LOAD_Sec = ILV_FULL_LOAD / (LVCT_primary / LVCT_secondary);

    HV_MatchingFactor.value = parseFloat(1 / IHV_FULL_LOAD_Sec).toFixed(3);
    if (NO_OF_LVS!=0) {
        LV_MatchingFactor.value = parseFloat( 1 / ILV_FULL_LOAD_Sec).toFixed(3);
    };
    

    // HV Calculations

    HV_FL_CUR_RPH.value = `${parseFloat(IHV_FULL_LOAD).toFixed(3)} 0 \u00b0 C`;
    HV_FL_CUR_YPH.value = `${parseFloat(IHV_FULL_LOAD).toFixed(3)} -120 \u00b0 C`;
    HV_FL_CUR_BPH.value = `${parseFloat(IHV_FULL_LOAD).toFixed(3)} 120 \u00b0 C`;

    LV_FL_CUR_RPH.value = `${parseFloat(ILV_FULL_LOAD).toFixed(3)} ${y} \u00b0 C`;
    LV_FL_CUR_YPH.value = `${parseFloat(ILV_FULL_LOAD).toFixed(3)} ${-120 + y} \u00b0 C`;
    LV_FL_CUR_BPH.value = `${parseFloat(ILV_FULL_LOAD).toFixed(3)} ${120 + y} \u00b0 C`;

    // Single Phase pickup

    HV_IP_Pickup.value = parseFloat(IHV_FULL_LOAD_Sec*IS1*1.5).toFixed(3);
    LV_IP_Pickup.value = parseFloat(ILV_FULL_LOAD_Sec*IS1*1.5).toFixed(3);

    HV_3P_Pickup.value = parseFloat(IHV_FULL_LOAD_Sec*IS1).toFixed(3);
    LV_3P_Pickup.value = parseFloat(ILV_FULL_LOAD_Sec*IS1).toFixed(3);

    // Max values 

    const HV_SECONDARY_PICKUP = ((2 * IS1 / K1 ) + IS1 ) / 2 ;
    const LV_SECONDARY_PICKUP = ((( 2 * IS1 ) / K1 ) - HV_SECONDARY_PICKUP) * NO_OF_LVS;

    HV_pickup_MAX_CUR_RPH.value = parseFloat(HV_SECONDARY_PICKUP).toFixed(3);
    HV_pickup_MAX_CUR_YPH.value = parseFloat(HV_SECONDARY_PICKUP).toFixed(3);
    HV_pickup_MAX_CUR_BPH.value = parseFloat(HV_SECONDARY_PICKUP).toFixed(3);

    LV_pickup_MAX_CUR_RPH.value = parseFloat(LV_SECONDARY_PICKUP).toFixed(3);
    LV_pickup_MAX_CUR_YPH.value = parseFloat(LV_SECONDARY_PICKUP).toFixed(3);
    LV_pickup_MAX_CUR_BPH.value = parseFloat(LV_SECONDARY_PICKUP).toFixed(3);

    // 30% Slope 
    
    const K1_HV_SECONDARY = ((K1*(IS2-(IS1/K1)))+IS1+(2*IS2))/2;
    const K1_LV_SECONDARY = ((2*IS2)-K1_HV_SECONDARY)*NO_OF_LVS;

    HV_SEC_CUR_RPH.value = (`${K1_HV_SECONDARY.toFixed(3)} 0 \u00b0`);
    HV_SEC_CUR_YPH.value =(`${K1_HV_SECONDARY.toFixed(3)} -120 \u00b0`);
    HV_SEC_CUR_YPH.value = (`${K1_HV_SECONDARY.toFixed(3)} 120 \u00b0`);

    LV_SEC_CUR_RPH.value = (`${K1_LV_SECONDARY.toFixed(3)} y \u00b0`);
    LV_SEC_CUR_YPH.value = (`${K1_LV_SECONDARY.toFixed(3)} -120+y \u00b0`);
    LV_SEC_CUR_BPH.value = (`${K1_LV_SECONDARY.toFixed(3)} 120+y \u00b0`);

    // 80% Slope

    const B = (K1*(IS2-(IS1/K1)))+IS1;
    const C = ((IS_HS2-B)/K2)+IS2;
    const K2_HV_SECONDARY =((2*C)+(IS_HS2))/2;
    const K2_LV_SECONDARY = ((2*C)-(K2_HV_SECONDARY))*NO_OF_LVS;
    HV_80SLOPE_SEC_CUR_RPH.value = parseFloat(`${K2_HV_SECONDARY.toFixed(3)} 0 \u00b0`);
    HV_80SLOPE_SEC_CUR_YPH.value = parseFloat(`${K2_HV_SECONDARY.toFixed(3)} -120 \u00b0`);
    HV_80SLOPE_SEC_CUR_BPH.value = parseFloat(`${K2_HV_SECONDARY.toFixed(3)} 120 \u00b0`);

    LV_80SLOPE_SEC_CUR_RPH.value = parseFloat(`${K2_LV_SECONDARY.toFixed(3)} y \u00b0`);
    LV_80SLOPE_SEC_CUR_YPH.value = parseFloat(`${K2_LV_SECONDARY.toFixed(3)} -120+y \u00b0`);
    LV_80SLOPE_SEC_CUR_BPH.value = parseFloat(`${K2_LV_SECONDARY.toFixed(3)} 120+y \u00b0`);

   
    

};

*/

// Lookup table for vector groups
const fields = {
    "Yy0": -180, "Yd1": -210, "Dd2": -240, "Dd4": -300,
    "Yd5": -330, "Yy6": -360, "Yd7": -390 + 360, "Dd8": -420 + 360,
    "Dd10": -480 + 360, "Yd11": -510 + 360, "Dd0": -180, "Dy1": -210,
    "Dz2": -240, "Dz4": -300, "Dy5": -330, "Dd6": -360,
    "Dy7": -390 + 360, "Dz8": -420 + 360, "Dz10": -480 + 360, "Dy11": -510 + 360
};

let y = 0; // vector group angle

// Central store for values
const values = {};

// Initialize and attach listeners
document.querySelectorAll("input, select").forEach(el => {
    values[el.id] = el.type === "number" ? parseFloat(el.value) || 0 : el.value;
    el.addEventListener("change", () => {
        values[el.id] = el.type === "number" ? parseFloat(el.value) || 0 : el.value;
        if (el.id === "vector_group") {
            y = fields[values.vector_group] || 0;
        }
        console.log(values[el.id]);
        calculate();
    });
});

// Outputs
const HV_MatchingFactor  = document.getElementById('HV_MatchingFactor');
const LV_MatchingFactor  = document.getElementById('LV_MatchingFactor');

const HV_FL_CUR_RPH      = document.getElementById('HV_FL_CUR_RPH');
const HV_FL_CUR_YPH      = document.getElementById('HV_FL_CUR_YPH');
const HV_FL_CUR_BPH      = document.getElementById('HV_FL_CUR_BPH');
const LV_FL_CUR_RPH      = document.getElementById('LV_FL_CUR_RPH');
const LV_FL_CUR_YPH      = document.getElementById('LV_FL_CUR_YPH');
const LV_FL_CUR_BPH      = document.getElementById('LV_FL_CUR_BPH');


const HV_IP_Pickup      = document.getElementById("HV_IP_Pickup");
const HV_3P_Pickup      = document.getElementById("HV_3P_Pickup");
const LV_IP_Pickup      = document.getElementById("LV_IP_Pickup");
const LV_3P_Pickup      = document.getElementById("LV_3P_Pickup");

const HV_pickup_MAX_CUR_RPH = document.getElementById("HV_pickup_MAX_CUR_RPH");
const HV_pickup_MAX_CUR_YPH = document.getElementById("HV_pickup_MAX_CUR_YPH");
const HV_pickup_MAX_CUR_BPH = document.getElementById("HV_pickup_MAX_CUR_BPH");
const LV_pickup_MAX_CUR_RPH = document.getElementById("LV_pickup_MAX_CUR_RPH");
const LV_pickup_MAX_CUR_YPH = document.getElementById("LV_pickup_MAX_CUR_YPH");
const LV_pickup_MAX_CUR_BPH = document.getElementById("LV_pickup_MAX_CUR_BPH");

const HV_SEC_CUR_RPH        = document.getElementById("HV_SEC_CUR_RPh");
const HV_SEC_CUR_YPH        = document.getElementById("HV_SEC_CUR_YPH");
const HV_SEC_CUR_BPH        = document.getElementById("HV_SEC_CUR_BPH");
const LV_SEC_CUR_RPH        = document.getElementById("LV_SEC_CUR_RPh");
const LV_SEC_CUR_YPH        = document.getElementById("LV_SEC_CUR_YPH");
const LV_SEC_CUR_BPH        = document.getElementById("LV_SEC_CUR_BPH");

const HV_80SLOPE_SEC_CUR_RPH = document.getElementById("HV_80SLOPE_SEC_CUR_RPH");
const HV_80SLOPE_SEC_CUR_YPH = document.getElementById("HV_80SLOPE_SEC_CUR_YPH");
const HV_80SLOPE_SEC_CUR_BPH = document.getElementById("HV_80SLOPE_SEC_CUR_BPH");
const LV_80SLOPE_SEC_CUR_RPH = document.getElementById("LV_80SLOPE_SEC_CUR_RPH");
const LV_80SLOPE_SEC_CUR_YPH = document.getElementById("LV_80SLOPE_SEC_CUR_YPH");
const LV_80SLOPE_SEC_CUR_BPH = document.getElementById("LV_80SLOPE_SEC_CUR_BPH");

const HV_80SLOPE_SEC_CUR_RPH_2 = document.getElementById("HV_80SLOPE_SEC_CUR_RPH_2");
const HV_80SLOPE_SEC_CUR_YPH_2 = document.getElementById("HV_80SLOPE_SEC_CUR_YPH_2");
const HV_80SLOPE_SEC_CUR_BPH_2 = document.getElementById("HV_80SLOPE_SEC_CUR_BPH_2");
const LV_80SLOPE_SEC_CUR_RPH_2 = document.getElementById("LV_80SLOPE_SEC_CUR_RPH_2");
const LV_80SLOPE_SEC_CUR_YPH_2 = document.getElementById("LV_80SLOPE_SEC_CUR_YPH_2");
const LV_80SLOPE_SEC_CUR_BPH_2 = document.getElementById("LV_80SLOPE_SEC_CUR_BPH_2");

const HV_Current = document.getElementById("HV_Current");
const HV_Current_5th = document.getElementById("HV_Current_5th");

// (add other outputs as needed)

function calculate() {
    const Tarfo_Rating   = values.Tarfo_Rating;
    const VHV            = values.VHV || 1;
    const VLV            = values.VLV || 1;
    const HVCT_primary   = values.HVCT_PRIMARY || 1;
    const HVCT_secondary = values.HVCT_SECONDARY || 1;
    const LVCT_primary   = values.LVCT_PRIMARY || 1;
    const LVCT_secondary = values.LVCT_SECONDARY || 1;
    const IS1            = values.IS1 || 0;
    const IS2            = values.IS2 || 0;
    const K1             = values.K1 || 1;
    const K2             = values.K2 || 1;
    const IS_HS1         = values.IS_HS1 || 0;
    const IS_HS2         = values.IS_HS2 || 0;
    const Range          = values.Range;
    const NO_OF_LVS      = values.NO_OF_LVS || 0;
    const IH2            = values.IH2 || 0;
    const IH5            = values.IH5 || 0;

    let IHV_FULL_LOAD, ILV_FULL_LOAD;
    if (Range === "MVA") {
        IHV_FULL_LOAD = (Tarfo_Rating * 1000000) / (VHV * Math.sqrt(3));
        ILV_FULL_LOAD = (Tarfo_Rating * 1000000) / (VLV * Math.sqrt(3));
    } else {
        IHV_FULL_LOAD = (Tarfo_Rating * 1000) / (VHV * Math.sqrt(3));
        ILV_FULL_LOAD = (Tarfo_Rating * 1000) / (VLV * Math.sqrt(3));
    }

    const IHV_FULL_LOAD_Sec = IHV_FULL_LOAD / (HVCT_primary / HVCT_secondary);
    const ILV_FULL_LOAD_Sec = ILV_FULL_LOAD / (LVCT_primary / LVCT_secondary);

    HV_MatchingFactor.value = (1 / IHV_FULL_LOAD_Sec).toFixed(3);
    if (NO_OF_LVS != 0) {
        LV_MatchingFactor.value = (1 / ILV_FULL_LOAD_Sec).toFixed(3);
    }

    // HV currents
    HV_FL_CUR_RPH.value = `${IHV_FULL_LOAD.toFixed(3)} 0 °`;
    HV_FL_CUR_YPH.value = `${IHV_FULL_LOAD.toFixed(3)} -120 °`;
    HV_FL_CUR_BPH.value = `${IHV_FULL_LOAD.toFixed(3)} 120 °`;

    // LV currents with vector group angle
    LV_FL_CUR_RPH.value = `${ILV_FULL_LOAD.toFixed(3)} ${y} °`;
    LV_FL_CUR_YPH.value = `${ILV_FULL_LOAD.toFixed(3)} ${-120 + y} °`;
    LV_FL_CUR_BPH.value = `${ILV_FULL_LOAD.toFixed(3)} ${120 + y} °`;

    // Continue with pickup and slope calculations using values.IS1, values.K1, etc.

    // Single Phase pickup
    HV_IP_Pickup.value = (IHV_FULL_LOAD_Sec * IS1 * 1.5).toFixed(3);
    LV_IP_Pickup.value = (ILV_FULL_LOAD_Sec * IS1 * 1.5).toFixed(3);

    // Three Phase pickup
    HV_3P_Pickup.value = (IHV_FULL_LOAD_Sec * IS1).toFixed(3);
    LV_3P_Pickup.value = (ILV_FULL_LOAD_Sec * IS1).toFixed(3);

    // Max values
    const HV_SECONDARY_PICKUP = ((2 * IS1 / K1) + IS1) / 2;
    const LV_SECONDARY_PICKUP = (((2 * IS1) / K1) - HV_SECONDARY_PICKUP) * NO_OF_LVS;

    HV_pickup_MAX_CUR_RPH.value = HV_SECONDARY_PICKUP.toFixed(3);
    HV_pickup_MAX_CUR_YPH.value = HV_SECONDARY_PICKUP.toFixed(3);
    HV_pickup_MAX_CUR_BPH.value = HV_SECONDARY_PICKUP.toFixed(3);

    LV_pickup_MAX_CUR_RPH.value = LV_SECONDARY_PICKUP.toFixed(3);
    LV_pickup_MAX_CUR_YPH.value = LV_SECONDARY_PICKUP.toFixed(3);
    LV_pickup_MAX_CUR_BPH.value = LV_SECONDARY_PICKUP.toFixed(3);

    const K1_HV_SECONDARY = ((K1 * (IS2 - (IS1 / K1))) + IS1 + (2 * IS2)) / 2;
    const K1_LV_SECONDARY = ((2 * IS2) - K1_HV_SECONDARY) * NO_OF_LVS;

    HV_SEC_CUR_RPH.value = `${K1_HV_SECONDARY.toFixed(3)} 0°`;
    HV_SEC_CUR_YPH.value = `${K1_HV_SECONDARY.toFixed(3)} -120°`;
    HV_SEC_CUR_BPH.value = `${K1_HV_SECONDARY.toFixed(3)} 120°`;

    LV_SEC_CUR_RPH.value = `${K1_LV_SECONDARY.toFixed(3)} ${y}°`;
    LV_SEC_CUR_YPH.value = `${K1_LV_SECONDARY.toFixed(3)} ${-120 + y}°`;
    LV_SEC_CUR_BPH.value = `${K1_LV_SECONDARY.toFixed(3)} ${120 + y}°`;

    /* ---------------- 80% Slope ---------------- */
    const B = (K1 * (IS2 - (IS1 / K1))) + IS1;
    const C = ((IS_HS2 - B) / K2) + IS2;
    const K2_HV_SECONDARY = ((2 * C) + IS_HS2) / 2;
    const K2_LV_SECONDARY = ((2 * C) - K2_HV_SECONDARY) * NO_OF_LVS;

    HV_80SLOPE_SEC_CUR_RPH.value = `${K2_HV_SECONDARY.toFixed(3)} 0°`;
    HV_80SLOPE_SEC_CUR_YPH.value = `${K2_HV_SECONDARY.toFixed(3)} -120°`;
    HV_80SLOPE_SEC_CUR_BPH.value = `${K2_HV_SECONDARY.toFixed(3)} 120°`;

    LV_80SLOPE_SEC_CUR_RPH.value = `${K2_LV_SECONDARY.toFixed(3)} ${y}°`;
    LV_80SLOPE_SEC_CUR_YPH.value = `${K2_LV_SECONDARY.toFixed(3)} ${-120 + y}°`;
    LV_80SLOPE_SEC_CUR_BPH.value = `${K2_LV_SECONDARY.toFixed(3)} ${120 + y}°`;


    /* ---------------- 80% Slope (2)---------------- */

    const D=((IS2+0.5-B)/K2)+IS2;
    const K12_HV_SECONDARY = ((2*D)+IS2+0.5)/2;
    const K12_LV_SECONDARY = ((2*D)-(K12_HV_SECONDARY))*NO_OF_LVS;

    HV_80SLOPE_SEC_CUR_RPH_2.value = `${K12_HV_SECONDARY.toFixed(3)} 0°`;
    HV_80SLOPE_SEC_CUR_YPH_2.value = `${K12_HV_SECONDARY.toFixed(3)} -120°`;
    HV_80SLOPE_SEC_CUR_BPH_2.value = `${K12_HV_SECONDARY.toFixed(3)} 120°`;

    LV_80SLOPE_SEC_CUR_RPH_2.value = `${K12_LV_SECONDARY.toFixed(3)} ${y}°`;
    LV_80SLOPE_SEC_CUR_YPH_2.value = `${K12_LV_SECONDARY.toFixed(3)} ${-120 + y}°`;
    LV_80SLOPE_SEC_CUR_BPH_2.value = `${K12_LV_SECONDARY.toFixed(3)} ${120 + y}°`;

    const I_2ndHARMONIC=(IHV_FULL_LOAD_Sec)*(IH2/100);
    const I_5thHARMONIC=(IHV_FULL_LOAD_Sec)*(IH5/100);

    HV_Current.value = `${I_2ndHARMONIC.toFixed(3)} , @ 100Hz`;
    HV_Current_5th.value = `${I_5thHARMONIC.toFixed(3)} , @250Hz`;

}