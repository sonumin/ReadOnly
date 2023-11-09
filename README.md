# 📖 readOnly - 지적 성장을 위한 도서 구매 플랫폼 📙 📒 📔 📓 📂

## 📚 프로젝트 개요

　도서 쇼핑몰은 독서를 즐기는 사용자들을 위한 도서 구매 플랫폼입니다. 지적 성장을 돕기 위해 다양한 주제의 도서를 제공하며, 엘리스 1차 프로젝트-8팀이 함께 협업하여 서비스를 개발하고자 합니다.

## 📗 프로젝트 목표

- 강의에서 학습한 내용을 실제 도서 쇼핑몰에 적용하여 구현한다.
- 팀원 간의 원활한 소통과 협업을 통해 프로젝트를 완성한다.
- 사용자에게 편리하고 유용한 도서 쇼핑 서비스를 제공한다.

## 📕 서비스 기능

- 사용자 회원가입 및 로그인
- 도서 목록 및 상세페이지 제공
- 장바구니 기능
- 주문 및 결제 시스템

## 📘 기술 스택

### 💻 Frontend

- HTML
- CSS
- JavaScript
- Vite (빌드 도구)

### ⌨️ Backend

- Node.js
- PostMan
- MongoDB
- MongoDB Compass

### 📝 Library
    "bcrypt": "^5.1.1",
    "cookie-parser": "^1.4.6",
    "dotenv": "^16.3.1",
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "express-validator": "^7.0.1",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.0.0",
    "multer": "^1.4.5-lts.1",
    
### ☁️ Cloud Server

- AWS EC2 Ubuntu


── constrollers
│   ├── adminController.js
│   ├── authController.js
│   ├── categoryController.js
│   ├── orderController.js
│   ├── productController.js
│   └── userController.js
├── middlewares
│   └── validators
│       ├── auth.js
│       ├── objectId.js
│       ├── order.js
│       ├── product.js
│       ├── user.js
│       ├── validateError.js
│       └── index.js
│   ├── isAdmin.js
│   └── isAuthenticated.js
├── models
│   └── schemas
│       ├── category.js
│       ├── order.js
│       ├── product.js
│       ├── user.js
│       └── index.js
│   └── index.js
├── routes
│   └── v1
│       └── admin
│           ├── adminCategoryRouter.js
│           ├── adminOrderRouter.js
│           ├── adminProductRouter.js
│           ├── amdinUserRouter.js
│           └── index.js
│       ├── authRouter.js
│       ├── categoryRouter.js
│       ├── orderRouter.js
│       ├── productRouter.js
│       ├── uploadRouter.js
│       ├── userRouter.js
│       └── index.js
│   └── index.js
├── services
│       ├── adminService.js
│       ├── authService.js
│       ├── categoryService.js
│       ├── orderService.js
│       ├── productService.js
│       └── userService.js
├── utils
│       ├── asyncHandler.js
│       └── hash-password.js
├── views
└── app.js 

### 개발 기간
2023.10.30 ~ 2023.11.10

<table>
  <tbody>
    <tr>
      <td align="center"><a href=""><img src="width="100px;" alt=""/><br /><sub><b>FE 팀장 : </b></sub></a><br /></td>
      <td align="center"><a href=""><img src="" width="100px;" alt=""/><br /><sub><b>FE 팀원 : </b></sub></a><br /></td>
      <td align="center"><a href=""><img src="" width="100px;" alt=""/><br /><sub><b>FE 팀원 : </b></sub></a><br /></td>
      <td align="center"><a href=""><img src="" width="100px;" alt=""/><br /><sub><b>FE 팀원 : </b></sub></a><br /></td>
     <tr/>
      <td align="center"><a href=""><img src="" width="100px;" alt=""/><br /><sub><b>BE 부팀장 : </b></sub></a><br /></td>
      <td align="center"><a href=""><img src="" width="100px;" alt=""/><br /><sub><b>BE 팀원 : </b></sub></a><br /></td>
      <td align="center"><a href=""><img src="" width="100px;" alt=""/><br /><sub><b>BE 팀원 : </b></sub></a><br /></td>
    </tr>
  </tbody>
</table>


라이센스
Copyright © 2023 readOnly
