import {useCallback, useContext, useEffect, useMemo, useState} from "react";
import {useLocation, useSearchParams} from "react-router-dom";

export function Test() {
    //绑定变量/修改方法
    const [count,setCount] = useState(0);

    //对象的修改——setXX
    let handleClick = useCallback(() =>{
        {
            setCount(prevCount => prevCount + 1);
        }
    });

    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);
    let a = searchParams.get("a");
    let location = useLocation();

    let addOneValue = useMemo(()=>{
        console.log("addOneValue");
        return 1;
    },[]);

    useEffect(() => {
        console.log("useEffect的代码执行")
    }, [count]);

    return (
        <>
            <button onClick={handleClick}>count: {count}, addOneValue: {addOneValue}</button>
        </>
    )
}