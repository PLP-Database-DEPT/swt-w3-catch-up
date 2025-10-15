# 📝 Week 3 Assignment: Static Review, Requirements Analysis, and Automated Testing

## 🎯 Learning Objectives

By the end of this assignment, you should be able to:

- Review documentation for clarity, correctness, and consistency.
- Perform a basic code walkthrough to identify potential defects.
- Practice providing feedback through GitHub issues.
- Explore static analysis tools (SonarQube) to analyze code for defects.

## 📋 What You’ll Need

- `requirements.md`: Contains specifications for the image gallery project.
- `gallery.html`: A small JavaScript/HTML image gallery with issues.
- **SonarQube** (or **SonarCloud**) set up on your machine or use the cloud-based platform to run static analysis.

## 📝 Submission Instructions

Your submission must include **three components**:

---

### 1. 📄 Review `requirements.md`

- Review the `requirements.md` document in the repository.
- Provide feedback using **GitHub’s file review tools** (e.g., during a pull request review).
- If necessary, **raise GitHub Issues** for broader concerns such as:
  - Inconsistencies
  - Ambiguous language
  - Missing functional or non-functional requirements

---

### 2. 🔍 Review the provided HTML file (`gallery.html`)

- Perform a **manual static code review** of `gallery.html`.
- Identify **at least 3 distinct issues**, categorized as follows:

  - **Errors**: Code that would cause runtime failures, incorrect behavior, or broken functionality.
  - **Unclear Logic**: Code that is confusing, unnecessarily complex, redundant, or hard to maintain.
  - **Violations of Best Practices**: Examples include:
    - Poor accessibility (e.g., missing `alt` attributes)
    - Security risks (e.g., inline scripts without sanitization)
    - Performance anti-patterns
    - Non-semantic HTML

- For each issue, provide a **clear justification** explaining:
  - Where it occurs (line number or code snippet)
  - Why it’s problematic
  - How it could be improved

> 💡 **Note**: This is a *static review*—you do **not** need to run the code. Focus on reading and analyzing.

---

### 3. ⚙️ Static Analysis with SonarQube

- Install and configure **SonarQube** locally **or** use **SonarCloud** (cloud-based).
- Create a project in SonarQube/SonarCloud for the `gallery.html` file (and any associated JavaScript).
- Run a **static analysis scan**.
- **Document your findings** by:

  - Identifying **3 key issues** reported by SonarQube.
  - Reflecting on the **significance** of each issue (e.g., impact on security, maintainability, reliability).
  - Stating whether you **agree** with SonarQube’s assessment and why.

#### Deliverable:
In your `Static_Review_Summary.md` file, create a section titled:

### **SonarQube Findings Summary**

Include:

- **Screenshots or code snippets** showing the top 3 issues flagged by SonarQube.
- A **reflection** on how SonarQube complements manual review.
- A discussion of **any issues SonarQube caught that you missed** during your manual review.

---

### 4. 🗂️ Submit `Static_Review_Summary.md`

Create a Markdown file named `Static_Review_Summary.md` in your repository root and include the following sections:

#### **What You Reviewed**
- Briefly summarize the scope of your review (e.g., “Reviewed `requirements.md` for completeness and `gallery.html` for code quality”).

#### **Types of Issues Found**
- List all issues identified:
  - From manual review of `requirements.md` and `gallery.html`
  - From SonarQube static analysis
- Group them by category (e.g., documentation issues, logic errors, best practice violations, etc.)

#### **Reflection on Your Static Testing Process**
Answer the following:
- What worked well in identifying defects?
- What was difficult or challenging?
- How did SonarQube’s findings **compare** to your manual review?  
  (e.g., Did it find deeper bugs? Were some warnings false positives?)

---

## 📅 Deadline

Submit your assignment on **GitHub** by **[14 October 2025]**.  
Share your **GitHub repository link** via the LMS.

> 💻🧠 **Happy testing!**

---

## ℹ️ Additional Notes

- This is a **static review task**. **Do not run the code**—the goal is to find defects through careful reading and analysis.
- If you’re new to **SonarQube** or **SonarCloud**, refer to their official setup guides:
  - [SonarCloud Documentation](https://docs.sonarcloud.io/)
  - [SonarQube Documentation](https://docs.sonarsource.com/sonarqube/)

