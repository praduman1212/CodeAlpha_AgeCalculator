function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    const dobDate = new Date(dobInput);
    const currentDate = new Date();
   
    const age = currentDate.getFullYear() - dobDate.getFullYear();

   
    const result = document.getElementById("result");
    result.innerText = `Your age is ${age} years old.`;
}

