const universities = [
  {
    id: 1,
    name: "University of Toronto",
    country: "Canada",
    course: "Computer Science",
    fee: 48000,
    minimum: 75,
    qualification: "12th Standard",
    about:
      "A leading Canadian university with a wide range of technology programmes.",
  },
  {
    id: 2,
    name: "University of Manchester",
    country: "United Kingdom",
    course: "Information Technology",
    fee: 32000,
    minimum: 65,
    qualification: "12th Standard",
    about:
      "Offers technology-focused learning and a diverse student community.",
  },
  {
    id: 3,
    name: "Monash University",
    country: "Australia",
    course: "Data Science",
    fee: 39000,
    minimum: 70,
    qualification: "12th Standard",
    about: "Known for research, innovation and industry-oriented programmes.",
  },
  {
    id: 4,
    name: "Arizona State University",
    country: "United States",
    course: "Business",
    fee: 30000,
    minimum: 60,
    qualification: "12th Standard",
    about: "Provides a broad selection of undergraduate study options.",
  },
  {
    id: 5,
    name: "Technical University of Munich",
    country: "Germany",
    course: "Engineering",
    fee: 12000,
    minimum: 80,
    qualification: "12th Standard",
    about: "A technology and engineering-focused institution.",
  },
  {
    id: 6,
    name: "GLS University",
    country: "India",
    course: "Information Technology",
    fee: 1800,
    minimum: 50,
    qualification: "12th Standard",
    about:
      "An Indian university option for students interested in IT and related fields.",
  },
  {
    id: 7,
    name: "University of Waterloo",
    country: "Canada",
    course: "Data Science",
    fee: 42000,
    minimum: 78,
    qualification: "12th Standard",
    about: "Offers programmes connected with technology and analytical fields.",
  },
  {
    id: 8,
    name: "University of Birmingham",
    country: "United Kingdom",
    course: "Computer Science",
    fee: 29000,
    minimum: 70,
    qualification: "12th Standard",
    about: "Offers computing courses and a range of student support services.",
  },
  {
    id: 9,
    name: "University of Oxford",
    country: "United Kingdom",
    course: "Computer Science",
    fee: 45000,
    minimum: 85,
    qualification: "12th Standard",
    about:
      "One of the world's leading universities, known for academic excellence and research.",
  },
  {
    id: 10,
    name: "Harvard University",
    country: "United States",
    course: "Business",
    fee: 55000,
    minimum: 90,
    qualification: "12th Standard",
    about:
      "A prestigious university offering excellent academic and career opportunities.",
  },
  {
    id: 11,
    name: "Stanford University",
    country: "United States",
    course: "Computer Science",
    fee: 58000,
    minimum: 90,
    qualification: "12th Standard",
    about: "Famous for technology, innovation, entrepreneurship and research.",
  },
  {
    id: 12,
    name: "University of Melbourne",
    country: "Australia",
    course: "Information Technology",
    fee: 41000,
    minimum: 75,
    qualification: "12th Standard",
    about:
      "A well-known Australian university offering technology and business programmes.",
  },
  {
    id: 13,
    name: "University of Sydney",
    country: "Australia",
    course: "Data Science",
    fee: 43000,
    minimum: 78,
    qualification: "12th Standard",
    about:
      "Provides quality education and research opportunities in data and technology.",
  },
  {
    id: 14,
    name: "University of British Columbia",
    country: "Canada",
    course: "Computer Science",
    fee: 46000,
    minimum: 80,
    qualification: "12th Standard",
    about:
      "Recognised for research, innovation and excellent learning facilities.",
  },
  {
    id: 15,
    name: "McGill University",
    country: "Canada",
    course: "Engineering",
    fee: 38000,
    minimum: 75,
    qualification: "12th Standard",
    about:
      "Offers a variety of undergraduate programmes and international learning opportunities.",
  },
  {
    id: 16,
    name: "University of Edinburgh",
    country: "United Kingdom",
    course: "Artificial Intelligence",
    fee: 35000,
    minimum: 80,
    qualification: "12th Standard",
    about:
      "Known for research and education in artificial intelligence and computer science.",
  },
  {
    id: 17,
    name: "University of Leeds",
    country: "United Kingdom",
    course: "Information Technology",
    fee: 28000,
    minimum: 70,
    qualification: "12th Standard",
    about:
      "Provides modern education and career-focused learning opportunities.",
  },
  {
    id: 18,
    name: "National University of Singapore",
    country: "Singapore",
    course: "Computer Science",
    fee: 35000,
    minimum: 85,
    qualification: "12th Standard",
    about: "A leading Asian university known for technology and innovation.",
  },
  {
    id: 19,
    name: "Nanyang Technological University",
    country: "Singapore",
    course: "Data Science",
    fee: 32000,
    minimum: 80,
    qualification: "12th Standard",
    about: "Offers advanced programmes in science, engineering and technology.",
  },
  {
    id: 20,
    name: "ETH Zurich",
    country: "Switzerland",
    course: "Engineering",
    fee: 2000,
    minimum: 85,
    qualification: "12th Standard",
    about:
      "A globally recognised institution specialising in science and engineering.",
  },
  {
    id: 21,
    name: "University of Auckland",
    country: "New Zealand",
    course: "Information Technology",
    fee: 33000,
    minimum: 70,
    qualification: "12th Standard",
    about: "New Zealand's leading university with diverse academic programmes.",
  },
  {
    id: 22,
    name: "University of Amsterdam",
    country: "Netherlands",
    course: "Artificial Intelligence",
    fee: 18000,
    minimum: 75,
    qualification: "12th Standard",
    about:
      "Offers internationally recognised education in science and technology.",
  },
  {
    id: 23,
    name: "Delft University of Technology",
    country: "Netherlands",
    course: "Engineering",
    fee: 22000,
    minimum: 80,
    qualification: "12th Standard",
    about: "Known for engineering, technological research and innovation.",
  },
  {
    id: 24,
    name: "University of Tokyo",
    country: "Japan",
    course: "Computer Science",
    fee: 5000,
    minimum: 85,
    qualification: "12th Standard",
    about:
      "A prestigious Japanese university with strong academic and research programmes.",
  },
  {
    id: 25,
    name: "IIT Bombay",
    country: "India",
    course: "Engineering",
    fee: 3000,
    minimum: 85,
    qualification: "12th Standard",
    about:
      "One of India's leading institutions for engineering, science and technology.",
  },
  {
    id: 26,
    name: "Vellore Institute of Technology",
    country: "India",
    course: "Computer Science",
    fee: 4500,
    minimum: 60,
    qualification: "12th Standard",
    about:
      "Offers undergraduate programmes in computing, engineering and technology.",
  },
  {
    id: 27,
    name: "Manipal Academy of Higher Education",
    country: "India",
    course: "Information Technology",
    fee: 5000,
    minimum: 60,
    qualification: "12th Standard",
    about:
      "Provides diverse academic programmes with modern campus facilities.",
  },
  {
    id: 28,
    name: "Christ University",
    country: "India",
    course: "Business",
    fee: 2500,
    minimum: 55,
    qualification: "12th Standard",
    about:
      "Offers undergraduate programmes in business, management and technology.",
  },
];

// Pages that require a logged-in user
const APP_PAGES = [
  "dashboard",
  "universities",
  "eligibility",
  "recommendations",
  "apply",
  "status",
];
// Pages that are only for logged-out users
const AUTH_PAGES = ["login", "register"];

let currentUser = JSON.parse(localStorage.getItem("ge_user") || "null");
let applications = JSON.parse(localStorage.getItem("ge_applications") || "[]");

// ---------- Routing / access control ----------
function showPage(page) {
  // Enforce access rules:
  //  - logged-in users are bounced away from login/register
  //  - logged-out users are bounced to login for any protected page
  let target = page;
  if (AUTH_PAGES.includes(page) && currentUser) {
    target = "dashboard";
  } else if (APP_PAGES.includes(page) && !currentUser) {
    target = "login";
  }

  // Hide every .page section, then reveal only the target
  document.querySelectorAll(".page").forEach((p) => p.classList.add("hidden"));
  document.getElementById("appPage").classList.add("hidden");

  if (APP_PAGES.includes(target)) {
    document.getElementById("appPage").classList.remove("hidden");
    document.getElementById(target + "Page").classList.remove("hidden");
    if (target === "universities") renderUniversities();
    if (target === "status") renderApplications();
    if (target === "apply") populateUniversitySelect();
  } else {
    document.getElementById(target + "Page").classList.remove("hidden");
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Brand / home link: dashboard when logged in, login otherwise
function goHome() {
  showPage(currentUser ? "dashboard" : "login");
}

// Show the right topbar controls for the current auth state
function updateTopbar() {
  const logged = !!currentUser;
  document.getElementById("mainNav").classList.toggle("hidden", !logged);
  document.getElementById("authNav").classList.toggle("hidden", logged);
  document.getElementById("accountArea").classList.toggle("hidden", !logged);
  if (logged)
    document.getElementById("userLabel").textContent = currentUser.name;
}

// ---------- Auth ----------
function openApp() {
  document.getElementById("welcomeTitle").textContent =
    `Welcome, ${currentUser.name}`;
  document.getElementById("applicantName").value = currentUser.name;
  document.getElementById("applicantEmail").value = currentUser.email;
  updateDashboard();
  updateTopbar();
  showPage("dashboard");
}

function logout() {
  localStorage.removeItem("ge_user");
  currentUser = null;
  updateTopbar();
  showPage("login");
}

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;
  if (password.length < 4) {
    alert("Please enter a password with at least 4 characters.");
    return;
  }
  currentUser = { name: email.split("@")[0], email };
  localStorage.setItem("ge_user", JSON.stringify(currentUser));
  openApp();
});

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value;
  if (!name) {
    alert("Please enter your name.");
    return;
  }
  if (password.length < 4) {
    alert("Please enter a password with at least 4 characters.");
    return;
  }
  currentUser = { name, email };
  localStorage.setItem("ge_user", JSON.stringify(currentUser));
  openApp();
});

// ---------- Universities ----------
function renderUniversities() {
  const search = (
    document.getElementById("searchInput").value || ""
  ).toLowerCase();
  const country = document.getElementById("countryFilter").value;
  const course = document.getElementById("courseFilter").value;
  const filtered = universities.filter(
    (u) =>
      (u.name + " " + u.course + " " + u.country)
        .toLowerCase()
        .includes(search) &&
      (!country || u.country === country) &&
      (!course || u.course === course),
  );
  document.getElementById("universityList").innerHTML = filtered.length
    ? filtered.map(cardHTML).join("")
    : '<p class="empty">No universities match your search. Try another filter.</p>';
}

function cardHTML(u) {
  return `<article class="uni-card"><div class="uni-top"><span class="uni-icon">${u.name.charAt(0)}</span><span class="tag">${u.country}</span></div><h3>${u.name}</h3><p>${u.about}</p><div class="uni-meta"><span>${u.course}</span><strong>$${u.fee.toLocaleString()}/year</strong></div><div class="uni-meta"><span>Basic requirement</span><strong>${u.minimum}%</strong></div><button class="primary" onclick="prepareApply(${u.id})">Apply now</button></article>`;
}

// "Apply now" from a university card: open the form then pre-select the university
// (order matters — populate the dropdown first, then set the value)
function prepareApply(id) {
  showPage("apply");
  document.getElementById("applicationUniversity").value = String(id);
}

// ---------- Eligibility ----------
document.getElementById("eligibilityForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const qualification = document.getElementById("qualification").value;
  const percentage = Number(document.getElementById("percentage").value);
  const course = document.getElementById("eligibilityCourse").value;
  const matches = universities.filter(
    (u) => u.course === course && percentage >= u.minimum,
  );
  const result = document.getElementById("eligibilityResult");
  result.classList.remove("hidden", "warning");
  if (matches.length) {
    result.innerHTML = `<strong>Basic eligibility match found!</strong><br>Your ${percentage}% meets the sample minimum percentage for ${matches.length} listed ${course} option(s): ${matches.map((u) => u.name).join(", ")}. Qualification entered: ${qualification}.`;
  } else {
    result.classList.add("warning");
    result.innerHTML = `<strong>No basic match found in this sample list.</strong><br>Your ${percentage}% does not meet the listed minimum for ${course}, or no sample university offers this course. You can still check individual university requirements.`;
  }
});

// ---------- Recommendations ----------
document
  .getElementById("recommendationForm")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const country = document.getElementById("preferredCountry").value;
    const course = document.getElementById("preferredCourse").value;
    const budget = Number(document.getElementById("budget").value);
    const percentage = Number(
      document.getElementById("recommendationPercentage").value,
    );
    const matches = universities.filter(
      (u) =>
        u.country === country &&
        u.course === course &&
        u.fee <= budget &&
        u.minimum <= percentage,
    );
    document.getElementById("recommendationList").innerHTML = matches.length
      ? matches.map(cardHTML).join("")
      : '<p class="empty">No exact match found. Try a higher budget, another country/course, or check your percentage.</p>';
  });

// ---------- Apply ----------
function populateUniversitySelect() {
  document.getElementById("applicationUniversity").innerHTML =
    '<option value="">Select university</option>' +
    universities
      .map((u) => `<option value="${u.id}">${u.name} — ${u.country}</option>`)
      .join("");
}

document.getElementById("applicationForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const uni = universities.find(
    (u) =>
      u.id === Number(document.getElementById("applicationUniversity").value),
  );
  if (!uni) return;
  const application = {
    id: "GE" + Date.now().toString().slice(-7),
    name: document.getElementById("applicantName").value.trim(),
    email: document.getElementById("applicantEmail").value.trim(),
    university: uni.name,
    course: document.getElementById("applicationCourse").value,
    status: "Submitted",
    date: new Date().toLocaleDateString(),
  };
  applications.push(application);
  localStorage.setItem("ge_applications", JSON.stringify(applications));
  const msg = document.getElementById("applicationMessage");
  msg.classList.remove("hidden");
  msg.innerHTML = `<strong>Application submitted successfully!</strong><br>Your demo application ID is ${application.id}. Current status: Submitted.`;
  updateDashboard();
  e.target.reset();
  document.getElementById("applicantName").value = currentUser.name;
  document.getElementById("applicantEmail").value = currentUser.email;
});

// ---------- Application status ----------
function renderApplications() {
  const box = document.getElementById("applicationList");
  if (!applications.length) {
    box.innerHTML =
      '<p class="empty">You have not submitted any applications yet.</p>';
    return;
  }
  box.innerHTML =
    '<div class="application-row header"><span>Application ID</span><span>University / Course</span><span>Date</span><span>Status</span></div>' +
    applications
      .map(
        (a) =>
          `<div class="application-row"><strong>${a.id}</strong><span>${a.university}<br><small>${a.course}</small></span><span>${a.date}</span><span class="status">${a.status}</span></div>`,
      )
      .join("");
}

// ---------- Dashboard ----------
function updateDashboard() {
  document.getElementById("universityCount").textContent = universities.length;
  document.getElementById("applicationCount").textContent = applications.length;
  document.getElementById("profileStatus").textContent = currentUser
    ? "Active"
    : "Pending";
}

// ---------- Boot ----------
updateTopbar();
if (currentUser) openApp();
else showPage("login");
