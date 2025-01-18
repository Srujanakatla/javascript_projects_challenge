function calculateAge() {
    const birthDate = document.getElementById("birthDate").value;
    const resultDiv = document.getElementById("result");
  
    if (!birthDate) {
      resultDiv.textContent = "Please enter your birthdate.";
      return;
    }
  
    const birthDateObj = new Date(birthDate);
    const today = new Date();
  
    let years = today.getFullYear() - birthDateObj.getFullYear();
    let months = today.getMonth() - birthDateObj.getMonth();
    let days = today.getDate() - birthDateObj.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }
  
    resultDiv.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
  }
  
