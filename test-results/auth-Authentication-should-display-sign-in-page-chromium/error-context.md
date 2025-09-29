# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - heading "Sign in to your account" [level=2] [ref=e5]
      - paragraph [ref=e6]:
        - text: Or
        - link "create a new account" [ref=e7] [cursor=pointer]:
          - /url: /auth/signup
    - generic [ref=e8]:
      - generic [ref=e9]:
        - generic [ref=e10]:
          - generic [ref=e11]: Email address
          - textbox "Email address" [ref=e12]
        - generic [ref=e13]:
          - generic [ref=e14]: Password
          - textbox "Password" [ref=e15]
      - button "Sign in" [ref=e17]
  - button "Open Next.js Dev Tools" [ref=e23] [cursor=pointer]:
    - img [ref=e24] [cursor=pointer]
  - alert [ref=e27]
```