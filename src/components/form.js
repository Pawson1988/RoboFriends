
function Form(){
    

    return (
       <form>
           <label id="firstName">First Name:</label>
           <input type="text" id="firstname" name="firstName" required/>
           <label id="lastName">Last Name:</label>
           <input type="text" id="lastName" name="lastName" required/>
           <label id="age">Age:</label>
           <input type="number" id="age" name="age" required/>
           <button>Submit</button>
       </form>

    )
}

export default Form;