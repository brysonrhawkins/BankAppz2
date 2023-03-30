import '../Landing/LandingPage.css'

function LandingPage(){
    return(
        <div className='app-container'>
        <h1 className='app-title'>Basic Banking App:</h1>
        <br/>
        <p className='app-intro'>Firstly, thanks for viewing this project. This is an app developed to show capabilites as a developer,
            where you Create, Read, Update, and Display data. the chosen database is firestore, and the front-end
            is built in react/ javascript. 
        </p>
        <br/>
        <p className='app-outro'>To begin using this app, click on one of the nav links which states what each page will do.</p>
        <p className='app-closing'>-- Also please note, no Auth is used due to overcomplication of a useless app. Css was also not
            a priority here. </p>
        </div>
    )
}

export default LandingPage