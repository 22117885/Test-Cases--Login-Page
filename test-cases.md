
# 🧪 Test Cases – Login Page

## 🔹 Task 1 — Login Test Cases

### TC_01 – Valid Login
- **Steps:**
  1. Open login page
  2. Enter valid username
  3. Enter valid password
  4. Click login
- **Expected Result:**
  User successfully logs in and is redirected to dashboard

---

### TC_02 – Invalid Login
- **Steps:**
  1. Open login page
  2. Enter wrong username or password
  3. Click login
- **Expected Result:**
  Error message: "Invalid credentials"

---

### TC_03 – Empty Fields
- **Steps:**
  1. Open login page
  2. Leave username and password empty
  3. Click login
- **Expected Result:**
  Message: "Fields cannot be empty"

---

### TC_04 – SQL Injection
- **Steps:**
  1. Open login page
  2. Enter ' OR '1'='1 in username
  3. Enter any password
  4. Click login
- **Expected Result:**
  Login fails and system shows error

---

## 🔹 Task 2 — Boundary Value Testing (Password Length)

### TC_BV_01 – 7 Characters
- **Input:** Password with 7 characters
- **Expected Result:**
  Rejected with error message

---

### TC_BV_02 – 8 Characters
- **Input:** Password with 8 characters
- **Expected Result:**
  Accepted

---

### TC_BV_03 – 12 Characters
- **Input:** Password with 12 characters
- **Expected Result:**
  Accepted

---

### TC_BV_04 – 13 Characters
- **Input:** Password with 13 characters
- **Expected Result:**
  Rejected with error message

  ## 🔹 Task 2 — Boundary Value Testing (Password Length)

### TC_BV_01 – 7 Characters
- Description: Below minimum boundary
- Expected Result: Rejected, error message displayed

### TC_BV_02 – 8 Characters
- Description: Minimum boundary
- Expected Result: Accepted

### TC_BV_03 – 12 Characters
- Description: Maximum boundary
- Expected Result: Accepted

### TC_BV_04 – 13 Characters
- Description: Above maximum boundary
- Expected Result: Rejected, error message displayed
