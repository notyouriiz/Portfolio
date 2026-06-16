export const projectsLocales = {
    sectionLabel: "Projects",
    heading: "Things I've built.",
    subheading:
      "A section of projects I've built solo, with teams, and as part of Growithm.id.",
    externalLinkAriaPrefix: "Visit",
  
    projects: [
      {
        number: "01",
        name: "Growithm",
        category: 'AI Solution',
        role: "Co-Founder & Software Engineer",
        type: "Startup",
        description: "Growithm is a solution to help your business grow more through Business Automation and Digital Solution",
        tags: ["Business Automation", "Digital Solution"],
  
        // Auto icon detection handles this
        primaryLink: "https://www.Growithm.id",
      },
      {
        number: "02",
        name: "AI-Sales Assistant Chatbot",
        category: 'AI Solution',
        role: "Software Engineer",
        type: "Startup Project",
        description: "To develop a high-performance Headless AI Chat Overlay for an existing e-commerce website. The system must handle a catalog of 126,000+ products with sub-second search latency, allow users to add items to the cart via chat, and securely access account data (invoices/history) without passwords.",
        tags: ["Next.js", "Python", "LangChaing", "LangGraph", "RAG", "Promting System"],
        
        media: {
          type: "gallery",
          images: [
            {src: "assets/AI Solution Portfolio/Chatbot/chatbot-sales.png", aspect: "landscape"},
          ]
        },

        // Auto icon detection handles this
        primaryLink: "https://github.com/frctlprdx/AI-SALES/tree/main",
      },
      {
        number: "03",
        name: "Comparative performance analysis of YOLOv8 small and larger for real-time website-based monitoring",
        category: 'AI Solution',
        role: "Project Manager & Research",
        type: "Research",
        description: "River trash pollution in Indonesia requires real-time monitoring solutions. This study compares YOLOv8s and YOLOv8l for a website-based detection system using a dataset of 66 images (Kaggle and AI-generated), expanded to 591 images via Roboflow augmentation. Both models were trained equally and evaluated using Precision, Recall, mAP50, mAP50–95, FPS, and inference speed. Results show YOLOv8s outperforms YOLOv8l, with higher accuracy (≈20–30% improvement) and significantly faster FPS (150–340%). This demonstrates that YOLOv8s provides the best balance of accuracy and speed for real-time river trash monitoring and is feasible for web-based deployment with live alerts for waste and flood management.",
        tags: ["Web Application", "YOLOv8-Small", "YOLOv8-Large","Object Detection","Environmental Informatics"],
  
        // Auto icon detection handles this
        primaryLink: "https://shmpublisher.com/index.php/joscex/article/view/634",
      },
      {
        number: "04",
        name: "Real-Time Object Measurement Using Hybrid Approach",
        category: 'Object Detection',
        role: "Research Technical",
        type: "Research",
        description: "A modular computer vision system for real-world object size and volume measurement Built with OpenCV 4.10+, designed for use in Jupyter Notebook or standalone Python scripts. Automatically calibrates scale using an ArUco marker, estimates object dimensions and volume, and logs results with timestamps to .csv files.",
        tags: ["Python", "OpenCV", "ArUco","Object Detection","Jupyter Notebook"],
        
        media: {
          type: "gallery",
          images: [
            {type: "video", src: "assets/Object Detection Portfolio/ArUco.mp4", aspect: "landscape"},
          ]
        },

        // Auto icon detection handles this
        primaryLink: "https://github.com/notyouriiz/Object-Volume-Measurement-using-Hybrid-Approach",
      },
      {
        number: "05",
        name: "Soegijapranata Catholic University Linkedin Profile Alumni Tracer",
        category: 'Data Solution',
        role: "Software Engineer",
        type: "Internship",
        description: "A well-designed LinkedIn scraper program is a powerful tool for Soegijapranata Catholic University (SCU) to systematically track and showcase the professional achievements of its alumni. By automatically collecting accurate and up-to-date work experience data, education, and even license & certificaiton, the university can strengthen its alumni database. SCU also can be able to produce verifiable employment reports, and highlight the real-world impact of its graduates. These insights not only demonstrate alumni success in competitive job markets but also serve as a critical factor in boosting the university’s reputation and campus ranking.",
        tags: ["Website", "Scraping", "Flask", "Selenium", "Semi-Automation", "Beautiful Soup 4"],
        
        media: {
          type: "gallery",
          images: [
            {src: "assets/Data Solution Portfolio/Linkedin-Scraping/linkedin-scraping.png", aspect: "landscape"},
          ]
        },

        // Auto icon detection handles this
        primaryLink: "https://github.com/notyouriiz/Linkedin_Scraper",
      },
      {
        number: "06",
        name: "Travel Destination Recommendation",
        category: 'AI Solution',
        role: "Project Manager",
        type: "Bootcamp",
        description: "This is a machine learning-based tourism recommendation system that uses content-based filtering to suggest tourist destinations in Indonesia. The system leverages TensorFlow to create a neural network classifier that recommends similar tourist attractions based on textual features.",
        tags: ["Personalized Recommendation", "Python", "TensorFlow", "Kotlin", "Google Cloud Platform", "Figma"],
        
        media: {
          type: "gallery",
          images: [
            {src: "assets//UI UX Images Portfolio/Easytour/easytour-mockup.png", aspect: "landscape"},
            {src: "assets//UI UX Images Portfolio/Easytour/easytour-mockup-2.png", aspect: "landscape"},
          ]
        },

        // Auto icon detection handles this
        primaryLink: "https://www.figma.com/proto/gOoFCk5VDIKbp0iLiiAWH4/Easytour?node-id=28-937&page-id=0%3A1&starting-point-node-id=28%3A937&t=5EB08gjbch451GNs-1",
        secondaryLink: "https://github.com/RaffiDM/capstone-easytour",
      },
      {
        number: "07",
        name: "Fermentation of Organic Waste Company Profile UI/UX Website Design",
        category: 'UI/UX Design',
        role: "UI/UX Designer",
        type: "PKM-KC",
        description: "Rumah Enzyme is a student-led social enterprise founded by Psychology students from Soegijapranata Catholic University (UNIKA Soegijapranata), dedicated to producing and promoting eco-enzyme products as a sustainable solution for environmental waste management. Established in 2024, the initiative was developed as part of a proposal for the Program Kreativitas Mahasiswa (PKM-KC) competition. To support their mission and strengthen their digital presence, a comprehensive UI/UX design was created for their website, focusing on user engagement, product accessibility, and environmental awareness.",
        tags: ["Prototyping", "Figma"],

        media: {
          type: "gallery",
          images: [
            {src: "assets//UI UX Images Portfolio/Ecoenzyme/Ecoenzyme.png", aspect: "landscape"},
          ]
        },
  
        // Auto icon detection handles this
        primaryLink: "https://www.figma.com/proto/MYupHFHTrzNDLwkqm3I0kO/ECO-ENZYME?node-id=41-33&page-id=0%3A1&starting-point-node-id=41%3A33&t=F2Trd0Xu4aQ5AwkW-1",
      },
      {
        number: "08",
        name: "Easytour",
        category: 'UI/UX Design',
        role: "UI/UX Designer",
        type: "Bootcamp",
        description: "Not so many Indonesian people are aware enough to know the potential of Indonesia’s Destinations potential. Current Improvement Developing a mobile application that focuses on advance travel recommendations based on user preferences, and since it a mobile app, it can reach so many people. Mockups and Designs User-friendly interface showcasing local events, and experiences. Reason for Implementation is to create an engaging platform that connects travelers with local culture while promoting sustainable tourism practices and fix the User Generate Content (UGC) problem for promotion.",
        tags: ["Personalized Recommendation", "Python", "TensorFlow", "Kotlin", "Google Cloud Platform", "Figma"],
        
        media: {
          type: "gallery",
          images: [
            {src: "assets//UI UX Images Portfolio/Easytour/easytour-mockup.png", aspect: "landscape"},
            {src: "assets//UI UX Images Portfolio/Easytour/easytour-mockup-2.png", aspect: "landscape"},
          ]
        },

        // Auto icon detection handles this
        primaryLink: "https://www.figma.com/proto/gOoFCk5VDIKbp0iLiiAWH4/Easytour?node-id=28-937&page-id=0%3A1&starting-point-node-id=28%3A937&t=5EB08gjbch451GNs-1",
        secondaryLink: "https://github.com/RaffiDM/capstone-easytour",
      },
      {
        number: "09",
        name: "Food Inflation Analytics",
        category: 'Data Analytics',
        role: "Project Manager",
        type: "Personal Project",
        description: "So Many people aware about Food Price and Food Waste, therefore it is important to Analyze “Food Inflation”. Inflation not only happen on Moneys or currency, it is also happens on food. The food price on east country is having a massive inflation, it shows on chart that Lebanon has the worst food inflation. Therefore with this data, hopefully it gain more awareness from people to help each others and not doing any food waste anymore. Also it can be a report to government to take any action as soon as possible to solve this food inflation problem.",
        tags: ["Data Analytics", "Google Data Studio", "Data Visual"],

        media: {
          type: "gallery",
          images: [
            {src: "assets/Data Analytics Portfolio/Food-Inflation/foodinflation-1.png", aspect: "landscape"},
            {src: "assets/Data Analytics Portfolio/Food-Inflation/foodinflation-3.png", aspect: "landscape"},
          ]
        },
  
        // Auto icon detection handles this
        primaryLink: "https://datastudio.google.com/reporting/42120cf3-2a7c-430f-bdec-6b14156db62f",
      },
      {
        number: "10",
        name: "E-Commerce Sales Trend Analytics",
        category: 'Data Analytics',
        role: "Data Analyst",
        type: "Dicoding Academy Learning Data Analytics Capstone Project",
        description: "Nowadays efficiency is important things for companies to improve them self. This improvement is require high budget on product research and development, but now with Business Intelligence did by Data Analyst, everything can be more efficient. Finding a pattern, analysis on competitor, market research and product research can be done through code and data. This project is analyzing on Sales trends and Best Seller product to make a decision for the company on what kind of product should be release. ",
        tags: ["Data Analytics", "Jupyter Notebook", "Data Visual", "Streamlit", "Data Analytics Dashboard"],

        media: {
          type: "gallery",
          images: [
            {src: "assets/Data Analytics Portfolio/Sales-Trend/sales-trend-1.png", aspect: "portrait"},
            {src: "assets/Data Analytics Portfolio/Sales-Trend/sales-trend-2.png", aspect: "portrait"},
            {src: "assets/Data Analytics Portfolio/Sales-Trend/sales-trend-3.png", aspect: "landscape"},
            {src: "assets/Data Analytics Portfolio/Sales-Trend/sales-trend-4.png", aspect: "landscape"},
            
          ]
        },
  
        // Auto icon detection handles this
        primaryLink: "https://dashboardpy-66z3fjhemw3pqjyg6q6wcn.streamlit.app/",
        secondaryLink:"https://github.com/notyouriiz/Business_Analytics_Dicoding",
      },
      {
        number: "11",
        name: "Pricing Evaluation on Soegijapranata Catholic University's Canteen",
        category: 'Data Analytics',
        role: "Data Analyst",
        type: "Unika Soegijapranata Project",
        description: "There is a problem of pricing on Sogijapranata Catholic University (SCU)’s Canteen. Since the overall price of food and drink resources is increasing due to Indonesia’s inflation, they need to decide are they need to get a higher price or lesser portion. We do a quick analysis, gathering data from interviewing both consumer and seller. This analysis is for gaining insight to help decision making for canteen seller on SCU, more detail of analysis is available on link down below.",
        tags: ["Data Analytics", "Data Visual", "Tableau"],

        media: {
          type: "gallery",
          images: [
            {src: "assets/Data Analytics Portfolio/KantinSCU-Pricing/kantin-pricing-1.png", aspect: "landscape"},
            {src: "assets/Data Analytics Portfolio/KantinSCU-Pricing/kantin-pricing-2.png", aspect: "landscape"},
            {src: "assets/Data Analytics Portfolio/KantinSCU-Pricing/kantin-pricing-3.png", aspect: "landscape"},
            {src: "assets/Data Analytics Portfolio/KantinSCU-Pricing/kantin-pricing-4.png", aspect: "landscape"},
            
          ]
        },
  
        // Auto icon detection handles this
        primaryLink: "https://drive.google.com/drive/u/1/folders/1tmj1R_lhjtbB_Cx3Z5iv-Cu-DuAx-csS",
      },

    ]
  };