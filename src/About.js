

export default function About(props) {



   let colorfunc = {
      color : props.mode ==="light" ? "black" : "white",
      backgroundColor: props.mode === "dark" ? "black" : "white",
      border :' 2px solid',
      borderColor : "grey"
    }

        

    
  return (

    // <div className='container' style={{backgroundColor : props.mode ==="dark" ?  "grey" : "white"}} >
    <div className='container  my-3 py-2' style={colorfunc} >
        <h1 className='my-2 ' style={colorfunc} >About us </h1>
        <div className="accordion" id="accordionExample">

        <div className="accordion-item" >
        <h2 className="accordion-header" >
        <button className="accordion-button collapsed" style={{backgroundColor : props.mode==="dark"? "#6d85b9" : "white" }}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            About me
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
        <div className="accordion-body"  style={{backgroundColor : props.mode==="dark"? "#f5f5dc" : "white" }}>
            Hi , Sir/Madam I am computer Science Engineer , while learning react I make this website as a test that I can make a website with react or not ... so this is my first project using react . thank you so much for reading this, this is not a big project I just started learing react and make it 
              here is my profile link for more projects of mine <a href="https://www.linkedin.com/in/neelanjan-biswas-9a3417270/"> Linkedin</a> and <a href="https://github.com/NeelBiswas123/">Github</a>
        </div>
        </div>
    </div>

    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={{backgroundColor : props.mode==="dark"? "#6d85b9" : "white" }} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            About the Website
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor : props.mode==="dark"? "#f5f5dc" : "white" }}>
                    Welcome to TextUtils, an innovative platform designed to simplify text manipulation! Whether you're a writer, student, professional, or anyone needing quick and efficient text tools, this website is your perfect companion.
                    This website can tell you how many words you have typed with excluding spaces and can covert into Upper or Lower Case 
                   <br />
                        Features:
                   <br />

                        Word Counter: Instantly counts the number of words in your text, making it easier to track length and meet specific word-count requirements.
                   <br />
                   <br />

                        Case Converter: Quickly converts text between uppercase and lowercase formats, saving time and effort while maintaining consistency.
                   <br />
                   <br />

                        The user-friendly interface ensures that navigating these features is smooth and hassle-free. Just type or paste your text, select your preferred action, and let the website handle the rest. It's ideal for tasks like formatting documents, streamlining writing projects, and simplifying text editing.

                        Take your productivity to the next level with this simple yet effective tool!
            </div>
        </div>
    </div>
    
    </div>

    

    </div>
  )
}
