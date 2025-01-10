document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    const profilePictureInput = document.getElementById("profilePicture");
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const phoneElement = document.getElementById("phone");
    const addressElement = document.getElementById("linkdin");
    const educationElement = document.getElementById("education");
    const experienceElement = document.getElementById("experience");
    const skillsElement = document.getElementById("skills");
    if (
      profilePictureInput &&
      nameElement &&
      emailElement &&
      phoneElement &&
      addressElement &&
      educationElement &&
      experienceElement &&
      skillsElement
    ) {
      const name = (nameElement as HTMLInputElement).value;
      const email = (emailElement as HTMLInputElement).value;
      const phone = (phoneElement as HTMLInputElement).value;
      const address = (addressElement as HTMLInputElement).value;
      const education = (educationElement as HTMLInputElement).value;
      const experience = (experienceElement as HTMLInputElement).value;
      const skills = (skillsElement as HTMLInputElement).value;

      const profilePictureFile = (profilePictureInput as HTMLInputElement)
        .files?.[0];
      const profilePictureURL = profilePictureFile
        ? URL.createObjectURL(profilePictureFile)
        : "";

      const resumeOutput = `
        <div class="resume">

       
        ${
          profilePictureURL
            ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`
            : ""
        }
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Linkdin:</strong> ${address}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Work Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        </div>
        `;
      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
      } else {
        console.error("The resume output element is missing");
      }
    } else {
      console.error("One or more form elements are missing");
    }
  });
