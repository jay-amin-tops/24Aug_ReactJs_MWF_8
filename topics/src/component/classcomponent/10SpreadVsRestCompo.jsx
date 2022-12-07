import React, { Component } from 'react';

class SpreadVsRestCompo extends Component {
    // Rest Op Start
    getData=(a,...data)=>{
        console.log("getData",data);
        // console.log(data[0]);
    }
    getSum=(a,...data)=>{

        console.log("getData",data);
        // console.log(data[0]);
    }
    // Rest Op END

    getDataSpread=(a,b,c)=>{
        // console.log(data);
        // console.log(data[0]);
    }
    render() {
        return (
            <>

                without spread <br/>
                let arr = [1,2,3]; <br/>
                let arr2 = [4,5]; <br/>
                arr = arr.concat(arr2); <br/>  

                spread operator doing the concat job <br/>
                let arr = [1,2,3]; <br/>
                {/* let arr = [0=>1,1=>2,2=>3]; <br/> */}
                let arr2 = [4,5]; <br/>
                {/* let arr = [0=>4,1=>5]; <br/> */}
                
                arr = [...arr,...arr2]; <br/>
                {/* arr = [arr,arr2]; <br/> */}
                {/* [0=>1,1=>2,2=>3,3=>4,4=>5] */}
                console.log(arr); // [ 1, 2, 3, 4, 5 ] <br/>
            {/* {this.getData("testing","checking","ccc")} */}
            {this.getData(10,50,50)}
            {this.getSum(10,50,50,60)}
            arry = [12,45,45]
            {/* {this.getDataSpread(arry)} */}
            </>
        );
    }
}

export default SpreadVsRestCompo;