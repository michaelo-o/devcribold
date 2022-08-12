import styles from "../exercisesgen.module.css";
import Head from "next/head";
import PageContentFooter from "../../../components/PageContentFooter";
import { useState, useEffect } from "react";
import blankAnswer from "../../../jsons/exercises/html/blankAns.json"
import correctAnswer from "../../../jsons/exercises/html/correctAns.json"
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useRouter } from 'next/router';
import { useFirestore } from "../../../hooks/useFirestore";


// &#123; Left Curly Bracket
// &#125; right Curly Bracket


// <	&lt;	&#60;	&#x3C;	less than
// >	&gt;	&#62;	&#x3E;	greater than

// DEFAULT IMPORTS


const HtmlEx = () => {
    const router = useRouter()

    const { user } = useAuthContext()

    // const uid = user.uid

    const { addDocument, response } = useFirestore('score')


    const wrongA = <span className={styles.wrongAns}>Wrong Answer</span>
    const rightA = <span className={styles.rightAns}>Right Answer</span>
    const noA = <span className={styles.wrongAns}>No Answer Given</span>


    const RedoInProgress = <span>Redoing the Exercises...</span>

    const blankAns = blankAnswer;

    const correctAns = correctAnswer;

    const [Ans1Status, setAns1Status] = useState("")
    const [Ans2Status, setAns2Status] = useState("")
    const [Ans4Status, setAns4Status] = useState("")
    const [Ans5Status, setAns5Status] = useState("")
    const [Ans6to11Status, setAns6to11Status] = useState("")
    const [Ans12to17Status, setAns12to17Status] = useState("")
    const [Ans18Status, setAns18Status] = useState("")
    const [Ans19to20Status, setAns19to20Status] = useState("")
    const [Ans21Status, setAns21Status] = useState("")
    const [Ans22to23Status, setAns22to23Status] = useState("")



    const ResetAnsStatus = () => {
        setAns1Status("")
        setAns2Status("")
        setAns4Status("")
        setAns5Status("")
        setAns6to11Status("")
        setAns12to17Status("")
        setAns18Status("")
        setAns19to20Status("")
        setAns21Status("")
        setAns22to23Status("")
    }


    const [ShowAnswerStatus, setShowAnswerStatus] = useState(false)
    const [NoSubmit, setNoSubmit] = useState(false)

    const [Attrscore, setAttrscore] = useState(0)

    const [ExcStatus, setExcStatus] = useState("Exercises Not Attempted")
    const [ExcAttempted, setExcAttempted] = useState(false)

    const [{ ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10, ans11, ans12, ans13, ans14, ans15, ans16, ans17, ans18, ans19, ans20, ans21, ans22, ans23 }, setAns] = useState(blankAns);

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
        if (ans4 === "href=") {
            setAttrscore(++Attrscore);
            setAns4Status(rightA)
        }
        else if (ans4 === "") {
            setAns4Status(noA)
        }
        else {
            setAns4Status(wrongA)
        }
        if (ans5 === "<h1>London</h1>") {
            setAttrscore(++Attrscore);
            setAns4Status(rightA)
        }
        else if (ans5 === "") {
            setAns5Status(noA)
        }
        else {
            setAns5Status(wrongA)
        }
        if (ans6 === "<h1>Hello</h1>" && ans7 === "<h2>Hello</h2>" && ans8 === "<h3>Hello</h3>" && ans9 === "<h4>Hello</h4>" && ans10 === "<h5>Hello</h5>" && ans11 === "<h6>Hello</h6>") {
            setAttrscore(++Attrscore);
            setAns6to11Status(rightA)
        }
        else if (ans6 === "" && ans7 === "" && ans8 === "" && ans9 === "" && ans10 === "" && ans11 === "") {
            setAns6to11Status(noA)
        }
        else {
            setAns6to11Status(wrongA)
        }
        if (ans12 === "<h1>" && ans13 === "</h1>" && ans14 === "<h2>" && ans15 === "</h2>" && ans16 === "<p>" && ans17 === "</p>") {
            setAttrscore(++Attrscore);
            setAns12to17Status(rightA)
        }
        else if (ans6 === "" && ans7 === "" && ans8 === "" && ans9 === "" && ans10 === "" && ans11 === "") {
            setAns12to17Status(noA)
        }
        else {
            setAns12to17Status(wrongA)
        }
        if (ans18 === "<p>Hello World!</p>") {
            setAttrscore(++Attrscore);
            setAns18Status(rightA)
        } else if (ans18 === "") {
            setAns18Status(noA)
        }
        else {
            setAns18Status(wrongA)
        }
        if (ans19 === "</h1>" && ans20 === "</p>") {
            setAttrscore(++Attrscore);
            setAns19to20Status(rightA)
        } else if (ans19 === "" && ans20 === "") {
            setAns19to20Status(noA)
        }
        else {
            setAns19to20Status(wrongA)
        }
        if (ans21 === "<br>") {
            setAttrscore(++Attrscore);
            setAns21Status(rightA)
        } else if (ans21 === "") {
            setAns21Status(noA)
        }
        else {
            setAns21Status(wrongA)
        }
        if (ans22 === "<li>" && ans23 === "</li>") {
            setAttrscore(++Attrscore);
            setAns22to23Status(rightA)
        } else if (ans22 === "" && ans23 === "") {
            setAns22to23Status(noA)
        }
        else {
            setAns22to23Status(wrongA)
        }
        addDocument({
            uid,
            Attrscore,
        })
        // console.log(Attrscore)

    }


    const Redo = (event) => {
        event.preventDefault();
        setExcAttempted(false)
        ResetAnsStatus();
        setNoSubmit(false)
        setShowAnswerStatus(false);
        setExcStatus(RedoInProgress)
        setAttrscore(0);
        setTimeout(() => {
            setAns(blankAns)

        }, 500);
    }

    const showAnswersTrue = () => {
        setShowAnswerStatus(!ShowAnswerStatus)
        setAns(correctAns)
        ResetAnsStatus()
        setNoSubmit(true)
    }

    const showAnswersFalse = () => {
        setShowAnswerStatus(!ShowAnswerStatus)
        setAns(blankAns)
        setNoSubmit(false)

    }

    const redirect = () => {
        setTimeout(() => {
            router.push('/login/')
        }, 50)
    }

    //  !user && redirect() 

    return (
        <>
            <Head>
                <title>HTML Exercises | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>
            <div className={styles.genexcbackground}>



                {user ? (

                    <div className={styles.pagecontent}>
                        <h1>HTML Exercises</h1>


                        <div className={styles.quesbg}>
                            <form onSubmit={handleSubmit}>
                                <p>1) Add a &quot; tooltip&quot; to the paragraph below with the text &quot;About DevCrib&quot;.</p> <br />
                                <p> &lt;p<input value={ans1} name="ans1" onChange={onChange} type="text" />=&quot;About DevCrib&quot;&gt;DevCrib is a Web Developer Site&lt;p&gt; {Ans1Status}</p>
                                <br />

                                <p>2) Set the size of the image to 250 pixels wide and 400 pixels tall.</p> <br />
                                <p>&lt;img src=&quot;devcrib.jpg&quot; width=&quot;<input value={ans2} name="ans2" onChange={onChange} type="text" />&quot; height=&quot;<input value={ans3} name="ans3" onChange={onChange} type="text" />&quot;&gt;{Ans2Status}</p>
                                <br />

                                <p>3)Make the element below into a link that goes to &quot; https://www.google.com&quot;.</p> <br />
                                <p>&lt;a<input value={ans4} name="ans4" onChange={onChange} type="text"
                                />&quot;https://www.google.com&quot;&gt;This is a link&lt;/a&gt;{Ans4Status}</p>
                                <br />

                                <p>4) Use the correct HTML tag to add a heading with the text &quot;London&quot;.</p> <br />
                                <p><input value={ans5} name="ans5" onChange={onChange} type="text" />  {Ans5Status}</p>
                                <p>&lt;p&gt;London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.&lt;/p&gt;
                                </p> <br />

                                <p>5) Add six headings to the document with the text &quot;Hello&quot;. <br />
                                    Start with the most important heading (the largest) and end with the least important heading (the smallest).</p> <br />

                                <p><input value={ans6} name="ans6" onChange={onChange} type="text" />  </p>
                                <p><input value={ans7} name="ans7" onChange={onChange} type="text" />  </p>
                                <p><input value={ans8} name="ans8" onChange={onChange} type="text" />  </p>
                                <p><input value={ans9} name="ans9" onChange={onChange} type="text" />  </p>
                                <p><input value={ans10} name="ans10" onChange={onChange} type="text" />  </p>
                                <p><input value={ans11} name="ans11" onChange={onChange} type="text" />  {Ans6to11Status}</p>
                                <br />

                                <p>6) Mark up the text with appropriate tags: <br />

                                    &quot;Universal Studios Presents&quot; is the most important heading. <br /> <br />

                                    &quot;Jurassic Park&quot; is the next most important heading. <br /> <br />

                                    The last sentence is just a paragraph. <br /> <br />

                                    Start with the most important heading (the largest) and end with the least important heading (the smallest).</p> <br />

                                <p><input value={ans12} name="ans12" onChange={onChange} type="text" />Universal Studios Presents<input value={ans13} name="ans13" onChange={onChange} type="text" />  </p>
                                <p><input value={ans14} name="ans14" onChange={onChange} type="text" />Jurassic Park<input value={ans15} name="ans15" onChange={onChange} type="text" />  </p>
                                <p><input value={ans16} name="ans16" onChange={onChange} type="text" />On the Island of Isla Nublar, a new park has been built: Jurassic Park is a theme park of cloned dinosaurs!!<input value={ans17} name="ans17" onChange={onChange} type="text" />  </p> {Ans12to17Status} <br /> <br />


                                <p>7) Use the correct HTML tag to add a paragraph with the text &quot;Hello World!&quot;.</p> <br />
                                <p>
                                    &lt;html&gt; <br />
                                    &lt;body&gt;  <br />
                                    <input value={ans18} name="ans18" onChange={onChange} type="text" /> {Ans18Status}  <br />
                                    &lt;/body&gt;  <br />
                                    &lt;/html&gt;  <br />
                                </p>

                                <br />

                                <p>8) Clean up this document with proper end tags.</p> <br />
                                <p>&lt;h1&gt;This is a Heading <input value={ans19} name="ans19" onChange={onChange} type="text" /> <br />
                                    &lt;p&gt;This is a paragraph.<input value={ans20} name="ans20" onChange={onChange} type="text" />  {Ans19to20Status}<br /> </p>
                                <br />
                                <p>9) Add a line break in the middle of the paragraph:</p> <br />
                                <p>&lt;p&gt;My Bonnie lies<input value={ans21} name="ans21" onChange={onChange} type="text" />over the ocean.&lt;/p&gt;{Ans21Status}</p> <br />

                                <p>10) Add a list item with the text &quot;Coffee&quot; inside the &lt;ul&gt;.</p> <br />

                                <p>&lt;ul&gt;
                                    <br />
                                    <input value={ans22} name="ans22" onChange={onChange} type="text" />Coffee<input value={ans23} name="ans23" onChange={onChange} type="text" /> {Ans22to23Status}
                                    <br />
                                    &lt;/ul&gt; </p>



                                {ExcAttempted ? (
                                    <div>
                                        <h1 className={styles.excStatus}>Submitted!Here&apos;s Your Score;</h1>
                                    </div>
                                ) :
                                    (<div>
                                        {NoSubmit ?
                                            null : (
                                                <div>
                                                    <h3>Make Sure all Questions have been Attempted before Submitting!</h3>
                                                    <input
                                                        type="submit"
                                                        className="submitbutton"
                                                        value="Submit Answers"
                                                    />
                                                </div>
                                            )
                                        }

                                    </div>)
                                }

                            </form>

                            {ExcAttempted ? (
                                <div>
                                    <h1 className={styles.excStatus}>{Attrscore}/10</h1>
                                    <button onClick={Redo} className={styles.redo}>Redo Exercises</button>
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

                        {/* <div className={styles.quesbg}>
                            <h2>Your Previous Score: 3
                                {PrevScore}
                            </h2>
                        </div> */}










                        <PageContentFooter />
                    </div>
                ) : redirect()}
            </div>

        </>
    );
}

export default HtmlEx;