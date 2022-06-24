

import { useEffect, useState } from "react"
import "./navbar.css"

const Navbar=()=>{

    const liInNav=["الرئيسيه","من نحن","الخدمات","الكورسات","الادوات","الورشات","الاخبار","الابحاث","فرق العمل","العضويه","اتصل بنا"]
    const[showUI,setShowUI]=useState(false)

    useEffect(()=>{

        const doSome =()=>{
            if(window.innerWidth > 991){
                setShowUI(false)

            }
        }

        window.addEventListener("resize",doSome)

    })

    return(

        <div className="nav">
            <div className="container">
                <div>
                    <div className="fore">
                        <a className="logo" href="#55">
                            <img src="../../../image/logo.png" alt=""/>
                        </a>

                        <i class="fa-solid fa-bars" onClick={()=>setShowUI(!showUI)}></i>
                    </div>

                    <div className="show">
                        <div class="box">
                            <div className="lang">EN</div>

                            <div className="search">
                                <img src="../../../image/Icon.png" alt=""/>
                                <input placeholder="بحث .."/>
                            </div>

                        </div>

                        <div className="info">

                            <div className="calendar">
                                <img src="../../../image/calendar (1).png" alt=""/>
                                <span>الاجندة</span>
                            </div>

                            <div>
                                <img src="../../../image/profile.png" alt=""/>
                            </div>

                        </div>

                    </div>
                
                </div>

                <ul className={`${showUI ?"active" :""}`}>
                    {liInNav.map((name,index)=>{
                        return(
                            <li   key={index}>
                                <a href="/">
                                    {name}
                                </a>
                            </li>
                        )
                    })}
                
                </ul>




                
                
            </div>
        </div>

    )
}

export default Navbar