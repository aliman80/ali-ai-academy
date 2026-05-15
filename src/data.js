export const siteData = {
  academyName: "Dr. Ali AI Academy",
  tagline: "Learn Practical AI, Machine Learning, and Research Skills from a PhD in AI",
  contact: {
    email: "aliman8@gmail.com",
    whatsapp: "03219595531",
    linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN", // Replace with your actual LinkedIn URL
    location: "Pakistan / Online Worldwide"
  },
  about: {
    name: "Dr. Muhammad Ali",
    title: "Founder & Lead Instructor",
    credentials: "PhD in Machine Learning and Computer Vision, MBZUAI",
    bio: [
      "Welcome to my academy! I am Dr. Muhammad Ali, a passionate AI researcher and educator with a PhD from the prestigious Mohamed bin Zayed University of Artificial Intelligence (MBZUAI).",
      "My research primarily focuses on computer vision, medical image segmentation, Vision-Language Models (VLMs), and deep learning methodologies. Over the years, I have published multiple research papers in top-tier journals and conferences.",
      "I built this academy to bridge the gap between academic theory and practical industry application. My goal is to equip students, professionals, and researchers with the exact coding skills and research techniques needed to excel in the rapidly evolving world of Artificial Intelligence."
    ]
  },
  courses: [
    {
      id: "python-ai",
      title: "Python for AI and Research",
      shortDescription: "Master Python programming from scratch with a focus on data science and AI workflows.",
      overview: "This course covers everything from basic syntax to advanced libraries like NumPy, Pandas, and Matplotlib. Perfect for absolute beginners who want to build a strong foundation before diving into machine learning.",
      duration: "4 Weeks",
      level: "Beginner",
      mode: "Online Live",
      fee: "$100",
      whoShouldJoin: "Beginners, university students, and non-tech professionals.",
      syllabus: [
        "Week 1: Python Basics & Data Structures",
        "Week 2: Functions, OOP, and Error Handling",
        "Week 3: Data Analysis with Pandas & NumPy",
        "Week 4: Data Visualization & Intro to Scikit-Learn"
      ],
      tools: ["Python", "Jupyter Notebook", "Pandas"],
      outcomes: ["Write clean Python code", "Analyze large datasets", "Create data visualizations"]
    },
    {
      id: "ml-beginners",
      title: "Practical Machine Learning for Beginners",
      shortDescription: "Build real-world ML models using Scikit-Learn and understand the math behind them.",
      overview: "Step into the world of predictive modeling. We cover regression, classification, clustering, and model evaluation techniques using real-world datasets.",
      duration: "6 Weeks",
      level: "Beginner/Intermediate",
      mode: "Online Live",
      fee: "$150",
      whoShouldJoin: "Anyone with basic Python knowledge looking to transition into data science.",
      syllabus: [
        "Week 1: Intro to ML & Supervised Learning",
        "Week 2: Linear & Logistic Regression",
        "Week 3: Decision Trees & Random Forests",
        "Week 4: Support Vector Machines (SVM)",
        "Week 5: Unsupervised Learning & Clustering",
        "Week 6: Model Evaluation & Hyperparameter Tuning"
      ],
      tools: ["Scikit-Learn", "Python", "Google Colab"],
      outcomes: ["Build end-to-end ML pipelines", "Understand bias-variance tradeoff", "Evaluate model accuracy"]
    },
    {
      id: "dl-pytorch",
      title: "Deep Learning with PyTorch",
      shortDescription: "Design, train, and deploy deep neural networks from scratch using PyTorch.",
      overview: "Dive deep into neural networks. Learn the math behind backpropagation and implement CNNs, RNNs, and custom architectures for complex datasets.",
      duration: "8 Weeks",
      level: "Intermediate",
      mode: "Online Live",
      fee: "$250",
      whoShouldJoin: "Students who know basic ML and want to learn deep learning.",
      syllabus: [
        "Week 1: Neural Networks Fundamentals",
        "Week 2: Introduction to PyTorch Tensors & Autograd",
        "Week 3: Building your first MLP",
        "Week 4: Optimization & Regularization Techniques",
        "Week 5-6: Convolutional Neural Networks (CNNs)",
        "Week 7: Recurrent Neural Networks (RNNs)",
        "Week 8: Project Deployment"
      ],
      tools: ["PyTorch", "Python", "GPU Computing"],
      outcomes: ["Train deep neural networks", "Use PyTorch confidently", "Optimize DL models"]
    },
    {
      id: "cv-bootcamp",
      title: "Computer Vision Bootcamp",
      shortDescription: "Learn image processing, object detection, and segmentation using OpenCV and deep learning.",
      overview: "Led by a CV expert, this intensive bootcamp covers classical image processing up to state-of-the-art deep learning models for vision tasks.",
      duration: "6 Weeks",
      level: "Intermediate/Advanced",
      mode: "Online Live",
      fee: "$200",
      whoShouldJoin: "Enthusiasts wanting to build self-driving car logic or medical imaging tools.",
      syllabus: [
        "Week 1: Image Processing with OpenCV",
        "Week 2: Feature Extraction & Matching",
        "Week 3: Advanced CNN Architectures (ResNet, VGG)",
        "Week 4: Object Detection (YOLO, Faster R-CNN)",
        "Week 5: Image Segmentation (U-Net, Mask R-CNN)",
        "Week 6: Final Capstone Project"
      ],
      tools: ["OpenCV", "PyTorch", "YOLO"],
      outcomes: ["Perform image segmentation", "Build real-time object detectors", "Understand CNN architectures"]
    },
    {
      id: "llms-ai-tools",
      title: "LLMs and AI Tools for Professionals",
      shortDescription: "Leverage Large Language Models (LLMs) and Prompt Engineering to boost productivity.",
      overview: "Understand how models like ChatGPT and Claude work. Learn API integration, RAG (Retrieval-Augmented Generation), and how to build your own AI applications.",
      duration: "4 Weeks",
      level: "All Levels",
      mode: "Online Live",
      fee: "$120",
      whoShouldJoin: "Professionals looking to automate workflows using AI.",
      syllabus: [
        "Week 1: Intro to Generative AI & Prompt Engineering",
        "Week 2: Working with OpenAI APIs",
        "Week 3: Intro to RAG and Vector Databases",
        "Week 4: Building a Custom AI Assistant"
      ],
      tools: ["OpenAI API", "LangChain", "Pinecone"],
      outcomes: ["Build LLM-powered apps", "Master prompt engineering", "Understand RAG"]
    },
    {
      id: "research-writing",
      title: "Research Paper Writing and Thesis Guidance",
      shortDescription: "A complete guide to formulating research ideas, writing papers, and publishing in top venues.",
      overview: "Learn the exact strategies used by PhD scholars to read literature, write methodology sections, format with LaTeX, and navigate the peer-review process.",
      duration: "4 Weeks",
      level: "Intermediate",
      mode: "Online Live",
      fee: "$150",
      whoShouldJoin: "MS/PhD students and early-career researchers.",
      syllabus: [
        "Week 1: Literature Review & Finding a Gap",
        "Week 2: Structuring the Research Paper",
        "Week 3: Academic Writing & LaTeX Basics",
        "Week 4: The Peer Review & Publication Process"
      ],
      tools: ["LaTeX", "Mendeley/Zotero", "Overleaf"],
      outcomes: ["Write publishable papers", "Format documents in LaTeX", "Manage citations"]
    }
  ],
  services: [
    {
      title: "MS/PhD Research Guidance",
      desc: "One-on-one mentorship to navigate your degree successfully."
    },
    {
      title: "Research Topic Selection",
      desc: "Help finding novel, impactful, and feasible research gaps."
    },
    {
      title: "Literature Review Support",
      desc: "Strategies for efficient reading and synthesizing existing work."
    },
    {
      title: "Paper Writing Guidance",
      desc: "Detailed feedback on paper structure, flow, and academic tone."
    },
    {
      title: "Experiment Planning",
      desc: "Designing robust, reproducible experimental setups."
    },
    {
      title: "Computer Vision Project Guidance",
      desc: "Specialized help debugging and optimizing CV deep learning models."
    },
    {
      title: "Thesis Structure Support",
      desc: "Organizing your years of work into a cohesive thesis document."
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Ahmed S.",
      role: "MS Computer Science Student",
      text: "Dr. Ali's deep learning course was a game-changer. He explained complex math concepts with incredible simplicity. Highly recommended!"
    },
    {
      id: 2,
      name: "Sarah K.",
      role: "Data Analyst",
      text: "I transitioned into AI thanks to the Practical ML course. The focus on real-world projects helped me crack my first tech interview."
    },
    {
      id: 3,
      name: "Omer F.",
      role: "PhD Candidate",
      text: "The research mentorship saved me months of frustration. Dr. Ali helped me structure my computer vision paper which recently got accepted!"
    }
  ],
  // Simple structure for lectures (to be expanded later)
  lectures: {
    "python-ai": [
      { id: 1, title: "Week 1: Python Setup & Basics", type: "video", url: "#" },
      { id: 2, title: "Week 1: Slides", type: "pdf", url: "#" },
      { id: 3, title: "Week 2: Pandas Tutorial", type: "colab", url: "#" }
    ],
    "ml-beginners": [
      { id: 1, title: "Week 1: Intro to Regression", type: "video", url: "#" },
      { id: 2, title: "Assignment 1: Housing Prices", type: "dataset", url: "#" }
    ]
  }
};
