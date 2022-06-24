


import "./footer.css"
const Footer=()=>{
    return(
        <div className="footer">
            <div className="container">
                <div className="all">
                    <div>
                        <div>
                            <img alt="" src="../../../image/Group 177.png "/>
                        </div>
                        <span>Safa@gmail.com</span>
                        <span>+757 699-4478</span>

                    </div>
                    
                    <div className="links">
                        <h3>الروابط</h3>
                        <div>
                            <ul>
                                {["الرئيسية","من نحن","الخدمات","الفعاليات","الكورسات","الندوات"].map((name)=>{
                                    return(
                                        <li>
                                            <a href="/s">
                                                {name}
                                            </a>
                                        </li>
                                    )

                                })}
                            </ul>

                            <ul>
                                {["الورشات","الاخبار","الابحاث","فريق العمل ","العضوية","اتصل بنا"].map((name)=>{
                                    return(
                                        <li>
                                            <a href="/s">
                                                {name}
                                            </a>
                                        </li>
                                    )

                                })}
                            </ul>                           
                        </div>
                    </div>

                    <div className="follow">
                        <h3>تابعنا </h3>
                        <div className="social">
                            <a href="/">
                                <i class="fa-brands fa-google-plus-g"></i>
                            </a>
                            <a href="/">
                                <i class="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="/">
                                <i class="fa-brands fa-twitter"></i>
                            </a>  
                            <a href="/">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>                                                           
                        </div>
                        <div>
                            <h3>لمتابعة الاخبار  </h3>
                            <div className="subscription">
                                <input/>
                                <button>اشترك</button>
                            </div>
                        </div>
                    </div>

                </div>
                <p className="foot">الحقوق محفوظة لصفا</p>           
            </div>

        </div>

    )
}

export default Footer