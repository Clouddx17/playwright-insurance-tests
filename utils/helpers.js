// utils/helpers.js
// Reusable helper functions for life insurance tests

// ── DATE HELPERS ─────────────────────────────────────────

// Generate valid date of birth for a given age
// Example: generateValidDOB(30) → '1996-06-14'
export function generateValidDOB(age) {
  const today = new Date();
  today.setFullYear(today.getFullYear() - age);
  return today.toISOString().split('T')[0];
}

// Calculate age from a date of birth
// Example: calculateAge('1996-06-14') → 30
export function calculateAge(dob) {
  const today = new Date();
  const birthDate = new Date(dob);
  return today.getFullYear() - birthDate.getFullYear();
}
// ── APPLICANT HELPERS ────────────────────────────────────

// Generate a random applicant name
// Example: generateApplicantName() → 'Test User 1718349234567'
export function generateApplicantName() {
  return 'Test User ' + Date.now();
}

// Generate a complete valid applicant
// Example: generateApplicant(30, 'Male') → { name, dob, age, gender }
export function generateApplicant(age = 30, gender = 'Male') {
  return {
    name: generateApplicantName(),
    dob: generateValidDOB(age),
    age: age.toString(),
    gender: gender
  };
}

// ── POLICY HELPERS ───────────────────────────────────────

// Generate a random policy number
// Example: generatePolicyNumber() → 'LI-2026-001234'
    export function generatePolicyNumber() {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 999999).toString().padStart(6, '0');
    return `LI-${year}-${random}`;
}

// Check if age is valid for insurance
// Example: isValidAge(30) → true, isValidAge(15) → false
export function isValidAge(age) {
  return age >= 18 && age <= 65;
}

// ── CURRENCY HELPERS ─────────────────────────────────────

// Format number as Japanese Yen
// Example: formatCurrency(5000000) → '¥5,000,000'
export function formatCurrency(amount) {
  return '¥' + Number(amount).toLocaleString('ja-JP');
}