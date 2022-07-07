import styles from "../excercisesgen.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import PageContentFooter from "../../../components/PageContentFooter";
import HtmlExLSb from "./comps/HtmlExLSb";
import { useState } from "react";

// &#123; Left Curly Bracket
// &#125; right Curly Bracket


// <	&lt;	&#60;	&#x3C;	less than
// >	&gt;	&#62;	&#x3E;	greater than

// DEFAULT IMPORTS


const AttributesEx = () => {

    const [showSideBar, setshowSideBar] = useState(false)
    const sidebarToggle = () => {
        setshowSideBar(!showSideBar)
    }

    const wrongA = <span className={styles.wrongAns}>Wrong Answer</span>
    const rightA = <span className={styles.rightAns}>Right Answer</span>
    const noA = <span className={styles.wrongAns}>No Answer Given</span>


    const RedoInProgress = <span>Redoing the Excercises...</span>

    const blankAns = {
        ans1: "",
        ans2: "",
        ans3: "",
        ans4: "",
        ans5: "",
    };

    const correctAns = {
        ans1: "title",
        ans2: "250",
        ans3: "400",
        ans4: "href",
        ans5: "400",
    };

    const [Ans1Status, setAns1Status] = useState("")
    const [Ans2Status, setAns2Status] = useState("")
    const [Ans4Status, setAns4Status] = useState("")
    const [Ans5Status, setAns5Status] = useState("")


    const ResetAnsStatus = () => {
        setAns1Status("")
        setAns2Status("")
        setAns4Status("")
        setAns5Status("")
    }


    const [ShowAnswerStatus, setShowAnswerStatus] = useState(false)
    const [AnsShowClear, setAnsShowClear] = useState(false)

    const [Attrscore, setAttrscore] = useState(0)

    const [ExcStatus, setExcStatus] = useState("Excercises Not Attempted")
    const [ExcAttempted, setExcAttempted] = useState(false)

    const [{ ans1, ans2, ans3, ans4, ans5 }, setAns] = useState(blankAns);

    const onChange = (event) => {
        const { name, value } = event.target;
        setAns(prevState => ({ ...prevState, [name]: value }));
    }


    const handleSubmit = (event) => {
        setExcAttempted(true)
        event.preventDefault();
        if (ans1 === "title") {
            setAttrscore(++Attrscore);
            setAns1Status(rightA)
        }
        else if (ans1 === "") {
            setAns1Status(noA)
        }
        else {
            setAns1Status(wrongA)
        }
        if (ans2 === "250" && ans3 === "400") {
            setAttrscore(++Attrscore);
            setAns2Status(rightA)
        } else if (ans2 === "") {
            setAns2Status(noA)
        }
        else {
            setAns2Status(wrongA)
        }
        if (ans4 === "href") {
            setAttrscore(++Attrscore);
            setAns4Status(rightA)
        }
        else if (ans4 === "") {
            setAns4Status(noA)
        }
        else {
            setAns4Status(wrongA)
        }
        if (ans5 === "alt1") {
            setAttrscore(++Attrscore);
            setAns4Status(rightA)
        }
        else if (ans5 === "") {
            setAns5Status(noA)
        }
        else {
            setAns5Status(wrongA)
        }
    }


    const Redo = (event) => {
        event.preventDefault();
        setExcAttempted(false)
        ResetAnsStatus();
        setExcStatus(RedoInProgress)
        setAttrscore(0);
        setTimeout(() => {
            setAns(blankAns)

        }, 500);
    }

    const showAnswersTrue = () => {
        setShowAnswerStatus(!ShowAnswerStatus)
        setAns(correctAns)
    }

    const showAnswersFalse = () => {
        setShowAnswerStatus(!ShowAnswerStatus)
        setAns(blankAns)
    }


    return (
        <>
            <Head>
                <title>HTML Excercises | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>
            <div className={styles.genexcbackground}>

                <HtmlExLSb />
                {/* {showSideBar ? (
                    <HtmlExLSb sidebarToggle={sidebarToggle} />
                ) : 
                <span className={styles.sTgle}>
                    <Image src="/menu (1).svg" onClick={sidebarToggle}  width={35} height={35} alt="Toggle SideBar" />
                 </span> 
                } */}

                <div className={styles.pagecontent}>
                    <h1>HTML Excercises</h1>

                    <div className={styles.quesbg}>
                        <form onSubmit={handleSubmit}>
                            <h2 id="attrex">HTML Attributes Excercise</h2>

                            <p>1) Add a &quot; tooltip&quot; to the paragraph below with the text &quot;About DevCrib&quot;.</p>
                            <p> &lt;p<input value={ans1} name="ans1" onChange={onChange} type="text"
                            />=&quot;About DevCrib&quot;&gt;DevCrib is a Web Developer Site&lt;p&gt; {Ans1Status}</p>
                            <br />
                            <p>2) Set the size of the image to 250 pixels wide and 400 pixels tall.</p>
                            <p>&lt;img src=&quot;devcrib.jpg&quot; width=&quot;<input value={ans2} name="ans2" onChange={onChange} type="text" />&quot; height=&quot;<input value={ans3} name="ans3" onChange={onChange} type="text" />&quot;&gt;{Ans2Status}</p>
                            <br />
                            <p>3)Make the element below into a link that goes to &quot; https://www.google.com&quot;.</p>
                            <p>&lt;a<input value={ans4} name="ans4" onChange={onChange} type="text"
                            />&quot;https://www.google.com&quot;&gt;This is a link&lt;/a&gt;{Ans4Status}</p>
                            <br />

                            <h2 id="headex">HTML Headings Excercise</h2>

                            {/* <p> &lt;img src=&quot;w3schools.png&quot; <input value={ans5} name="ans5" onChange={onChange} type="text"
                            /> = &quot; w3schools Logo&quot;&gt; {Ans5Status}</p> */}














































                            {ExcAttempted ? (
                                <div>
                                    <h1 className={styles.excStatus}>Submitted!Here&apos;s Your Score;</h1>
                                </div>
                            ) : (
                                <div>
                                    <h3>Make Sure all Questions have been Attempted before Submitting!</h3>
                                    <input
                                        type="submit"
                                        className="submitbutton"
                                        value="Submit Answers"
                                    />
                                </div>
                            )}

                        </form>

                        {ExcAttempted ? (
                            <div>
                                <h1 className={styles.excStatus}>{Attrscore}/4</h1>
                                <button onClick={Redo} className={styles.redo}>Redo Excercises</button>
                            </div>
                        ) : (
                            <h1 className={styles.excStatus}>{ExcStatus}</h1>
                        )
                        }

                    </div>

                    {ShowAnswerStatus ? (
                        <div className={styles.stickyans}>
                            <button onClick={showAnswersFalse} className={styles.showAns}>Hide Answer</button>
                        </div>
                    ) :
                        <div className={styles.stickyans}>
                            <button onClick={showAnswersTrue} className={styles.showAns}>Show Answer</button>
                        </div>
                    }












                    {/* <PageContentFooter /> */}
                </div>
            </div>

        </>
    );
}

export default AttributesEx;