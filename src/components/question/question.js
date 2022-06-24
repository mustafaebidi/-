
import "./question.css"
const Question=()=>{

    return(
        <div className="question">
            <div className="container">
                <div className="img-con">
                    <img alt="" src="../../../image/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall-removebg.png"/>
                </div>

                <div className="widget">
                    <div className="head">
                        <img alt="" src="../../../image/question.png"/>
                        <div>
                            <h3>ارسل سؤالك للمحاضر</h3>
                            <h5>يجب عليك التسجيل و حضور الندوة</h5>
                        </div>
                    </div>
                    <div className="form">
                        <textarea>
                        </textarea>
                        <p>لابد من حجز الندوة  اولا حتي تتمكن من ترك سؤالك</p>
                        <div className="send">ارسل</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question