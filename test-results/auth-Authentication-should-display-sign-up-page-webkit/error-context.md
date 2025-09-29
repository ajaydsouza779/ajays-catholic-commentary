# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - heading "Create your account" [level=2] [ref=e5]
      - paragraph [ref=e6]:
        - text: Or
        - link "sign in to your existing account" [ref=e7]:
          - /url: /auth/signin
    - generic [ref=e8]:
      - generic [ref=e9]:
        - generic [ref=e10]:
          - generic [ref=e11]: Full Name
          - textbox "Full Name" [ref=e12]
        - generic [ref=e13]:
          - generic [ref=e14]: Email Address
          - textbox "Email Address" [ref=e15]
        - generic [ref=e16]:
          - generic [ref=e17]: Password
          - textbox "Password" [ref=e18]
        - generic [ref=e19]:
          - generic [ref=e20]: Confirm Password
          - textbox "Confirm Password" [ref=e21]
      - button "Create account" [ref=e23]
  - button "Open Next.js Dev Tools" [ref=e29] [cursor=pointer]:
    - img [ref=e30] [cursor=pointer]
  - alert [ref=e35]
```