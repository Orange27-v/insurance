$(document).ready(function () {
  // HOME EXPANDABLE IMAGE FOR HOME VIEWS

  const panels = $(".expandable");
  const panelImages = [];

  // Extract image URLs from panel elements
  panels.each(function () {
    const imageUrl = $(this).css("background-image").slice(5, -2);
    panelImages.push(imageUrl);
  });

  let currentIndex = 0;
  let intervalId; // Store the interval ID

  // Function to add 'active' class to panels at intervals
  function activatePanels() {
    // Remove 'active' class from all panels
    panels.removeClass("active");
    panels.find(".expanded-desc").removeClass("active"); // Remove 'active' class from all .expanded-desc elements

    // Add 'active' class to the panel at currentIndex
    panels.eq(currentIndex).addClass("active");
    panels.eq(currentIndex).find(".expanded-desc").addClass("active"); // Add 'active' class to the .expanded-desc element of the active panel

    // Move to the next panel index
    currentIndex = (currentIndex + 1) % panelImages.length;
  }

  // Initial call to activatePanels
  activatePanels();

  // Set interval to call activatePanels every 2 seconds
  intervalId = setInterval(activatePanels, 2000);

  // Add mouseover event listener to clear interval
  panels.on("mouseover", function () {
    clearInterval(intervalId);
  });

  // Add mouseout event listener to restart interval
  panels.on("mouseout", function () {
    intervalId = setInterval(activatePanels, 2000);
  });

  //SERVICES SLIDER

  // $('.expand-sm-card').on('click', function() {
  //     removeActiveClasses();
  //     $(this).addClass('active');
  // });

  // function removeActiveClasses() {
  //     $('.expand-sm-card').removeClass('active');
  // }

  $(".expand-sm-card").on("click", function () {
    // Get the currently active card and industry elements
    var $currentActiveCard = $(".expand-sm-card.active");
    var $currentActiveIndustry = $(".industries-we-serve.active");

    // Get the next siblings of the currently active elements
    var $nextCard = $currentActiveCard.next(".expand-sm-card");
    var $nextIndustry = $currentActiveIndustry.next(".industries-we-serve");

    // Remove the 'active' class from the current elements
    $currentActiveCard.removeClass("active");
    $currentActiveIndustry.removeClass("active");

    // Check if the next elements exist; if not, reset to the first element
    if ($nextCard.length) {
      $nextCard.addClass("active");
    } else {
      // Reset to the first element if no next sibling is found
      $(".expand-sm-card").first().addClass("active");
    }

    if ($nextIndustry.length) {
      $nextIndustry.addClass("active");
    } else {
      // Reset to the first element if no next sibling is found
      $(".industries-we-serve").first().addClass("active");
    }
  });

  // Slick slider

  $(".autoplay").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true, // You can use this option for next/previous arrows
  });

  $(".responsive").slick({
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });




  // CONTACT FORM 

  $('#contactForm').on('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Clear previous errors
    $('#nameError, #emailError, #subjectError').text('');

    // Get form values
    var name = $('#name').val().trim();
    var email = $('#email').val().trim();
    var subject = $('#subject').val().trim();

    var isValid = true;

    // Name validation
    if (name === '') {
      $('#nameError').text('Name is required.');
      isValid = false;
    }

    // Email validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
      $('#emailError').text('Email is required.');
      isValid = false;
    } else if (!emailPattern.test(email)) {
      $('#emailError').text('Please enter a valid email address.');
      isValid = false;
    }

    // Subject validation
    if (subject === '') {
      $('#subjectError').text('Subject is required.');
      isValid = false;
    }

    // If all fields are valid, show an alert (or you can handle the form submission)
    if (isValid) {
      alert('Form submitted successfully!');
    }
  });
});
