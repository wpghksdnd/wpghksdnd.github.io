import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 레포지토리 이름이 "portfolio"이면 base를 "/portfolio/"
export default defineConfig({
  plugins: [react()],
  base: '/wpghksdnd.github.io/', // ⚠ 여기에 레포 이름 넣기
});
