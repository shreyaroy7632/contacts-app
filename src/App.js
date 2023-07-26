import './App.css';
function App() {
  function add_contact(){
    document.getElementById("form1").style.display = 'block';
    document.getElementById("save").style.display = 'inline';
  }

  function save(){
    document.getElementById("form1").style.display = 'none';
    document.getElementById("save").style.display = 'none';
   
    const contact = document.createElement("button");
    contact.setAttribute("id","new_contact")
    contact.innerText = document.getElementById("name").value;
    contact.style.background = " #664a62";
    contact.style.borderRadius = "8px";
    contact.style.color = "aliceblue"
    contact.style.marginLeft = "20px"
    contact.style.margintop  = "1px"
    contact.style.height = "40px"
    contact.style.width = "200px"
    contact.style.display = "block"
    document.body.appendChild(contact);
    
  }
 
  return (
    <>
     <h1 >MY CONTACTS</h1>
     <hr className="hr" />
     <br/>
  
      {/* adding search button */}
     <form className="search" action="/action_page.php">
     <input type="text" placeholder="Search name" name="search"/>
     <button type="submit" className="search2"><i className="fa fa-search"></i></button>
     </form>
     <br/>


      {/* section1 of the app */}
     
           {/* now adding CONTACTS button */}
            <button className="butt" onClick={add_contact}>
            ADD CONTACT<spacer type="horizontal" width="100" height="100"> </spacer>
            <i className="logo2 fa-solid fa-plus fa-xl"></i>
            </button>        
     <br/> 
            {/* new contacts */}
       {/* <button className="new_contact">
      demo-name<i class="pencil fa-solid fa-pencil fa-xl"></i> 
               <i class="trash fa-solid fa-trash fa-xl"></i>
      </button>  */}
    {/* now comes the section 2 of the app */}
   
    <form id = "form1">
        <label for="name">Name:</label><br/>
        <input type="text" id="name" name="fname"/><br/>
        <label for="contact">Contact:</label><br/>
        <input type="text" id="contact" name="contact"/><br/>
        <label for="email">Email-id:</label><br/>
        <input type="text" id="email" name="email"/><br/>
        </form>   
       <section>
       <button id="save" onClick={save}>SAVE</button>
       <button id="update" >UPDATE</button>
       <button id="delete"><i class="trash fa-solid fa-trash fa-xl"></i></button>
        <button id="done" >DONE</button><br/>
       </section>      
     </>
  );
}

export default App;


