function accordionFn() {
  //get section
  const section = document.querySelector(".answer--section");
  //get button
  const button = section.querySelectorAll("button");
  //get title
  const title = section.querySelectorAll("h2");
  //get answer
  const answer = document.querySelectorAll("p");
  const answerArr = [...answer];

  console.log(answerArr.length);

  //events
  button.forEach((icon, index) =>
    icon.addEventListener("click", (e) => {
      e.preventDefault();

      answerArr.forEach((answer) => {
        if (index == 0) {
          answerArr[index].classList.toggle("show");
          console.log(index);
        } else if (index == answerArr.length - 2) {
          answerArr[index].classList.toggle("show");
          answerArr[index - 1].classList.remove("show");
          answerArr[answerArr.length - 1].classList.remove("show");
        } else {
          answerArr[index - 1].classList.remove("show");

          answerArr[index].classList.toggle("show");
        }
      });
    })
  );
  title.forEach((title, index) =>
    title.addEventListener("click", (e) => {
      e.preventDefault();

      answerArr.forEach((answer) => {
        if (index == 0) {
          answerArr[index].classList.toggle("show");
          console.log(index);
        } else if (index == answerArr.length - 2) {
          answerArr[index].classList.toggle("show");
          answerArr[index - 1].classList.remove("show");

          answerArr[answerArr.length - 1].classList.remove("show");
        } else {
          answerArr[index - 1].classList.remove("show");

          answerArr[index].classList.toggle("show");
        }
      });
    })
  );
}

//window-event

window.addEventListener("DOMContentLoaded", accordionFn);
