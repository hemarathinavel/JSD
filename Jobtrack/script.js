let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

function addJob() {

    const company = document.getElementById("company").value;
    const role = document.getElementById("role").value;
    const date = document.getElementById("date").value;
    const status = document.getElementById("status").value;

    if (company === "" || role === "" || date === "") {
        alert("Please fill all fields");
        return;
    }

    const job = {
        id: Date.now(),
        company: company,
        role: role,
        date: date,
        status: status
    };

    jobs.push(job);

    localStorage.setItem("jobs", JSON.stringify(jobs));

    document.getElementById("company").value = "";
    document.getElementById("role").value = "";
    document.getElementById("date").value = "";
    document.getElementById("status").value = "Applied";

    displayJobs();
    updateDashboard();
}


function displayJobs() {

    const jobList = document.getElementById("jobList");
    const search = document.getElementById("search").value.toLowerCase();

    jobList.innerHTML = "";

    const filteredJobs = jobs.filter(job =>
        job.company.toLowerCase().includes(search) ||
        job.role.toLowerCase().includes(search)
    );

    if (filteredJobs.length === 0) {
        jobList.innerHTML = "<p>No job applications found.</p>";
        return;
    }

    filteredJobs.forEach(job => {

        const div = document.createElement("div");

        div.className = "job-card";

        div.innerHTML = `
            <h3>${job.company}</h3>
            <p><strong>Role:</strong> ${job.role}</p>
            <p><strong>Applied Date:</strong> ${job.date}</p>
            <p><strong>Status:</strong> ${job.status}</p>

            <button onclick="deleteJob(${job.id})">
                Delete
            </button>
        `;

        jobList.appendChild(div);
    });
}
function editJob(id) {

    const job = jobs.find(job => job.id === id);

    const newCompany = prompt("Enter company name:", job.company);
    const newRole = prompt("Enter job role:", job.role);
    const newStatus = prompt(
        "Enter status (Applied / Interview / Selected / Rejected):",
        job.status
    );

    if (newCompany && newRole && newStatus) {

        job.company = newCompany;
        job.role = newRole;
        job.status = newStatus;

        localStorage.setItem("jobs", JSON.stringify(jobs));

        displayJobs();
        
    }
}


function deleteJob(id) {

    jobs = jobs.filter(job => job.id !== id);

    localStorage.setItem("jobs", JSON.stringify(jobs));

    displayJobs();
    updateDashboard();
}


function updateDashboard() {

    document.getElementById("totalJobs").textContent = jobs.length;

    document.getElementById("interviews").textContent =
        jobs.filter(job => job.status === "Interview").length;

    document.getElementById("selected").textContent =
        jobs.filter(job => job.status === "Selected").length;

    document.getElementById("rejected").textContent =
        jobs.filter(job => job.status === "Rejected").length;
}






displayJobs();
updateDashboard();