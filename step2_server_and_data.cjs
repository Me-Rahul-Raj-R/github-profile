const { save } = require('./make_app_builder.cjs');

const profileDataCode = `export const profileData = {
  profile: {
    name: "Rahul Raj R",
    roles: [
      "Software Developer",
      "Java Backend Developer",
      "Full Stack Web Developer"
    ],
    positioning: "Software Developer | Java Backend Developer | Full Stack Web Developer",
    domains: "CSE • Java • Full Stack • AI� Web",
    summary: "Software Developer with hands-on experience in Java, Full-Stack Development, REST APIs, MySQL, MongoDB, and the MERF stack. Built and delivered multiple web applications, attendance management systems, financial tracking solutions, and AI-powered projects. Strong foundation in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, and Software Engineering. Solved 150+ LeetCode problems and demonstrated problem-solving skills through hackathons and real-world development projects.",
    links: {
      github: "https://github.com/Me-Rahul-Raj-R",
      leetcode: "https://leetcode.com/u/Rahul-Raj-R/",
      portfolio: "https://portfolio-rahul-v2.vercel.app/",
      linkedin: "https://linkedin.com/in/rahul-raj-r-4a56702b5/"
    },
    identityTags: ["Java", "Full Stack", "REST APIs", "MERN", "MySQL", "MongoDB", "DSA", "AI"]
  },
  ecosystem: {
    center: {
      title: "FULL-STACK DEVELOPER",
      subtitle: "CSE • JAVA • AI ₢ WEB"
    },
    categories: [
      {
        id: "languages",
        name: "1. LANGUAGES",
        color: "#00F0FF",
        gradient: "from-cyan-500/20 to-cyan-500/5",
        border: "border-cyan-500/40",
        skills: ["Java", "JavaScript", "SQL"]
      },
      {
        id: "frontend",
        name: "2. FRONTEND",
        color: "#38BDF8",
        gradient: "from-sky-500/20 to-sky-500/5",
        border: "border-sky-500/40",
        skills: ["HTML5", "CSS3", "React.js"]
      },
      {
        id: "backend",
        name: "3. BACKEND",
        color: "#818CF8",
        gradient: "from-indigo-500/20 to-indigo-500/5",
        border: "border-indigo-500/40",
        skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"]
      },
      {
        id: "databases",
        name: "4. DATABASES",
        color: "#34D399",
        gradient: "from-emerald-500/20 to-emerald-500/5",
        border: "border-emerald-500/40",
        skills: ["MySQL", "MongoDB"]
      },
      {
        id: "tools",
        name: "5. TOOLS",
        color: "#FBBF24",
        gradient: "from-amber-500/20 to-amber-500/5",
        border: "border-amber-500/40",
        skills: ["Git", "GitHub", "IntelliJ IDEA", "VS Code", "ServiceNow"]
      },
      {
        id: "core_cs",
        name: "6. CORE CS",
        color: "#F472B6",
        gradient: "from-pink-500/20 to-pink-500/5",
        border: "border-pink-500/40",
        skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"]
      }
    ]
  },
  featuredProjects: [
    {
      id: "fincopilot",
      number: "01",
      name: "FINCOPILOT",
      subtitle: "Smart AI Financial Copilot",
      technology: ["Java", "Fast-API", "HTML5", "JavaScript"],
      description: "Built an AI financial application with fraud detection and expense tracking. Integrated Java backend with Fast-API and delivered a responsive HTML5/JavaScript dashboard.",
      github: "https://github.com/Me-Rahul-Raj-R/FINCOPILOT",
      accent: "#00F0FF",
      theme: "financial / data-flow visual language"
    },
    {
      id: "edutrack",
      number: "02",
      name: "EDUTRACK",
      subtitle: "Smart Attendance System",
      badge: "SIH 2025 WINNER",
      technology: ["Java", "MySQL"],
      description: "Engineered a QR-based attendance system. Designed REST APIs for attendance management. Won SIH 2025 Internal Hackathon.",
      github: "https://github.com/Me-Rahul-Raj-R/v0-smart-attendance-app",
      accent: "#10B981",
      theme: "QR / attendance / system visual language"
    },
    {
      id: "expense-tracker",
      number: "03",
      name: "EXPENSE TRACKER",
      subtitle: "Personal Finance Manager",
      technology: ["MongoDB", "Express.js", "React.js", "Node.js"],
      description: "Developed a MERN finance tracker with role-based access. Built dashboard analytics for spending visualization.",
      github: "https://github.com/Me-Rahul-Raj-R/ExpenseTracker",
      accent: "#38BDF8",
      theme: "analytics / dashboard visual language"
    },
    {
      id: "hairloon",
      number: "04",
      name: "HAIRLOON",
      subtitle: "AI Hairstyle Recommendation System",
      technology: ["HTML5", "CSS3", "JavaScript", "Machine Learning"],
      description: "Built a machine learning-based web application for hairstyle recommendations. Integrated location services to identify nearby salons.",
      github: "https://github.com/Me-Rahul-Raj-R/HAIRLOON-2.O",
      accent: "#C084FC",
      theme: "AI / computer vision / recommendation visual language"
    }
  ],
  repositoryGroups: {
    groupA: {
      title: "GROUP A: SIGNATURE-PROJECTS",
      repos: [
        { name: "FINCOPILOT", language: "JavaScript / Java", tag: "Smart AI Financial Copilot", url: "https://github.com/Me-Rahul-Raj-R/FINCOPILOT" },
        { name: "HAIRLOON-2.O", language: "JavaScript / ML", tag: "AI Hairstyle Recommendation System", url: "https://github.com/Me-Rahul-Raj-R/HAIRLOON-2.O" },
        { name: "ExpenseTracker", language: "JavaScript (MERN)", tag: "Personal Finance Manager", url: (�΋���]X����K�YKT�Z[T�Z�T��^[��U�X��\��K���[YN��KY]X�[ۋ^[�ȋ[��XY�N��\T�ܚ\���ȋYΈ�]]ۛ�[�\��Y�]H[ۚ]ܚ[�ȋ\���΋���]X����K�YKT�Z[T�Z�T��KY]X�[ۋ^[�ȈK���[YN��UP�S�Pȋ[��XY�N��]ۈ�YΈ��]\�[�\�HX[�Y�[Y[��\�[H�\���΋���]X����K�YKT�Z[T�Z�T��UP�S�PȈK���[YN���Y�]KSX[�Y�[Y[��[��XY�N���]�T�ܚ\�YΈ��X�X�\�Y�Y�]H]�ܛH�\���΋���]X����K�YKT�Z[T�Z�T���Y�]KSX[�Y�[Y[��K���[YN��ܝ��[�ܘZ[݌��[��XY�N���]�T�ܚ\�YΈ�\��ۘ[]�[�\�ܝ��[ȋ\��
&�GG3���v�F�V"�6����R�&�V��&��"��'Ff�Ɩ��&�V��c""ТТ���w&�W#���F�F�S�$u$�U#���tT"U�U$��T�E2"��&W�3������S�'c�Vv2�B�6��FV�B"���wVvS�$�f67&�B"�Fs�$�Tt26��FV�BvV�W&F���"�W&â&�GG3���v�F�V"�6����R�&�V��&��"�c�Vv2�B�6��FV�B"������S�&��"�7G��R�&�F�G�R"���wVvS�%G�U67&�B"�Fs�$6��WFW"f�6���T�&�F�G�R"�W&â������輽��ѡՈ�����5��I��հ�I���H����ȵ��屔��ɽѽ��������(��������쁹���耉M������ѕ�е����ѕȈ������Յ��耉Q���M�ɥ�Ј��х�耉M<����ѕɥ�����ɍ��ѕ���ɔ����ɰ耉�����輽��ѡՈ�����5��I��հ�I���H�M������ѕ�е����ѕȈ���(��������쁹���耉5����Aɽ���е%9=A%1=P�������Յ��耉!Q50���х�耉�������Ё]���Aɽѽ��������ɰ耉�����輽��ѡՈ�����5��I��հ�I���H�5����Aɽ���е%9=A%1=P����(��������쁹���耉���͵��е��ѕ�����������������Յ��耉Q���M�ɥ�Ј��х�耉M���Ё�ѕ�������%�ѕə�������ɰ耢https://github.com/Me-Rahul-Raj-R/v0-smart-attendance-app" },
        { name: "KIRO_01", language: "Code", tag: "Experimental AI Build", url: (�΋���]X����K�YKT�Z[T�Z�T���T���H�B�B�K�ܛ�\Έ]N��ԓ�TΈ��S����P�P�H���\�Έ��[YN��Y]��H�[��XY�N���]�H�YΈ�Y]��H��][ۜ��X�ȋ\���΋���]X����K�YKT�Z[T�Z�T��Y]��H�K���[YN���]�K\X�[Y[�\�؛[\ȋ[��XY�N���]�H�YΈ�[�\��Y]��H��X�[ۈ�\���΋���]X����K�YKT�Z[T�Z�T�ژ]�K\X�[Y[�\�؛[\ȈK���[YN��X��\��[�ȋ[��XY�N���]�H�YΈ�X��\��[���X�X�H��][ۜȋ\��
&�GG3���v�F�V"�6����R�&�V��&��"�6�W'&�"������S�%�6V�V�B"���wVvS�$�f"�Fs�%�6V�V�B&W&W6�W&6W2"�W&â&�GG3���v�F�V"�6����R�&�V��&��"��6V�V�B"������S�%&�&�V�2"���wVvS�%&7F�6R"�Fs�$�v�&�F�֖26��f��r&W�"�W&â������輽��ѡՈ�����5��I��հ�I���H�Aɽ����̈���(��������쁹���耉�����������Յ��耉������х�耉�ɔ�����M����������ɰ耉�����輽��ѡՈ�����5��I��հ�I���H���������(��������쁹���耉AI=%e}M|�Ĉ������Յ��耉)�ل���х�耉M���݅ɔ��؁Q�ͬ��Ĉ���ɰ耉�����輽��ѡՈ�����5��I��հ�I���H�AI=%e}M|�Ĉ���(��������쁹���耉AI=%e}M|�Ȉ������Յ��耉AɅ�ѥ�����х�耉M���݅ɔ��؁Q�ͬ��Ȉ���ɰ耢https://github.com/Me-Rahul-Raj-R/PRODIGY_SD_02" },
        { name: "PRODIGY_SD_03", language: "Java", tag: "Software Dev Task 03", url: "https://github.com/Me-Rahul-Raj-R/PRODIGY_SD_03" },
        { name: "PRODIGY_SD_04", language: "Java", tag: "Software Dev Task 04", url: "https://github.com/Me-Rahul-Raj-R/PRODIGY_SD_04" },
        { name: "FUTURE_PE_01", language: "AI", tag: "Prompt Engineering Task 01", url: "https://github.com/Me-Rahul-Raj-R/FUTURE_PE_01" },
        { name: "-FUTURE_PE_02", language: "AI", tag: "Prompt Engineering Task 02", url: "https://github.com/Me-Rahul-Raj-R/-FUTURE_PE_02" },
        { name: "FUTURE_PE_03", language: "AI", tag: "Prompt Engineering Task 03", url: "https://github.com/Me-Rahul-Raj-R/FUTURE_PE_03" },
        { name: "event", language: "HTML", tag: "Web Event Interface", url: (�΋���]X����K�YKT�Z[T�Z�T��]�[��K���[YN���]X�[Ẍ�[��XY�N��S�YΈ��X�����\�H�Z[�\��
&�GG3���v�F�V"�6����R�&�V��&��"�v�F�V&V�3""������S�&V�FVR"���wVvS�$2��"�Fs�%fV7F�"FF&6R6�&Rf�&�"�W&â������輽��ѡՈ�����5��I��հ�I���H���������(������t(�����(����(������ɥ�����l(�����(������ɽ��耉M��٥��9�܁�ٕ����Ȉ�(�������������耉M��٥��9�܁Y���Յ��Aɽ�Ʌ���(��������є耉�ɥ�����؈�(������������耈������(�������������l(���������������ɕ��Ԭ���ѽ��ѕ��ݽɭ����̰�ɕ�Ս�������Յ���ɽ���ͥ���ѥ��������쁑�ͥ��������������啐�ȁ���Ʌѥ�����ɕ���ѥ�����͡���ɑ̸��(���������������ѕɕ��%QM4����ձ�́�������ѕ���������Ʌѥ��́��Ȁ������������Ʌѽ�́��ɽ�̀ȁ�����ѵ���̰�����ɥ���ɕ�������%P�͕�٥�������ٕ�丈(������t�(������х���l�M��٥��9�܈���%QM4����]�ɭ����̈����͡���ɑ̉t(������(�����(������ɽ��耉Aɽ��Ё������ɥ����ٕ����Ȉ�(�������������耉���ɔ�%�ѕɹ̈�(��������є耉)��Յ�����؈�(������������耈���	��(�������������l(���������������ɕ��Ԭ����Ս��ɕ��$��ɽ���́ѡ�Ё���ɽٕ�������������Ёɕ��م�����ɽ���Ȝ��Ѽ��䔜�������������ٕɅ���$�ɕ����͔��Յ���丈�(���������M��Ս��ɕ��ɕ�ͅ�����ɽ��Ёѕ����ѕ́ѡ�Ёɕ�Ս����ɽ��Ё�������ɥ��������Ё���������ȁ��ѕ�����(���������ɕ�ѕ�����ɽ��ЁѼ���Ё$�ѽ��́�́���$�����́��ȁ!յ�����ͥ�����ݽɭ����̸�(������t�(������х���l�Aɽ��Ё������ɥ������I��ͅ����Q�����ѕ̈���$�����̈���]�ɭ����̉t(������(�����(������ɽ��耉ձ��Mх����ٕ����ȃ�L�5I8��(�������������耉Y%IUiYIM�M���ѥ��̈�(��������є耉������Ȁ���Ԉ�(������������耈���	���(�������������l(���������	ե�Ѐā�ձ���х����ɽ�Սѥ������ձ�́�������������������Ʌ�ͅ�ѥ��́�ͥ���5��������ɕ�̹�̰�I���й�̰�����9�����̸��(����������ٕ��������չ��ѥ�����ݕ���������ѥ��́�ͥ���5��������ɕ�̹�̰�I���а�����9�����́Ѽ���х���͠���ɔ������е͕�ٕȁ�ɍ��ѕ���ɔ���(���������I��Ս����������ѥ���������́�������ѡɽ՝�����Ս��ɕ�������ɕ٥��̰�ɕ���ѽɥ����������ə�ɵ�������ѥ���ѥ����(������t�(������х���l�5����������ɕ�̹�̈���I���й�̈���9�����̈���)]P�����IMP�A%̉t(������(�����(������ɽ��耉ձ��Mх����ٕ����ȁQɅ������(�������������耉�ѕ݅�M���݅ɔ�M���ѥ��̈�(��������є耉)չ�����Ԉ�(������������耈�����Ĉ�(�������������l(��������������ѕ����ѕ�ͥٔ��Ʌ���������)�ل����������!Q50ԽML̰�����5�ME0���х��͔���ѕ�Ʌѥ�����(����������͕�������չ�ѥ������������ѥ��́ݥѠ�����Ѽ������ɽ�ѕ���Ѽ���х��͔���ф����ܸ�(������t�(������х���l�)�ل����!Q50؈���ML̈���5�ME0�����х��͔�%�ѕ�Ʌѥ���t(�����(��t�(�����э�����(����ѽх�M��ٕ�����(�����������Ȱ(��������Q�х����Ȱ(��������մ���̰(��������յQ�х������(������ɐ��̰(������ɑQ�х����İ(���������х���I�є耈����ܔ��(�����Չ���ͥ���e�������(������ѥٕ������İ(�������M�ɕ�����(�����������а(����Ʌ��耈��ܰ��Ј�(����ɕ�յ�5��ɥ�耉M��ٕ�������1��������ɽ����̈�(�����ɰ耉�����輽���э��������ԽI��հ�I���H��(����(�������ٕ������l(�����(������ѥѱ�耉M% ����ԁ%9QI90�!-Q!=8�]%99H��(�������Չѥѱ�耉M���Ё%�����!����ѡ����(��������͌耉I������Q������ѕ��́��ȁѡ��UQ,�M���Ё�ѕ�������M��ѕ���ɽ���и��(������������耈�����Ĉ�(�����������耉%IMP�A1�(������(�����(������ѥѱ�耉=9%i9P�Q!9=YIM�!-Q!=8��(�������Չѥѱ�耉9�ѥ�����1�ٕ��!����ѡ����(��������͌耉�م�����Ѽ�I�չ��Ȱ������ѥ���������Ѐİ��������ѥ������������́�������ѥ�������ٕ�����ѕ�и��(������������耈�������(�����������耉I=U9�ȁEU1%%H�(������(�����(������ѥѱ�耉1Q=�AI=	14�M=1Y%9��(�������Չѥѱ�耉���ɥѡ����5��ѕ�䈰(��������͌耉M��ٕ��������ɽ����́��ɽ�́�ф�M��Ս��ɕ̰����ɥѡ�̰�����M��ѕ��������ݥѠ�������Չ���ͥ������ͥ�ѕ��丈�(������������耈������(�����������耈�����M=1Y�(�����(��t�(����Ս�ѥ����(�������ɕ�耉�������ѕȁM�����������������ɥ����(�������ѥ��ѥ��耉X�L�������������������ɥ���������ѽɔ��(������Ʌѥ��耈���ϊL���܈�(��������耈���Ԁ��������(������ɕ�������耉�ф�M��Ս��ɕ̀�����ɥѡ�̰�==@��	5L��=��Ʌѥ���M��ѕ�̰�����ѕȁ9��ݽɭ̈(����(�����ѥ����ѥ����l(����쁹���耉ձ��Mх����ٕ������Ј�����Օ�耉9�٤�Q����H��A�Ё1ѐ����(����쁹���耉ɥѥ����Q�����������ѡ��$�Ʉ������Օ�耉!@�1%����(����쁹���耉)�ل�Aɽ�Ʌ������չ�����х�̈�����Օ�耉M����ȁ�����䈁��(����쁹���耉$���ȁ]����ٕ������Ј�����Օ�耉M��������ɸ����(����쁹���耉��Ր�����ѥ����͕�ѥ��̈�����Օ�耉9AQ0���(��t�(����ѡՉL�]Έ�\��]ܚY\Έ�K��\�ΈK��۝�X�][ۜΈM��ٚ[U\���΋���]X����K�YKT�Z[T�Z�T���B�N��]�J	�ܘ��]K��ٚ[Q]K�����ٚ[Q]P��JN����\��\��[B��ۜ��\��\���HH[\ܝ^�\�����H	�^�\���[\ܝ�ܜ����H	��ܜ��[\ܝ��ٚ[Q]HH���H	ˋ��ܘ��]K��ٚ[Q]K������ۜ�\H^�\��
N�ۜ�ԕH���\�˙[���ԕL�\�\�J�ܜ�
JN\�\�J^�\�˚��ۊ
JN�\��]
	��\K��ٚ[I�
�\K�\�HO��\˚��ۊ�ٚ[Q]JNJN�\��]
	��\K�X[	�
�\K�\�HO��\˚��ۊ��]\Έ	�X[I�[Y\�[\��]�]J
K��T����[��
HJNJN�\�\�[�ԕ

HO��ۜ��K����V�T��H�X��[�TH�[��[��ۈ�����[����ԕX
NJN��]�J	��\��\��[�^�����\��\���JN��ۜ��K���	��\���\]Y	�N