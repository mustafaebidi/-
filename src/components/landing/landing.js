import Navbar from "../navbar/navbar"

import "./landing.css"
const Landing=()=>{
    return(
        <div className="landing">
            <img className="right" src="../../../image/5a66e6139591335.623227cc8bdbd.png" alt=""/>
            <img  className="left" src="../../../image/Group 7.png" alt=""/>

            <Navbar/>

            <div className="info">
                <div className="container">

                    <div className="data">
                        <div className="text">
                            <div className="head">
                                <ul>
                                    <li>
                                        <a href="/">
                                            الرئيسيه
                                        </a>
                                    </li>
                                    
                                    <li className="active">
                                        <a href="/">
                                            الادوات
                                        </a>
                                    </li>
                                </ul>

                                <div className="fav">
                                    <div className="heart">
                                        <img src="../../../image/heart (1).png" alt="" />
                                    </div>
                                    <span>اضف الي المفضلة</span>
                                </div>
                        
                            </div>

                            <div className="body">
                                <div>
                                    <img src="../../../image/calendar (2).png" alt=""/>
                                    <p>يوم الخميس ١٦ يوليو ٢٠٢٠ م من ٤ - ٦ مساءاً</p>
                                </div>
                                <p>
                                ندعوكم في الجمعية المالية السعودية صفا لحضور المساحة الخاصة بمناقشة الميزانية العامة والاقتصاد المحلي، ننتظركم غدًا
                                </p>
                            </div>

                            <div className="book">حجز الان</div>


                        </div>

                        <div className="con-img">
                            <img src="../../../image/Bitmap.png" alt=""/>
                        </div>
                    </div>

                    <div className="foot">
                    <h3>تقديم المحاضرين</h3>
                    <div className="cart-container">
                        {["الدكتور رجا المرزوقى","الدكتور رجا المرزوقى"].map((name,index)=>{
                            return(
                                <div key={index} className="cart">

                                    <div className="con-img">
                                        <img src={`../../../image/${name}${index+1}.png`} alt=""/>
                                    </div>

                                    <div className="info" >
                                        <h4>{name}</h4>
                                        <p>نائب رئيس مجلس ادارة جمعية صفا  - استاذ الاقتصاد المشارك معهد الامير سعود الفيصل للدراسات الدبلوماسية</p>
                                    </div>

                                </div>
                            )
                        })}   
                    </div>                       
                    </div>
 

                </div>
                    
            
            </div>

            

        </div>
    )
}

export default Landing

