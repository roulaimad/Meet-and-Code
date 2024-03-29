<!DOCTYPE html>
<?php
$emailError = $genderError = $PasswordError = $nameError = $lastnameError = "";
require "myfunctions.php";
if (isset($_POST["nsubmit"])) {
    // Store in Variables only if DATA is Set--------------
    if (isset($_POST["name"])) {
        $name = $_POST["name"];
    }
    if (isset($_POST["lastname"])) {
        $lastname = $_POST["lastname"];
    }
    if (isset($_POST["email"])) {
        $email = $_POST["email"];
    }
    if (isset($_POST["password"])) {
        $password = $_POST["password"];
    }
    if (isset($_POST["gender"])) {
        $gender = $_POST["gender"];
    }

    // -------------- Name Validation ----------------
    $nameError = name_validation($name);
    // -------------- LastName Validation ----------------
    $lastnameError = lastname_validation($lastname);
    // -------------- Email Validation ----------------
    $emailError = email_validation($email);
    // -------------- Password Validation ----------------
    $PasswordError = password_validation($password);
    // -------------- Gender Validation ----------------
    $genderError = gender_validation($gender);

    if (!(empty($nameError) && empty($lastnameError) && empty($emailError) && empty($PasswordError) && empty($genderError))) {
        ;
    } else {
        // Writing DATA to JSON file.
        $newdata = array(
            'name' => $name,
            'lastname' => $lastname,
            'email' => $email,
            'password' => $password,
            'gender' => $gender
        );
        $myfile = fopen('test.json', 'r');
        $existingdata = fread($myfile, filesize('test.json'));
        $json_decoded_data = json_decode($existingdata);
        $json_decoded_data[] = $newdata;
        $json_encoded_data = json_encode($json_decoded_data);
        fclose($myfile);
        $myfile = fopen("test.json", "w");
        fwrite($myfile, $json_encoded_data);
        fclose($myfile);
    }
}
?>
<!---------------------------------- HTML ------------------------->
<!----------------------------------------------------------------->
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="slider/sliderStyle.css.css" />
    <link rel="stylesheet" href="style.css" />
    <link rel="icon" type="image/png" href="icons/Logo_on_canvas_2.jpg">

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MEET & CODE</title>
  </head>
  <body style="background-color: black">
    <div class="navbar">
      <div class="logoContainer">
        <img class="logo" src="images/logo.png" alt="" />
      </div>
      <div class="smallMenu">
        <div class="smallMenuElement" onclick="exitSmallMenu(); scrolltotop()">
          HOME
        </div>
        <div
          class="smallMenuElement"
          onclick="exitSmallMenu(); scrollToRegister()"
        >
          REGISTER
        </div>
        <div
          class="smallMenuElement"
          onclick="exitSmallMenu(); scrollToAbout()"
        >
          ABOUT
        </div>
        <div
          class="smallMenuElement"
          onclick="exitSmallMenu(); scrollToSpeaker()"
        >
          SPEAKER
        </div>
        <div
          class="smallMenuElement"
          onclick="exitSmallMenu(); scrollToSchedule()"
        >
          SCHEDULE
        </div>
        <div
          class="smallMenuElement"
          onclick="exitSmallMenu(); scrollToTestimonials()"
        >
          TESTIMONIALS
        </div>
        <div class="exitSmallMenu" onclick="exitSmallMenu()">X</div>
      </div>
      <div class="elementsContainer">
        <img id="menuIcon" src="images/menuIcon.png" onclick="showMenuIcon()" />
        <div class="navbarElement" onclick="scrolltotop()">HOME</div>
        <div class="navbarElement" onclick="scrollToRegister()">REGISTER</div>
        <div class="navbarElement" onclick="scrollToAbout()">ABOUT</div>
        <div class="navbarElement" onclick="scrollToSpeaker()">SPEAKER</div>
        <div class="navbarElement" onclick="scrollToSchedule()">SCHEDULE</div>

        <div class="navbarElement" onclick="scrollToTestimonials()">
          TESTIMONIALS
        </div>
      </div>
    </div>
    <section class="container">
      <div class="curve"></div>
      <div id="wrapper">
        <div class="slide slide1">
          <div class="slideElement active">
            <div class="container1">
              <img id="wallpaper" src="images/img2.JPG" alt="" />
              <div class="text">
                <p id="pretitle">Countdown to The Exciting Event:</p>
                <p id="title"><span>MEET </span>& <span>CODE</span></p>
                <p id="ScndEdition">
                  in its <span style="font-size: 25px; color: yellow">2</span>nd
                  edition
                </p>
              </div>
              <div class="launch-time">
                <div class="dhms">
                  <p id="days">10</p>
                  <div>Days</div>
                </div>

                <div class="dhms">
                  <p id="hours">00</p>
                  <div>Hours</div>
                </div>

                <div class="dhms">
                  <p id="minutes">00</p>
                  <div>Minutes</div>
                </div>

                <div class="dhms">
                  <p id="seconds">00</p>
                  <div>Seconds</div>
                </div>
              </div>
              <br />
              <div class="description">
                <p>
                  <span style="color: orange; font-weight: 800"
                    >Meet & Code</span
                  >
                  is a non-profit science event aimed at children from 12 to 17
                  years old. Its goal is to teach children computer science and
                  information technologies at an early age, to open new horizons
                  for them on the one hand, and to guide them towards the good
                  use of technology on the other hand.
                </p>
              </div>
              <button class="button">Register Now</button>
            </div>
          </div>
        </div>
        <div class="slide slide2">
          <div class="slideElement">
            <img id="wallpaper" src="images/bg2.JPG" alt="" />
            <!-- <img id="wallpaper" src="images/wallpaper.jpg" alt=""> -->
            <div class="registrationContainer">
              <div class="leftside">
                <h1>REGISTER TO EVENT</h1>
                <p>
                  The event will start on 03 Sept 2023 at Jijel's Scientific
                  leisure center. Click Register to join event
                </p>
              </div>
              <div class="rightside">
                <form id="registrationForm" action="">
                  <input type="text" name="name" placeholder="Your Name" />
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Your Last Name"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Adress"
                  />
                  <input type="text" name="phone" placeholder="Phone Number" />
                  <select name="gender">
                    <option value="" disabled selected hidden>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="other">Female</option>
                  </select>
                  <select name="age">
                    <option value="" disabled selected hidden>
                      Select Age
                    </option>
                    <option value="male">10 - 16</option>
                    <option value="other">17 - 20</option>
                    <option value="male">21 - 26</option>
                    <option value="other">27 - 30</option>
                    <option value="other">31 - 40</option>
                    <option value="other">>41</option>
                  </select>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="prev-button">&lt;</div>
      <div id="next-button">&gt;</div>
      <div class="dotsContainer">
        <div class="dot active" attr="0"></div>
        <div class="dot" attr="1"></div>
      </div>
    </section>

    <div class="infobar" id="infobar">
      <div class="tickets element">
        <div class="icon">
          <img src="images/ticket_7353841.png" />
        </div>
        <div class="text">
          <h2>Tickets</h2>
          <p>40 Tickets</p>
        </div>
      </div>

      <div class="startdate element">
        <div class="icon">
          <img src="images/schedule_5765479.png" />
        </div>
        <div class="text">
          <h2>Start Date</h2>
          <p>03 Sept 2023</p>
        </div>
      </div>

      <div class="location element">
        <div class="icon">
          <img src="images/map_1865153.png" />
        </div>
        <div class="text">
          <h2>Location</h2>
          <p>CLS Jijel</p>
        </div>
      </div>

      <div class="speakers element">
        <div class="icon">
          <img src="images/public-speaking_5377200.png" />
        </div>
        <div class="text">
          <h2>Speakers</h2>
          <p>10 Speakers</p>
        </div>
      </div>
    </div>
    <div class="speakersContainer" id="speakersContainer">
      <div class="ourSpeakers">
        <h1>OUR SPEAKER</h1>
      </div>
      <div class="slider-wrapper">
        <div class="sliderButton" id="prev">&lt</div>
        <ul class="carousel">
          <!-- =============== Card 1 ================= -->
          <li class="card">
            <div class="speakerImage">
              <img src="images/speaker1.JPG" alt="" />
            </div>
            <div class="speakerDetails">
              <h5>CHERIF KIHAL</h5>
              <p>Teacher at University of Jijel</p>
            </div>
            <div class="speakerContacts">
              <img src="icons/facebook.png" alt="" />
              <img src="icons/instagram.png" alt="" />
              <img src="icons/youtube.png" alt="" />
              <img src="icons/twitter.png" alt="" />
              <img src="icons/linkedin.png" alt="" />
            </div>
          </li>
          <!-- =============== Card 2 ================= -->

          <li class="card">
            <div class="speakerImage">
              <img src="images/speaker2.JPG" alt="" />
            </div>
            <div class="speakerDetails">
              <h5>LAOUBI YOUCEF</h5>
              <p>Student at ELLABS</p>
            </div>
            <div class="speakerContacts">
              <img src="icons/facebook.png" alt="" />
              <img src="icons/instagram.png" alt="" />
              <img src="icons/youtube.png" alt="" />
              <img src="icons/twitter.png" alt="" />
              <img src="icons/linkedin.png" alt="" />
            </div>
          </li>
          <!-- =============== Card 3 ================= -->
          <li class="card">
            <div class="speakerImage">
              <img src="images/speaker3.JPG" alt="" />
            </div>
            <div class="speakerDetails">
              <h5>ABDELGHAFOUR BOURIDANE</h5>
              <p>Student at ELLABS</p>
            </div>
            <div class="speakerContacts">
              <img src="icons/facebook.png" alt="" />
              <img src="icons/instagram.png" alt="" />
              <img src="icons/youtube.png" alt="" />
              <img src="icons/twitter.png" alt="" />
              <img src="icons/linkedin.png" alt="" />
            </div>
          </li>
          <!-- =============== Card 4 ================= -->
          <li class="card">
            <div class="speakerImage">
              <img src="images/speaker4.JPG" alt="" />
            </div>
            <div class="speakerDetails">
              <h5>BELHADEF AYA</h5>
              <p>Trainer at Ellabs</p>
            </div>
            <div class="speakerContacts">
              <img src="icons/facebook.png" alt="" />
              <img src="icons/instagram.png" alt="" />
              <img src="icons/youtube.png" alt="" />
              <img src="icons/twitter.png" alt="" />
              <img src="icons/linkedin.png" alt="" />
            </div>
          </li>
          <!-- =============== Card 5 ================= -->
          <li class="card">
            <div class="speakerImage">
              <img src="images/speaker5.JPG" alt="" />
            </div>
            <div class="speakerDetails">
              <h5>FRIOUI MOUNA</h5>
              <p>Trainer at ELLABS</p>
            </div>
            <div class="speakerContacts">
              <img src="icons/facebook.png" alt="" />
              <img src="icons/instagram.png" alt="" />
              <img src="icons/youtube.png" alt="" />
              <img src="icons/twitter.png" alt="" />
              <img src="icons/linkedin.png" alt="" />
            </div>
          </li>
          <!-- =============== Card 6 ================= -->
          <li class="card">
            <div class="speakerImage">
              <img src="images/speaker7.JPG" alt="" />
            </div>
            <div class="speakerDetails">
              <h5>KAOUS TEXANNA</h5>
              <p>Taxi Drivers</p>
            </div>
            <div class="speakerContacts">
              <img src="icons/facebook.png" alt="" />
              <img src="icons/instagram.png" alt="" />
              <img src="icons/youtube.png" alt="" />
              <img src="icons/twitter.png" alt="" />
              <img src="icons/linkedin.png" alt="" />
            </div>
          </li>
          <!-- =============== Card 7 ================= -->
          <li class="card">
            <div class="speakerImage">
              <img src="images/speaker8.JPG" alt="" />
            </div>
            <div class="speakerDetails">
              <h5>CHAHLA CHAHLA</h5>
              <p>Electronic Teacher</p>
            </div>
            <div class="speakerContacts">
              <img src="icons/facebook.png" alt="" />
              <img src="icons/instagram.png" alt="" />
              <img src="icons/youtube.png" alt="" />
              <img src="icons/twitter.png" alt="" />
              <img src="icons/linkedin.png" alt="" />
            </div>
          </li>
        </ul>
        <div class="sliderButton" id="next">&gt</div>
      </div>
    </div>
    <!-- ===================Separator=================== -->
    <!-- ============================================== -->
    <div class="separator">
      Dream Big. Join Future Now!
      <p>
        Join the Future Kids: Where imagination meets technology. Unlock coding
        magic using Scratch and Arduino. Empower kids to innovate, one code at a
        time. Building future leaders, today.
      </p>
      <button id="joinus-button">JOIN US</button>
    </div>
    <!-- ===================SCHEDULE=================== -->
    <!-- ============================================== -->
    <div class="scheduleContainer" id="scheduleContainer">
      <div class="scheduleHeaders">
        <h1>EVENT SCHEDULE</h1>
        <p>
          Unveil the unfolding moments of our event schedule, where inspiration
          and knowledge converge for an unforgettable experience
        </p>
      </div>

      <div class="daysBare">
        <div class="day activeday" id="day1">Day 01</div>
        <div class="day" id="day2">Day 02</div>
        <div class="day" id="day3">Day 03</div>
      </div>
      <br />

      <div class="scheduleElements">
        <div class="Element Element1">
          <div class="elementPicture">
            <img src="images/checkin.png" alt="" />
          </div>
          <div class="elementDetails">
            <div class="time">08:30 AM</div>
            <div class="title">CHECK IN</div>
            <div class="info">Guest reception</div>
          </div>
        </div>

        <div class="Element Element2">
          <div class="elementPicture">
            <img src="images/openingCeremony.jpg" alt="" />
          </div>
          <div class="elementDetails">
            <div class="time">09:00 AM</div>
            <div class="title">OPENNING CEREMONY</div>
            <div class="info">Speech by: BELHADEF Aya</div>
          </div>
        </div>

        <div class="Element Element3">
          <div class="elementPicture">
            <img src="images/conferance.png" alt="" />
          </div>
          <div class="elementDetails">
            <div class="time">09:30 AM</div>
            <div class="title">CONFERANCE 01: What is Programming?</div>
            <div class="info">Conferance by: DJELLIT Adem</div>
          </div>
        </div>

        <div class="Element Element4">
          <div class="elementPicture">
            <img src="images/break.png" alt="" />
          </div>
          <div class="elementDetails">
            <div class="time">11:30 AM</div>
            <div class="title">COFFEE BREAK</div>
            <div class="info">At: Dining room</div>
          </div>
        </div>

        <div class="Element Element5">
          <div class="elementPicture">
            <img src="images/workshop.jpg" alt="" />
          </div>
          <div class="elementDetails">
            <div class="time">12:00 PM</div>
            <div class="title">CONFERANCE 02: Scratch Aspect on Kids</div>
            <div class="info">Conferance by: MENGHOUR Lamis</div>
          </div>
        </div>
      </div>
    </div>

    <div class="testimonialContainer" id="testimonialContainer">
      <h1>Tesimonials</h1>
      <div class="testimonial-Cards">
        <div class="tcard">
          <div class="tcard-img">
            <img src="images/speaker5.JPG" />
          </div>
          <div class="quote">
            <p>
              "Teaching STEM is my passion, and your event exceeded all
              expectations. The kids' excitement while coding on Scratch and
              programming robots with Arduino was truly inspiring."
            </p>
          </div>
          <div class="sayer">
            <h2>FRIOUI Mouna</h2>
            <h3>Trainer</h3>
          </div>
        </div>

        <div class="tcard">
          <div class="tcard-img">
            <img src="images/speaker8.JPG" />
          </div>
          <div class="quote">
            <p>
              "Kudos to your event! My child not only learned coding and
              robotics but gained problem-solving skills and teamwork. Seeing
              their eyes light up while controlling Arduino robots was
              priceless. Thank you!"
            </p>
          </div>
          <div class="sayer">
            <h2>CHAHLA Chahla</h2>
            <h3>Parent</h3>
          </div>
        </div>

        <div class="tcard">
          <div class="tcard-img">
            <img src="images/speaker2.JPG" />
          </div>
          <div class="quote">
            <p>
              "Coolest event ever! I thought coding and robots were for experts,
              but your event proved me wrong. Scratch was like magic, and
              Arduino made me a mini-engineer. Can't wait to invent more!"
            </p>
          </div>
          <div class="sayer">
            <h2>LAOUBI Youcef</h2>
            <h3>Student</h3>
          </div>
        </div>
      </div>
    </div>
    <!----------------------------------- MAP ------------------------------->
    <div class="ourLocation">
      <h1>OUR LOCATION</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.321382382656!2d5.739902383572776!3d36.81081799555044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f25f5052e90a41%3A0x59af63960e629ca!2z2YXYsdmD2LIg2KfZhNiq2LHZgdmK2Ycg2KfZhNi52YTZhdmKINis2YrYrNmE!5e0!3m2!1sfr!2sus!4v1691946807043!5m2!1sfr!2sus"
        width="100%"
        height="330"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <!----------------------------------- MAP END ------------------------------->

    <div class="footerContainer">
      <div class="left-footer footerElement">
        <img src="images/logo.png" alt="" />
        <p>
          ELLabs, research office ,aims to develop and enhance CS and IT fields
          by creating educational curricula and professional training courses
          <br> Copyright @ 2023. All rights reserved.
        </p>
      </div>

      <div class="center-footer footerElement">
        <div class="contactfooter">CONTACT US</div>
        <p>
          Email: ovatheme@gmail.com<br />Phone: 0123-123-123<br />
          Address: Hall A, Building Bitxed, Lanad Street
        </p>
      </div>

      <div class="right-footer footerElement">
        <div class="Subscribefooter">SUBSCRIBE</div>
        <input type="email" name="email" placeholder="Your Email Adress" />
        <button type="submit">Submit</button>
      </div>
    </div>
  </body>
  <script src="slider/sliderScript.js"></script>
  <script src="script.js"></script>
  <script src="schedule.js"></script>
</html>

<script>
    function tologinpage() {
        // Redirect to the welcome.php page
        window.location.href = "loginpage.php";
    }
</script>

</html>
<style>
    body {
        font-family: roboto;
    }
</style>