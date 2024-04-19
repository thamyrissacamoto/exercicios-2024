import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DevChuva';

  toggleSummary() {
    var txt = document.getElementById("txt");
    var moreText = document.getElementById("more");
    var btnShowMore = document.querySelector(".btn-show-more");
    var summary = document.querySelector(".summary");
    var hrBtn = document.querySelector(".hr-btn");


    if (txt && moreText && btnShowMore && summary && hrBtn) {
      if (moreText.style.display === "none") {
        txt.style.display = "none";
        moreText.style.display = "inline";
        if (moreText.parentNode) {
          moreText.parentNode.appendChild(btnShowMore);
        }
        btnShowMore.innerHTML = "ver menos";
        summary.classList.add("expanded");
        hrBtn.classList.add("expanded");
      } else {
        txt.style.display = "inline";
        moreText.style.display = "none";
        if (moreText.parentNode) {
          moreText.parentNode.appendChild(btnShowMore);
        }
        btnShowMore.innerHTML = "ver mais";
        summary.classList.remove("expanded");
        hrBtn.classList.add("expanded");
      }
    } else {
      console.error("Algum elemento não foi encontrado.");
    }
  }

  toggleDiscussion() {
    var ansTopic = document.getElementById('ans-topic') as HTMLElement;
    var ansTopic1 = document.getElementById('ans-topic1') as HTMLElement;
    var ansTopicBorder = document.querySelector(".answered-topic") as HTMLElement;
    var discussion = document.querySelector(".discussion") as HTMLElement;
    var cardFooter = document.querySelector(".card-footer1") as HTMLElement;
    var like = document.getElementById('lk') as HTMLElement;
    var response = document.getElementById('rp') as HTMLElement;
    var like1 = document.getElementById('lk1') as HTMLElement;
    var response1 = document.getElementById('rp1') as HTMLElement;
    var comments = document.querySelector(".comments-container") as HTMLElement;

    if (ansTopic && ansTopic1 && ansTopicBorder && discussion && cardFooter && like && response && like1 && response1 && comments) {
      if (ansTopic.style.display !== "none") {
        ansTopic.style.display = "none";
        ansTopic1.style.display = "inline";
        ansTopicBorder.classList.add("expanded");
        discussion.classList.add("expanded3");
        cardFooter.classList.add("expanded");
        like.style.display = "none";
        response.style.display = "none";
        like1.style.display = "inline";
        response1.style.display = "inline";
        comments.style.display = "inline";
      } else {
        ansTopic.style.display = "inline";
        ansTopic1.style.display = "none";
        ansTopicBorder.classList.remove("expanded");
        discussion.classList.remove("expanded3");
        cardFooter.classList.remove("expanded");
        like.style.display = "inline";
        response.style.display = "inline";
        like1.style.display = "none";
        response1.style.display = "none";
        comments.style.display = "none";
      }
    } else {
      console.error("Algum elemento não foi encontrado.");
    }
  }

  showForm() {
    var form = document.querySelector(".form");
    var card1 = document.querySelector(".discussion-card1");
    var card2 = document.querySelector(".discussion-card2");
    var feedback = document.querySelector(".div-feedback");
    var discussion = document.querySelector(".discussion");

    if (form && card1 && card2 && feedback && discussion) {
      discussion.classList.remove("expanded3");
      if (card1 instanceof HTMLElement) {
        card1.style.display = "none";
      }
      if (form instanceof HTMLElement) {
        form.style.display = "inline";
      }
      if (card2 instanceof HTMLElement) {
        card2.style.display = "none";
      }
      if (feedback instanceof HTMLElement) {
        feedback.style.display = "none";
      }
      discussion.classList.add("expanded1");
    } else {
      console.error("Algum elemento não foi encontrado.");
    }
  }

  sendForm() {
    var form = document.querySelector(".form");
    var card2 = document.querySelector(".discussion-card2");
    var feedback = document.querySelector(".div-feedback");
    var discussion = document.querySelector(".discussion");

    if (form instanceof HTMLElement && card2 instanceof HTMLElement && feedback instanceof HTMLElement && discussion instanceof HTMLElement) {
      form.style.display = "none";
      card2.style.display = "inline";
      feedback.style.display = "inline";
      discussion.classList.add("expanded1");

      var formInputs = document.querySelectorAll('.form-input') as NodeListOf<HTMLInputElement>;
      formInputs.forEach(input => {
        input.value = "";
      });
    } else {
      console.error("Algum elemento não foi encontrado ou não é do tipo esperado.");
    }
  }
}
