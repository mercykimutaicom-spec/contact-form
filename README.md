# Contact Form Website

A responsive and interactive contact form built with HTML, CSS, and JavaScript. The application validates user input and uses EmailJS to deliver submitted messages directly to an email inbox.

## Live Demo

[View the Live Website](https://mercykimutaicom-spec.github.io/contact-form/)

## Project Overview

This project demonstrates how to build a functional contact form using frontend web technologies and integrate a third-party email service without requiring a custom backend server.

Visitors can enter their name, email address, subject, and message. JavaScript validates the information before EmailJS sends the message.

## Features

- Responsive design for desktop, tablet, and mobile devices.
- Full name, email, subject, and message fields.
- Client-side form validation.
- Email format validation.
- Clear error messages for invalid inputs.
- Email delivery through EmailJS.
- Success and failure feedback.
- Clean and user-friendly interface.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsive layout |
| JavaScript | Form validation and interactions |
| EmailJS | Email delivery |
| Git | Version control |
| GitHub | Source code hosting |
| GitHub Pages | Website deployment |

## Project Structure

```text
contact-form/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── .vscode/
    └── settings.json
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mercykimutaicom-spec/contact-form.git
```

### 2. Open the project

```bash
cd contact-form
```

Open the folder in Visual Studio Code.

### 3. Run the website

You can open `index.html` directly in your browser or use the Live Server extension in VS Code.

## EmailJS Configuration

This project uses EmailJS to send contact form submissions.

To configure your own EmailJS account:

1. Create an account at [EmailJS](https://www.emailjs.com/).
2. Connect an email service.
3. Create an email template.
4. Add your EmailJS Public Key to `script.js`.
5. Configure your Service ID and Template ID in the email submission function.

**Security:** Never publish private credentials or email account passwords. Restrict your EmailJS Public Key to your website's allowed domain and consider adding CAPTCHA protection.

## Deployment

The website is deployed using GitHub Pages.

Live URL:

https://mercykimutaicom-spec.github.io/contact-form/

## What I Learned

Through this project, I gained practical experience in:

- Building structured web forms with HTML.
- Styling responsive layouts with CSS.
- Manipulating the DOM using JavaScript.
- Implementing client-side form validation.
- Integrating an external email service.
- Using Git and GitHub for version control.
- Deploying a static website with GitHub Pages.

## Author

**Mercy Kimutai**

GitHub: [@mercykimutaicom-spec](https://github.com/mercykimutaicom-spec)

---

*Built as a frontend development learning project.*
