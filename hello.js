// Problem 1 --Find the maximum value, from the array..
// function maxValue(...val){
//     let max = val[0];
//     for( let i = 0; i < val.length; i++){
//         if(val[i] > max){
//             max = val[i];
//         }
//     }
//     console.log(max)
// }
// maxValue(...[1 ,5, 102 ,7, 4, 7, 4,100, 9, 8,100, 101])
// ===========================================================================================
// Problem 2 -- Find the minimum value , from the  array..
// function minValue(...val){
//     let minimum = val[0];
//     for(let i = 0; i < val.length; i++){
//         if(val[i] < minimum){
//             minimum = val[i];
//         }
//     }
//     console.log(minimum)

// }
// minValue(...[-0, -1, 0,1 ,5, 102 ,7, 4, 7, 4,100, 9, 8,100, 101])

// ===========================================================================================
// To upper case ...
// function cap(val){
//     let cal = val.charCodeAt(0);
//     let result ;
//     if(cal > 91){
//         let e = cal - 32;
//         let d = String.fromCharCode(e);
//         let exi = val.split('');
//             exi[0] = d;
//             result = (exi.toString()).replaceAll(',' , '');
//     }else{
//         result = val;
//     }
    
     

//     console.log(result)
// }
// cap('emi')
// ==================================================================
// To lower case
// function lower(val){
//     let exi = val.charCodeAt(0);
//     let result;
//     if (exi < 91){
//             exi = exi + 32;
//         let cl = val.split('');
//             cl[0] = String.fromCharCode(exi)
//             let br = cl.toString();
//                 result = br.replaceAll(',' , '')
//             console.log(result)
//     }else{
//         result =  val;
//     }
//     console.log(result)
// }
// lower('Emi')
// ================================================
