import React,{useState} from 'react'


export default function States(props) {
    
    const [text, setText] = useState("");
  
    
    
    function handleUpClick(){
        console.log(("Upper"));
        setText(text.toUpperCase())
        props.showalert("Upper Button Pressed","Success")
       
        
    }
    function handleDownClick(){
        console.log(("Lower"));
        setText(text.toLowerCase())
        props.showalert("Lower button Pressed","Success")
        
    }
    function handleClear(){
        
        setText("")
        props.showalert("Clear button Pressed","Success")
        
    }
    function handleCopy(){
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges()
        props.showalert("Copied to clipboard","Success")
    }

    // another way to write func 
    const handleOnChange =  (event) =>{
        console.log("Handle on change");
        setText(event.target.value) 
        
    }

   

  return (
    <>
        <div className="container my-5" style={{color : props.mode ==="light" ?  "black" : "white"}}>
            <h1>{props.heading} and Word Counter</h1>

            <div className="mb-3" >
            <textarea className="form-control" style={{backgroundColor : props.mode ==="dark" ?  "#f5f5dc" : "white"}}  value={text} onChange={handleOnChange} id="mybox" rows="8" placeholder='Enter your text'></textarea>
            </div>

            <button disabled = {text.length ===0} className="btn btn-primary mx-2 my-1"  onClick={handleUpClick}>Convert Uppercase</button>
            <button disabled = {text.length ===0} className="btn btn-primary mx-2 my-1" onClick={handleDownClick}>Convert Lowercase</button>
            <button disabled = {text.length ===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled = {text.length ===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear Text</button>
        </div>
        
        
        <div className="container my-4" style={{color : props.mode ==="light" ?  "black" : "white"}}>
            <h1>Your Text Summary</h1>
            {/* <p> {text.split(" ").filter((word) => { return word.length !==0}).length} words and {text.replace(/\s/g, "").length} Chracters</p> */}
            
            {/* In prev line if u type Hi
                                        I am 
                                        good    like this it will count as 1 word  and also charcter problem taking space as input(fix it below) */}
            <p> {text.split(/\s+/).filter((word) =>  word !=="").length} words and {text.replace(/\s/g, "").length} Chracters</p>  {/* you can write return word.length like prev line but i did it another way */}
            
            <p> {0.008 * text.split(" ").filter((word) => word !=="").length} Minutes to read</p>
            <h3> Preview</h3>
            <p>{text.length >0 ?text : "It's empty !! Nothing to preview"}</p>
        </div>



    

        <a href="https://github.com/NeelBiswas123/"> Follow my github</a>  
    
      
    </>
  )
}
