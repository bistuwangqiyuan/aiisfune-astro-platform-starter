export const site = {
    name: '北京信息科技大学',
    shortName: '信息科大',
    englishName: 'Beijing Information Science and Technology University',
    abbreviation: 'BISTU',
    courseName: '大学生人工智能通识课',
    motto: '勤以为学，信以立身',
    url: 'https://www.bistu.edu.cn',
    address: '北京市海淀区清河小营东路12号',
    anniversary: '5月18日',
    description:
        '北京信息科技大学大学生人工智能通识课官方网站，面向全体本科生培养 AI 素养与创新能力。',
    founded: 1937,
    merged: 2008,
    doctoralUnit: 2021
};

export const navItems = [
    { linkText: '首页', href: '/' },
    { linkText: '课程介绍', href: '/course' },
    { linkText: '课程章节', href: '/chapters' },
    { linkText: '实验实践', href: '/labs' },
    { linkText: '学习资源', href: '/resources' },
    { linkText: '关于学校', href: '/about' }
];

export const campuses = [
    { name: '小营校区', address: '北京市海淀区清河小营东路12号' },
    { name: '沙河校区', address: '北京市昌平区沙河高教园区太行路55号' },
    { name: '清河校区', address: '北京市海淀区清河昌平路南段26号' },
    { name: '金台路校区', address: '北京市朝阳区金台西路2号院' },
    { name: '酒仙桥校区', address: '北京市朝阳区酒仙桥红霞路六街坊1号院' }
];

export interface Chapter {
    slug: string;
    number: number;
    title: string;
    description: string;
    bistuContext: string;
    objectives: string[];
    keyPoints: string[];
    caseStudy: string;
    questions: string[];
}

export const chapters: Chapter[] = [
    {
        slug: 'intro',
        number: 1,
        title: '人工智能概论与发展',
        description: '了解人工智能的定义、发展历程与主要分支，建立 AI 通识认知框架。',
        bistuContext: '信息科大作为北京市重点支持的信息学科高校，在人工智能基础研究与人才培养方面具有深厚积淀。',
        objectives: [
            '理解人工智能的基本概念与核心特征',
            '梳理 AI 从图灵测试到生成式 AI 的发展脉络',
            '识别机器学习、深度学习、NLP、CV 等主要分支',
            '了解 AI 在智慧城市、智能制造等领域的应用前景'
        ],
        keyPoints: [
            '人工智能的定义：模拟人类智能的计算机系统',
            '三次 AI 浪潮：符号主义、连接主义、深度学习',
            '弱人工智能与强人工智能的区别',
            'AI 与信息学科、计算机科学的交叉关系'
        ],
        caseStudy:
            '信息科大计算机学院与人工智能相关学院开展跨学科研究，在智能感知、数据挖掘等方向服务首都信息产业发展，体现了"勤以为学，信以立身"的校训精神。',
        questions: [
            '你认为人工智能与普通软件程序的本质区别是什么？',
            '列举三个你日常生活中接触到的 AI 应用，并分析其属于哪类 AI 技术。',
            '作为信息科大的学生，AI 通识课对你未来专业学习有何帮助？'
        ]
    },
    {
        slug: 'ml-basics',
        number: 2,
        title: '机器学习基础',
        description: '掌握机器学习的基本概念、主要范式与典型算法，理解数据驱动决策的原理。',
        bistuContext: '学校仪器科学与光电工程学院、计算机学院在传感器数据与模式识别领域具有研究优势。',
        objectives: [
            '理解监督学习、无监督学习与强化学习的区别',
            '掌握训练集、验证集、测试集的概念',
            '了解决策树、KNN、线性回归等基础算法',
            '认识过拟合、欠拟合与模型评估指标'
        ],
        keyPoints: [
            '机器学习：从数据中自动学习规律',
            '特征工程与标签的重要性',
            '分类与回归两类基本任务',
            '交叉验证与模型泛化能力'
        ],
        caseStudy:
            '利用公开数据集训练一个简单的分类模型，模拟信息科大实验室中常见的传感器数据分类场景，体验"数据—模型—预测"的完整流程。',
        questions: [
            '为什么机器学习需要划分训练集和测试集？',
            '举一个适合用监督学习解决的实际问题。',
            '过拟合产生的原因有哪些？如何缓解？'
        ]
    },
    {
        slug: 'deep-learning',
        number: 3,
        title: '深度学习与神经网络',
        description: '理解神经网络的基本结构、反向传播原理及深度学习在 AI 中的核心地位。',
        bistuContext: '信息科大电子信息类学科为深度学习应用提供了硬件与算法结合的实践平台。',
        objectives: [
            '理解神经元、层、激活函数等基本概念',
            '了解 CNN、RNN 等典型网络结构',
            '认识 GPU 算力对深度学习发展的推动作用',
            '了解深度学习在图像、语音、文本领域的应用'
        ],
        keyPoints: [
            '感知机与多层神经网络',
            '反向传播与梯度下降',
            '卷积神经网络（CNN）适用于图像任务',
            'Transformer 架构的兴起'
        ],
        caseStudy:
            '沙河校区高教园区拥有完善的实验条件，学生可在深度学习实验中体验 GPU 加速训练，感受信息学科"智慧科技"的冷色调创新气质。',
        questions: [
            '深度学习与传统机器学习的主要区别是什么？',
            '为什么 CNN 特别适合处理图像数据？',
            '深度学习模型"黑箱"问题如何理解？'
        ]
    },
    {
        slug: 'nlp-llm',
        number: 4,
        title: '自然语言处理与大语言模型',
        description: '探索 NLP 核心技术及 ChatGPT 等大语言模型的工作原理与应用场景。',
        bistuContext: '信息科大管理科学与工程学院、计算机学院在文本挖掘与智能信息系统方向开展相关研究。',
        objectives: [
            '了解分词、词向量、注意力机制等 NLP 基础',
            '理解大语言模型的预训练与微调范式',
            '掌握 Prompt 工程的基本技巧',
            '认识 LLM 在教育、办公、编程等领域的应用'
        ],
        keyPoints: [
            '自然语言处理的挑战：歧义、上下文、多语言',
            'Word2Vec 与语义表示',
            'Transformer 与自注意力机制',
            'GPT 系列与生成式 AI 的能力边界'
        ],
        caseStudy:
            '使用大语言模型辅助完成课程论文大纲、代码注释与学习笔记整理，同时讨论在"勤以为学"校训下如何正确、诚信地使用 AI 工具。',
        questions: [
            '大语言模型是如何"理解"人类语言的？',
            'Prompt 工程中，哪些技巧能提升输出质量？',
            '使用 LLM 辅助学习时，应注意哪些学术诚信问题？'
        ]
    },
    {
        slug: 'computer-vision',
        number: 5,
        title: '计算机视觉与应用',
        description: '学习图像识别、目标检测等视觉 AI 技术及其在工业与生活中的应用。',
        bistuContext: '仪器科学与光电工程学院在机器视觉、光电检测领域具有特色研究方向。',
        objectives: [
            '了解图像数字化与特征提取的基本流程',
            '理解图像分类、目标检测、语义分割等任务',
            '认识 OpenCV、YOLO 等常用工具与模型',
            '分析视觉 AI 在质检、安防、医疗等场景的应用'
        ],
        keyPoints: [
            '计算机视觉：让机器"看懂"图像',
            '卷积层与池化层的作用',
            '迁移学习降低视觉任务门槛',
            '多模态：视觉与语言的结合'
        ],
        caseStudy:
            '信息科大在智能制造与工业视觉检测方面的研究，将计算机视觉技术应用于产品质量检测，体现了学校服务首都高精尖产业的定位。',
        questions: [
            '图像分类与目标检测的任务目标有何不同？',
            '迁移学习为何能降低视觉 AI 的开发成本？',
            '列举两个计算机视觉在日常生活中的应用实例。'
        ]
    },
    {
        slug: 'ai-ethics',
        number: 6,
        title: 'AI 伦理、安全与治理',
        description: '探讨 AI 带来的伦理挑战、安全风险与治理框架，培养负责任的 AI 使用意识。',
        bistuContext: '作为首都高校，信息科大强调"信以立身"，在 AI 教育中注重技术伦理与学术诚信。',
        objectives: [
            '识别算法偏见、隐私泄露、深度伪造等风险',
            '了解《生成式人工智能服务管理暂行办法》等法规',
            '理解 AI 治理的国际共识与国内实践',
            '建立"技术向善"的价值判断能力'
        ],
        keyPoints: [
            'AI 伦理：公平、透明、可问责',
            '数据隐私与安全保护',
            '生成式 AI 的版权与虚假信息问题',
            '人机协作中的责任归属'
        ],
        caseStudy:
            '结合信息科大校训"信以立身"，讨论在课程作业与科研中使用 AI 工具的边界，以及如何在享受 AI 便利的同时坚守学术诚信。',
        questions: [
            '算法偏见可能来源于哪些环节？如何缓解？',
            '你认为 AI 生成内容的版权应如何界定？',
            '"信以立身"的校训对 AI 时代的大学生意味着什么？'
        ]
    },
    {
        slug: 'ai-practice',
        number: 7,
        title: 'AI 创新实践与未来趋势',
        description: '综合应用所学知识，了解 AI 前沿趋势，规划个人 AI 学习与发展路径。',
        bistuContext: '2021 年获批博士学位授予单位，信息科大正加速向高水平大学迈进，AI 通识课是面向未来的重要布局。',
        objectives: [
            '了解 AGI、多模态 AI、AI Agent 等前沿方向',
            '完成一个综合性 AI 实践项目的设计',
            '分析 AI 对就业市场与学科交叉的影响',
            '制定个人 AI 素养提升计划'
        ],
        keyPoints: [
            'AI for Science：AI 加速科学研究',
            '具身智能与机器人',
            'AI 与各行业的深度融合',
            '终身学习与持续更新 AI 知识'
        ],
        caseStudy:
            '以信息科大"比斯兔"吉祥物为创意元素，设计一个 AI 辅助的校园导览或学习助手概念方案，综合运用 NLP、CV 等通识知识。',
        questions: [
            '你认为未来 5 年 AI 最可能突破的领域是什么？',
            '结合你的专业，AI 可以带来哪些创新机会？',
            '请制定一份个人 AI 学习路线图（至少 3 个阶段）。'
        ]
    }
];

export const courseHighlights = [
    {
        title: '信息学科优势',
        description:
            '依托信息科大信息学科齐全的优势，课程内容与学校计算机、仪器、管理等学科特色紧密结合。'
    },
    {
        title: '通识素养培养',
        description:
            '面向全体本科生，培养 AI 认知、批判思维与伦理意识，让每位学生具备基本的 AI 素养。'
    },
    {
        title: '实践导向',
        description:
            '结合沙河校区实验条件与行业案例，强调动手实践，在实验中理解 AI 原理与应用。'
    }
];

export const teachingSchedule = [
    { week: '1-2', topic: '人工智能概论与发展', chapter: 'intro' },
    { week: '3-4', topic: '机器学习基础', chapter: 'ml-basics' },
    { week: '5-6', topic: '深度学习与神经网络', chapter: 'deep-learning' },
    { week: '7-8', topic: '自然语言处理与大语言模型', chapter: 'nlp-llm' },
    { week: '9-10', topic: '计算机视觉与应用', chapter: 'computer-vision' },
    { week: '11-12', topic: 'AI 伦理、安全与治理', chapter: 'ai-ethics' },
    { week: '13-14', topic: 'AI 创新实践', chapter: 'ai-practice' },
    { week: '15-16', topic: '综合复习与项目展示', chapter: 'ai-practice' }
];

export const labs = [
    {
        title: '体验大语言模型对话',
        description: '通过与大语言模型对话，理解 NLP 与生成式 AI 的能力与局限。',
        steps: [
            '选择一个主流大语言模型平台（如 ChatGPT、文心一言等）',
            '尝试用不同 Prompt 提问同一问题，观察回答差异',
            '测试模型的边界：数学推理、事实查询、创意写作',
            '记录并分析 3 组 Prompt 对比结果'
        ],
        tools: ['ChatGPT', '文心一言', '通义千问']
    },
    {
        title: '图像分类小实验',
        description: '使用在线工具或 Colab 完成简单的图像分类任务，体验计算机视觉。',
        steps: [
            '访问 Google Colab 或 Teachable Machine',
            '上传 10-20 张不同类别的图片',
            '训练一个简单的分类模型',
            '测试模型并分析误分类原因'
        ],
        tools: ['Google Colab', 'Teachable Machine', 'PyTorch 教程']
    },
    {
        title: 'Prompt 工程练习',
        description: '系统学习 Prompt 设计技巧，提升与大模型协作的效率。',
        steps: [
            '学习 Zero-shot、Few-shot、Chain-of-Thought 等技巧',
            '为"课程论文大纲生成"设计 3 版 Prompt',
            '为"代码解释"设计结构化 Prompt',
            '总结最有效的 Prompt 设计原则'
        ],
        tools: ['Prompt Engineering Guide', 'OpenAI Cookbook']
    },
    {
        title: 'AI 伦理案例分析',
        description: '通过真实案例讨论 AI 伦理问题，培养Responsible AI 意识。',
        steps: [
            '选择一个 AI 伦理案例（如算法偏见、深度伪造、隐私泄露）',
            '分析案例中的利益相关方与风险点',
            '提出 2-3 条改进建议或治理措施',
            '结合"信以立身"校训撰写反思短文（300 字）'
        ],
        tools: ['AI Ethics Case Studies', '学校图书馆资源']
    }
];

export const resources = {
    textbooks: [
        { title: '人工智能：现代方法（第4版）', author: 'Stuart Russell, Peter Norvig', note: '经典 AI 教材' },
        { title: '深度学习', author: 'Ian Goodfellow 等', note: '深度学习入门' },
        { title: '动手学深度学习', author: '李沐 等', note: '中文实践导向，配套代码' }
    ],
    moocs: [
        { title: '人工智能通识课', platform: '中国大学 MOOC', url: 'https://www.icourse163.org/' },
        { title: '机器学习', platform: 'Coursera (Andrew Ng)', url: 'https://www.coursera.org/' },
        { title: 'CS229 机器学习', platform: 'Stanford Online', url: 'https://cs229.stanford.edu/' }
    ],
    tools: [
        { name: 'Python', description: 'AI 开发主流语言', url: 'https://www.python.org/' },
        { name: 'PyTorch', description: '深度学习框架', url: 'https://pytorch.org/' },
        { name: 'Hugging Face', description: 'NLP 模型与数据集', url: 'https://huggingface.co/' },
        { name: 'Google Colab', description: '免费 GPU 云 notebook', url: 'https://colab.research.google.com/' }
    ],
    bistuLinks: [
        { title: '北京信息科技大学官网', url: 'https://www.bistu.edu.cn/' },
        { title: '学校视觉形象识别系统', url: 'https://vi.bistu.edu.cn/' },
        { title: '信息公开网', url: 'https://www.bistu.edu.cn/xxgk/' }
    ]
};

export function getChapterBySlug(slug: string): Chapter | undefined {
    return chapters.find((c) => c.slug === slug);
}
