�� Course Landing Page – React + Vite
 
A modern, responsive **Course Landing Page** built with **React + Vite**, featuring multilingual support, gated video lessons, lead capture form, full SEO optimization, and a clean modular structure.
 
---
 
�� Features
 
✨ Modern UI
- Fully responsive layout  
- Professional landing page sections  
- Sticky mobile CTA  
- Smooth scrolling  
- Testimonials with avatars  
- Multi-course listings  
- FAQ accordion (smooth open/close)  
- Materials download area  
 
�� Gated Video System
- YouTube IFrame API  
- Video auto-pauses after 2 minutes  
- Modal pops up requesting user info  
- Video resumes only for video-triggered modal (not enroll modal)
 
�� Enrollment Form
- Integrated with **Web3Forms API**  
- Validation for required fields  
- Thank-you toast on submit  
- Exit warning popup:  
  “This course ends with a sale. Hurry up! If you leave, you might miss your chance.”
 
�� Multi-language Support
Supported languages:
- English (en)  
- Spanish (es)  
- French (fr)
 
Translations are stored in:
 
src/constants/translations.js
 
�� SEO & Analytics
- Complete SEO meta tags  
- OpenGraph + Twitter tags  
- Favicon support  
- Google Analytics 4 integration (G-QC21048BBV)
 
---
 
�� Project Structure
(Structure content omitted here but included in actual README)
 
---
 
��️ Installation
 
git clone https://github.com/sajalprajapati/Education-website.git
cd Education-website
npm install
npm run dev
 
---
 
�� Build for Production
 
npm run build
 
---
 
�� Web3Forms Integration
 
API Key: 7b5ffb97-5aa7-4f3b-bbf5-57583315872a
 
---
 
�� YouTube Player Logic
 
Located in: src/hooks/useYouTubePlayer.js
 
---
 
�� Adding More Languages
 
Update: src/constants/translations.js
 
---
 
�� Assets
 
public/images/  
public/pdfs/
 
---
 
�� Security Notes
- Do NOT expose private API keys  
- Web3Forms key is safe  
- GA tracking ID is public  
 
---
 
�� License
 
MIT License
 
---
 
