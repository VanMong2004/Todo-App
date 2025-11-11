================ Cài đặt & chạy dự án =================
# 1. Tạo project
npm create vite@latest todo-app -- --template react-ts
cd todo-app

# 2. Cài Tailwind CSS
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

# 3. Cài thư viện hỗ trợ
npm install @hello-pangea/dnd uuid

# 4. Cài và chạy
npm install
npm run dev


================ Cấu trúc Todo-app =================
# Cấu trúc
src/
 ├─ assets/
 ├─ components/
 │   ├─ Header.tsx
 │   ├─ TodoInput.tsx
 │   ├─ TodoList.tsx
 │   ├─ TodoItem.tsx
 │   └─ ThemeToggle.tsx
 ├─ hooks/
 │   ├─ useLocalStorage.ts
 │   └─ useTheme.ts
 ├─ models/
 │   └─ todo.ts
 ├─ App.tsx
 └─ main.tsx


================ Các chức năng =================
# My Todo App
Todo App sử dụng React + TypeScript + Tailwind CSS. Hỗ trợ:

- Thêm, xóa, toggle todo
- Filter: all / active / completed
- Drag & drop reorder
- Dark / Light mode
- Lưu state vào localStorage
- Responsive và UX mượt

