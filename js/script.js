let slideIndex = 0;
showSlides();

// slideshow
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  slides[slideIndex-1].style.display = "block";  

  setTimeout(showSlides, 2000);
}

// lightbox
function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// likes and disklikes
function toggleLike(button) {
    const postFooter = button.parentElement;
    const dislikeBtn = postFooter.querySelector(".dislike-btn");

    const likeCount = button.querySelector(".like-count");
    const dislikeCount = dislikeBtn.querySelector(".dislike-count");

    if (button.classList.contains("active")) {
        likeCount.textContent--;
        button.classList.remove("active");
    } else {
        likeCount.textContent++;
        button.classList.add("active");
        if (dislikeBtn.classList.contains("active")) {
            dislikeCount.textContent--;
            dislikeBtn.classList.remove("active");
        }
    }
}

function toggleDislike(button) {
    const postFooter = button.parentElement;
    const likeBtn = postFooter.querySelector(".like-btn");

    const dislikeCount = button.querySelector(".dislike-count");
    const likeCount = likeBtn.querySelector(".like-count");

    if (button.classList.contains("active")) {
        dislikeCount.textContent--;
        button.classList.remove("active");
    } else {
        dislikeCount.textContent++;
        button.classList.add("active");

        if (likeBtn.classList.contains("active")) {
            likeCount.textContent--;
            likeBtn.classList.remove("active");
        }
    }
}

function changeProfilePic() {
    const male = document.getElementById("male");
    const female = document.getElementById("female");
    const profilePic = document.getElementById("profilePic");

    if (male.checked) {
        profilePic.src = "assets/images/male.jpg";
    } else if (female.checked) {
        profilePic.src = "assets/images/female.jpg";
    }
}
