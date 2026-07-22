const statusBadge = document.getElementById("requestStatusBadge");
const approveRequestBtn = document.getElementById("approveRequestBtn");
const rejectRequestForm = document.getElementById("rejectRequestForm");
const rejectRequestModal = document.getElementById("rejectRequestModal");
const rejectionReason = document.getElementById("rejectionReason");

function setStatusBadge(status) {
  if (!statusBadge) return;

  const normalizedStatus = status.toLowerCase();

  statusBadge.textContent = status;
  statusBadge.classList.remove(
    "text-bg-success",
    "text-bg-danger",
    "text-bg-warning",
  );

  if (normalizedStatus === "approved") {
    statusBadge.classList.add("text-bg-success");
    return;
  }

  if (normalizedStatus === "rejected") {
    statusBadge.classList.add("text-bg-danger");
    return;
  }

  statusBadge.classList.add("text-bg-warning");
}

if (approveRequestBtn) {
  approveRequestBtn.addEventListener("click", () => {
    setStatusBadge("Approved");
  });
}

if (rejectionReason) {
  rejectionReason.addEventListener("input", () => {
    if (rejectionReason.value.trim()) {
      rejectionReason.classList.remove("is-invalid");
    }
  });
}

if (rejectRequestForm && rejectRequestModal) {
  rejectRequestModal.addEventListener("hidden.bs.modal", () => {
    rejectRequestForm.reset();
    rejectionReason.classList.remove("is-invalid");
  });

  rejectRequestForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!rejectionReason.value.trim()) {
      rejectionReason.classList.add("is-invalid");
      rejectionReason.focus();
      return;
    }

    setStatusBadge("Rejected");

    const modal = bootstrap.Modal.getOrCreateInstance(rejectRequestModal);
    modal.hide();
  });
}
