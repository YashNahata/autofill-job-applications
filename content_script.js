function contentScriptFunc() {
  let sample_data = {
    firstname: "Test",
    lastname: "Name",
    email: "test@test.com",
    phone: "+911234567890",
    cover_letter: "Test cover letter",
    headline: "Test headline",
    QA_6502863: "true",
    address: "Test address",
    resume: {
      url: "https://workable-application-form.s3.amazonaws.com/tmp/ttl-1d/production/601631b9-6698-97c2-a98f-52bc2c454bb2?AWSAccessKeyId=AKIA27KPZUMHP7SV6K43&Expires=1688248941&Signature=MDLoZkXEM9wuDBrXaHR4JCWwfTA%3D",
      name: "test_resume.pdf",
    },
  };

  document
    .querySelector(
      "#app > main > div.job__job--DNKmG > div.job__job-grid--Y5EDF > div.styles__card--1Xrqb.styles__padding-16--25ECi.styles__elevation-1--35hMI.jobDescription__job-description--7NptZ.jobDescription__card--1ZBQt > div.jobOverview__job-overview--3qD-1 > div.jobOverview__last-row-container--3dm_P > div > div.jobOverview__apply-button--2NqDp > button"
    )
    .click();

  localStorage.setItem(
    "evergreen-persistence-67dc7035-f317-414e-af52-853f3f250d05",
    JSON.stringify(sample_data)
  );

  setTimeout(() => {
    document
      .querySelector(
        ".button__button--2de5X.button__normal--14TuV.primary__default--25RCR.styles__submit--10XMc"
      )
      .click();
  }, 3000);
}
contentScriptFunc();
