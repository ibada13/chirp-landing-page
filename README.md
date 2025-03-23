# 🚀 Chirp Landing Page  

A modern and responsive landing page for **Chirp**, a Twitter analytics platform. This page provides insights into engagement, follower trends, and scheduling features.

## 🖥️ Tech Stack  
- **Next.js** – For optimized React rendering  
- **Tailwind CSS** – For responsive styling  
- **React Icons** – For beautiful icons  
- **Local Storage** – To store theme preference (dark/light mode)  

## ✨ Features  
- 🌗 **Dark/Light Mode Toggle** – Smooth transition between themes  
- 📊 **Analytics Overview** – Display Twitter insights effectively  
- ⚡ **Fast & Responsive** – Works seamlessly on all devices  
- 📸 **Client Logos Section** – Showcasing trusted brands  


## 🚀 Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ibada13/chirp-landing-page.git
   cd chirp-landing-page
   ```

2. Install dependencies using pnpm:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Build & export the static site:
   ```bash
   pnpm build && pnpm export
   ```

## 🖼️ Assets Location
All images, logos, and other assets are stored in the `lib/assets/` directory. If you encounter missing assets, ensure the correct import path:
```js
import Logo from '@/components/assets/';
```



## 📜 License
This project is open-source and available under the [MIT License](LICENSE).
